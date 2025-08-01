function confirmEnding(string, ending) {
  let strLength = string.length;
  let endLength = ending.length;
  let endsWith = string.slice(strLength - endLength);
  return endsWith === ending ? true : false;
}

let string = "Bastian";
let ending = "an";
console.log(confirmEnding(string, ending));
