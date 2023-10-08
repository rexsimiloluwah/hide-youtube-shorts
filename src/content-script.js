setTimeout(() => {
  try{
    const mediaElements = document.getElementsByClassName("ytd-rich-item-renderer")

  for (const element of mediaElements){
    const isShortElement = element.getAttribute("is-short")

    if(isShortElement !== undefined && isShortElement !== null){
        const divElement = document.createElement("div")
        divElement.style.width = "100%"
        divElement.style.height = "200px"
        divElement.style.backgroundColor = "#ECECEC"
        divElement.style.borderRadius = "12px"
        divElement.style.display = "flex"
        divElement.style.justifyContent = "center"
        divElement.style.alignItems = "center"
        divElement.style.flexDirection = "column"
        divElement.style.gap = "14px"
        divElement.style.textAlign = "center"
        divElement.innerHTML =
          `<div style='font-size:5rem;width:100%;text-align:center;'>🔒</div>
          <div style='font-size: 14px;padding: 1rem'>This YouTube Short is Locked. Focus!</div>`;
        
        // Hide the YouTube short
        element.innerHTML = ""
        element.appendChild(divElement)
    }
  }
  }catch{
    console.error("Could not hide YouTube shorts")
  }
  
  try{
    const navigationEl = document.querySelector("ytd-guide-section-renderer.ytd-guide-renderer")
    const shortsTabEl = navigationEl.querySelector(
        "#items .ytd-guide-section-renderer:nth-child(2)"
    );
    shortsTabEl.remove()
  }catch{
    console.log("Could not hide YouTube shorts tab")
  }
}, 5000)

