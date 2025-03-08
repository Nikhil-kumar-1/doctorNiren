import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config/config";
const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("appointments"); // Track active tab
  const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" }); // For creating a new blog
  const [editBlog, setEditBlog] = useState(null); // For editing a blog
  const navigate = useNavigate();

  // Fetch all appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/appointments`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "blogs") {
      fetchBlogs();
    }
  }, [activeTab]);

  // Handle create blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        alert("Blog created successfully!");
        setNewBlog({ title: "", content: "", image: "" });
        fetchBlogs(); // Refresh the blog list
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  // Handle delete blog
  const handleDeleteBlog = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Blog deleted successfully!");
        fetchBlogs(); // Refresh the blog list
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Handle edit blog
  const handleEditBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${backendUrl}/api/blogs/${editBlog._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editBlog),
        }
      );

      if (response.ok) {
        alert("Blog updated successfully!");
        setEditBlog(null); // Clear edit mode
        fetchBlogs(); // Refresh the blog list
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full lg:w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveTab("appointments")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "appointments" ? "bg-blue-700" : ""
                }`}
              >
                Appointments
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`block py-2 px-4 w-full text-left hover:bg-blue-700 rounded ${
                  activeTab === "blogs" ? "bg-blue-700" : ""
                }`}
              >
                Manage Blogs
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 w-full text-left hover:bg-blue-700 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        {activeTab === "appointments" ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Appointments</h1>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Phone
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {appointment.name}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {appointment.email}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {appointment.phone}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {new Date(appointment.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {appointment.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>
            {/* Create/Edit Blog Form */}
            <div className="bg-white rounded-lg shadow p-4 lg:p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">
                {editBlog ? "Edit Blog" : "Create New Blog"}
              </h2>
              <form onSubmit={editBlog ? handleEditBlog : handleCreateBlog}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={editBlog ? editBlog.title : newBlog.title}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, title: e.target.value })
                        : setNewBlog({ ...newBlog, title: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    placeholder="Content"
                    value={editBlog ? editBlog.content : newBlog.content}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, content: e.target.value })
                        : setNewBlog({ ...newBlog, content: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editBlog ? editBlog.image : newBlog.image}
                    onChange={(e) =>
                      editBlog
                        ? setEditBlog({ ...editBlog, image: e.target.value })
                        : setNewBlog({ ...newBlog, image: e.target.value })
                    }
                    className="w-full p-2 lg:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    {editBlog ? "Update Blog" : "Create Blog"}
                  </button>
                </div>
              </form>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-lg shadow p-4 lg:p-6">
              <h2 className="text-xl font-bold mb-4">Blogs</h2>
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div key={blog._id} className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600">
                      {blog.content.split(" ").slice(0, 50).join(" ")}
                      {blog.content.split(" ").length > 50 ? "..." : ""}
                    </p>

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-20 object-cover mt-2"
                    />
                    <div className="mt-4 flex space-x-4">
                      <button
                        onClick={() => setEditBlog(blog)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;