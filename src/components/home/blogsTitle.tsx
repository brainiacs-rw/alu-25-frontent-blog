import type { FC } from "react";
import BlueButton from "../common/blue-button";

const BlogsTitle: FC = () => {
    return (
        <div className="px-5 py-10 flex justify-between">
            <span className="text-3xl font-bold">Read our blogs</span>
            <div className="space-x-2">

            <BlueButton title="Add blog" />
            <BlueButton title="Share link"/>
            </div>

        </div>
    ) 
}

export default BlogsTitle

