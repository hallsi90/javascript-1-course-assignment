# 🌧️ Rainydays

![Rainydays Preview](./images/preview/rainydays-preview.png)

Rainydays is a fictional e-commerce website for a premium rain jacket brand. This project was completed over multiple course assignments at Noroff: one for Design, one for HTML & CSS and one for JavaScript, and later updated for Portfolio 1 presentation. The site allows users to browse, filter, and purchase rain jackets through a fully functioning multi-page interface.

1. **Design Course Assignment:** Create a high-fidelity interactive prototype in Figma based on provided Rainydays brief.
2. **HTML & CSS Course Assignment:** Build a fully responsive, accessible multi-page website based on the Figma prototype created during the Design Course Assignment.
3. **JavaScript 1 Course Assignment:** Add interactivity and product data from a public API to simulate a functioning online store.
4. **Portfolio 1 Course Assignment:** Refactor and improve the project using newly learned skills and feedback.

---

## 📌 Project Goals

**Design Brief:**

- **Client:** Rainydays – an online shop selling men’s and women’s rain jackets
- **Slogan:** Pushing the Comfort Zone
- **Target Audience:** Adults aged 30–50 who enjoy outdoor activities such as hiking, exploring, skiing, camping, and canoeing

**HTML & CSS Brief:**

- Build a multi-page, responsive site using semantic HTML.
- Ensure the site meets accessibility (WCAG) standards.
- Use Flexbox and Grid without CSS frameworks.
- Avoid duplicate CSS and validate code using W3C and WAVE tools.

**JavaScript Brief:**

- Fetch and display real products from the [Noroff Rainydays API](https://v2.api.noroff.dev/rainy-days).
- Allow users to browse, filter, add products to a cart, and complete a checkout.
- Handle errors and show loading indicators for all API actions.
- Write accessible, usable, and `async`-based JavaScript with no hardcoded product data.

**Portfolio 1 Brief:**

- Apply new skills to enhance the old assignments.
- Make improvements based on teacher feedback.
- Make improvements based on self-assessment.
- Reflect on the development process and prepare the project for portfolio presentation.

---

## 🧰 Built With

- **HTML5** – Semantic and accessible
- **CSS3** – Responsive design with Flexbox and Grid
- **Vanilla JavaScript** – Modular, asynchronous, no frameworks

---

## 🚀 Getting Started

### Installing

To get a local copy up and running, follow these simple steps:

Clone the repo:

git clone https://github.com/hallsi90/javascript-1-course-assignment.git

If you're just viewing the site, no dependencies are needed since it is a static frontend project.

### Running

Just open the index.html file in your browser, or visit the GitHub Pages live deployment.

## 🚀 Live Site

🔗 [View Website on GitHub Pages](https://hallsi90.github.io/javascript-1-course-assignment/)

---

## 🤝 Contributing

This is a student project and not actively maintained, but if you'd like to give feedback or suggestions, feel free to fork the repo and open a pull request.

---

## 🧠 Key Features

✅ **Responsive Layout** – Fully mobile-first using Grid/Flexbox  
✅ **Semantic HTML & Meta Tags** – Unique `<title>`, `<h1>`, and `<meta name="description">` on every page  
✅ **Product Listing** – Loads live API data  
✅ **Dynamic Filtering** – By gender (dropdown or page-based)  
✅ **Product Detail Page** – Includes title, image, alt text, sizes, and sale price  
✅ **Cart System** – Add, remove, and update quantities (stored in `localStorage`)  
✅ **Checkout Page** – View all items with total and quantity controls  
✅ **Order Confirmation Page** – Shows thank-you message after checkout  
✅ **Scroll-To-Top Button** – Smooth scroll with accessibility  
✅ **Custom Hamburger Menu** – Built using JavaScript  
✅ **Loading Spinner** – Visual indicator while waiting for API responses  
✅ **Error Handling** – Alerts user when something goes wrong  
✅ **Accessibility Enhancements** – aria-labels, keyboard nav, image alt text

---

## 🔁 Refactoring Improvements

During the improvement phase, multiple JS files were merged to avoid duplication:

| Old Files         | Replaced With        |
| ----------------- | -------------------- |
| `mens.js`         | → `productfilter.js` |
| `womens.js`       | → `productfilter.js` |
| `genderfilter.js` | → `productfilter.js` |

✨ `productfilter.js` handles filtering dynamically via:

- A dropdown menu (on `index.html` and `jackets.html`)
- A `data-gender` attribute (on `men.html` and `women.html`)

---

## 🧠 Reflection Summary

This project helped me:

- Develop cleaner code and split concerns using separate HTML, CSS, and JS files
- Improve accessibility through aria attributes and better alt text
- Understand how to fetch, filter, and display real API data
- Manage user interactions (cart, checkout, filtering) in a modular way
- Refactor and optimize repeated logic into reusable components

---

## 💡 Future Improvements

- Refactor cart logic to use `product.id` instead of `title`
- Add animations or visual feedback when items are added to the cart
- Avoid full cart re-rendering during quantity changes
- Move reusable config like currency and redirect time into constants
- Restructure folders into `/pages/` and `/products/` for clarity
- Consider JS modules and reusable components

---

## ✅ Status

🎓 Project completed for Cross-Course HTML/CSS and JavaScript assignments  
🛠️ Continually improved as part of final portfolio assessment

---

## 📄 License

This project was created for educational use as part of the Noroff Frontend Development program.

---

## 🙏 Acknowledgments

- Noroff Frontend Development Course
- Teacher feedback and guidance
- W3C, WAVE and Lighthouse tools for accessibility and validation

---

## 🔗 Links

- [GitHub Repository](https://github.com/hallsi90/javascript-1-course-assignment)
- [Deployed Site](https://hallsi90.github.io/javascript-1-course-assignment/)
- [Figma Design File](https://www.figma.com/design/zU7iIMw4YsixrlaxV9OpLi/Design-Course-Assignment-05.11.23-Front-end-Development---Ingelinn-Hallseth?node-id=1-1131&p=f&t=Gkz7LXulHVzoBDBb-0)
