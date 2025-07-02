import { useState } from "react";
import { Mail, MessageSquare, User, Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Panel - Form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-base-100">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-base-content">Create Account</h1>
              <p className="text-base-content text-opacity-70">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Full Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-base-content text-opacity-40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-10 focus:input-primary"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-base-content text-opacity-40 hover:text-opacity-60" />
                  ) : (
                    <Eye className="w-5 h-5 text-base-content text-opacity-40 hover:text-opacity-60" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className={`btn btn-primary w-full ${isSigningUp ? 'loading' : ''}`}
              disabled={isSigningUp || !validateForm()}
            >
              {isSigningUp ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-base-content text-opacity-70">
              Already have an account?{' '}
              <a href="#" className="link link-primary font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-12">
        <div className="text-center text-primary-content">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <MessageSquare className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to ChatApp</h2>
          <p className="text-xl opacity-90 max-w-md">
            Connect with friends and family. Share moments, create memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;