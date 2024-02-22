import Link from "next/link";

interface GalleyItem {
    /**
     * @description 缩略图链接
     */
    thumbnail: string;
    /**
     * @description 标签
     */
    tag: string[];
    description: string;
    link: string;
    title: string;
}

export default function Card(props: {
    to: string,
    config: GalleyItem
}) {
    const { to, config } = props

    return (
        <Link className="xl:w-1/4 md:w-1/2 p-4" href={to}>
            <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6"
                        src={config.thumbnail} alt="content" />
                    <div className="mb-5">
                        {
                            config.tag.map((tag, index) => {
                                return <div key={index} className="badge badge-primary  bg-[#3a7af0] p-4 text-white ">{tag}</div>
                            })
                        }

                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{config.title}</h2>
                    <p className="leading-relaxed text-base">{config.description}</p>
                </div>
            </div>
        </Link>

    )
}