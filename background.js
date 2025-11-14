chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ai-search",
    title: "Search with AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "ai-search") {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.action.openPopup();
  }
});
