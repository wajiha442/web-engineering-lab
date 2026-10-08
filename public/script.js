function greet(name) {
    return `Hello, I am ${name}`;
}

const greeting = document.getElementById("greeting");

if (greeting) {
    greeting.textContent = greet("Wajiha Haleem");
}