import Link from "next/link";
import Inner from "@/components/Layout/Inner";
import {AnimatePresence} from "framer-motion";

export default function MotionLayout({children}: {children: React.ReactNode}) {

    return (

            <Inner>
                <div className="header flex flex-wrap w-full mb-5 ">
                    <Link className={"p-2"} href={"/Motion/RouterMotion"}>Home</Link>
                    <Link className={"p-2"} href={"/Motion/RouterMotion/about"}>About</Link>
                    <Link className={"p-2"} href={"/Motion/RouterMotion/contact"}>Contact</Link>
                </div>
                {children}
            </Inner>


    )
}