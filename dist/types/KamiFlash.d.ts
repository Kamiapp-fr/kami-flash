import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import KamiComponent from 'kami-component';
/**
 * Create a simple flash message
 * @class KamiFlash
 * @extends KamiComponent
 */
declare class KamiFlash extends KamiComponent {
    /**
     * @property {HTMLElement | null} close - the close btn
     */
    private close;
    /**
     * @property {HTMLElement | null} flash - the dom structure
     */
    private flash;
    /**
     * @property {IAnimation} bottomAnimation - animations for bottom element
     */
    private bottomAnimation;
    /**
     * @property {IAnimation} topAnimation - animations for top element
     */
    private topAnimation;
    /**
     * @property {any} animations - link animation with a position
     */
    private animations;
    /**
     * @property {KeyframeAnimationOptions} animationOptions - animation options
     */
    private animationOptions;
    constructor();
    static readonly observedAttributes: string[];
    setProperties(): void;
    initEventListener(): void;
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    connectedCallback(): void;
    renderHtml(): string;
    renderStyle(): string;
    /**
     * A static methode to create flash component and append
     * this directly to the body.
     * @param tagName {String} - your KamiFlash tag name
     * @param type {String} - flash type
     * @param message {String} - flash message
     * @param position {String} - flash position
     */
    static createFlash(tagName: string, type: string, message: string, position: string): void;
}
export default KamiFlash;
