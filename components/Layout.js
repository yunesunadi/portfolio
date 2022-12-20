import {
    topLeftVariants,
    topRightVariants,
    bottomLeftVariants,
    bottomRightVariants,
} from "../animations/squareCorner";
import { fadeVariants } from "../animations/fade";
import { menuListVariants, menuItemVariants } from "../animations/menu";
import {
    overlayVariants,
    colorOverlayVariants,
    overlayTopLeftVariants,
    overlayTopRightVariants,
    overlayBottomLeftVariants,
    overlayBottomRightVariants,
    overlayFadeVariants,
} from "../animations/overlay";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
    {
        id: 0,
        name: "Home",
        url: "/",
    },
    {
        id: 1,
        name: "Projects",
        url: "/projects",
    },
    {
        id: 2,
        name: "Skills",
        url: "/skills",
    },
    {
        id: 3,
        name: "Contact",
        url: "/contact",
    },
];

const SquareCorner = ({ tl, tr, bl, br }) => (
    <motion.div className="square-corner" initial="initial" animate="animate">
        <motion.div
            variants={tl}
            className="square-corner--top square-corner--top-left"
        ></motion.div>
        <motion.div
            variants={tr}
            className="square-corner--top square-corner--top-right"
        ></motion.div>
        <motion.div
            variants={bl}
            className="square-corner--bottom square-corner--bottom-left"
        ></motion.div>
        <motion.div
            className="square-corner--bottom square-corner--bottom-right"
            variants={br}
        ></motion.div>
    </motion.div>
);

const Logo = () => (
    <header className="header">
        <Link href="/" className="header__logo">
            <motion.div
                variants={fadeVariants}
                initial="initial"
                animate="animate"
            >
                <Image src="/logo.svg" alt="Logo" fill />
            </motion.div>
        </Link>
    </header>
);

const Heading = ({ title, subTitle }) => (
    <motion.header
        className="header"
        variants={fadeVariants}
        initial="initial"
        animate="animate"
    >
        <div className="title-hexagon-container">
            <div className="title-hexagon">
                <div className="title-hexagon--front"></div>
                <div className="title-hexagon--middle"></div>
                <div className="title-hexagon--back"></div>
            </div>
            <div className="header__info">
                <h1 className="header__title">{title}</h1>
                <p className="header__sub-title">[{subTitle}]</p>
            </div>
        </div>
    </motion.header>
);

const MenuBtn = ({ handleClick }) => (
    <motion.div
        className="menu"
        variants={fadeVariants}
        initial="initial"
        animate="animate"
    >
        <div className="menu__btn" onClick={handleClick}>
            <div className="menu__btn--front"></div>
            <div className="menu__btn--middle"></div>
            <div className="menu__btn--back"></div>
            <div>
                <div className="menu-bar-one"></div>
                <div className="menu-bar-two"></div>
                <div className="menu-bar-three"></div>
            </div>
        </div>
    </motion.div>
);

const Footer = () => (
    <motion.footer className="footer" initial="initial" animate="animate">
        <motion.small className="footer__copyright" variants={fadeVariants}>
            {new Date().getFullYear()} &copy; {"Yune Su Nadi. "}
            <span className="footer__text">All Rights Reserved.</span>
        </motion.small>
        <motion.div className="footer__social" variants={fadeVariants}>
            <a
                href="https://github.com/yunesunadi"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
            >
                <AiOutlineGithub />
                <span className="footer__social-text">Github</span>
            </a>
            <a
                href="https://www.linkedin.com/in/yunesunadi/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
            >
                <AiOutlineLinkedin />
                <span className="footer__social-text">Linkedin</span>
            </a>
            <a
                href="mailto:hello@yunesunadi.com"
                className="footer__social-link"
            >
                <AiOutlineMail />
                <span className="footer__social-text">Email</span>
            </a>
        </motion.div>
    </motion.footer>
);

const CloseBtn = ({ handleClick }) => (
    <motion.div
        className="menu"
        variants={overlayFadeVariants}
        initial="initial"
        animate="animate"
    >
        <div className="menu__btn" onClick={handleClick}>
            <div className="menu__btn--front"></div>
            <div className="menu__btn--middle"></div>
            <div className="menu__btn--back"></div>
            <div>
                <div className="menu-bar-one menu-bar-one--close"></div>
                <div className="menu-bar-two menu-bar-two--close"></div>
            </div>
        </div>
    </motion.div>
);

const Menu = ({ handleClick, pathname }) => (
    <nav className="nav">
        <motion.ul
            className="nav__list"
            variants={menuListVariants}
            initial="initial"
            animate="animate"
        >
            {menuItems.map(({ id, name, url }) => (
                <motion.li
                    key={id}
                    className="nav__item"
                    variants={menuItemVariants}
                    whileHover={{
                        scale: 1.15,
                        originX: 0,
                        transition: {
                            duration: 0.15,
                        },
                    }}
                >
                    <Link
                        href={url}
                        className={
                            pathname === url ? "active nav__link" : "nav__link"
                        }
                        onClick={handleClick}
                    >
                        <motion.span>{name}</motion.span>
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    </nav>
);

export default function Layout({ children }) {
    const { pathname } = useRouter();
    let heading;

    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown((prevState) => !prevState);
        localStorage.setItem("isShown", JSON.stringify(isShown));
    }

    if (pathname === "/projects") {
        heading = <Heading title="Projects" subTitle="What I've created" />;
    } else if (pathname === "/skills") {
        heading = <Heading title="Skills" subTitle="What I can do" />;
    } else if (pathname === "/contact") {
        heading = <Heading title="Contact" subTitle="How you can reach me" />;
    } else {
        heading = <Logo />;
    }

    return (
        <>
            <SquareCorner
                tl={topLeftVariants}
                tr={topRightVariants}
                bl={bottomLeftVariants}
                br={bottomRightVariants}
            />
            {heading}
            <MenuBtn handleClick={handleClick} />
            {children}
            <Footer />
            <AnimatePresence>
                {isShown && (
                    <>
                        <motion.div
                            className="color-overlay"
                            variants={colorOverlayVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        ></motion.div>
                        <motion.div
                            className="overlay"
                            variants={overlayVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <SquareCorner
                                tl={overlayTopLeftVariants}
                                tr={overlayTopRightVariants}
                                bl={overlayBottomLeftVariants}
                                br={overlayBottomRightVariants}
                            />
                            <CloseBtn handleClick={handleClick} />
                            <Menu
                                handleClick={handleClick}
                                pathname={pathname}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
