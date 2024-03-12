const CleanSet = (set, startString) => {
  // filter the set to keep only values that start with the specified string
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  // Join the filtered values into a single string separated by '-'
  return filteredValues.join('-').replace(new RegExp('^${startString'), '');
};
export default CleanSet;
