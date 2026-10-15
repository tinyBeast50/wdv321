const studentTemplate = document.getElementById("studentTemplate");
const studentContainer = document.getElementById("studentContainer");
const addStudentButton = document.getElementById("addStudent");

let studentCount = 3;

addStudentButton = () => {
    const newStudent = studentTemplate.content.cloneNode(true);

    studentCount++;

    const studentName = newStudent.querySelector("#studentName");

    const studentID = newStudent.querySelector("#studentID");

    studentName.id = "studentName" + studentCount;
    studentName.name = "studentName" + studentCount;
    studentName.previousElementSibling.htmlFor =studentName.id;

    studentID.id = "studentId" + studentCount;
    studentName.name = "studentName" + studentCount;
    studentName.previousElementSibling.htmlFor =studentName.id;

    studentContainer.addEventListener("click", addStudent);
}