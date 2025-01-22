from fastapi import APIRouter
from database.database import SessionLocal, engine, Base

from pydantic import BaseModel

from sqlalchemy.orm import Session

from fastapi import APIRouter, Depends
from database.database import get_db

from database.model import User  # 导入 User 类
user = APIRouter()

@user.get("/food")
def user_root():
    return {"Hello": "World"}

@user.get("/bad")
def user_bad():
    return {"user": "bad"}
@user.get("/bad1")
def user_bad():
    return {"user": "bad"}


class UserCreate(BaseModel):
    username: str
    email: str
    full_name: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: str

    class Config:
        orm_mode = True
@user.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(
        username=user.username,
        email=user.email,
        full_name=user.full_name,
        hashed_password=user.password  # In a real application, hash the password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user