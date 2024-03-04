export default function returnHowManyArguments(...args) {
  let num = 0;

  for (const arg of args) { // eslint-disable-line no-unused-vars
    num += 1;
  }
  return num;
}
