 
/* LAB 04: Tasks 8, 9 and 11 */

// TASK 11: Import utility functions
import { delay, makeCounter } from "./utils.js";

// Create a numbered counter
const nextBookingNumber = makeCounter();

// TASK 8 and TASK 9: Event delegation and row selection
document.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-day]");

    if (!button) {
        return;
    }

    const row = button.closest("tr");
    const day = button.dataset.day;
    const status = document.querySelector("#booking-status");

    // Toggle the selected class
    row.classList.toggle("selected");

    // Count selected rows
    const selectedRows = document.querySelectorAll(
        "#schedule tbody tr.selected"
    );

    const bookingNumber = nextBookingNumber();

    // Show a temporary message
    status.textContent = `Processing ${day}...`;

    // TASK 11: Wait for one second
    await delay(1000);

    // Show numbered confirmation
    status.textContent =
        `Confirmation #${bookingNumber}: ${day}. ` +
        `Total selected rows: ${selectedRows.length}.`;
});
