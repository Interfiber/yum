# Yum
A collection of recipes for people who don't like bloat
Note: Links might not work as the project is under development

## The site is located [here](https://yum-recipes.vercel.app)

## Inspired
Look [here](https://www.youtube.com/watch?v=wY70NCW98Is)


## Does it use javascript?
Only when the site gets deployed, I don't want to use a static website generator because most static website generators have layers of junk that comes with them, and all I need is something to compile markdown and inject CSS. So don't worry about 5 MB of javascript loading.

## How do I add recipes?
Submit a pull request please :)! You can edit files in site/recipes, once adding a file here you can run the server with 
```
node compiler.js
```

## How do I view the website locally?
You can use your favorite webserver, just run it in the generated folder created by compiler.js called public.

## I need images!
Don't worry just include images in the static folder, then reference then like below
```
[Image Alt](./static/my-image.png)
```

## Error while compiling markdown?
If the site folder already exists, remove it. Also make sure you have ran
```
npm install
```

## When does the site deploy?
The site deploys every time a commit is pushed to master. All commits are pushed via Vercel via a GitHub webhook.

## What Css is used?
[Skeleton css](http://getskeleton.com/) and [Normalize.css](http://necolas.github.io/normalize.css/).
