import BlogCard from "@/components/ui/BlogCard";
import Blog from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto my-10">
      <h2 className="my-3 text-center text-4xl">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-center italic text-gray-400 w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
