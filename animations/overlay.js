const overlayTransitionEnter = {
    delay: 0.3,
    duration: 0.3,
    ease: "easeIn",
};

const colorOverlayTransitionEnter = {
    duration: 0.3,
    ease: "easeIn",
};

const overlayTransitionExit = {
    duration: 0.3,
    ease: "easeIn",
};

const colorOverlayTransitionExit = {
    delay: 0.3,
    duration: 0.3,
    ease: "easeIn",
};

export const overlayVariants = {
    initial: {
        x: "100vw",
    },
    animate: {
        x: 0,
        transition: overlayTransitionEnter,
    },
    exit: {
        x: "100vw",
        transition: overlayTransitionExit,
    },
};

export const colorOverlayVariants = {
    initial: {
        x: "100vw",
    },
    animate: {
        x: 0,
        transition: colorOverlayTransitionEnter,
    },
    exit: {
        x: "100vw",
        transition: colorOverlayTransitionExit,
    },
};

const squareTransition = {
    type: "spring",
    stiffness: 35,
};

const animate = {
    x: 0,
    y: 0,
    opacity: 1,
    transition: squareTransition,
};

export const overlayTopLeftVariants = {
    initial: {
        x: -1000,
        y: -1000,
        opacity: 0,
    },
    animate,
};

export const overlayTopRightVariants = {
    initial: {
        x: 1000,
        y: -1000,
        opacity: 0,
    },
    animate,
};

export const overlayBottomLeftVariants = {
    initial: {
        x: -1000,
        y: 1000,
        opacity: 0,
    },
    animate,
};

export const overlayBottomRightVariants = {
    initial: {
        x: 1000,
        y: 1000,
        opacity: 0,
    },
    animate,
};

const fadeTransition = {
    delay: 0.7,
    duration: 0.5,
};

export const overlayFadeVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: fadeTransition,
    },
};
