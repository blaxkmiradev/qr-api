const QRCode = require("qrcode");
const buildContent = require("../utils/buildContent");

exports.generate = async (body) => {
  const {
    string,
    text,
    link,
    payload,
    format = "png",
    size = 300,
    colorDark = "#000000",
    colorLight = "#ffffff"
  } = body;

  const content = buildContent({ string, text, link, payload });

  if (!content) {
    throw new Error("Provide one of: string, text, link, payload");
  }

  const options = {
    width: size,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: colorDark,
      light: colorLight,
    },
  };

  // base64 / dataurl
  if (format === "base64" || format === "dataurl") {
    const dataUrl = await QRCode.toDataURL(content, options);
    return {
      type: "json",
      data: { result: dataUrl }
    };
  }

  // png
  const buffer = await QRCode.toBuffer(content, options);

  return {
    type: "image",
    data: buffer
  };
};
