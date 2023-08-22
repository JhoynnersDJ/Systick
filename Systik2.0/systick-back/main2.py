from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer('/token')

@app.get('/')
def root():
    return "Holi"

@app.get('/users/me')    
def user(token: str = Depends(oauth2_scheme)):
    print(token)
    return "Soy un usuario vale"


#Ruta en el cual se procesa el token como tal
@app.post('/token')
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    print(form_data.username, form_data.password)
    #formato obligatorio para pasarle el token a user/me
    return {
        "access_token":"Cualquier cosa",
        "token_type":"Bearer"
    }
