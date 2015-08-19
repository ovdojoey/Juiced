# Juiced

Juiced is flexible CSS front-end framework that has many improvments over 
existing Grid-based CSS frameworks.  It is built on the Flexible Boxes
 Layout spec and is supported by all modern browsers IE10+.


## Installation

Juiced can be downloaded directly from the Github repository <https://github.com/ovdojoey/Juiced> or through Bower using `bower install juiced`.  


## Customization

To create your own custom version of Juiced (with your own colors or breakpoints) you will need Node installed.  Once Node is on your machine, use your console to run `npm install` and install Juiced's required depenendencies.  After that you can modify the variables in /sass/_variables.scss and run `gulp` to compile a new build.  Your new build will be placed in the /dist/ folder.

## Usage

You can use Juiced by including the minified `/dist/css/juiced.css` file directly in head of your webpage - or - by using `@import bower_compoents/sass/juiced` to add Juiced source to your existing SASS stylesheet (the location of your bower folder may vary).