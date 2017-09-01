import { Student } from './interface'
import { studentWelcome } from './function'
import { StudentDetails } from './function'

let details: Student={name:"Titiksha",rollNo:50,id:250};
studentWelcome(Student.name);
StudentDetails(details);