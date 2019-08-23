import KamiComponent from 'kami-component';
import IKamiProgressBar from '../interfaces/IKamiProgressBar';

class KamiProgressBar extends KamiComponent {
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

    constructor({ width, time }: IKamiProgressBar) {
        super();
        this.width = width;
        this.props.width = width;
        this.props.time = time;
    }

    setProperties() {
        this.props = this.observe({
            width: 0,
            time: 0
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
                background-color: red;
                bottom: 0;
                left: 0;
            }
        `;
    }
}

export default KamiProgressBar;
