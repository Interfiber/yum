# Yum
A collection of recipes for people who don't like bloat
Note: Links might not work as the project is under development

## Does it use javascript?
Only to compile the markdown pages, this is ran when the website is deployed.

## Adding recipes
Just add a markdown file to ```site/recipes```. Then link to it in ```static/index.md``` just please make sure if this recipe is not yours then link to the original source. Then submit a PR on GitHub.

## Viewing the site locally
To view the site first compile all of the markdown by running
```
node compiler.js
```
make sure you have ran ```npm install``` first. This will create a new public folder which you can use a webserver to host.
