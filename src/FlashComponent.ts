// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import '@webcomponents/webcomponentsjs/webcomponents-bundle'
import KamiComponent from 'kami-component'

class FlashComponent extends KamiComponent {
  constructor() {
    super()
    console.log('ok')
  }

  initEventListener(): void {}
  setProperties(): void {}
  renderHtml(): string {
    return ''
  }
  renderStyle(): string {
    return ''
  }
}

export default FlashComponent
