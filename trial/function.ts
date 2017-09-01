namespace StudentDetails
{
export function studentWelcome(student:Student){
    console.log(`Welcome ${student.name}`);
}
export function StudentDetails(student:Student)
{
    console.log(`The Details are: Name:${student.name}
                id:${student.id} 
                and rollNo: ${student.rollNo}`);
}
};