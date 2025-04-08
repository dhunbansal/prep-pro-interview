
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { Menu, X, User, BarChart2 } from "lucide-react";

const Navbar = () => {
  const { userRole, isLoggedIn, setIsLoggedIn, setUserRole } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-interview-blue" />
              <span className="ml-2 text-xl font-bold text-interview-blue">InterviewPro</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-interview-blue px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/interview" className="text-gray-600 hover:text-interview-blue px-3 py-2 text-sm font-medium">
                Practice
              </Link>
              {isLoggedIn && (
                <Link to="/dashboard" className="text-gray-600 hover:text-interview-blue px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <div className="ml-4 flex items-center">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="capitalize">{userRole}</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Log out
                  </Button>
                </div>
              ) : (
                <Button variant="default" size="sm" asChild>
                  <Link to="/">Try Now</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-interview-blue hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-interview-blue hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/interview"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-interview-blue hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice
            </Link>
            {isLoggedIn && (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-interview-blue hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {isLoggedIn ? (
              <div className="px-3 py-2">
                <p className="mb-2 text-sm text-gray-500">Signed in as <span className="font-medium capitalize">{userRole}</span></p>
                <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                  Log out
                </Button>
              </div>
            ) : (
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Try Now
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
