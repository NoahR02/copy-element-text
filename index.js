let clipBoardContent = "";

browser.contextMenus.create({
  id: "copyElementText",
  title: "Copy Element Text",
  contexts: ["all"]
});

browser.contextMenus.onClicked.addListener(() => navigator.clipboard.writeText(clipBoardContent));
browser.runtime.onMessage.addListener((request, sender, sendResponse) => clipBoardContent = request.greeting);