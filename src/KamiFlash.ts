// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import '@webcomponents/webcomponentsjs/webcomponents-bundle'
import KamiComponent from 'kami-component'

enum Type {
  OK = 'OK',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

enum Color {
  OK = '#00bf9a',
  ERROR = 'red',
  WARNING = 'orange'
}

/**
 * Create a simple flash message
 * @class Flash
 * @extends Component
 * @example <caption>index.js</caption>
 * import Flash from "./Components/Flash";
 * window.customElements.define('flash-element', Flash);
 *
 * @example  <caption>html</caption>
 * <flash-element typeProps="OK" messageProps="a good message"></flash-element>
 * <flash-element typeProps="WARNING" messageProps="a warning message"></flash-element>
 * <flash-element typeProps="ERROR" messageProps="a error message"></flash-element>
 */
class KamiFlash extends KamiComponent {
  message: any
  type: any
  close: HTMLElement | null

  constructor() {
    super()

    this.close = null
  }

  static get observedAttributes() {
    return ['typeprops', 'messageprops']
  }

  /**
   * This method is call when the compenent it create.
   * Here it use to add an enter animation
   */
  connectedCallback() {
    let flash = this.wrapper.querySelector('.flash')
    let icon: HTMLElement | null = this.wrapper.querySelector('.flash__close')

    if (flash && icon) {
      icon.style.opacity = '0'

      flash.animate(
        [
          { opacity: '0', transform: 'translateY(20px)' },
          { opacity: '1', transform: 'translateY(0px)' }
        ],
        {
          duration: 500,
          easing: 'ease'
        }
      )

      setTimeout(() => {
        icon!.animate(
          [
            { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
            { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
          ],
          {
            duration: 500,
            easing: 'ease'
          }
        ).onfinish = () => {
          icon!.style.opacity = '1'
        }
      }, 400)
    }
  }

  initEventListener(): void {
    this.close = this.wrapper.querySelector('#close')
    this.close!.addEventListener('click', () => {
      console.log('ok')
    })
  }

  /**
   * set properties for the parent class
   */
  setProperties() {
    let type: any = this.getAttribute('typeProps') || 'OK'

    this.props = this.observe({
      type: Type[type],
      message: this.getAttribute('messageProps') || 'Ecrivez votre message flash'
    })
  }

  /**
   * Render the html template
   * @returns {String} a html template
   */
  renderHtml() {
    return `
            <div class="flash">
                <div class="flash__message flash__message--${this.props.type} shadow__bottom--30px">
                    <div class="flash__text">${this.props.message}</div>
                    <div id="close" class="flash__close">❌</div>
                </div>
            </div>
        `
  }

  /**
   * Render the style for the web component
   * @returns {String} a style sheet
   */
  renderStyle() {
    return `

            .flash{
                position: fixed;
                bottom: 20px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s ease;
                z-index: 100;
            }

            .flash__message{
                padding: 10px;
                border-radius: .2857rem;
                align-items: center;
                justify-content: space-around;
                display: flex;
            }

            .flash__text{
                padding-right: 10px;
                padding-left: 10px;
                font-family: sans-serif;
            }

            .flash__message--${Type.ERROR}{
                background-color: ${Color.ERROR};
                color: white;
            }

            .flash__message--${Type.OK}{
                background-color: ${Color.OK};
                color: white;
            }

            .flash__message--${Type.WARNING}{
                background-color: ${Type.WARNING};
                color: white;
            }

            .flash__close{
                cursor: pointer;
                transition : all 0.5s ease;
            }

            .flash__close:hover{
                transition : all 0.5s ease;
            }
        `
  }
}

export default KamiFlash
