document.addEventListener("DOMContentLoaded", async () => {
  const selectedTextEl = document.getElementById("selectedText");
  const resultEl = document.getElementById("result");
  const followInput = document.getElementById("followInput");
  const sendFollowUp = document.getElementById("sendFollowUp");

  let messageHistory = [];

  chrome.storage.local.get("selectedText", async ({ selectedText }) => {
    if (!selectedText) {
      selectedTextEl.textContent = "No text selected.";
      return;
    }

    selectedTextEl.textContent = `Selected: "${selectedText}"`;

    messageHistory = [{ role: "user", content: selectedText }];

    await askAI(messageHistory);
  });

  sendFollowUp.addEventListener("click", async () => {
    const followUp = followInput.value.trim();
    if (!followUp) return;

    messageHistory.push({ role: "user", content: followUp });

    followInput.value = "Loading...";
    followInput.disabled = true;
    sendFollowUp.disabled = true;

    await askAI(messageHistory);

    followInput.value = "";
    followInput.disabled = false;
    sendFollowUp.disabled = false;
  });

  async function askAI(messages) {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer API_KEY" 
        },
        body: JSON.stringify({
          model: "MODEL_NAME",
          messages,
        })
      });

      const data = await response.json();

      if (!data.choices || !data.choices[0]?.message?.content) {
        console.error("Invalid response from AI:", data);
        throw new Error("Invalid response from AI.");
      }

      const reply = data.choices[0].message.content;
      resultEl.value = reply;
      messageHistory.push({ role: "assistant", content: reply });
    } catch (err) {
      console.error("Error:", err);
      resultEl.value = ` AI Request Failed:\n${err.message}`;
    }
  }
});