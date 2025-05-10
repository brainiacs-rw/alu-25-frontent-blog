import type { FC } from "react";

interface IBlogCardProps {
    image: string,
    title: string,
    description: string,
    author: string,
    postedAt: Date
}

const BlogCard: FC<IBlogCardProps> = (props) => {
    return (
        <div className="py-4 border-b border-b-slate-100 px-5">
            {/* <img src={props.image} />
            <div>
                <div> */}
                    <h4> {props.title} </h4>
                    {/* <p> {props.description} </p>
                    <div>
                        <div>
                            <img src=""></img>
                            <span> {props.author}</span>
                        </div>
                        <span> POsted at{props.postedAt.toLocaleDateString()}</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default BlogCard