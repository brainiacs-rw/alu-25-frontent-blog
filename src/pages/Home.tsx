import BlogCard from "../components/blog-card";
import Navbar from "../components/common/navbar";
import BlogsTitle from "../components/home/blogsTitle";
import { blogData } from "../dummy-data";

export default function Home() {

  return (
    <div className="App">
      <BlogsTitle />
      {
        blogData.map(blog => (
          <BlogCard  {...blog} />
        ))
      }
    </div>
  )
}

