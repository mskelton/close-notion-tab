chrome.runtime.onMessage.addListener((message, sender) => {
  console.log("hi")
  // if (message.closeThis) chrome.tabs.remove(sender.tab.id)
})
