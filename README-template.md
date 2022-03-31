# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup

03.16.22
This is my first project incorproating JavaScript, and I'm unsure where to begin, so I'm beginning with what I know. I'm starting with a structured HTML5 document, building as much as I can before moving onto CSS.
I structured the document to include the images. For the text, I made the "FAQ" an <h1>, the questions <h2>, and the answers <p>. If this is incorrect, I will change it later. 

- CSS custom properties

03.16.22
I laid out the global CSS styles, such as the fonts and font colors, the background color. I also used the <main> tag to construct a card with a white background and 1440px width. 

I laid out variables this time since there many colors, and I needed to go back and review that process as well.  

I am wondering if I should build using mobile-first again.

I have no idea how to overlap the three images to mimic the layout in the given design files, I will have to research that.

03.22.22

I am using a FCC tutorial to learn how to build the accordian.
https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/

HTML markup needs a container, label, and content tag and class for each section of the accordian. The tutorial uses all <div>, but I used a <div> for the intial container class, and then left in my <h2> and <p> tags for a more semantic markup.
>>> I changed it to div because the code didn't seem to be working properly. Is it best practice to have so many divs?

CSS - review position
I added the carrot that will make the accordian interactive. I had to modify some of the code, I believe because it is not a single page like the OP was trying to do. It will be a two column grid like the previous project I did. 

The content is also hidden. I am assuming the JavaScript is what makes it expand. 
This is achieved by the 
height: 0
overflow: hidden
modifiers. The first makes the container's height 0, and the second hides it since it's overflowing.

I cleaned up the tutorial code relative to this design and adjusted the font sizing. 

I'm going to do a similar grid to my previous project, so I'm going to go with a mobile-first design.
Use CSS grid to overlap images?

03.24.22

Re-reading about CSS positioning to see if I can overlap the images. If I can't do it using positioning, I will do it with grid?

For HTML structuring, I added a main container, an image container, and a faq container using the section elements. I'm unsure whether section can be used in this way, but too many divs makes me very confused. 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
This states that sections should always have a heading though. 
Curses! --> If you are only using the element as a styling wrapper, use a <div>. A rule of thumb is that a <section> should logically appear in the outline of a document.

Positioning feels wonky and unresponsive to me, so I decided on a mobile-first layout using CSS grid. I used the grid and margins to overlap the images.
Jen Simmmons - overlapping grid: https://labs.jensimmons.com/2017/01-003.html

I will use the suggested positioning from the tutorial inside the accordian and continue to try to read and comprehend. 
https://developer.mozilla.org/en-US/docs/Web/CSS/position

Reviewed box shadow - need higher offset-y and spread radius for this type of shadow
https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

Cleaned up styling to reflect spacing and placement in mobile design.
Attempted the switch to desktop design, but proving more difficult. I don't know if the image sizing will work!

03.29.22
I was able to make the design reponsive, but unsure about how to handle the image sizing. I'd like to do it through HTML, but not sure if resizing is possible?
Finishing layout setup so I can try to JavaScript accordian code. 

I GOT THE JS TO RUNNNNNNNN! I don't know what all of the code means besides a basic framework, but it's functional!

03.31.22

Attempting image placement and alignment with CSS instead of HTML. I can't figure out how to make the sizes responsive just in HTML.

Got desktop images to show up through CSS with decent positioning, but now the mobile ones have disappeared.
CSS background property is actually shorthand for many other properties. Syntax: 
background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
