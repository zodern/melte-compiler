## 1.4.1 - March 20, 2023

- Support Meteor 3

## 1.4.0 - January 25, 2023

- Fix crash when error compiling with babel
- Fix typescript sometimes removing imports for components
- Partial support for source maps for typescript 

## 1.3.1 - July 12, 2022
- Delay importing svelte until it is needed. This fixes errors from not finding svelte when publishing packages that depend on `zodern:melte`

## 1.3.0 - May 2, 2022
- Support typescript in scripts with context="module"

## 1.2.2 - February 23, 2022
- Fix error when using old versions of Svelte 3

## 1.2.1 - February 12, 2022

- Fix compiling tracker statements for SSR

## 1.2.0 - February 12, 2022

- Fix crash when file has a syntax error
- Fix source maps. If the svelte file uses typescript, there are still some issues with source maps

## 1.1.0 - December 27, 2021

- Fix loading typescript compiler
- Fix using `css` option
- Fix using post css
- Fix using optional chaining
- Fix HMR bugs

## 1.0.2 - April 21, 2021

- Add missing `@babel/parser` dependency

## 1.0.1 - April 21, 2021

- Fix error when package.json does not have `svelte:compiler` options

## 1.0.0 - April 19, 2021

- Initial version
