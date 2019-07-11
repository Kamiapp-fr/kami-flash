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
import IPosition from './interfaces/IPosition';

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
     * @static
     * @property {string} tag - the component tag
     */
    static get tag(): string {
        return 'kami-flash';
    }

    /**
     * @static
     * @property {number} initialPosition - the initial position of flash
     */
    static initialPosition: number = 20;

    /**
     * @static
     * @property {number} ofsetPosition - the ofset to add at the flash position if is stack
     */
    static ofsetPosition: number = 50;

    /**
     * @static
     * @property {IPosition} stacked - all the current stack position for each flash
     */
    static stacked: IPosition = {
        BOTTOM: KamiFlash.initialPosition,
        BOTTOMLEFT: KamiFlash.initialPosition,
        BOTTOMRIGHT: KamiFlash.initialPosition,
        TOP: KamiFlash.initialPosition,
        TOPLEFT: KamiFlash.initialPosition,
        TOPRIGHT: KamiFlash.initialPosition
    };

    static stackedFlash: IPosition = {
        BOTTOM: [],
        BOTTOMLEFT: [],
        BOTTOMRIGHT: [],
        TOP: [],
        TOPLEFT: [],
        TOPRIGHT: []
    };

    /**
     * @property {HTMLElement | null} close - the close btn
     */
    private close: HTMLElement;

    /**
     * @property {HTMLElement | null} flash - the dom structure
     */
    private flash: HTMLElement;

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

    public index: number;

    public stackedPosition: number;

    constructor() {
        super();

        //get dom from the component
        this.close = this.wrapper.querySelector('#close') as HTMLElement;
        this.flash = this.wrapper.querySelector('.flash') as HTMLElement;

        this.index = 0;

        this.stackedPosition = 0;

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

    get dom(): HTMLElement {
        return this.flash;
    }

    get position(): string {
        return this.getAttribute('position') || 'BOTTOM';
    }

    static get observedAttributes() {
        return ['type', 'message', 'position', 'stack'];
    }

    public setProperties(): void {
        let type: any = this.getAttribute('type') || 'OK';
        let position: string = this.getAttribute('position') || 'BOTTOM';

        this.props = this.observe({
            position: position,
            type: type,
            message: this.getAttribute('message') || 'Write your message flash here',
            stack: this.toBoolean(this.getAttribute('stack')) || true
        });
    }

    public initEventListener(): void {
        //reinit this property because this method
        //is call before the constructor of this class
        this.flash = this.wrapper.querySelector('.flash') as HTMLElement;
        this.close = this.wrapper.querySelector('#close') as HTMLElement;

        this.close!.addEventListener('click', () => {
            this.flash!.animate(
                this.animations[Position[this.props.position]].out,
                this.animationOptions
            ).onfinish = () => {
                //delete this component.
                this.remove();
                if (this.props.stack) {
                    KamiFlash.stackedFlash[this.position].forEach((flash: this) => {
                        //update other flash only if it sup a the current flash
                        if (flash.index > this.index) {
                            //update the stackedPosition property
                            flash.stackedPosition = flash.stackedPosition - KamiFlash.ofsetPosition;

                            //update the position of all sup stacked flash
                            this.position.substring(0, 6) == 'BOTTOM'
                                ? (flash.dom.style.bottom = `${flash.stackedPosition}px`)
                                : (flash.dom.style.top = `${flash.stackedPosition}px`);
                        }
                    });

                    //descrease the current static property
                    KamiFlash.stacked[this.position] -= KamiFlash.ofsetPosition;
                }
            };
        });
    }

    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    public connectedCallback(): void {
        //update the position if the flash is stacked
        if (this.toBoolean(this.getAttribute('stack'))) {
            //update the flash position
            this.props.stacked = KamiFlash.stacked[this.position];
            this.stackedPosition = KamiFlash.stacked[this.position];
            KamiFlash.stacked[this.position] += KamiFlash.ofsetPosition;

            //set the index of the flash into with the stacked flash length
            this.index = KamiFlash.stackedFlash[this.position].length;

            //push into the stackedFlash property the flash
            KamiFlash.stackedFlash[this.position].push(this);
        } else {
            this.props.stacked = KamiFlash.initialPosition;
        }

        if (this.flash && this.close) {
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
                transition: all 0.5s ease;
                z-index: 100;
                width: fit-content;
            }

            .flash--bottom{
                bottom: ${this.props.stacked}px;
                margin: 0% auto;
                left: 0;
                right: 0;
            }

            .flash--top{
                top: ${this.props.stacked}px;
                margin: 0% auto;
                left: 0;
                right: 0;
            }

            .flash--topleft{
                top: ${this.props.stacked}px;
                left: 20px;
            }

            .flash--topright{
                top: ${this.props.stacked}px;
                right: 20px;
            }

            .flash--bottomleft{
                bottom: ${this.props.stacked}px;
                left: 20px;
            }

            .flash--bottomright{
                bottom: ${this.props.stacked}px;
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
    static createFlash(
        tagName: string = KamiFlash.tag,
        type: string,
        message: string,
        position: string,
        stack: boolean = true
    ) {
        let flash = document.createElement(tagName);
        flash.setAttribute('type', type);
        flash.setAttribute('position', position);
        flash.setAttribute('stack', stack.toString());

        if (message != '') {
            flash.setAttribute('message', message);
        }

        document.body.appendChild(flash);
    }
}

export default KamiFlash;
