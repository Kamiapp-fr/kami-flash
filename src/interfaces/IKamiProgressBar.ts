import Type from '../enum/Type';

/**
 * An interface for the kami progress bar.
 * @interface IKamiProgressBar
 * @property {number} width - width of the progress bar
 * @property {number} time - time to reduce all the progress bar
 * @property {Type} type - type of the flash parent
 */
interface IKamiProgressBar {
    width: number;
    time: number;
    type: Type;
}

export default IKamiProgressBar;
