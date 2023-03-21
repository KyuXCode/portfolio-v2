import { useEffect, useState } from 'react';
import { navLinks } from '../../Data';
import { socialIcons } from '../../Data';
import "./Navbar.scss"
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Navbar(props) {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    const hamburgerMenu = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
    }
    const navlinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -33,
            transition: {
                delay: 0.08
            }
        }
    }



    return (
        <motion.div
            initial={{ y: -25 }}
            animate={{ y: -5 }}
            transition={{ duration: 0.5 }}
            className={scroll ? "header active" : "header"}>

            <div className="nav-box">
                <a href='home' className="logo">
                    <h3>KY</h3>
                </a>

                <ul className="navlinks">
                    {navLinks.map((navLink, index) => {
                        return (
                            <li key={index}>
                                <a href={`${navLink}`}>{navLink}</a>
                            </li>)
                    })}
                </ul>

                <div className="social-icons">
                    {socialIcons.map((socialIcon, index) => {
                        return (
                            <div key={index}>
                                {socialIcon}
                            </div>
                        )
                    })}
                </div>

                <div className="hamburger">
                    <HiMenuAlt4 onClick={() => { setToggle(true) }} />
                </div>

                <motion.div className="closeHamburger"
                    variants={hamburgerMenu}
                    initial='hidden'
                    animate={toggle ? 'visible' : 'hidden'}
                ></motion.div>

                <motion.div className="menuX"
                    variants={navlinkVariants}
                    animate={toggle ? 'visible' : 'hidden'}
                >
                  <HiX onClick={() => setToggle(false)}/>

                    {navLinks.map((navLink, index) => {
                        return (
                            <li key={index}>
                                <a href={`${navLink}`}>{navLink}</a>
                            </li>
                        )
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Navbar;