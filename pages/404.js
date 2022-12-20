import Link from "next/link";
import PageHeading from "../components/PageHeading";
import { motion } from "framer-motion";
import { fadeVariants } from "../animations/fade";

export default function NotFound() {
    return (
        <>
            <PageHeading />
            <motion.main
                className="not-found"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
            >
                <h2 className="not-found__title">404 | Page Not Found</h2>
                <span>
                    <Link href="/" className="not-found__link">
                        Go to Home
                    </Link>
                </span>
            </motion.main>
        </>
    );
}
