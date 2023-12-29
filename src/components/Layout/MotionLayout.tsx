import Link from "next/link";
import Inner from "@/components/Layout/Inner";
import Stairs from "@/components/Layout/Stairs";
import Curve from "@/components/Layout/Curve";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useEffect, useState} from "react";
import * as localforage from "localforage";

type MotionType = "Inner" | "Stairs" | "Curve";

const components = {
    Stairs: Stairs,
    Inner: Inner,
    Curve: Curve
};

export default function MotionLayout({children}: { children: React.ReactNode }) {
    const [motionType, setMotionType] = useState<MotionType>("Stairs")
    const Component = components[motionType] ?? Inner;
    useEffect(() => {
        localforage.getItem("motionType_local").then((value: any) => {
            setMotionType(value)
        })
    }, [])
    return (
        <>


            <Component>
                <div className={"mb-8"} key={"111"}>
                    <Select value={motionType} onValueChange={(v: MotionType) => localforage.setItem('motionType_local', v).then(function () {
                        setMotionType(v)
                        return localforage.getItem('key');
                    })}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue  placeholder="choose a motionType"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Inner">Inner</SelectItem>
                            <SelectItem value="Stairs">Stairs</SelectItem>
                            <SelectItem value="Curve">Curve</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="header flex flex-wrap w-full mb-5 ">
                    <Link className={"p-2"} href={"/Motion/RouterMotion"}>Home</Link>
                    <Link className={"p-2"} href={"/Motion/RouterMotion/about"}>About</Link>
                    <Link className={"p-2"} href={"/Motion/RouterMotion/contact"}>Contact</Link>
                </div>
                {children}
            </Component>
        </>

    )
}