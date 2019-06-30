/**
 * An interface for the animation direction.
 * @interface IAnimation
 * @property {Keyframe[]} enter - animation enter
 * @property {Keyframe[]} out - animation out
 */
interface IAnimation {
    enter: Keyframe[];
    out: Keyframe[];
}
export default IAnimation;
