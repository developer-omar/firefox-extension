import React from 'react'
import './styles.scss'

function App() {

  const openOptionsPage = () => {
    //open options in addons manager
    //let openingPage = browser.runtime.openOptionsPage();

    //open options on a new tab
    let optionsTab = browser.tabs.create({
      active: true,
      url: browser.extension.getURL("options/index.html")
    });
  }

  return (
    <>
      <div>Popup Page</div>
      <br />
      <a href="#" onClick={openOptionsPage}>
        Open Options Page on a Tab
      </a>
    </>
  )
}

export default App