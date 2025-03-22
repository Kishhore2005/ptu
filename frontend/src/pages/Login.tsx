import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "@/components/ui/use-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://backend-j7zycqv14-jagadishs-projects-2f7a0795.vercel.app/users");
      if (!response.ok) throw new Error("Failed to fetch user data");

      const users = await response.json();
      const user = users.find((u: { email: string; password: string }) => u.email === formData.email);

      if (user) {
        if (user.password === formData.password) {
          toast({ title: "✅ Login successful!", description: "Redirecting..." });
          setTimeout(() => navigate("/dashboard"), 1500);
        } else {
          toast({ title: "❌ Incorrect Password", description: "Please check your password." });
        }
      } else {
        toast({ title: "❌ User not found", description: "No account found with this email." });
      }
    } catch (error) {
      toast({ title: "❌ Server Error", description: "Failed to connect to the database." });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Login Header */}
        <section className="py-16 bg-gradient-to-r from-tech-100/50 to-purple-100/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in opacity-0" 
                 style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-tech-700 bg-tech-100 rounded-full">
                  WELCOME BACK
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Login to Your Account
              </h1>
              <p className="text-gray-600">
                Sign in to access exclusive symposium content and manage your event registrations.
              </p>
            </div>

            <div className="max-w-md mx-auto animate-fade-in opacity-0"
                 style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              {/* 🛠 Login Form with Validation */}
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      className="pl-10 w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      className="pl-10 w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
