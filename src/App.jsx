import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DriverAuth from './pages/DriverAuth'
import OwnerAuth from './pages/OwnerAuth'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="driver" element={<DriverAuth />} />
        <Route path="owner" element={<OwnerAuth />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
