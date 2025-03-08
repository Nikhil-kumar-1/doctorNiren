import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../config/config";
const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  // Fetch the blog details from the backend
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/blogs/${id}`);
        const data = await response.json();
        console.log("Fetched blog data:", data); // Debugging line
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Image */}
      <div className="relative h-64 lg:h-96 overflow-hidden">
        <img
          src={blog.image}
          alt="Blog Banner"
          className="w-full h-full object-cover pl-6 pr-6"
        />
      </div>

      {/* Blog Content Section */}
      <div className="max-w-full mx-auto bg-white p-6 lg:p-8 rounded-lg shadow-md mt-5 mb-8">
        {/* Blog Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          {blog.title}
        </h1>

        {/* Blog Content */}
        <div
          className="text-gray-700 space-y-4" // Added space-y-4 for spacing between elements
          dangerouslySetInnerHTML={{
            __html: blog.content
              .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">') // Style h1
              .replace(/<h2>/g, '<h2 class="text-2xl font-bold mb-3">') // Style h2
              .replace(/<h3>/g, '<h3 class="text-xl font-bold mb-2">') // Style h3
              .replace(/<p>/g, '<p class="mb-4">') // Style paragraphs
              .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">') // Style unordered lists
              .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">') // Style ordered lists
              .replace(/<li>/g, '<li class="mb-2">') // Style list items
          }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;