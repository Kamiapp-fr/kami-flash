import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import KamiComponent from 'kami-component';
import IPosition from './interfaces/IPosition';
/**
 * Create a simple flash message
 * @class KamiFlash
 * @extends KamiComponent
 */
declare class KamiFlash extends KamiComponent {
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static readonly tag: any;
    /**
     * @static
     * @property {number} initialPosition - the initial position of flash
     */
    static initialPosition: number;
    /**
     * @static
     * @property {number} ofsetPosition - the ofset to add at the flash position if is stack
     */
    static ofsetPosition: number;
    /**
     * @static
     * @property {IPosition} stacked - all the current stack position for each flash
     */
    static stacked: IPosition;
    /**
     * @static
     * @property {IPosition} stackedFlash - all stacked flash.
     */
    static stackedFlash: IPosition;
    /**
     * @property {Boolean} inLoad - return true if the component is in load
     */
    private inLoad;
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
    /**
     * @property {number} index - index of the flash
     */
    index: number;
    /**
     * @property {number} stackedPosition - store the stacked position of the flash
     */
    stackedPosition: number;
    /**
     * @property {HTMLElement | null} close - the close btn
     */
    private readonly closeBtn;
    /**
     * @property {HTMLElement | null} flash - the dom structure
     */
    private readonly flash;
    /**
     * @property {HTMLElement} dom - the flash dom
     */
    readonly dom: HTMLElement;
    /**
     * @property {String} position - get the position attribute
     */
    readonly position: string;
    static readonly observedAttributes: string[];
    constructor();
    setProperties(): void;
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    connectedCallback(): void;
    /**
     * Close the flash instance.
     * @returns {Promise<KamiFlash>} the flash instance close
     */
    close(): Promise<KamiFlash>;
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
    static createFlash(tagName: string | undefined, type: string, message: string, position: string, stack?: boolean, time?: null | string): void;
    /**
     * Close all flashs instance.
     * @returns {void}
     */
    static closeAll(): void;
}
export default KamiFlash;
