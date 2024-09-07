import LoadingCard from "@/components/ui/LoadingCard";
import Blog from "@/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
        {blogs?.map((blog: Blog) => (
          <LoadingCard key={blog?.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
