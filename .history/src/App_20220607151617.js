import React, { useState } from 'react';
import './App.scss';
import img1 from './assets/1.jpeg';

function App() {

  let [HeaderClickedClass, setHeaderClickedClass] = useState()
  let [Popup, setPopup] = useState()


  const Main = () => {
    setHeaderClickedClass(HeaderClickedClass = 'App-Header-Clicked')
    console.log(HeaderClickedClass)
  }
  const OpenPopup = (image) => {
    setPopup(Popup = 'App-Popup-Open')
  }
  const ClosePopup = () => {
    setPopup(Popup = '')
  }

  return (
    <div className="App">
      <header className={`App-Header ${HeaderClickedClass}`}>
        Wojchech Głuszkowski<br />
        Graphic Designer
        <div className="App-Button" onClick={Main}>
          <i className="fa-solid fa-arrow-down App-Button-Arrow"></i>
        </div>
        
      </header>
      <main className='App-Main'>
        <div className='App-Main-Item App-Main-Item1' onClick={() => OpenPopup(1)}>
          
        </div>
        <div className='App-Main-Item App-Main-Item2' onClick={() => OpenPopup(2)}>

        </div>
        <div className='App-Main-Item App-Main-Item3' onClick={() => OpenPopup(3)}>

        </div>
        <div className='App-Main-Item App-Main-Item4' onClick={() => OpenPopup(4)}>

        </div>
        <div className='App-Main-Item App-Main-Item5' onClick={() => OpenPopup(5)}>

        </div>
        <div className='App-Main-Item App-Main-Item6' onClick={() => OpenPopup(6)}>

        </div>
      </main>
      <div className={`App-Popup ${Popup}`} onClick={ClosePopup}>
        <img src={img1} className='App-Popup1'/>
      </div>
    </div>
  );
}

export default App;
