import type { FC } from "react";
import { Link } from "react-router-dom";

interface IBlogCardProps {
    id : number,
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
                    <Link className="text-blue-300 text-sm py-2" to={`/blog/${props.id}`}>Read more -&gt;</Link>

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