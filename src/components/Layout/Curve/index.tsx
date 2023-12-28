import { motion } from 'framer-motion'

export default function Curve({ children }: { children: React.ReactNode }) {
    const anim = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }
    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition : {
                duration: 2
            }
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: "100vh",
        },
        enter: {
            top: "100vh",
        },
        exit: {
            top: "0",
            transition: {
                duration: 1,
                ease: [0.87, 0, 0.13, 1]
            }
        }
    }
    const perspective = {
        initial: {
            scale: 1,
            y: 0
        },
        enter: {
            scale: 1,
            y: 0
        },
        exit: {
            scale: 0.9,
            y: -100,
            opacity:0.5,
            transition: {
                duration: 1.2,
                ease: [0.87, 0, 0.13, 1]
            }
        }
    }
    return <div className={"inner bg-black h-screen"}>
        <motion.div {...anim(slide)} className="fixed w-screen h-screen bg-white top-0 left-0 z-10"  />
        <motion.div className={"page bg-white h-full"} {...anim(perspective)}>
            <motion.div className={"p-10"} {...anim(opacity)}>
                {children}
            </motion.div>
        </motion.div>
    </div>

}