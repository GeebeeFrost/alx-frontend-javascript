export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades,
) {
  return listStudents
    .filter((student) => student.location === city)
    .map((cityStudent) => {
      const stud = cityStudent;
      const grades = newGrades.filter(
        (grade) => grade.studentId === cityStudent.id,
      );
      if (grades.length === 0) {
        stud.grade = 'N/A';
      } else {
        stud.grade = grades[0].grade;
      }
      return stud;
    });
}
