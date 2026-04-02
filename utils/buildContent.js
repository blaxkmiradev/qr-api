module.exports = function ({ string, text, link, payload }) {
  if (string !== undefined) return String(string);
  if (text) return text;
  if (link) return link;
  if (payload) return JSON.stringify(payload);
  return null;
};
