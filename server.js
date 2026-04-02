const express = require("express");
const qrRoutes = require("./routes/qr.routes");

const app = express();

app.use(express.json());

// routes
app.use("/api", qrRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
