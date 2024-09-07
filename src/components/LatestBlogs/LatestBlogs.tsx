import Blog from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <h2 className="my-3 text-center text-4xl">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-center italic text-gray-400 w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>

      <div className="grid grid-cols-2 gap-10 py-5">
        {blogs?.slice(0, 2)?.map((blog) => (
          <LatestBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>

      {/* ======Make small cart in the another card */}
      <div className="grid grid-cols-3 gap-10 py-5">
        {blogs?.slice(2, 5)?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
