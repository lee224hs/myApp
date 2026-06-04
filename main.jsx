import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
// import App from './components/App.jsx'
//import CommentList from './components/CommentList.jsx'
//import RoomList from './components/RoomList.jsx'
//import Counter from './components/Counter.jsx'
//import BigSquare from './components/BigSquare.jsx'
//import useCounter from './components/useCounter.jsx'
// import DarkOrLight from './components/DarkOrLight'
// import Sample from './components/Sample'
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
