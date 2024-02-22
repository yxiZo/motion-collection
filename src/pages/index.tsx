import Image from 'next/image'
import Card from "@/components/Card";
import HomeConfig from "../../public/home.json"


export default function Home() {
  return (
        <div className="container  min-h-screen px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">前端效果展示</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">这里主要是一些前端效果作品</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {
              HomeConfig.galley.map((item, index) => (
                  <Card key={index} config={item} to={item?.link ?? "/"}/>
              ))
            }
          </div>
        </div>

  )
}
