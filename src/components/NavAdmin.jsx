import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function NavAdmin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  const initials = currentUser?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header>
      <nav className="fixed top-0 z-1000 w-full border-b border-(--border-color-gray) bg-(--bg-color-white) px-6 py-3 sm:px-6 md:px-25">
        <div className="relative mx-auto flex w-full flex-col items-center gap-3 md:grid md:grid-cols-3">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icons/logo.svg" alt="Logo" />
              <span className="font-['Fraunces'] font-bold text-(--font-color-black) text-lg">WargaReport</span>
            </Link>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <img src="/icons/i-hamburger.svg" alt="Icon Hamburger" />
            </button>
          </div>
          <div className={`${isMenuOpen ? "flex" : "hidden"} order-2 w-full flex-row flex-wrap items-center justify-center gap-4 md:order-0 md:col-start-3 md:flex md:w-auto md:justify-end md:gap-6`}>
            <Link to="/admin/escalation-desk" onClick={() => setIsMenuOpen(false)} className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-3 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-white) sm:text-sm">
                <img src="/icons/i-shield-white.svg" alt="Icon Shield" />
                Admin Console
              </div>
            </Link>
            <Link to="/admin/notification" onClick={() => setIsMenuOpen(false)}>
              <img src="/icons/i-bell.svg" alt="Icon Notifications" />
            </Link>
            <div className="group relative">
              <button type="button" className="flex items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-2 py-1 sm:gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-(--border-color-green) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">{initials}</span>
                <span className="flex flex-col items-start">
                  <span className="font-['Public_Sans'] text-xs font-semibold text-(--font-color-black)">{currentUser?.name}</span>
                  <span className="font-['Public_Sans'] text-xs text-(--font-color-green)">Admin</span>
                </span>
                <img className="hidden sm:block" src="/icons/i-chevron-down.svg" alt="" />
              </button>
              <div className="invisible absolute right-0 top-full z-20 mt-2 w-55 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <div className="flex flex-col gap-1 border-b border-(--border-color-gray) p-4">
                  <span className="font-['Public_Sans'] text-sm font-semibold text-(--font-color-black)">{currentUser?.name}</span>
                  <span className="font-['Public_Sans'] text-xs text-(--font-color-green)">Admin</span>
                </div>
                <Link to="/admin/officer-accounts" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 border-b border-(--border-color-gray) px-4 py-3 font-['Public_Sans'] text-xs text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">
                  <img src="/icons/i-user.svg" alt="" />Officer Accounts
                </Link>
                <button type="button" onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-3 text-left font-['Public_Sans'] text-xs text-(--font-color-red) hover:bg-(--bg-color-light-red)">
                  <img src="/icons/i-log-out.svg" alt="" />Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavAdmin;