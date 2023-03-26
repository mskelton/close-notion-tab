function getNode() {
  try {
    const text = "Redirecting to your Notion app…"
    const res = document.evaluate(
      `//div[text()="${text}"]`,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    )

    return res.singleNodeValue
  } catch {}
}

setTimeout(() => {
  if (getNode()) {
    chrome.runtime.sendMessage({ closeTab: true })
  }
}, 5000)
