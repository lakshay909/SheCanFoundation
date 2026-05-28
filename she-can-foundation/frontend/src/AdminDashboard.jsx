import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const response = await axios.get(`${API_URL}/api/contact/all`);
        setMessages(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages. Ensure the backend is running.');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-ink p-8 md:p-12 relative overflow-hidden">
      {/* Decorative grain overlay is handled globally in index.css */}

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2 text-bark">
              Admin Dashboard
            </h1>
            <p className="text-rose-700/80 text-lg">
              Manage incoming inquiries and submissions.
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-2 border border-rose-200 rounded-full text-rose-700 hover:bg-rose-50 transition-colors"
          >
            Back to Form
          </Link>
        </header>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 text-center">
            {error}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-cream-100/50 border-b border-rose-100 font-display text-lg text-bark">
                    <th className="py-4 px-6 font-semibold">Date</th>
                    <th className="py-4 px-6 font-semibold">Name</th>
                    <th className="py-4 px-6 font-semibold">Email</th>
                    <th className="py-4 px-6 font-semibold">Intent</th>
                    <th className="py-4 px-6 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50">
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-8 text-center text-rose-700/60">
                        No messages found.
                      </td>
                    </tr>
                  ) : (
                    messages.map((msg) => (
                      <tr key={msg._id} className="hover:bg-cream-50/30 transition-colors">
                        <td className="py-4 px-6 text-sm text-ink/70 whitespace-nowrap">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-6 font-medium text-ink whitespace-nowrap">
                          {msg.name}
                        </td>
                        <td className="py-4 px-6 text-ink/80 whitespace-nowrap">
                          {msg.email}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 capitalize">
                            {msg.intent}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-ink/80 max-w-xs truncate" title={msg.message}>
                          {msg.message}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
