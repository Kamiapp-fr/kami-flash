import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import KamiComponent from 'kami-component';
declare class FlashComponent extends KamiComponent {
    constructor();
    initEventListener(): void;
    setProperties(): void;
    renderHtml(): string;
    renderStyle(): string;
}
export default FlashComponent;
