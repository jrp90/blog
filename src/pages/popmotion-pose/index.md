---
title: 'Using Popmotion Pose'
date: '2018-11-22T12:15:00+00:00'
featuredImage: './pose.png'
tags: 'code'
---

![Popmotion Pose Logo](./pose.png)

I have just added a couple of animations to this site using Popmotion Pose - maybe you noticed already! But probably not :)

Pose has a declarative API which means it aims to allow you to describe _how_ you want the animations to work rather than having to specify exactly what steps need to happen, as would be the case for an imperative API.

**First animation**

The first animation I added was making the post on this page fade in and move up with a spring effect on page load. I added a `PoseGroup` around the container so I could get an automatic `enter` and `exit` pose and also added the `animateOnMount` property to the PoseGroup component to make the children, in this case just the container, animate between these poses on mount.

The code below shows how you can add these poses to a component and the properties you want to transition between. Here you can see I am setting this container div to transition from opacity 0 to 1 and from position 50 on the y-axis to 0. I am also setting a transition type of 'spring' - refresh the page to see it if you didn't catch it the first time!

```javascript
const PosedContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
});
```

**Second Animation**

The second animation I added was to make the cards on the home page fade in and drop down - but this time one after another in a staggered fashion. To accomplish this I set up similar poses to the Card component as shown above for the container and this time added a `delay` property in the `enter` config like so:

```javascript
enter: {
  opacity: 1,
  y: 0,
  delay: ({ i }) =>  i * 50
},
```

Mapping through the blog posts gives me access to the index which I added to my PosedCard component as `i`.

```javascript
<PosedCard i={index} />
```

The delay function has access to this `i` prop and multiplies it by 50 to calculate a delay in milliseconds for each card so they drop in one by one. Click back home at the top of the page to see it in action!
