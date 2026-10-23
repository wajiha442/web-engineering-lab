
/* TASK 11: Reusable Utility Functions */

// Wait for the given number of milliseconds
export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Create a counter that increases each time it is called
export function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
