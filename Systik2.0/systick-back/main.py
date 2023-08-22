from fastapi import FastAPI, Request, Form, HTTPException
from pydantic import BaseModel
import mysql.connector
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="../systick-front/src/pages/auth/Register.jsx")

# Configuración de la base de datos (reemplaza con tu configuración)
db_config = {
    "host": "Localhost",
    "user": "root",
    "password": "",
    "database": "systick"
}
class Roles (BaseModel):
    id_rol: int
    nombre_rol: str
    desc_rol: str
    
class Departamento (BaseModel):
    id_depa: int
    nombre_depa: str
    desc_depa: str

class Cargo (BaseModel):
    id_cargo: int
    nombre_cargo: str
    desc_cargo: str

class Usuarios(BaseModel):
    nombre_us: str
    nombre_completo: str
    correo_us: str
    password: str
    cargo: Cargo #Relacion de cargo
    depa: Departamento #Relacion de departamento
    dir_hogar: str = None
    num_telefono: str = None
    fech_nac: str = None
    rol: Roles #Relacion de roles

@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get('/registro/', response_class=HTMLResponse)
async def register_page_get(request: Request):
    return templates.TemplateResponse("Register.jsx", {"request": request})

@app.post("/registro/", response_class=HTMLResponse)
async def register_page_post(
    nombre_us: str = Form(...),
    correo_us: str = Form(...),
    password: str = Form(...),
    repeat_password: str = Form(...),
    nombre_completo: str = Form(...),
    dir_hogar: str = Form(None),
    num_telefono: str = Form(None),
    fech_nac: str = Form(None),
    request: Request = None
):
    if password != repeat_password:  # Validación de contraseñas iguales
        return templates.TemplateResponse("Register.jsx", {"request": request, "error_message": "Las contraseñas no coinciden"})

    conn = None
    cursor = None
    try:
        # Conectar a la base de datos
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Verificar si el correo ya está registrado
        query = "SELECT * FROM usuarios WHERE correo_us = %s"
        cursor.execute(query, (correo_us,))
        existing_usuario = cursor.fetchone()
        if existing_usuario:
            raise HTTPException(status_code=400, detail="Correo ya registrado")

        # Insertar el nuevo usuario en la base de datos
        query = "INSERT INTO usuarios(nombre_us, correo_us, password, id_cargo, id_depa, nombre_completo, dir_hogar, fech_nac, num_telefono, id_rol) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (nombre_us, correo_us, password, 1, 1, nombre_completo, dir_hogar, fech_nac, num_telefono, 4)
        cursor.execute(query, values)
        conn.commit()

        return templates.TemplateResponse("Register.jsx", {"request": request, "message": "Registro exitoso"})
    except mysql.connector.Error as err:
        # Agregar mensaje de registro para la excepción
        print(f"Error en la base de datos: {err}")
        return templates.TemplateResponse("Register.jsx", {"request": request, "error_message": f"Error en la base de datos: {err}"})
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

