const createInt8TypedArray = (length, position, value) => {
  // Check if the position is within the range of the typed array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // create a new Array Buffer with specified length
  const buffer = new ArrayBuffer(length);
  // create a DataView to interact with the buffer
  const dataView = new DataView(buffer);
  // set the Int8 value at the specified position
  dataView.setInt8(position, value);
  // return the  DataView object, which provides view into the buffer
  return dataView;
};
export default createInt8TypedArray;
