import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';
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
