import KamiComponent from 'kami-component';

class KamiProgressBar extends KamiComponent {
    /**
     * @static
     * @property {string} tag - the component tag
     */
    static get tag(): any {
        return 'kami-progressbar';
    }

    constructor() {
        super();
    }

    setProperties() {
        this.props = this.observe({});
    }

    renderHtml() {
        return `
            <div class="progressbar">
            </div>
        `;
    }

    renderStyle() {
        return `

        `;
    }
}

export default KamiProgressBar;
