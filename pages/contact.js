import { MdOutlineLabelImportant } from "react-icons/md";
import PageHeading from "../components/PageHeading";
import { motion } from "framer-motion";
import { contactVariants, fadeContactVariants } from "../animations/contact";

export default function Contact() {
    return (
        <>
            <PageHeading />
            <main className="contact">
                <motion.div
                    className="contact__box"
                    variants={contactVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="contact__box--left">
                        <motion.p
                            className="contact__box-text"
                            variants={fadeContactVariants}
                        >
                            <span>Get in </span>
                            <span>touch</span>
                        </motion.p>
                    </div>
                    <div className="contact__box--right">
                        <motion.p
                            className="contact__box-info"
                            variants={fadeContactVariants}
                        >
                            Let's create an awesome project together.
                        </motion.p>
                        <span>
                            <motion.a
                                href="mailto:hello@yunesunadi.com"
                                className="contact__box-email"
                                variants={fadeContactVariants}
                            >
                                <span>Reach me via email</span>
                                <MdOutlineLabelImportant />
                            </motion.a>
                        </span>
                    </div>
                </motion.div>
            </main>
        </>
    );
}
