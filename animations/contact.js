import exitPageFade from "./pageFade";

const transition = {
    type: "spring",
    stiffness: 50,
    delay: 1,
    duration: 0.5,
};

const animate = {
    x: 0,
    opacity: 1,
    transition,
};

export const contactVariants = {
    initial: {
        x: "-100vw",
        opacity: 0,
    },
    animate,
    exit: {
        ...exitPageFade,
    },
};

const fadeContactTransition = {
    delay: 1.5,
    duration: 0.5,
};

export const fadeContactVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: fadeContactTransition,
    },
};
