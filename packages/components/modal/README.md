<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - modal</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-modal--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.modal">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.modal" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.modal?minimal=true">
      <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.modal" height="20"/>
    </a>
</p>

<style>
  table {
        width:100%;
  }
</style>

## ➤ Properties

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| dir | data-dir | String | ltr | Direction 'rtl' or 'ltr' |
| size | data-size | String | sizes.LARGE | Size of the modal. Available variants: 'large', 'medium', 'small' |
| title | data-title | String | '' | Modal header text |
| visible | data-visible | Boolean | false | Show/hide the modal |
| noCloseOnEscKey | no-close-on-esc-key | Boolean | false | Disable the functionality to close the modal on press of escape key |
| noCloseOnCoverClick | no-close-on-cover-click | Boolean | false | Disable the functionality to close the modal by clicking the cover (background) |
| hideHeader | hide-header | Boolean | false | Show/hide the title of the modal |
| noPadding | no-padding | Boolean | false | Add/remove standard paddings to the main content |

## ➤ Slots

| Name   | Description                                                                      |
| ------ | -------------------------------------------------------------------------------- |
| note   | Use this slot name on the \`ts-note\` in the modal                               |
| main   | Content in the main section of the modal                                         |
| footer | Content in the footer section of the modal, most of the time \`ts-button-group\` |

## ➤ Events

| Name   | Description                                       | Payload |
| ------ | ------------------------------------------------- | ------- |
| close  | Emitted on start of the modal closing             |         |
| opened | Emitted when the animation of opening is finished |         |
| closed | Emitted when the animation of closing is finished |         |
| open   | Emitted on start of the modal opening             |         |

## ➤ How to use it

- Install the package of modal

```shell
$ npm i @tradeshift/elements.modal --save
```

- Import the component

```js
import '@tradeshift/elements.modal';
```

or

```html
<script src="node_modules/@tradeshift/elements.modal/lib/modal.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-modal--default")

- Our components rely on having the `Open Sans` available, You can see the `font-weight` and `font-style` you need to load [here](https://github.com/Tradeshift/elements/blob/master/packages/core/src/fonts.css), or you can just load it from our package (for now)

```html
<link rel="stylesheet" href="node_modules/@tradeshift/elements/src/fonts.css" />
```

## ➤ Polyfills

For supporting IE11 you need to add couple of things

- Don't shim CSS Custom Properties in IE11

```html
<!-- Place this in the <head>, before the Web Component polyfills are loaded -->
<script>
	if (!window.Promise) {
		window.ShadyCSS = { nativeCss: true };
	}
</script>
```

##### You have two options for polyfills library:

1. Use [`@open-wc/polyfills-loader`](https://github.com/open-wc/open-wc/tree/master/packages/polyfills-loader)

- Installation

```shell
$ npm i @open-wc/polyfills-loader
```

- Load it

```js
import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => import('./my-app.js'));
```

2. Use [`@webcomponents/webcomponentsjs`](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)

- Installation

```hell
$ npm i @webcomponents/webcomponentsjs --save
```

- Enable ES5 class-less Custom Elements

```html
<script src="/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
```

- Load appropriate polyfills and shims with [`@webcomponents/webcomponentsjs`](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>
```

## ➤ How to contribute

Thanks for your interest and help!

- First thing you need to do is read this [[Component Checklist](https://github.com/Tradeshift/elements/wiki/Component-checklist)] which contains lots of important information about what you need to consider when you are creating/changing components

##### [General info](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter)

You can find some [links to useful materials](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter) about what we are using and some tutorials and articles that can help you get started.

## ➤ [Polyfill Limitations](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

You can see a list of limitations that we should watch out for, [here](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

## ➤ License

- You can always create forks on GitHub, submit Issues and Pull Requests.
- You can only use Tradeshift Elements to make apps on a Tradeshift platform, e.g. tradeshift.com.
- You can fix a bug until the bugfix is deployed by Tradeshift.
- You can host Tradeshift Elements yourself.
- If you want to make a bigger change or just want to talk with us, reach out to our team here on GitHub.

You can read the full license agreement in the [LICENSE.md](https://github.com/Tradeshift/elements/blob/master/LICENSE.md).
