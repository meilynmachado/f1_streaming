from datetime import timedelta
from typing import Union
from fastapi import FastAPI, HTTPException, Depends, status
from app.schemas.user_schema import UserCreateSchema
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app.data_handler.database import get_session, Base, engine
from app.data_handler.models import User
from app.security.security import get_password_hash
from app.schemas.token_schema import TokenSchema
from app.security.security import authenticate_user, create_access_token, get_current_user

app = FastAPI()
SECRET_KEY = "hello world"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 180

CurrentUser = Annotated[User, Depends(get_current_user)]
DbSession = Annotated[Session, Depends(get_session)]
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")
OAuth2Form = Annotated[OAuth2PasswordRequestForm, Depends()]


Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/user/")
def create_user(user: UserCreateSchema, db: DbSession):
    password_hashed = get_password_hash(user.password)
    db_user = User(
        username=user.username,
        email=user.email,
        password=password_hashed  # In a real application, ensure to hash the password
    )
    db.add(db_user)
    db.commit()
    return user

@app.post("/login", status_code=200, response_model=TokenSchema)
async def login(
    form_data: OAuth2Form,
    db:DbSession
    ):
    
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"})
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    
    return TokenSchema(access_token=access_token, token_type="bearer")

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/protect/")
def fun_item(current_user: User = Depends(get_current_user)):
    return {"item_id": "jasoasjoa"}