import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import KamiComponent from 'kami-component';
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
declare class KamiFlash extends KamiComponent {
    message: any;
    type: any;
    close: HTMLElement | null;
    constructor();
    static readonly observedAttributes: string[];
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    connectedCallback(): void;
    initEventListener(): void;
    /**
     * set properties for the parent class
     */
    setProperties(): void;
    /**
     * Render the html template
     * @returns {String} a html template
     */
    renderHtml(): string;
    /**
     * Render the style for the web component
     * @returns {String} a style sheet
     */
    renderStyle(): string;
}
export default KamiFlash;
