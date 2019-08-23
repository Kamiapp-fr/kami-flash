import KamiComponent from 'kami-component';
import IKamiProgressBar from '../interfaces/IKamiProgressBar';
declare class KamiProgressBar extends KamiComponent {
    color: string;
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static readonly tag: any;
    /**
     * TODO doc and type
     */
    private interval;
    /**
     * TODO doc
     */
    private width;
    readonly deltaWidth: number;
    constructor({ width, time, type }: IKamiProgressBar);
    setProperties(): void;
    start(): void;
    progress(): void;
    renderHtml(): string;
    renderStyle(): string;
}
export default KamiProgressBar;
