from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from schemas import student

app = FastAPI()

# Mount the static folder to serve HTML
app.mount("/static", StaticFiles(directory="static"), name="static")

# Sample student data
students = [
    {"id": 1, "name": "Arundhati", "age": 20, "course": "Python"},
    {"id": 2, "name": "Rahul", "age": 21, "course": "Django"},
    {"id": 3, "name": "Meena", "age": 22, "course": "FastAPI"},
    {"id": 4, "name": "Ramya", "age": 17, "course": "HTML"}
]

@app.get("/")
def read_root():
    # Serve the HTML page
    return FileResponse("static/index.html")

@app.get("/students")
def get_students():
    # Send student data as JSON
    return {"students": students}

@app.post("/students")
def create_student(student:student):
    studen_d = dict()
    
    studen_d["id"] = student.id
    studen_d['name'] = student.name
    studen_d['age'] = student.age
    studen_d['course'] = student.course
    students.append(studen_d)
    return studen_d