import KamiComponent from 'kami-component';
import IKamiProgressBar from '../interfaces/IKamiProgressBar';
import Type from '../enum/Type';
import ColorProgressBar from '../enum/ColorProgressBar';

/**
 * Create a progress bar for the kami flash component.
 * @class KamiProgressBar
 * @extends KamiComponent
 */
class KamiProgressBar extends KamiComponent {
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static get tag(): any {
        return 'kami-progressbar';
    }

    /**
     * @property {string} color - progress bar color
     */
    private color: string;

    /**
     * @property {number} interval - setInterval id
     */
    private interval: number | undefined;

    /**
     * @property {number} width - progress bar width
     */
    private width: number;

    /**
     * Delta width by the current time.
     * @type {number}
     */
    get deltaWidth() {
        return (this.width / this.props.time) * 10;
    }

    constructor({ width, time, type }: IKamiProgressBar) {
        super();
        this.width = width;
        this.props.width = width;
        this.props.time = time;
        this.props.type = type;
        this.color = ColorProgressBar[this.props.type];
    }

    setProperties(): void {
        this.props = this.observe({
            width: 0,
            time: 0,
            type: Type.INFO
        } as IKamiProgressBar);
    }

    /**
     * Start the progress bar reduce.
     * @returns {void}
     */
    start(): void {
        this.interval = window.setInterval(this.progress.bind(this), 10);
    }

    /**
     * Reduce the progress bar with the current delta width.
     * @returns {void}
     */
    progress(): void {
        this.props.width <= 0
            ? clearInterval(this.interval)
            : (this.props.width = this.props.width - this.deltaWidth);
    }

    renderHtml(): string {
        return `
            <div class="progressbar">
            </div>
        `;
    }

    renderStyle(): string {
        return `
            .progressbar{
                position: absolute;
                width: ${this.props.width}px;
                height: 5px;
                background-color: ${this.color};
                bottom: 0;
                left: 0;
                border-radius: .2857rem;
            }
        `;
    }
}

export default KamiProgressBar;
