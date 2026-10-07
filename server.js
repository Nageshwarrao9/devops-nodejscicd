const express = require("express");

const app = express();

// Use environment variable PORT if provided, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
    res.send("Hello! Node.js application deployed successfully using Jenkins CI/CD.");
});

app.get("/about", (req, res) => {
    res.send("This is a DevOps CI/CD lab project using Jenkins.");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Application is running"
    });
});

// Start server only if run directly (not imported in tests)
if (require.main === module) {
    // Bind to 0.0.0.0 so it’s accessible from other devices
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
}

module.exports = app;
