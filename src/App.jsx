import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  )
}

export default App
