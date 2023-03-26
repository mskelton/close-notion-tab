chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.closeTab) {
    chrome.tabs.remove(sender.tab.id)
  }
})
