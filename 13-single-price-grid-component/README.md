# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot
#### Mobile version
![](screenshot_1.jpg)

#### Desktop version
![](screenshot_2.jpg)

### Links

- Solution URL: [Github repo](https://github.com/KellyCHI22/frontend-mentor-solutions/tree/main/13-single-price-grid-component)
- Live Site URL: [Solution demo](https://kellychi22.github.io/frontend-mentor-solutions/13-single-price-grid-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- 
### What I learned
First Frontend Mentor challenge that involves CSS Grid.

```css
.card {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 325px;
}

@media (min-width: 800px) {
    .card {
        grid-template-columns: 1fr 1fr;
        max-width: 650px;
    }
}
```

## Author

- Website - [My Github homepage](https://github.com/KellyCHI22)
- Frontend Mentor - [@Hsin-tingCHI](https://www.frontendmentor.io/profile/Hsin-tingCHI)

## Acknowledgments

Thank you Frontend Mentor for providing the challenge!