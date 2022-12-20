const transition = {
    type: "spring",
    stiffness: 35,
};

const animate = {
    x: 0,
    y: 0,
    opacity: 1,
    transition,
};

export const topLeftVariants = {
    initial: {
        x: -1000,
        y: -1000,
        opacity: 0,
    },
    animate,
};

export const topRightVariants = {
    initial: {
        x: 1000,
        y: -1000,
        opacity: 0,
    },
    animate,
};

export const bottomLeftVariants = {
    initial: {
        x: -1000,
        y: 1000,
        opacity: 0,
    },
    animate,
};

export const bottomRightVariants = {
    initial: {
        x: 1000,
        y: 1000,
        opacity: 0,
    },
    animate,
};
