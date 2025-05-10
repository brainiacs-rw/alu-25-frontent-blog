import BlogCard from "./components/blog-card";
import Navbar from "./components/common/navbar";
import { blogData } from "./dummy-data";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="px-5 py-10 flex justify-between">
        <span className="text-3xl font-bold">Read our blogs</span>
        <button className="px-4 py-2 rounded-full bg-blue-600 text-white">Add blog</button>
      </div>

      {
        blogData.map(blog => (
          <BlogCard  {...blog} />
        ))
      }
    </div>
  )
}

