import { useRef } from "react"
const Upload = () => {
    const uploadref = useRef(null)
    async function formData() {
        const data = new FormData();
        // @ts-ignore
        data.set('avatar', uploadref?.current?.files?.[0]);

        const res = await fetch('http://localhost:3000/api/upload', {
            method: "POST",
            mode: "cors",
            body: data
        });
        console.log(res);
    }
    return <div className="container  min-h-screen px-5 py-24 mx-auto">
        

        <label className="block font-[1rem]" htmlFor="avatar">Choose a profile picture:</label>

        <input  ref={uploadref} onChange={formData} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

    </div>
}
export default Upload