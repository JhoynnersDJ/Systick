from fastapi import FastAPI, Request, Form, HTTPException
from pydantic import BaseModel
import mysql.connector
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Configuración de la base de datos (reemplaza con tu configuración)
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "systick"
}

class Usuario(BaseModel):
    nombre_us: str
    apelldo_us: str
    correo_us: str
    password: str
    cargo: str
    departamento: str
    dir_hogar: str = None
    num_telefono: str = None
    fech_nac: str = None

@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get('/registro/', response_class=HTMLResponse)
async def register_page(request: Request):
    return templates.TemplateResponse("registro.html", {"request": request})

@app.post("/registro/", response_class=HTMLResponse)
async def register_page(
    nombre_us: str = Form(...),
    apellido_us: str = Form(...),
    correo_us: str = Form(...),
    password: str = Form(...),
    repeat_password: str = Form(...),  # Agregado
    cargo: str = Form(...),
    departamento: str = Form(...),
    dir_hogar: str = Form(None),
    num_telefono: str = Form(None),
    fech_nac: str = Form(None),
    request: Request = None
):
    if password != repeat_password:  # Validación de contraseñas iguales
        return templates.TemplateResponse("registro.html", {"request": request, "error_message": "Las contraseñas no coinciden"})

    conn = None
    cursor = None
    try:
        # Conectar a la base de datos
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Verificar si el correo ya está registrado
        query = "SELECT * FROM usuario WHERE correo_us = %s"
        cursor.execute(query, (correo_us,))
        existing_usuario = cursor.fetchone()
        if existing_usuario:
            raise HTTPException(status_code=400, detail="Correo ya registrado")

        # Insertar el nuevo usuario en la base de datos
        query = "INSERT INTO usuario(nombre_us, correo_us, password, cargo, departamento, apellido_us, dir_hogar, fech_nac, num_telefono) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (nombre_us, correo_us, password, cargo, departamento, apellido_us, dir_hogar, fech_nac, num_telefono)
        cursor.execute(query, values)
        conn.commit()

        return templates.TemplateResponse("registro.html", {"request": request, "message": "Registro exitoso"})
    except mysql.connector.Error as err:
        # Agregar mensaje de registro para la excepción
        print(f"Error en la base de datos: {err}")
        return templates.TemplateResponse("registro.html", {"request": request, "error_message": f"Error en la base de datos: {err}"})
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
 
@app.get('/roles/', response_class=HTMLResponse)
async def roles_page(request: Request):
    conn = None
    cursor = None
    try:
        # Conectar a la base de datos
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Realizar la consulta SELECT a la tabla roles
        query = "SELECT * FROM roles"
        cursor.execute(query)
        roles = cursor.fetchall()

        return templates.TemplateResponse("roles.html", {"request": request, "roles": roles})
    except mysql.connector.Error as err:
        error_message = f"Error en la base de datos: {err}"
        return templates.TemplateResponse("roles.html", {"request": request, "error_message": error_message})
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

