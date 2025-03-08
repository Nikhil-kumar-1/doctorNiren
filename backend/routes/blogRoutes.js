const express = require("express");
const blogController = require("../controllers/blogController");
const Blog = require("../models/Blog");  // Import the Blog model
const router = express.Router();

// Create a new blog
router.post("/blogs", blogController.createBlog);

// Fetch all blogs
router.get("/blogs", blogController.getAllBlogs);

// Update a blog
router.put("/blogs/:id", blogController.updateBlog);

// Delete a blog
router.delete("/blogs/:id", blogController.deleteBlog);

// Fetch a single blog by ID
router.get("/blogs/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ message: "Failed to fetch blog" });
    }
  });

module.exports = router;