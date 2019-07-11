/**
 * All position defined in the component
 * @interface IPosition
 */
interface IPosition {
    BOTTOM: number;
    BOTTOMLEFT: number;
    BOTTOMRIGHT: number;
    TOP: number;
    TOPLEFT: number;
    TOPRIGHT: number;
    [key: string]: number;
}

export default IPosition;
