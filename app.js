const firstName = "Tyler";
let score = 0;
const isActive = true;
const tags = ["js", "week3"];

const user = { id: 1, favoriteColor: "blue", trailingComma: false };

console.log(user["favoriteColor"]);

user["favoriteColor"] = "black";

console.log(user["favoriteColor"]);

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
