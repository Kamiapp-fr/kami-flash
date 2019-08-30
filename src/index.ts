// polyfill
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';

import KamiFlash from './components/KamiFlash';
import KamiProgressBar from './components/KamiProgressBar';

// define the iron-icon component if is not already define
if (!customElements.get('iron-icon')) {
    import('@polymer/iron-icons').catch(error => console.error(error));
    import('@polymer/iron-icon').catch(error => console.error(error));
}

// define the search if is not already define
if (!customElements.get(KamiProgressBar.tag)) {
    customElements.define(KamiProgressBar.tag, KamiProgressBar);
}

export default KamiFlash;
