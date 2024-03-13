const cleanSet = (set, startString) => {
  // Get the length of the startString
  const len = startString.length;

  // If startString is empty or undefined, return an empty string
  if (len <= 0) {
    return '';
  }

  // Array to store strings that start with startString
  const strs = [];

  // Loop through each value in the set
  for (const str of set.values()) {
    // Check if the value starts with startString
    if (str.startsWith(startString)) {
      // If yes, push the substring after startString to strs array
      strs.push(str.slice(len));
    }
  }

  // If there are strings in strs array, join them with '-' separator
  if (strs.length > 0) {
    const finStr = strs.join('-');
    return finStr;
  }

  // If strs array is empty, return an empty string
  return '';
};

export default cleanSet;
