function confirmEnding(string, ending) {
  let strLength = string.length;
  let endsWith = string.slice(strLength - 1);
  return endsWith === ending ? true : false;
  console.log(endsWith);
}

let string = "Bastian";
let ending = "n";
console.log(confirmEnding(string, ending));
