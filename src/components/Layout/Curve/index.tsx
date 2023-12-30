import { motion } from 'framer-motion'
import {useEffect, useState} from "react";
import { useRouter } from "next/router"
const anim = (variants: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

const routerObj= {
    ["/Motion/RouterMotion" + ""]: "Home",
    ["/Motion/RouterMotion" + "/contact"]: "Contact",
    ["/Motion/RouterMotion" + "/about"]: "About",
}


const text = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: {
            duration: .75,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3
        },
        transitionEnd: {
            // 设置一个比 40% 低的 top  否则动画的方向会出现问题
            top: "47%"
        }
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: {
            duration: .5,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.4
        },
    }
}
const SVG = ({width, height}: {width: number, height: number}) => {
    const router = useRouter()
    // 这里的 300 是根据设置的 svg 高度来计算的
    // svg 高度比整屏要多出 600px
    const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `
    const curve = {
        initialPath: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            // 同步两段动画
            transition: {
                duration: .75,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3
            }
        },
        exit: {
            d: initialPath
        }
    }
    const slide = {
        initial: {
            top: -300
        },
        enter: {
            top: "-100vh",
            transition: {
                duration: .75,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3
            },
            transitionEnd: {
                // 动画结束后设置高度为 0
                top: "100vh"
            }
        },
        exit: {
            top: -300,
            transition: {
                duration: .75,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3
            },
        }
    }


    return  <>


        <motion.svg {...anim(slide)} className={"w-screen  fixed pointer-events-none top-[-300px] left-0"} style={{height: "calc( 100vh + 600px )"}}>
            <motion.path {...anim(curve)} d={initialPath}></motion.path>
        </motion.svg>
    </>
}
export default function Curve({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    // nextjs ssr 无法直接访问 window
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })
    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize()
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

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


    return <div className={"curve relative h-screen"}>
        <motion.p {...anim(text)} style={{
            transform: "translateX(-50%)"
        }} className={"absolute text-[46px] text-white z-10 left-[50%] top-[40%]  "}>{routerObj[router.route]}</motion.p>
        {/*  防止屏幕出现 flash 现象  */}
        <div  className={`background w-screen h-screen bg-black fixed pointer-events-none top-0 left-0 ${dimensions.width > 0 ? "opacity-0" : ""}`}></div>
        {dimensions.width > 0 && <SVG {...dimensions} />}
        <div className={"p-10"} {...anim(opacity)}>
            {children}
        </div>
    </div>

}