import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

function NavUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true, state: null });
  }

  const initials = currentUser?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header>
      <nav className="fixed top-0 z-1000 flex w-full flex-col items-center justify-between gap-2.5 border-b border-(--border-color-gray) bg-(--bg-color-white) px-6 py-3 lg:flex-row lg:px-25">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <div className="flex items-center gap-2">
            <img src="/icons/logo.svg" alt="Logo" />
            <Link className="font-['Fraunces'] text-lg font-bold text-(--font-color-black)" to="/">WargaReport</Link>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            <img src="/icons/i-hamburger.svg" alt="Icon Hamburger" />
          </button>
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-row flex-wrap items-center justify-center gap-4 lg:flex lg:w-auto lg:gap-8`}>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/live-feed" onClick={() => setIsMenuOpen(false)}>Live Feed</Link>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/track" onClick={() => setIsMenuOpen(false)}>Track</Link>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/help" onClick={() => setIsMenuOpen(false)}>How it works</Link>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/user/list-complaint" onClick={() => setIsMenuOpen(false)}>My Reports</Link>
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-row flex-wrap items-center justify-center gap-4 lg:flex lg:w-auto`}>
          <Link to="/user/notification" onClick={() => setIsMenuOpen(false)}>
            <img src="/icons/i-notifications.svg" alt="Icon Notifications" />
          </Link>
          <div className="group relative">
            <span className="flex cursor-pointer items-center gap-2 rounded-full border border-(--border-color-gray) px-2 py-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-(--bg-color-green) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-green)">{initials}</div>
              <div className="flex flex-col">
                <span className="font-['Public_Sans'] text-xs font-semibold text-(--font-color-black)">{currentUser?.name}</span>
                <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-gray)">Citizen</span>
              </div>
              <img src="/icons/i-chevron-down.svg" alt="" />
            </span>
            <div className="invisible absolute right-0 top-full z-20 mt-2 w-55 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-1 border-b border-(--border-color-gray) p-4">
                <span className="font-['Public_Sans'] text-sm font-semibold text-(--font-color-black)">{currentUser?.name}</span>
                <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-gray)">{currentUser?.email}</span>
              </div>
              <Link to="/user/list-complaint" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 border-b border-(--border-color-gray) px-4 py-3 font-['Public_Sans'] text-xs text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">
                <img src="/icons/i-user.svg" alt="" />My Filed Reports
              </Link>
              <button type="button" onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-3 text-left font-['Public_Sans'] text-xs text-(--font-color-red) hover:bg-(--bg-color-light-red)">
                <img src="/icons/i-log-out.svg" alt="" />Sign Out
              </button>
            </div>
          </div>
          <Link className="flex items-center gap-2 rounded-full bg-(--bg-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-white" to="/user/topic" onClick={() => setIsMenuOpen(false)}>
            <img src="/icons/i-plus.svg" alt="Icon Plus" />Report an Issue
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavUser;