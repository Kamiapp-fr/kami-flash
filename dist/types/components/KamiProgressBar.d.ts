import KamiComponent from 'kami-component';
declare class KamiProgressBar extends KamiComponent {
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static readonly tag: any;
    constructor();
    setProperties(): void;
    renderHtml(): string;
    renderStyle(): string;
}
export default KamiProgressBar;
