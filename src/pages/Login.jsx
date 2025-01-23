import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      
      console.log('Logged in user:', data.user)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error
      
      console.log('Signed up user:', data.user)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(254,215,0)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl figtree-bold mb-6 text-center">Login/Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-black text-[rgb(254,215,0)] py-2 rounded-md hover:opacity-90"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full bg-gray-800 text-[rgb(254,215,0)] py-2 rounded-md hover:opacity-90"
            >
              Sign Up
            </button>
          </div>
        </form>
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Login