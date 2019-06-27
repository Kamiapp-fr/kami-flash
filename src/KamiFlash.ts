// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import KamiComponent from 'kami-component';
import Type from './enum/Type';
import Color from './enum/Color';

/**
 * Create a simple flash message
 * @class KamiFlash
 * @extends KamiComponent
 */
class KamiFlash extends KamiComponent {
    /**
     * @property {HTMLElement | null} close - the close btn
     */
    private close: HTMLElement | null;

    /**
     * @property {HTMLElement | null} flash - the dom structure
     */
    private flash: HTMLElement | null;

    constructor() {
        super();

        this.close = this.wrapper.querySelector('#close');
        this.flash = this.wrapper.querySelector('.flash');
    }

    static get observedAttributes() {
        return ['typeprops', 'messageprops'];
    }

    public setProperties(): void {
        let type: any = this.getAttribute('typeProps') || 'OK';

        this.props = this.observe({
            type: Type[type],
            message: this.getAttribute('messageProps') || 'Write your message flash here'
        });
    }

    public initEventListener(): void {
        //reinit this property because this method
        //is call before the constructor of this class
        this.flash = this.wrapper.querySelector('.flash');
        this.close = this.wrapper.querySelector('#close');

        this.close!.addEventListener('click', () => {
            this.flash!.animate(
                [
                    { opacity: '1', transform: 'translateY(0px)' },
                    { opacity: '0', transform: 'translateY(30px)' }
                ],
                {
                    duration: 500,
                    easing: 'ease'
                }
            ).onfinish = () => {
                //delete this component.
                this.remove();
            };
        });
    }

    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    public connectedCallback(): void {
        if (this.flash && this.close) {
            this.flash.animate(
                [
                    { opacity: '0', transform: 'translateY(20px)' },
                    { opacity: '1', transform: 'translateY(0px)' }
                ],
                {
                    duration: 500,
                    easing: 'ease'
                }
            );

            setTimeout(() => {
                this.close!.animate(
                    [
                        { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                        { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
                    ],
                    {
                        duration: 500,
                        easing: 'ease'
                    }
                ).onfinish = () => {
                    this.close!.style.opacity = '1';
                };
            }, 400);
        }
    }

    public renderHtml(): string {
        return `
            <div class="flash">
                <div class="flash__message flash__message--${this.props.type} shadow__bottom--30px">
                <div class="flash__text">${this.props.message}</div>
                    <div id="close" class="flash__close">❌</div>
                </div>
            </div>
            `;
    }

    public renderStyle(): string {
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
                opacity: 0;
            }

            .flash__close:hover{
                transition : all 0.5s ease;
            }
        `;
    }
}

export default KamiFlash;
