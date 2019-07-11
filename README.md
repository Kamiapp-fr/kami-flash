
# `<kami-flash>`

A simple flash component. [DEMO](https://emilienleroy.fr/assets/flash/)

<p align="center">
  <img  src="https://emilienleroy.fr/assets/flash.gif">
</p>

## Installation


```sh
npm install --save kami-flash
```

Or grab from the *dist* folder :


```html
<script src="KamiFlash.umd.js"></script>
```


## Usage


```html
<script src="../dist/KamiFlash.umd.js"></script>
<script>
    window.onload = function(){
        customElements.define('flash-exemple', KamiFlash);
    }
</script>
```

Or:

```js
// ES6 Modules or TypeScript
import KamiFlash from 'kami-flash'

// register the component with the name you want
window.customElements.define('kami-flash', KamiFlash);
```


## Examples


Just add into your html the flash component like this.
See the *props section* to customize your flash component.

<p align="center">
  <img  src="https://emilienleroy.fr/assets/error.gif">
</p>

```html

<!-- Generate an error message with the text 'An error message !'-->
<flash-exemple
    type="ERROR"
    message="An error message !"
>
</flash-exemple>

```
## Props

| name          |  type    | description                 | required | default value                  |
|-------------- |:--------:|-----------------------------|----------|--------------------------------|
| type          | Type     | The flash type              | false    | OK                             |
| message       | String   | The flash message           | false    | 'Write your message flash here'|
| position      | Position | The flash position          | false    | BOTTOM                         |
| stack         | Boolean  | Stack or not all flash      | false    | true                           |

## Contribute

We would love you for the contribution to ``kami-flash`` project, check the ``CONTRIBUTING`` file for more info.

