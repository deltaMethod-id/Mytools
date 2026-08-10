import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Zap,
  Home,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/15185339/15185339-hd_1280_720_30fps.mp4";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/stats", label: "Stats", icon: BarChart3 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(1.2)" }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Dark overlay with subtle yellow tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(10,10,5,0.6) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,220,50,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,220,50,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 220, 50, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 group"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255, 220, 50, 0.15)",
                  border: "1px solid rgba(255, 220, 50, 0.3)",
                }}
              >
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                My<span className="text-yellow-400">tools</span>
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white/60 hover:text-white/90"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          background: "rgba(255, 220, 50, 0.1)",
                          border: "1px solid rgba(255, 220, 50, 0.2)",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid transparent",
                        }
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-4 pb-4"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white/60 hover:text-white/80"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          background: "rgba(255, 220, 50, 0.08)",
                          border: "1px solid rgba(255, 220, 50, 0.15)",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid transparent",
                        }
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255, 220, 50, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400/70" />
              <span className="text-sm text-white/40">
                Mytools — Curated free tools for everyone
              </span>
            </div>
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
