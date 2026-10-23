 # Web Engineering Labs 01–04

This repository contains my Web Engineering lab work, completed as part of the Web Engineering course. It covers foundational web development, semantic HTML, accessibility, modern CSS, responsive layouts, and JavaScript programming.

## Technologies

- HTML5
- CSS3
- JavaScript
- Node.js
- npm
- ESLint
- Prettier
- serve
- Git
- GitHub
- Chrome DevTools
- Lighthouse

## Lab 01: HTML Foundations

This lab focuses on the basic structure and foundations of web development.

### Topics Covered

- Basic HTML document structure
- HTML elements and attributes
- Headings, paragraphs, and links
- Images and lists
- Creating and organizing web page content
- Introduction to CSS and styling
- Introduction to web project structure

## Lab 02: Semantic HTML and Accessibility Foundations

This lab focuses on semantic HTML, accessible page structure, and accessible form and navigation elements.

### Features

- Semantic HTML structure using `header`, `nav`, `main`, `section`, and `footer`
- Skip-to-main-content link
- Accessible navigation using `aria-current`
- Accessible Office Hours table
- Table caption, `thead`, `tbody`, and scoped column headers
- Semantic `time` elements with `datetime` attributes
- Decorative and informative SVG graphics
- `figure` and `figcaption` for informative graphics
- Accessible feedback form
- Proper labels for form controls
- `fieldset` and `legend` for radio buttons
- Required form fields
- `aria-describedby` for additional form information
- Keyboard accessibility
- Visible focus indicators using `:focus-visible`
- Accessibility testing with axe DevTools
- Accessibility testing with Lighthouse

## Lab 03: The Cascade, Specificity and Modern CSS Foundations

This lab focuses on CSS cascade behavior, selector specificity, inheritance, custom properties, cascade layers, modern color functions, and accessibility testing.

### Topics Covered

- CSS reset and `box-sizing`
- Margin behavior and margin collapsing
- CSS specificity and selector comparisons
- Understanding and testing `!important`
- CSS custom properties using `:root`
- Typography inheritance using `font: inherit`
- CSS cascade layers using `@layer`
- Comparing specificity and cascade layer priority
- Utility classes such as `.text-muted`
- Modern color functions, including `oklch()` and `color-mix()`
- Theme-aware colors using `color-scheme` and `light-dark()`
- Hover styling and SVG `currentColor`
- Testing light and dark color schemes
- Accessibility audits using Lighthouse
- Git commits and pushing changes to GitHub

## Lab 04: Modern CSS Layouts and JavaScript

This lab focuses on Flexbox, CSS Grid, responsive design, JavaScript event handling, ES modules, asynchronous programming, and accessibility testing.

### Tasks Completed

**Task 1: Flexbox Header Layout**

- Used Flexbox to align the website title and navigation links.
- Practiced `justify-content`, `align-items`, `flex-wrap`, and `gap`.

**Task 2: Navigation Styling**

- Arranged navigation links in a horizontal row using Flexbox.
- Used the `gap` property to control spacing.

**Task 3: Figure Layout**

- Used Flexbox to align an SVG icon with its caption.

**Task 4: CSS Grid Schedule**

- Created a two-column schedule layout using CSS Grid.
- Used the `.span-all` utility class to span both columns.

**Task 5: Form Layout**

- Arranged form fields in two columns using CSS Grid.
- Made selected form elements span the full width.

**Task 6: Responsive Design**

- Added a media query to adapt the schedule and form layouts to smaller screens.
- Tested the responsive layout using Chrome DevTools.

**Task 7: Booking Buttons**

- Added booking buttons with `data-day` attributes.
- Displayed booking feedback in an accessible status paragraph using `role="status"`.

**Task 8: JavaScript Event Delegation**

- Created `main.js` and loaded it using `type="module"`.
- Used event delegation, `closest()`, and `dataset` to handle booking button clicks.

**Task 9: Dynamic Row Selection**

- Used `classList.toggle()` to select and deselect schedule rows.
- Used `querySelectorAll()` to count selected rows.
- Highlighted selected rows with CSS.

**Task 10: JavaScript Event Loop**

- Explored synchronous execution, Promises, and `setTimeout()`.
- Compared the predicted and actual execution order.
- Documented the results in `NOTES.md`.

**Task 11: ES Modules and Async/Await**

- Created `utils.js` for reusable utility functions.
- Exported and imported `delay()` and `makeCounter()`.
- Used `async/await` and a one-second delay to display numbered booking confirmations.

**Task 12: Accessibility and Lighthouse Testing**

- Tested keyboard navigation and interactive elements.
- Used Chrome Lighthouse to audit the website.
- Reviewed the audit results and prepared the project for GitHub submission.

## Project Structure

```text
web-engineering-lab/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── main.js
│   ├── utils.js
│   └── script.js
│
├── tests/
├── NOTES.md
├── README.md
├── package.json
└── package-lock.json
```

*Note: The project structure above includes files used in Lab 04. Adjust it to match the actual files and folders in your repository.*

## Running the Project

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server using the script configured in `package.json`. For example, if a `start` script is configured:

   ```bash
   npm start
   ```

5. Open the local URL displayed in the terminal.

## Tools and Quality Checks

- **ESLint:** JavaScript code linting.
- **Prettier:** Consistent code formatting.
- **axe DevTools:** Accessibility checks.
- **Chrome DevTools:** Debugging and responsive design testing.
- **Lighthouse:** Website quality and accessibility audits.
- **Git and GitHub:** Version control and project hosting.

## Learning Outcomes

Through these labs, I am developing practical skills in:

- Structuring web pages using HTML and semantic elements.
- Building accessible navigation, tables, and forms.
- Applying CSS specificity, inheritance, cascade layers, and custom properties.
- Using modern CSS color functions and theme-aware styling.
- Creating responsive layouts with Flexbox and CSS Grid.
- Handling browser events and manipulating the DOM with JavaScript.
- Understanding the JavaScript Event Loop, Promises, and asynchronous execution.
- Organizing JavaScript code using ES modules.
- Testing keyboard accessibility and using Lighthouse.
- Managing and publishing project changes with Git and GitHub.

## Author

Web Engineering Student

## Repository

This repository contains practical exercises and implementations from Web Engineering Labs 01–04.
