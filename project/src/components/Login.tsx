// Login.tsx
import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const loginEntry = {
      email,
      time: new Date().toLocaleString(),
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('loginAttempts') || '[]');
    existing.push(loginEntry);
    localStorage.setItem('loginAttempts', JSON.stringify(existing));

    // Simulate login
    alert('Login successful');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 h-6 w-6 text-orange-600" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-6 w-6 text-orange-600" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
