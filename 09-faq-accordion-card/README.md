# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

#### Mobile version
![](./screenshot_1.jpg)
#### Desktop version
![](./screenshot_2.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- Mobile-first workflow

### What I learned

* Used `@keyframes` for box image animation
```css
.img-box {
        position: absolute;
        top: 190px;
        left: -90px;
        transition: transform 1s ease-in;
    }

body:hover .img-box,
body:focus .img-box {
    animation: up-and-down 1.25s linear infinite alternate;
}

@keyframes up-and-down {
    0% {
        transform: translateY(0%);
    }

    100% {
        transform: translateY(-20%);
    }
}
```

## Author

- Website - [My Github homepage](https://github.com/KellyCHI22)
- Frontend Mentor - [@Hsin-tingCHI](https://www.frontendmentor.io/profile/Hsin-tingCHI)

## Acknowledgments

Thank you Frontend Mentor for providing the challenge!

