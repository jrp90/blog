---
title: Look ma, no media queries!
date: "2018-01-22T19:47:03+00:00"
featuredImage: "./grid.jpg"
tags: "code"
---

![Grid](./grid.jpg)

I recently finished Wes Bos' excellent (and free!) [CSS Grid Course](https://cssgrid.io/) and wanted to use what I'd learnt in one of my projects. One technique in particular I thought was brilliant and applied to the grid of cards style layout I wanted to build on the home page for this site.

Using a combination of `auto-fit`, `minmax()` and the `fr` unit I was able to make a fully responsive grid in one line of CSS with no need for media queries!

```javascript
grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
```

A brief explanation of this line is that I'm defining the grid columns so that  I get as many columns with a minimum of 265 pixels and maximum of 1fr as will fit in the container. Adding a `grid-gap` of 30px gives me a great responsive layout with very little effort.
