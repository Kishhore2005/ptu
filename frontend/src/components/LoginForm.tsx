
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  identifier: z.string().min(3, {
    message: "Username or email must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    setError(null);
    
    // Simulate API call to MySQL database
    setTimeout(() => {
      // For demo purposes, hardcode a successful login for "aryan@mail.com" with password "password123"
      if (data.identifier === "aryan@mail.com" && data.password === "password123") {
        // Store user info in localStorage for persistence
        localStorage.setItem('user', JSON.stringify({
          id: '1',
          name: 'Aryan',
          email: 'aryan@mail.com'
        }));
        
        toast({
          title: "Login successful",
          description: "Welcome back, Aryan!",
        });
        
        navigate('/');
      } else {
        setError("Invalid username/email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 tech-card">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="bg-tech-100 p-4 rounded-full">
            <User className="h-10 w-10 text-tech-600" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p className="text-gray-500 text-sm">Access your symposium account</p>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username or Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        {...field}
                        placeholder="Enter your username or email"
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-tech-600 hover:text-tech-700">Forgot password?</a>
              <a href="/register" className="text-tech-600 hover:text-tech-700">Create an account</a>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-tech-500 hover:bg-tech-600 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
