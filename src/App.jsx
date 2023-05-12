import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [shwoParagraph, setShowParagraph] = useState(false);
  return (
    <div className='App'>
      <h1>Hii there</h1>
      {shwoParagraph && <p>this is new Paragraph</p>}
      <button onClick={()=>setShowParagraph(prev=>!prev)}>Toggle Paragraph</button>
    </div>
  )
}

export default App
