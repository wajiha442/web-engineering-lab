 # Web Engineering Labs 01–03

This repository contains my Web Engineering lab work, completed as part of the Web Engineering course. It covers foundational web development concepts, semantic HTML, accessibility, and modern CSS.

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
- CSS custom properties (variables) using `:root`
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

## Project Structure

```text
web-engineering-lab/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── tests/
├── README.md
├── package.json
└── package-lock.json
```

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

- **ESLint:** JavaScript code linting
- **Prettier:** Consistent code formatting
- **axe DevTools:** Accessibility checks
- **Lighthouse:** Accessibility audits
- **Git and GitHub:** Version control and project hosting

## Learning Outcomes

Through these labs, I am developing practical skills in:

- Structuring web pages with HTML
- Using semantic and accessible HTML elements
- Styling pages with CSS
- Understanding CSS specificity, inheritance, and cascade layers
- Working with custom properties and modern CSS color functions
- Testing accessibility and usability
- Managing code changes using Git and GitHub

## Author

Web Engineering Student

## Repository

This repository contains practical exercises and implementations from Web Engineering Labs 01–03.