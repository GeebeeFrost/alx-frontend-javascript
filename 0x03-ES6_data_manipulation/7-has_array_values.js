export default function hasValuesFromArray(set, arr) {
  if (!arr.length) return false;

  let result = true;
  arr.forEach((element) => {
    if (!set.has(element)) {
      result = false;
    }
  });
  return result;
}
