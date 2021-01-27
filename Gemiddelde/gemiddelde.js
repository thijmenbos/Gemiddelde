let numbers = [];
let again = true;
let another;
let avarage = 0;
const h1 = document.getElementById("avarage");

function manager() {
    if (again === true) {
        numbers.push(prompt("Type in your number"));
        another = prompt("Would you like to enter another number?");
        if (another === "no") {
            again = false;
            for (let i = 0; i < numbers.length; i++) {
                avarage += parseInt(numbers[i]);
            }
            avarage /= parseInt(numbers.length);
            h1.innerHTML = `The avarage is ${avarage}`;
        } else if (another === "yes") {
            manager();
        }
    }
}

manager();