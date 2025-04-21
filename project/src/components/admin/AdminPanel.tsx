import React, { useEffect, useState } from 'react';
import { LogOut, Users, Clock } from 'lucide-react';

interface LoginAttempt {
  email: string;
  time: string;
}

const AdminPanel = () => {
  const [logins, setLogins] = useState<LoginAttempt[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('loginAttempts');
    if (stored) {
      setLogins(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <LogOut className="h-6 w-6 text-orange-600" />
            <span>Logout</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Login Attempts</h2>
          {logins.length === 0 ? (
            <p className="text-gray-500">No login attempts yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {logins.map((attempt, i) => (
                <li key={i} className="py-3 flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-gray-800 font-medium">{attempt.email}</p>
                    <p className="text-sm text-gray-500">{attempt.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
