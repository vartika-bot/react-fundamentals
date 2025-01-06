// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className='box--small' style={{marginTop: 20, backgroundColor: 'lightblue', fontStyle: 'italic', border: '1px solid black'}} >small lightblue box</div>
const mediumBox = <div className='box--medium'style={{marginTop: 20, backgroundColor: 'pink', fontStyle: 'italic', border: '1px solid black'}}>medium pink box</div>
const largeBox = <div className='box--large' style={{marginTop: 20, backgroundColor: 'orange', fontStyle: 'italic', border: '1px solid black', }}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
