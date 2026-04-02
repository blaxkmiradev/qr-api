const qrService = require("../services/qr.service");

exports.generateQR = async (req, res) => {
  try {
    const result = await qrService.generate(req.body);

    if (result.type === "image") {
      res.setHeader("Content-Type", "image/png");
      return res.send(result.data);
    }

    return res.json(result.data);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
