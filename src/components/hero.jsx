import {motion} from "framer-motion";
import React from "react"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: {staggerChildren: 0.1} }
}

/* it's a single page app, so the hero section so when I click the button home, it takes me to the part of the page related to home, href in the navbar.jsx */
export const Hero = () => {
    return (
        <motion.section 
        id="home" 
        className="hero" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="hero-container"> {/* this is the bubble on the top that says "hi, my name is" */}
                <motion.div className="hero-content" 
                variants={staggerContainer} 
                initial="initial"
                animate="animate" >

                    <motion.div className="hero-badge">
                        <span> Hello, I'm  </span>  {/* span so no defined style is attached to this container bubble */}
                    </motion.div>
                    <motion.h1 className="glitch"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}>
                        Juliane Gutierrez

                    </motion.h1>
                    <motion.h2 className="hero-subtitle">
                        
                        Creative Developer
                    </motion.h2>

                    <motion.p className="hero-description"
                    variant={fadeInUp}>
                    ADD A DESCRIPTION OF MYSELF

                    </motion.p>

                    <motion.div className="cta-buttons"
                    variant={staggerContainer}>
                        <motion.a href="#projects" className="cta-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                            View My Work
                        </motion.a>

                        <motion.a href="#contacts" className="cta-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                            Contact Me
                        </motion.a>

                        <motion.a href="#about" className="cta-third"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                            About
                        </motion.a>

                    </motion.div>
                    <motion.div className="social-links"
                    variants={staggerContainer}
                    >
                        <motion.a>
                            
                        </motion.a>

                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};


export default Hero ;
