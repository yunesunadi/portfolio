import PageHeading from "../components/PageHeading";
import { skillsVariants, fadeSkillVariants } from "../animations/skills";
import { motion } from "framer-motion";

const SkillHexagon = ({ name }) => (
    <div className="skill-hexagon">
        <motion.div
            variants={fadeSkillVariants}
            initial="initial"
            animate="animate"
        >
            {name && (
                <>
                    <div className="skill-hexagon--middle"></div>
                    <div className="skill-hexagon--front"></div>
                </>
            )}
        </motion.div>
        <motion.p
            className="skill-hexagon__name"
            variants={fadeSkillVariants}
            initial="initial"
            animate="animate"
        >
            {name}
        </motion.p>
    </div>
);

export default function Skills() {
    return (
        <>
            <PageHeading />
            <main className="skills">
                <motion.div
                    variants={skillsVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="skills__hexagons d-block-sm">
                        <div className="skills__hexagons-row">
                            <div className="skills__hexagons-col">
                                <SkillHexagon />
                                <SkillHexagon name="HTML" />
                                <SkillHexagon name="Gulp.js" />
                                <SkillHexagon name="Next.js" />
                            </div>
                            <div className="skills__hexagons-col skills__hexagons-col--middle">
                                <SkillHexagon name="CSS" />
                                <SkillHexagon name="JavaScript" />
                                <SkillHexagon name="React" />
                            </div>
                            <div className="skills__hexagons-col">
                                <SkillHexagon />
                                <SkillHexagon name="Sass" />
                                <SkillHexagon name="Material UI" />
                                <SkillHexagon name="Framer Motion" />
                            </div>
                        </div>
                    </div>
                    <div className="skills__hexagons d-block-md">
                        <div className="skills__hexagons-row">
                            <div className="skills__hexagons-col">
                                <SkillHexagon />
                                <SkillHexagon name="HTML" />
                                <SkillHexagon />
                            </div>
                            <div className="skills__hexagons-col skills__hexagons-col--middle">
                                <SkillHexagon name="CSS" />
                                <SkillHexagon name="Sass" />
                            </div>
                            <div className="skills__hexagons-col">
                                <SkillHexagon name="Material UI" />
                                <SkillHexagon name="JavaScript" />
                                <SkillHexagon name="Gulp.js" />
                            </div>
                            <div className="skills__hexagons-col skills__hexagons-col--middle">
                                <SkillHexagon name="React" />
                                <SkillHexagon name="Next.js" />
                            </div>
                            <div className="skills__hexagons-col">
                                <SkillHexagon />
                                <SkillHexagon name="Framer Motion" />
                                <SkillHexagon />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </>
    );
}
