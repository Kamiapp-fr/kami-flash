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

        //bottom animation
        this.animations[Position['BOTTOM']] = this.bottomAnimation;
        this.animations[Position['BOTTOMLEFT']] = this.bottomAnimation;
        this.animations[Position['BOTTOMRIGHT']] = this.bottomAnimation;

        //top animation
        this.animations[Position['TOP']] = this.topAnimation;
        this.animations[Position['TOPLEFT']] = this.topAnimation;
        this.animations[Position['TOPRIGHT']] = this.topAnimation;

        //init animation option
        this.animationOptions = {
            duration: 500,
            easing: 'ease'
        };
    }

    static get observedAttributes() {
        return ['type', 'message', 'position'];
    }

    public setProperties(): void {
        let type: any = this.getAttribute('type') || 'OK';
        let position: any = this.getAttribute('position') || 'BOTTOM';

        this.props = this.observe({
            position: position,
            type: type,
            message: this.getAttribute('message') || 'Write your message flash here'
        });
    }

    public initEventListener(): void {
        //reinit this property because this method
        //is call before the constructor of this class
        this.flash = this.wrapper.querySelector('.flash');
        this.close = this.wrapper.querySelector('#close');

        this.close!.addEventListener('click', () => {
            this.flash!.animate(
                this.animations[Position[this.props.position]].out,
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
            console.log(this.props);

            this.flash.animate(
                this.animations[Position[this.props.position]].enter,
                this.animationOptions
            );

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
            <div class="flash ${Position[this.props.position]}">
                <div class="flash__message flash__message--${
                    Type[this.props.type]
                } shadow__bottom--30px">
                    <iron-icon icon="${Icon[this.props.type]}"></iron-icon>
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
                width: fit-content;
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

            .flash--topleft{
                top: 20px;
                left: 20px;
            }

            .flash--topright{
                top: 20px;
                right: 20px;
            }

            .flash--bottomleft{
                bottom: 20px;
                left: 20px;
            }

            .flash--bottomright{
                bottom: 20px;
                right: 20px;
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
                background-color: ${Color.WARNING};
                color: white;
            }

            .flash__message--${Type.INFO}{
                background-color: ${Color.INFO};
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

    /**
     * A static methode to create flash component and append
     * this directly to the body.
     * @param tagName {String} - your KamiFlash tag name
     * @param type {String} - flash type
     * @param message {String} - flash message
     * @param position {String} - flash position
     */
    static createFlash(tagName: string, type: string, message: string, position: string) {
        let flash = document.createElement(tagName);
        flash.setAttribute('type', type);
        flash.setAttribute('position', position);

        if (message != '') {
            flash.setAttribute('message', message);
        }

        document.body.appendChild(flash);
    }
}

export default KamiFlash;
