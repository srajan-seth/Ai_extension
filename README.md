🧠 AI Text Search (Groq) – Chrome Extension

A simple and fast Chrome Extension that lets you select any text on a webpage, right-click, and instantly search it using Groq AI.
The extension opens a popup that shows the AI’s response and even allows follow-up questions.

🚀 Features

🔍 Right-click → “Search with AI”

🤖 Uses Groq AI Chat Completion API

💬 Supports follow-up questions inside the popup

💾 Remembers selected text using Chrome Storage

⚡ Lightweight and fast (Manifest V3)

🧱 Clean UI built with HTML/CSS/JS

📦 Project Structure
root/
│── background.js
│── manifest.json
│── popup.html
│── popup.js
│── popup.css
│── icon.png
│── package.json
│── package-lock.json

🛠 How It Works
1️⃣ Right-click menu creation

2️⃣ User selects text → opens popup

When clicked, it stores the selected text and opens the extension popup.

3️⃣ Popup sends text to Groq AI

4️⃣ Follow-up questions supported

The popup keeps a conversation history.

🧩 Installation (Developer Mode)

Download or clone this repository.

Open Chrome → go to:
chrome://extensions/

Enable Developer Mode.

Click Load Unpacked.

Select the project folder.

Your extension will appear in Chrome’s toolbar.

🔑 Setting Your API Key

In popup.js, replace:

"Authorization": "Bearer API_KEY"


with your real Groq API key:

"Authorization": "Bearer YOUR_REAL_API_KEY"


And update:

model: "MODEL_NAME"

Example:

model: "llama3-8b-8192"

🖼 UI Preview (Popup)

Shows the selected text.

Displays AI output in a styled textarea.

Has an input box for follow-ups.

Shows “Powered by Groq AI” footer.

🧪 Future Improvements

Store API key securely using Chrome storage.

Add streaming responses.

Add dark mode.

Upload user screenshots.

📄 License

This project is open-source under the MIT License.
