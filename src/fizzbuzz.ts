const button = document.querySelector(".input-button")!;
let screen = document.querySelector(".result")?.innerHTML;

export const fizzbuzz = (start: number, end: number) => {
  const filtered = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      filtered.push("FizzBuzz");
    } else if (i % 3 === 0) {
      filtered.push("Fizz");
    } else if (i % 5 === 0) {
      filtered.push("Buzz");
    } else {
      filtered.push(i);
    }
  }

  screen = filtered.toString();
  return filtered;
};

const startV = document.getElementById("#start");
const endV = document.getElementById("#end");

button.addEventListener("click", () => {
  fizzbuzz(startV, endV);
});
