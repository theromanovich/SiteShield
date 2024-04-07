chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'blockList' && message.keywords) {
    const keywords = message.keywords;
    const pageContent = document.documentElement.innerHTML.toLowerCase();

    for (const keyword of keywords) {
      if (pageContent.includes(keyword)) {
        document.documentElement.innerHTML = '<h1>This page is blocked.</h1>';
        break;
      }
    }
  }
});
