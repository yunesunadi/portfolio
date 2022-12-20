import exitPageFade from "./pageFade";

const transition = {
    type: "spring",
    stiffness: 50,
    delay: 1,
    duration: 0.7,
};

const animate = {
    x: 0,
    opacity: 1,
    transition,
};

export const homeVariants = {
    exit: {
        ...exitPageFade,
    },
};

export const introVariants = {
    initial: {
        x: "-100vw",
        opacity: 0,
    },
    animate,
};

export const profileVariants = {
    initial: {
        x: "100vw",
        opacity: 0,
    },
    animate,
};
