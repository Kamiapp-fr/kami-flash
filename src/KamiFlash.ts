//polyfill
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

//import lib
import KamiComponent from 'kami-component';
import bottomAnimation from './animations/bottomAnimation';
import topAnimation from './animations/topAnimation';

//import interfaces
import IAnimation from './interfaces/IAnimation';

//import enum
import Type from './enum/Type';
import Color from './enum/Color';
import Icon from './enum/Icon';
import Position from './enum/Position';

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

    /**
     * @property {IAnimation} bottomAnimation - animations for bottom element
     */
    private bottomAnimation: IAnimation;

    /**
     * @property {IAnimation} topAnimation - animations for top element
     */
    private topAnimation: IAnimation;

    /**
     * @property {any} animations - link animation with a position
     */
    private animations: any;

    /**
     * @property {KeyframeAnimationOptions} animationOptions - animation options
     */
    private animationOptions: KeyframeAnimationOptions;

    constructor() {
        super();

        //get dom from the component
        this.close = this.wrapper.querySelector('#close');
        this.flash = this.wrapper.querySelector('.flash');

        //init animation
        this.bottomAnimation = bottomAnimation;
        this.topAnimation = topAnimation;

        //init all animation with the good position
        this.animations = {};
        this.animations[Position['BOTTOM']] = this.bottomAnimation;
        this.animations[Position['TOP']] = this.topAnimation;

        //init animation option
        this.animationOptions = {
            duration: 500,
            easing: 'ease'
        };
    }

    static get observedAttributes() {
        return ['typeprops', 'messageprops'];
    }

    public setProperties(): void {
        let type: any = this.getAttribute('typeProps') || 'OK';
        let position: any = this.getAttribute('positionProps') || 'BOTTOM';

        this.props = this.observe({
            position: Position[position],
            type: Type[type],
            icon: Icon[type],
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
                this.animations[this.props.position].out,
                this.animationOptions
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
            this.flash.animate(this.animations[this.props.position].enter, this.animationOptions);

            setTimeout(() => {
                this.close!.animate(
                    [
                        { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                        { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
                    ] as Keyframe[],
                    this.animationOptions
                ).onfinish = () => {
                    this.close!.style.opacity = '1';
                };
            }, 400);
        }
    }

    public renderHtml(): string {
        return `
            <div class="flash ${this.props.position}">
                <div class="flash__message flash__message--${this.props.type} shadow__bottom--30px">
                    <iron-icon icon="${this.props.icon}"></iron-icon>
                    <div class="flash__text">${this.props.message}</div>
                    <iron-icon class="flash__close" id="close" icon="close"></iron-icon>
                </div>
            </div>
        `;
    }

    public renderStyle(): string {
        return `

            .flash{
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s ease;
                z-index: 100;
            }

            .flash--bottom{
                bottom: 20px;
                margin: 0% auto;
                left: 0;
                right: 0;
            }

            .flash--top{
                top: 20px;
                margin: 0% auto;
                left: 0;
                right: 0;
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
