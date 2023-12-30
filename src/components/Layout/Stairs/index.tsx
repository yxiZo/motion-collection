import { motion } from 'framer-motion'

export default function Inner({ children }: { children: React.ReactNode }) {
    const anim = (variants: any, custom?: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
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

    // 动画从 top 0 的位置往下
    const expand = {
        initial: {
            top: 0
        },
        enter: (i: number) => ({
            top: "100%",
            transition : {
                duration: 0.3,
                delay: i * 0.1
            },
            transitionEnd: {
                // 动画结束后设置高度为 0
                // 为exit 动画做准备 需要 height: 0 top:0
                height: 0,
                top:0
            }
        }),
        exit: (i:number) => ({
            // 结束动画
            height: "100%",
            transition : {
                duration: 0.3,
                delay: i * 0.1
            },
        })
    }
    const nbOfStairs = 5;

    // 过渡过程中 的过度 overlay 对效果的影响很显著
    const overlay= {
        initial: {
            opacity: 0.5
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 0.5
        }
    }
    return <div className={"page stairs bg-black h-screen"}>

        <motion.div {...anim(overlay)} className="overlay fixed w-screen h-screen top-0 bg-black pointer-events-none"></motion.div>
        {/* 这里注意 pointer-events: none 否则点击事件穿透不了 */}
        <div className={"transition-container fixed w-screen h-screen top-0 flex pointer-events-none"}>
            {
                [...Array(nbOfStairs)].map((_, i) => {
                    // 根据传递的下标 可以调整动画从左到右 还是从右到左
                    return <motion.div {...anim(expand, nbOfStairs - i)} key={i} className={"relative bg-black h-full grow"}></motion.div>
                })
            }
        </div>

        <motion.div className={"bg-white h-full"}>
            <motion.div className={"p-10"}>
                {children}
            </motion.div>
        </motion.div>
    </div>

}