import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Profile from './component/Profile';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './route/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
