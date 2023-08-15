from fastapi import FastAPI, Request, Form, HTTPException
from pydantic import BaseModel
from typing import Optional
import mysql.connector
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Configuración de la base de datos (reemplaza con tu configuración)
db_config = {
    "host": "192.168.1.50",
    "user": "DesaBytes",
    "password": "Melon24%",
    "database": "systick"
}

class Usuario(BaseModel):
    nombre_us: str
    apellido_us: str
    correo_us: str
    password: str
    cargo: str
    departamento: str
    dir_hogar: Optional[str]
    num_telefono: Optional[str]
    fech_nac: Optional[str]

#-----------LOGIN---------------------------------------
@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

#------------------REGISTRO----------------------------------------------
@app.get('/registro/', response_class=HTMLResponse)
async def register_page(request: Request):
    return templates.TemplateResponse("registro.html", {"request": request})

@app.post("/registro/", response_class=HTMLResponse)
async def register(usuario: Usuario, request: Request):
    try:

        # Conectar a la base de datos
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Verificar si el correo ya está registrado
        query = "SELECT * FROM usuarios WHERE correo_us = %s"
        cursor.execute(query, (usuario.correo_us,))
        existing_usuario = cursor.fetchone()
        if existing_usuario:
            raise HTTPException(status_code=400, detail="Correo ya registrado")

        # Insertar el nuevo usuario en la base de datos
        query = "INSERT INTO usuarios (nombre_us, correo_us, password, cargo, departamento, apellido_us, dir_hogar, fech_nac, num_telefono) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (usuario.nombre_us, usuario.correo_us, usuario.password, usuario.cargo, usuario.departamento, usuario.apellido_us, usuario.dir_hogar, usuario.fech_nac, usuario.num_telefono)
        cursor.execute(query, values)
        conn.commit()

        return templates.TemplateResponse("registro.html", {"request": request, "message": "Registro exitoso"})
    except mysql.connector.Error as err:
        return templates.TemplateResponse("registro.html", {"request": request, "error_message": f"Error en la base de datos: {err}"})
    finally:
        cursor.close()
        conn.close()