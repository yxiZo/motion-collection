"use client";
import MotionLayout from "@/components/Layout/MotionLayout";

export default function RouterMotion() {

    return <MotionLayout>
        <h1 className={"text-2xl mb-2"}>home</h1>
        <div className={"flex"}>
            <p className={"mr-10"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aspernatur deleniti, distinctio ducimus eaque error esse, est excepturi fuga incidunt obcaecati perferendis placeat quas quidem reiciendis temporibus velit veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam corporis delectus dolore, eius et fugit impedit inventore laborum libero nobis perferendis provident quod recusandae, reiciendis repudiandae temporibus velit veniam!</p>
        </div>
    </MotionLayout>
}