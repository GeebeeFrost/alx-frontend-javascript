export default function getStudentsIdsSum(listStudents) {
  return listStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
}
