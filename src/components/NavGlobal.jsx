import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function NavGlobal() {
  const [activeModal, setActiveModal] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <header>
      <nav className="fixed top-0 z-1000 flex w-full flex-col items-center justify-between gap-2.5 border-b border-(--border-color-gray) bg-(--bg-color-white) px-6 py-3 md:flex-row md:px-25">
        <div className="flex w-full items-center justify-between md:w-auto">
          <div className="flex items-center gap-2">
            <img src="/icons/logo.svg" alt="Logo" />
            <Link className="font-['Fraunces'] text-lg font-bold text-(--font-color-black)" to="/">WargaReport</Link>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <img src="/icons/i-hamburger.svg" alt="Icon Hamburger" />
          </button>
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-row items-center justify-center gap-4 md:flex md:w-auto md:gap-8`}>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/live-feed" onClick={() => setIsMenuOpen(false)}>Live Feed</Link>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/track" onClick={() => setIsMenuOpen(false)}>Track</Link>
          <Link className="font-['Public_Sans'] text-xs font-medium text-(--font-color-gray) sm:text-sm" to="/help" onClick={() => setIsMenuOpen(false)}>How it works</Link>
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-row items-center justify-center gap-3 md:flex md:w-auto`}>
          {currentUser ? (
            <>
              <Link to={currentUser.role === "admin" ? "/admin/escalation-desk" : "/user/topic"} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 rounded-full border border-(--border-color-gray) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-gray)">
                {currentUser.name}
              </Link>
              <button type="button" onClick={() => { logout(); setIsMenuOpen(false); }} className="rounded-full px-4 py-2 text-xs font-semibold text-(--font-color-red)">Sign Out</button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => { setActiveModal("login"); setIsMenuOpen(false); }} className="flex items-center gap-2 rounded-full border border-none px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-gray)">
                <img src="/icons/i-log-in.svg" alt="Icon Login" />Sign In
              </button>
              <Link to="/user/topic" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-white)">
                <img src="/icons/i-plus.svg" alt="Icon Plus" />Report
              </Link>
            </>
          )}
        </div>
      </nav>

      <ModalLogin
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onSwitchToRegister={() => setActiveModal("register")}
      />

      <ModalRegister
        isOpen={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        onSwitchToLogin={() => setActiveModal("login")}
      />
    </header>
  )
}

export default NavGlobal;