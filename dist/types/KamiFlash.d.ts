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
    private animations;
    private animationOption;
    private bottomAnimation;
    private topAnimation;
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
}
export default KamiFlash;
