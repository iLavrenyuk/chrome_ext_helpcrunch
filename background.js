chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceIconWithSVG
  });
});

function replaceIconWithSVG() {
  const elements = document.querySelectorAll('.hcw-widget-button__icon');
  elements.forEach(element => {
    // Видаляємо старий вміст
    element.innerHTML = '';
    
    // Додаємо SVG в елемент
    element.innerHTML = `
      <svg height='22' viewBox='0 0 27 20' width='30' xmlns='http://www.w3.org/2000/svg'>
        <g fill='currentColor' fill-rule='nonzero'>
          <path d='M26.56 1.597l-10.364 9.788a3.916 3.916 0 0 1-2.696 1.053 3.915 3.915 0 0 1-2.696-1.053L.44 1.597A2.97 2.97 0 0 0 0 3.15v13.5c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3V3.15a2.97 2.97 0 0 0-.44-1.553z' />
          <path d='M15.166 10.294L25.486.55A2.968 2.968 0 0 0 24 .15H3c-.54 0-1.046.146-1.485.398l10.32 9.746c.902.854 2.428.853 3.33 0z' />
        </g>
      </svg>
    `;
  });
}
