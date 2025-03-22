import React, { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(' https://backend-kzjbc3djk-jagadishs-projects-2f7a0795.vercel.app/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! You can now log in.");
      } else {
        setMessage(`❌ Error: ${data.error || 'Registration failed'}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Registration Header */}
        <section className="py-16 bg-gradient-to-r from-purple-100/50 to-tech-100/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-tech-700 bg-tech-100 rounded-full">
                  JOIN US
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Create Your Account
              </h1>
              <p className="text-gray-600">
                Register to participate in the National Technical Symposium and access exclusive content.
              </p>
            </div>

            {/* Registration Form */}
            <div className="max-w-md mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="w-full p-2 border rounded mb-4"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
                  Register
                </button>
              </form>
            </div>

            {/* Display Message */}
            {message && <p className="text-center mt-4 text-red-600">{message}</p>}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
