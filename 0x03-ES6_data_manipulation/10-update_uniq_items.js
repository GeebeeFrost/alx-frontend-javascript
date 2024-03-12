export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  try {
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  } catch (e) {
    throw new Error('Cannot process');
  }
}
