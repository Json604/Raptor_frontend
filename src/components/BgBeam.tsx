import './components.css'
import {motion} from 'motion/react'

function BgBeam() {
    return(
        <>
        <motion.div
        className="beam left-beam"
        initial={{ x: -1000, y: -1000, opacity: 0, rotate: -45 }}
        animate={{ x: 0, y: 0, opacity: 0.8, rotate: -25 }}
        transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            duration: 3
        }}
        />
        <motion.div
        className="beam right-beam"
        initial={{ x: 1000, y: -1000, opacity: 0, rotate: 45 }}
        animate={{ x: 0, y: 0, opacity: 0.8, rotate: 25 }}
        transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            duration: 3
        }}
        />
        </>
    )
}

export default BgBeam