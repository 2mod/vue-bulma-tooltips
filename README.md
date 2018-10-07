# vue-bulma-tooltips

Simple low weight custom Vue directive for the Bulma ToolTip extension

---


# Demo
[./public/demo.html](./public/demo.html)


# Built for VueJS and Bulma
This module was built for [VueJS](https://vuejs.org) and [Bulma](https://bulma.io)


# Definition

| Attribute | Type     | Description |
|-----------|----------|---|
| name      | String   | Name of the directive |
| directive | Object   | The [Vue.directive()](https://vuejs.org/v2/guide/custom-directive.html) being applied |
| modifiers | Object   | List of possible [modifiers](https://wikiki.github.io/elements/tooltip/) |
| init      | Function | Initialization function that will apply the tooltip directive to the Vue constructor |


# Prerequisites
Dependencies can be added through the terminal or Vue UI `sudo vue ui`


## Vue
The main dependency will obviously be Vue:
```bash
sudo npm install --save vue
```


## Bulma
The CSS work will be done by the following bulma modules:
```bash
sudo npm install --save bulma
sudo npm install --save-dev bulma-tooltip
```


# Installation
Install the `vue-bulma-tooltips` package
```bash
sudo npm install --save-dev vue-bulma-tooltips
```


## Package content
The [./dist](./dist) directory holds:

**[vue-bulma-tooltips.min.js](./dist/vue-bulma-tooltips.min.js)**

The finished module ready to be imported in your code.

**[vue-bulma-tooltips.sa.js](./dist/vue-bulma-tooltips.sa.js)**

A Vue standalone version of the same code, which exposes a `saVueBulmaToolTips` variable.


### Standalone (optional)
To run vue-bulma-tooltips on Vue standalone, [demo.html](./public/demo.html) can be used as a reference.

Essentially the only additional requirement is to include [vue-bulma-tooltips.sa.js](./dist/vue-bulma-tooltips.sa.js) with some script tags:
```html
<script src="./dist/vue-bulma-tooltips.sa.js"></script>
```

Then the directive can be initialized with the exposed `saVueBulmaToolTips` constant, before the Vue instance is created:
```javascript
//...
saVueBulmaToolTips.default.init(Vue)
//...
new Vue({//...
```


### Global
Initiate the directive in your `main.js` or `index.js` before the Vue instance is created:
```javascript
import Vue from 'vue'
import bulma from 'bulma'
import bulmaToolTip from 'bulma-tooltip'

import vueBulmaToolTips from 'vue-bulma-tooltips'
vueBulmaToolTips.init(Vue)

new Vue({//...
```


### Local (optional)
To register vue-bulma-tooltips in a component locally:
```javascript
import vueBulmaToolTips from 'vue-bulma-tooltips'
//...
// within your component
directives: {
  [vueBulmaToolTips.name]: vueBulmaToolTips.directive
}
//...
```


# Usage
Now the `v-ttip` directive can be used wherever needed:
```javascript
<button v-ttip="'This is a button'"> Button </button>
```


## Modifiers
Generally available modifiers are exposed in `vueBulmaToolTips.modifiers` object.
Basically they cover all possible CSS classes according to the CSS Documentation:
```javascript
<button v-ttip.bottom.info="'This is a button'"> Button </button>
```

To keep weight low, no explicit modifier validation is performed.
Hence, invoking an undefined modifier would result in applying an inexistent CSS class.


# Testing

## Standalone
Running [./tests/directives/vue-bulma-tooltips/index.html](./tests/directives/vue-bulma-tooltips/index.html) is comparable to running Vue standalone, it loads all resources locally and generates the same output as the [demo.html](./public/demo.html).

The difference being, that the [demo.html](./public/demo.html) loads its resources from online repositories, while the [./tests/.../index.html](./tests/directives/vue-bulma-tooltips/index.html) refers to the [./dist](./dist) folder.

Advantages of having both:
- simple test utility for Vue standalone dev's
- allows for abstracted testing of the compiled code
- module can quickly be tested relative to two repositories


### Prerequisites
Requires all dependencies to be available locally in the `./node_modules` and [./dist](./dist) folders:
```
../../../node_modules/vue/dist/vue.min.js
../../../node_modules/bulma/css/bulma.min.css
../../../node_modules/bulma-tooltip/dist/css/bulma-tooltip.min.css
../../../dist/vue-bulma-tooltips.sa.js
```


### Performing test
To perform a standalone test, simply run [./tests/directives/vue-bulma-tooltips/index.html](./tests/directives/vue-bulma-tooltips/index.html) in your browser of choice.


## Mocha & Chai
Alternatively or in addition to the above, a unit test can be performed with:

[./tests/directives/vue-bulma-tooltips/main.def.js](./tests/directives/vue-bulma-tooltips/main.def.js)


### Prerequisites

#### In your own project
This part is only required when using the test scripts in your own project.

Dependencies:
```bash
sudo npm install --save-dev mocha chai
sudo npm install -g @vue/cli-plugin-unit-mocha
```

Installing in an already created project:
```bash
sudo vue add @vue/unit-mocha
```

When using npm scripts mentioned bellow in your own project, be sure to copy them over from  [package.json](./package.json) to your own `package.json`.


#### This project
When testing this project be sure to:
```bash
sudo npm update
```


### Performing test
To perform a full test use the `test` script from [package.json](./package.json)
```bash
npm run test
```
This will lint the code and perform all tests, by executing all `*.test.js` scripts within the [./tests](./tests) directory.


#### Dev. test
To perform tests during development `test:dev` will run all `dev.test.js` scripts within [./tests](./tests)
```bash
npm run test:dev
```


#### Prod. test
To perform tests after development `test:prod` will run all `prod.test.js` scripts within [./tests](./tests)
```bash
npm run test:prod
```

Note - the project must be built `npm run build` for this script, since it refers to the [./dist](./dist) folder.


# Development
Should you desire to contribute to vue-bulma-tooltips please follow this section.


## Versioning
Versioning follows this pattern `[Release].[Change].[Issue]`

- [Release] - incremented for larger changes that may require adapting consumer code
- [Change] - incremented with every feature deployment
- [Issue] - incremented with every bugfix deployment

The root version number is set in [package.json](./package.json).

Administrative changes, such as documentation, will have no effect on the version.

Changes to development related code, like test scripts, when no other changes are made to functional code; requires appending an incrementing alpha character to the respective digit of the existing version, depending if the changes involve new features or bugfixes.

> eg. 1.0A.0 for a new feature, then 1.0B.0 for another feature, then 1.0B.0A for a bugfix etc

This persists until an integer digit increases, which resets the alpha character of the respective digit and all the ones to its right.

> eg. 1.1.0 for a new functional feature or 1.0B.1 for a bugfix etc


## Prerequisites
Make sure all dev. dependencies from [package.json](./package.json) are installed:
```bash
sudo npm update
```


## Compilation
Webpack and Babel are used for this project.

All of the configuration is found in [webpack.config.js](./webpack.config.js) and [babel.config.js](./babel.config.js)


### Development
When building for development purposes `build:dev` will not minify the code:
```bash
sudo npm run build:dev
```


### Finished project
When finishing a build:
```bash
sudo npm run build
```
will clear out the [./dist](./dist) directory and write the new build to it.


## Tests
Depending on the implementation, be sure to add the according test procedures to:

[./tests/directives/vue-bulma-tooltips](./tests/directives/vue-bulma-tooltips)

Simple changes to the root object can be added to [./tests/.../minimal.def.js](./tests/directives/vue-bulma-tooltips/minimal.def.js) directly.

Should more extensive testing be necessary, feel free to either:
1. **(prefered)** create further `*.def.js` files within the [./tests/.../vue-bulma-tooltips](./tests/directives/vue-bulma-tooltips) directory.
To elaborate further test definitions and then implement them in [./tests/.../main.def.js](./tests/directives/vue-bulma-tooltips/main.def.js)

2. create further `*.test.js` files within the [./tests/.../vue-bulma-tooltips](./tests/directives/vue-bulma-tooltips) directory.
For tests that are only to be run when performing a full test `npm run test`


## Cleanup (optional)
Should you encounter the urge for a cleanup:
```bash
sudo npm run cleanup
```
will delete the `npm-debug.log` and all `v8-compile-cache-*` files.

And to clear the [./dist](./dist) folder:
```bash
sudo npm run del:dist
```

But this should not be necessary, as long as all irrelevant files are listed in [.gitignore](./.gitignore) and the [./dist](./dist) folder is automatically flushed when building.


## Committing
Before committing any changes to the repository, be sure to complete all these steps where applicable:


### Administrative (mandatory)
1. make sure all code changes are commented sufficiently throughout the code
2. list all changes in the [CHANGE-LOG.md](./CHANGE-LOG.md), keeping it brief and not too technical
3. all relevant information should be documented in the [README.md](./README.md)
4. any known minor issues that cant be fixed during development, are to be listed in [ISSUES.md](ISSUES.md) and are removed once implemented
5. medium to major issues, that havent existed prior to cloning, are to be fixed before deployment


### Build (mandatory)
1. lint the code and run dev. tests `sudo npm run test:dev` (repeat until all tests are successful)
2. add all changes to the build `sudo npm run build`
3. run prod. tests `sudo npm run test:prod` (in case of errors or warnings, fall back to step 1)
4. test for Vue standalone by running [./tests/.../index.html](./tests/directives/vue-bulma-tooltips/index.html) and [./public/demo.html](./public/demo.html) to make sure every thing is working normally


### Deployment (mandatory)
1. commit all changes to your repository
2. merge all changes with the [master](https://github.com/2mod/vue-bulma-tooltips)
3. have a tea/coffe/redbull...
4. consume the [npm](https://www.npmjs.com/package/vue-bulma-tooltips) repository
5. and thank you for committing!



# Documentation

## Vue directives
[Vue.directive()](https://vuejs.org/v2/guide/custom-directive.html)

## CSS
[Bulma-Tooltip](https://wikiki.github.io/elements/tooltip/)

## Testing
[@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha)
