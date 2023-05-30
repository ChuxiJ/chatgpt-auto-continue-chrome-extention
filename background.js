chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: simulateButtonClick
    });
  });
  
  function simulateButtonClick() {
    const buttons = document.getElementsByClassName("btn");
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      if (button.textContent === "Continue generating") {
        button.click();
        break;
      }
    }
  }
  