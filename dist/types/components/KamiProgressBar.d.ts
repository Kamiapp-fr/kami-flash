import KamiComponent from 'kami-component';
import IKamiProgressBar from '../interfaces/IKamiProgressBar';
/**
 * Create a progress bar for the kami flash component.
 * @class KamiProgressBar
 * @extends KamiComponent
 */
declare class KamiProgressBar extends KamiComponent {
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static readonly tag: any;
    /**
     * @property {string} color - progress bar color
     */
    private color;
    /**
     * @property {number} interval - setInterval id
     */
    private interval;
    /**
     * @property {number} width - progress bar width
     */
    private width;
    /**
     * Delta width by the current time.
     * @type {number}
     */
    readonly deltaWidth: number;
    constructor({ width, time, type }: IKamiProgressBar);
    setProperties(): void;
    /**
     * Start the progress bar reduce.
     * @returns {void}
     */
    start(): void;
    /**
     * Reduce the progress bar with the current delta width.
     * @returns {void}
     */
    progress(): void;
    renderHtml(): string;
    renderStyle(): string;
}
export default KamiProgressBar;
