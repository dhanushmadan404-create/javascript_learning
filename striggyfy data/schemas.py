from pydantic import BaseModel

class student(BaseModel):
    id:int
    name:str
    age:int
    course:str