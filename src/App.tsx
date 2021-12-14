import { useState } from 'react'
import {AvatarCard} from "./components/AvatarCard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AvatarCard avatar={'/assets/profile-photo-6.png'} title={'abc'} subtitle={'abc'} description={"Love using the app. There's a learning curve. But totally worth it."}/>
    </div>
  )
}

export default App
