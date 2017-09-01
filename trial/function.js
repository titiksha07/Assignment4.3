var StudentDetails;
(function (StudentDetails_1) {
    function studentWelcome(student) {
        console.log("Welcome " + student.name);
    }
    StudentDetails_1.studentWelcome = studentWelcome;
    function StudentDetails(student) {
        console.log("The Details are: Name:" + student.name + "\n                id:" + student.id + " \n                and rollNo: " + student.rollNo);
    }
    StudentDetails_1.StudentDetails = StudentDetails;
})(StudentDetails || (StudentDetails = {}));
;
