import { useState } from "react";
import { Link } from "react-router";
import Login from "./Login";
import Register from "./Register";

function Nav() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <header>
      <nav className="fixed top-0 z-1000 flex w-full flex-col items-center justify-between gap-2.5 border-b border-(--border-color-gray) bg-(--bg-color-white) px-6 py-3.75 md:flex-row md:px-25">
        <div className="flex items-center gap-2">
          <img src="/icons/logo.svg" alt="Logo" />
          <Link className="font-['Fraunces'] text-[19px] font-bold text-(--font-color-black)" to="/">WargaReport</Link>
          <a className="md:hidden"><img src="/icons/i-hamburger.svg" alt="Icon Hamburger" /></a>
        </div>
        <div className="flex items-center gap-8">
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray) font-medium" to="/live-feed">Live Feed</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray) font-medium" to="/track">Track</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray) font-medium" to="/help">How it works</Link>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setActiveModal("login")} className="flex items-center gap-2 rounded-full border border-none px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-gray)">
            <img src="/icons/i-log-in.svg" alt="Icon Login" />Sign In
          </button>
          <Link to="/user/topic" className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-white)">
            <img src="/icons/i-plus.svg" alt="Icon Plus" />Report
          </Link>
        </div>
      </nav>

      <Login
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onSwitchToRegister={() => setActiveModal("register")}
      />

      <Register
        isOpen={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        onSwitchToLogin={() => setActiveModal("login")}
      />
    </header>
  )
}

export default Nav;