
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Index from "./pages/Index";
import Department from "./pages/Department";
import Event from "./pages/Event";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Create a client for React Query
const queryClient = new QueryClient();

// Root App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        {/* Toast notifications */}
        <Toaster />
        <Sonner />
        
        {/* Router configuration */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/department/:id" element={<Department />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
