import KamiComponent from 'kami-component';
import IKamiProgressBar from '../interfaces/IKamiProgressBar';
import Type from '../enum/Type';
import ColorProgressBar from '../enum/ColorProgressBar';

class KamiProgressBar extends KamiComponent {
    color: string;
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static get tag(): any {
        return 'kami-progressbar';
    }

    /**
     * TODO doc and type
     */
    private interval: any;

    /**
     * TODO doc
     */
    private width: number;

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

    setProperties() {
        this.props = this.observe({
            width: 0,
            time: 0,
            type: Type.INFO
        } as IKamiProgressBar);
    }

    start() {
        this.interval = setInterval(this.progress.bind(this), 10);
    }

    progress() {
        if (this.props.width <= 0) {
            clearInterval(this.interval);
        } else {
            this.props.width = this.props.width - this.deltaWidth;
        }
    }

    renderHtml() {
        return `
            <div class="progressbar">
            </div>
        `;
    }

    renderStyle() {
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
