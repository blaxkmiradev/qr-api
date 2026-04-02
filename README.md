# 🚀 QR Code Generator API (Express.js)

A simple and flexible **QR Code Generator API** built with Express.js.
Supports multiple input types (`string`, `text`, `link`, `payload`) and output formats (`PNG`, `Base64`, `Data URL`).

---

## 📁 Project Structure

```
qr-api/
│
├── package.json
├── server.js
│
├── routes/
│   └── qr.routes.js
│
├── controllers/
│   └── qr.controller.js
│
├── services/
│   └── qr.service.js
│
└── utils/
    └── buildContent.js
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoint

### POST `/api/qr`

Generate a QR code from different types of input.

---

## 📥 Request Body

| Field      | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| string     | any    | Raw value (highest priority)      |
| text       | string | Plain text                        |
| link       | string | URL                               |
| payload    | object | JSON object (auto stringified)    |
| format     | string | `png`, `base64`, `dataurl`        |
| size       | number | Image size (default: 300)         |
| colorDark  | string | QR color (default: black)         |
| colorLight | string | Background color (default: white) |

---

## 🔄 Input Priority

```
string → text → link → payload
```

---

## 📤 Response

### 🖼 PNG (default)

Returns an image file (`image/png`).

---

### 🔤 Base64 / Data URL

```json
{
  "result": "data:image/png;base64,iVBORw0KGgoAAA..."
}
```

---

## 🧪 Examples

### 1. Simple String

```json
{
  "string": "HELLO WORLD"
}
```

---

### 2. URL

```json
{
  "link": "https://example.com"
}
```

---

### 3. JSON Payload

```json
{
  "payload": {
    "userId": 1,
    "role": "admin"
  }
}
```

---

### 4. Base64 Output

```json
{
  "text": "Hello QR",
  "format": "base64"
}
```

---

## 🧰 Tech Stack

* Node.js
* Express.js
* qrcode

---

## 🔧 Future Improvements

* 🎨 Custom QR styles (logo, gradient)
* ☁️ Upload to cloud storage (AWS S3 / Cloudinary)
* 🔐 Encrypted QR (JWT)
* 📱 Payment QR (KHQR / Bakong)
* 📁 Save QR images locally

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Rikixz
