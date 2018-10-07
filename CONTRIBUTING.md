
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
