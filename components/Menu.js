import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Menu({ handleClick }) {
    const { pathname } = useRouter();
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
    return (
        <nav className="nav">
            <ul className="nav__list">
                {menuItems.map(({ id, name, url }) => (
                    <motion.li
                        key={id}
                        className="nav__item"
                        whileHover={{
                            scale: 1.2,
                            originX: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                        }}
                    >
                        <Link
                            href={url}
                            className={
                                pathname === url
                                    ? "active nav__link"
                                    : "nav__link"
                            }
                            onClick={handleClick}
                        >
                            <motion.span>{name}</motion.span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
}
