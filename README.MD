# Gen-project (generic-project)
Project template for building static (without integrated backend) html-projects, heavily driven by productivity and optimisation necessities.

## Features
* local dev-server with autoreload on change and no-reload style injecting via BrowserSync;
* HTML templating with json-data for elements reuse, easy content output in loops and other via Nunjucks;
* SCSS compiling/minifying/autoprefixing with a lot of usefull base styles/mixins included;
* modular js structure also with compiling/minifying;
* automatic images optimization.

## Gulp-tasks
* **default/watch** — development task, starts localhost server with hot-reloading (note: needs to be stopped before git rebase);

* **build** — task for creating production build, everything will be outputted to /dist folder.

## Project structure
* **/dist** — compiled files with minified styles/scripts and optimized images, gitignored;
* **/src**:
	* **css, data, html, js** — intermediate non-minified files, used only for production build and by local dev-server, gitignored;
	* **img** — all images;
	* **fonts** — self-explanatory;
	* **scss** — style files;
	* **sdata** — json files with content;
	* **sjs** — source scripts and js-libs;
	* **templates** — html-templates;
	* **index.html** — static helper page, used to list all available pages, needs to be edited manually (dynamic index.php file located in root of project, automatically lists pages from /dist folder)

## Assets details

### Images
Automatically optimized on build, so no-need for preoptimize while developing. Formats to be optimized — jpg/jpeg, png, gif, svg.

### Styles
Not minified while development, minified and autoprefixed on build.
* **base** — global styles, each file has self-explanatory name, some details:
    * _global — global classes prefixed by '_g', all global classes should be added here;
    * _includes — global variables (produces no ouput css), this file should be included in every module from /modules;
    * _settings — key/value variables and configs;
* **modules** — style-files for BEM-blocks, file names should always match block class name, these files should not be imported anywhere, style-compiler will pick them up automatically (file names must not be prefixed with underscore);
* **vendor** — styles for 3rd-party css/js libs. Should be prefixed with underscrore, renamed to scss if not already in scss-format and be imported in default.scss to ensure proper order in result css;
* **default.scss** — includes everything from base folder, placed first in result css (so before modules).

### JSON data
Content used by html-templater. Files can have any name, but root-level keys inside each should be unique overall, as every json will be merged in single file, so all content will be available for all pages.
 
### Scripts
* **modules** — js-modules declared as global variable and called in init.js (check any file inside for example of structure). Everything will be concatted in single defaults.js file and wrapped in self-executed function on build, so global visibility will be removed;
* **vendor** — 3rd-party js-libs, should not be included on pages manually, as everything will be concatted in single vendor.js file;
* **init.js** — some kind of project entry point, all scripts initialized here.
	 	
### HTML
[Nunjucks](https://mozilla.github.io/nunjucks/) used as template engine.
* **modules** — reusable html-elements;
* **modules/layout.html** — unified layout for every page;
* **root files** — result pages files (btw, page-example.html will be excluded from build, as it used only for quick page cloning).
