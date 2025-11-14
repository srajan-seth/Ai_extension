# 🧠 AI Text Search (Groq) – Chrome Extension

A simple and fast Chrome Extension that lets you **select any text on a webpage**, right-click, and instantly **search it using Groq AI**.  
The extension opens a popup that shows the AI’s response and even allows **follow-up questions**.

---

## 🚀 Features

- 🔍 Right-click → **“Search with AI”**
- 🤖 Uses **Groq AI Chat Completion API**
- 💬 Supports **follow-up questions** inside the popup
- 💾 Remembers selected text using **Chrome Storage**
- ⚡ Lightweight and fast (**Manifest V3**)
- 🧱 Clean UI built with **HTML / CSS / JavaScript**

---

## 🖼 UI Preview (Popup)
<img width="745" height="498" alt="image" src="https://github.com/user-attachments/assets/4e532b61-39a1-4a76-872a-40d1cf7a09a1" />

---

## 🛠 How It Works

### 1️⃣ Right-click menu creation  
The extension adds a context menu when installed.

### 2️⃣ User selects text → opens popup  
When the user chooses **“Search with AI”**, the selected text is saved and the popup opens.

### 3️⃣ Popup sends text to Groq AI  
The popup makes a request to **Groq’s Chat Completion API** and displays the answer.

### 4️⃣ Follow-up questions supported  
The popup maintains a conversation history so users can ask follow-ups.

---

## 🧩 Installation (Developer Mode)

1. Download or clone this repository.
2. Open Chrome and go to:  
   `chrome://extensions/`
3. Enable **Developer Mode**.
4. Click **Load Unpacked**.
5. Select the project folder.

Your extension is now loaded and visible in Chrome’s toolbar.

---

## 🔑 Setting Your API Key

Open `popup.js` and replace:

"Authorization": "Bearer API_KEY"
model: "MODEL_NAME"

---

## 🧪 Future Improvements

Store API key securely using Chrome Storage

Add streaming responses

Add dark mode for popup UI

Add user-uploaded screenshots to README

---

## 📄 License

This project is open-source under the MIT License.

