![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Module Exercise: HTML

## Learning Goals

In this Module Exercise you will apply all the concepts you have been learning, such as:

- Using different HTML tags.
- Structuring your HTML page with **Block Elements**.
- Adding content to your HTML page with **Inline Elements**.

## Requirements

- Go to the [HTML module exercise repository](https://github.com/ironhack-labs/lab-html-cloning-medium) on Github.
- Click on the button "Clone or download" and a window will appear:
  ![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3cd92839c499fe04b53a5bbee5ce2dfe.png)
- Click the button "Download as zip"

## Exercise

### Starter Code

The `starter-code` folder contains an `index.html` file with the main structure already created. We also provide an `images` folder where you will find all the images you need to acomplish the exercise.

### Instructions

#### Introduction

In this exercise, you will clone the landing page from the [NPM website](https://www.npmjs.com/).  NPM is a package manager for NodeJs that we will use a lot later in the course.

You can see the real page [here](https://www.npmjs.com/).  


![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_62881782971caae2736b5990926e05d9.png)


Looking at this picture of the page, we can see that there are quite a few styles being applied to this web page. We have background colors for different parts of the page, different background colors, bold font, centered font, and elements being positioned very deliberately with CSS.  

During this exercise, we will be creating the HTML for this page, without any of the styles.  Don't worry, we are going to come back later and make our page look complete. But for now, the page that we are going to create should look like this

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_fb961b15cf7fcd5867273a3e77d3a0cf.png)



#### Setup

If you visited the NPM website, you probably noticed that the page is a lot longer than the picture provided in this assignment.  That's okay, we're not going to recreate the whole thing. For this assignment, we will be cloning only the top 4 sections, reflected in the picture provided above.


**It might be hard to get used to the idea of making a version of a web page with no styles, since it doesn't really look like a web site at all.** To make this easier to visualize go to the [NPM website](https://www.npmjs.com/) and copy and paste the following into your [**Chrome Console**](https://developers.google.com/web/tools/chrome-devtools/console/) (Ctrl + shift + J on Windows / Linux, Cmd + Option + J on Mac), and hit enter:

```javascript
// disable all externally linked stylesheets
for (var i = document.styleSheets.length - 1; i >= 0; i--) {
    document.styleSheets[i].disabled = true;
}

var arAllElements = (typeof document.all != 'undefined') ?
    document.all : document.getElementsByTagName('*');
for (var i = arAllElements.length - 1; i >= 0; i--) {
    var elmOne = arAllElements[i];
    if (elmOne.nodeName.toUpperCase() == 'STYLE') {
        // remove <style> elements defined in the page <head>
        elmOne.parentNode.removeChild(elmOne);
    } else {
        // remove per-element styles and style-related attributes
        elmOne.setAttribute('style', '');
        elmOne.setAttribute('size', '');
        elmOne.setAttribute('face', '');
        elmOne.setAttribute('color', '');
        elmOne.setAttribute('bgcolor', '');
        elmOne.setAttribute('background', '');
    }
}
```

This will make all of the styles disappear! As you can see, the official website now looks a lot more like the picture of our HTML-only version of the site. This script will work on any web page.  

**To be clear, the goal of this assignment is to clone the picture provided above of our HTML-only version of the page, not the actual page.**

#### Time to Code

The most difficult part of this exercise is deciding how to structure the page and picking the correct *semantic* tags for the job. Picking the right semantic tags will make your job easier in the next exercise when it comes time to styling.

Our recommendation is to try to keep it simple. Try to identify the different sections, and add `id`'s or `classes` to each `<div>`, `<section>`, `<ul>`, or `<header>` block elements to identify these elements. i.e.:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_689037695dcb47e060b94a695af8b9f1.png)




We could try to represent this header as follows:

```htmlmixed

<header>
    <div class="top-left">
  <a class = "heart" href="#">♥︎</a>
  <span class="acronym">Neophobe Plebeian Mumpsimus</span>
  </div>
    <ul class = "top-links">
      <li><a href="#">npm Enterprise</a></li>
      <li><a href="#">features</a></li>
      <li><a href="#">pricing</a></li>
      <li><a href="#">documentation</a></li>
      <li><a href="#">support</a></li>
    </ul>
</header>

```

The result of this HTML code won't look like the picture above, it'll look more like this



![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7867a5c5ff21731593eac7c0692399c5.png)




**But don't worry, that's okay.  Remember, we will go back later and make our site look official, for now, let's build our ugly wine list!**


/Happy coding!
