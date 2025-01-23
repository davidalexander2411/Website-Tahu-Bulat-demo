import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState(null)
  const [isSignUp, setIsSignUp] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      if (isSignUp) {
        const { data: { user }, error: signupError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              full_name: fullName,
              created_at: new Date().toISOString()
            }
          }
        })

        if (signupError) throw signupError

        if (user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
              user_id: user.id,
              username,
              full_name: fullName,
              email
            })

          if (profileError) throw profileError
        }

        alert('Signup successful! Please Login')
        location.reload();

      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error
        
        if (data.user) {
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderSignUpForm = () => (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        required
      />
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        minLength="6"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-black text-[rgb(254,215,0)] py-2 rounded-md hover:opacity-90 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
      </button>
    </>
  )

  const renderLoginForm = () => (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-black text-[rgb(254,215,0)] py-2 rounded-md hover:opacity-90 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Logging In...' : 'Login'}
      </button>
    </>
  )

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[rgb(254,215,0)] flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl figtree-bold mb-6 text-center">
          {isSignUp ? 'SIGN UP' : 'LOGIN'}
        </h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {isSignUp ? renderSignUpForm() : renderLoginForm()}
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-black underline"
          >
            {isSignUp 
              ? 'Already have an account? Login' 
              : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login
