import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Avatar'

function App() {
  return (

  <>
   <Avatar
    src="https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&w=600"
    height='100px'
    width="100px"
   />

<Avatar
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
    height='100px'
    width="100px"
   />

<Avatar
    src="https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=600"
    height='100px'
    width="100px"
   />

   <span>Child Tag</span>
  </>
  )
}

export default App
