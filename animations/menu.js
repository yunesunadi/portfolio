export const menuListVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

export const menuItemVariants = {
    initial: {
        x: 30,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 150,
        },
    },
};
