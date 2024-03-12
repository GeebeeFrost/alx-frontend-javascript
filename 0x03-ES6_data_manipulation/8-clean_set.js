export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString === ''
  ) return '';
  const arr = [];
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      arr.push(element.slice(startString.length));
    }
  });
  return arr.join('-');
}
