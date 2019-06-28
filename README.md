
# `<kami-flash>`

A simple flash component.

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


The most basic flash:

<p align="center">
  <img  src="https://emilienleroy.fr/assets/flash.gif">
</p>

```html

<!-- Generate a good message with the text 'Write your message flash here'-->
<kami-flash></kami-flash>

```

You can custom the type of flash:
```html

<!-- Generate a error message with the text 'Write your message flash here'-->
<kami-flash
    typeProps="ERROR"
></kami-flash>

```

You can also custom the message:
```html
<!-- Generate a good message with the text 'A simple text'-->
<kami-flash
    messageProps="A simple text"
></kami-flash>

```

And you can custom both:
```html
<!-- Generate a warning message with the text 'A simple text'-->
<kami-flash
    typeProps="WARNING"
    messageProps="A simple text"
></kami-flash>

```

## Contribute

We would love you for the contribution to ``kami-flash`` project, check the ``CONTRIBUTING`` file for more info.