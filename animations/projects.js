import exitPageFade from "./pageFade";

const transition = {
    duration: 0.5,
};

export const projectsVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1.2,
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    exit: {
        ...exitPageFade,
    },
};

export const projectCardVariants = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition,
    },
};
