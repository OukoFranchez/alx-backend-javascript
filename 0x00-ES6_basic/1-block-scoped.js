export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    task = true; // Removed var, using the existing variable declared with let
    task2 = false; // Removed var, using the existing variable declared with let
  }

  return [task, task2];
}
