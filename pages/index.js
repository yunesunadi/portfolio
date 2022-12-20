import PageHeading from "../components/PageHeading";
import {
    homeVariants,
    introVariants,
    profileVariants,
} from "../animations/home";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <PageHeading />
            <motion.main
                className="home"
                variants={homeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.div className="home__left" variants={introVariants}>
                    <p className="home__intro home--secondary">Hi, I'm</p>
                    <h1 className="home__name home--primary">Yune Su Nadi</h1>
                    <h2 className="home__position home--primary">
                        Frontend Developer
                    </h2>
                    <p className="home__intro home--secondary">
                        and I love creating new things in detail with a strong
                        passion and persistence. I am constantly learning to
                        sharpen up my skills so that I can help people bring
                        their ideas to life.
                    </p>
                </motion.div>
                <div className="home__right">
                    <motion.figure
                        className="home__profile"
                        variants={profileVariants}
                    >
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="home__profile-img"
                        />
                    </motion.figure>
                </div>
            </motion.main>
        </>
    );
}
