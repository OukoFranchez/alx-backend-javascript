const updateUniqueItems = (map) => {
  // check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Iterate over each entry in the map
  for (const [item, quantity] of map.entries()) {
    // If the quantity is 1, update it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
};
export default updateUniqueItems;
