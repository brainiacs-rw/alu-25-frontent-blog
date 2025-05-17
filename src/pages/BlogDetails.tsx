import { useParams } from "react-router-dom"
import { blogData } from "../dummy-data"

export default function BlogDetails(){
    const params =  useParams()
    console.log(params)
    const blog = blogData.find(b => b.id == Number(params.blogId))

    if(!blog)  return <div> No such blog found</div>
    return (
        <div className=" px-20" >
          <h1 className="text-3xl text-center py-4">
           {blog.title}
            </h1>
            <p className="py-20 text-slate-400">
                { blog.description}
            </p>
        </div>
    )
}

