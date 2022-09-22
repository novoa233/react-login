import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Landing from './components/landing.component'
import Dashboard from './components/dashboard.component'

function App() {
  return (
    <Router>
      <div className="App">
        <header classname="App-header">
      
        </header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/landing'}>
              Portal Pyme
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/ingreso'}>
                    Ingresa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/registro'}>
                    Regístrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/dashboard'}>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exactindex path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/ingreso" element={<Login />} />
              <Route path="/registro" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App