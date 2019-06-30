import IAniamtion from '../interfaces/IAnimation';

const topAnimation = <IAniamtion>{
    enter: [
        { opacity: '0', transform: 'translateY(-20px)' },
        { opacity: '1', transform: 'translateY(0px)' }
    ] as Keyframe[],
    out: [
        { opacity: '1', transform: 'translateY(0px)' },
        { opacity: '0', transform: 'translateY(-30px)' }
    ] as Keyframe[]
};

export default topAnimation;
