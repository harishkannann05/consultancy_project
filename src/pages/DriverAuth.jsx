import { useState } from 'react'
import './AuthCards.css'

function DriverAuth() {
  const [activeTab, setActiveTab] = useState('login')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [signupName, setSignupName] = useState('')
  const [signupPhone, setSignupPhone] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirm, setSignupConfirm] = useState('')

  function handleLoginSubmit(e) {
    e.preventDefault()
    alert('Driver login (UI only – no backend).')
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    if (signupPassword !== signupConfirm) {
      alert('Passwords do not match.')
      return
    }
    alert(`Driver signup for ${signupName} with phone ${signupPhone} (UI only).`)
  }

  return (
    <div className="auth-cards-page">
      <div className="auth-cards-heading">
        <h1>Driver</h1>
        <p>Log in or create an account</p>
      </div>
      <div className="auth-card auth-card--driver">
        <div className="auth-card-tabs">
          <button
            type="button"
            className={`auth-card-tab ${activeTab === 'login' ? 'auth-card-tab--active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Log in
          </button>
          <button
            type="button"
            className={`auth-card-tab ${activeTab === 'signup' ? 'auth-card-tab--active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign up
          </button>
        </div>
        <div className="auth-card-body">
          {activeTab === 'login' && (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <label>
                Email
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </form>
          )}
          {activeTab === 'signup' && (
            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <label>
                Full name
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </label>
              <label>
                Confirm password
                <input
                  type="password"
                  value={signupConfirm}
                  onChange={(e) => setSignupConfirm(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary btn-block">Create account</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default DriverAuth
