import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import NavUser from "./NavUser";
import NavAdmin from "./NavAdmin";

function NavGlobal() {
  const [activeModal, setActiveModal] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, justLoggedOut, resetJustLoggedOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginOpen = activeModal === "login" || Boolean(location.state?.from);

  useEffect(() => {
    if (justLoggedOut) {
      resetJustLoggedOut();
    }
  }, [justLoggedOut, resetJustLoggedOut]);

  function handleCloseModal() {
    setActiveModal(null);

    if (location.state?.from) {
      navigate("/", { replace: true, state: null });
    }
  }

  if (currentUser?.role === "user") {
    return <NavUser />;
  }

  if (currentUser?.role === "admin") {
    return <NavAdmin />;
  }

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
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-row flex-wrap items-center justify-center gap-3 lg:flex lg:w-auto`}>
          <>
            <button type="button" onClick={() => { setActiveModal("login"); setIsMenuOpen(false); }} className="flex items-center gap-2 rounded-full border border-none px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-gray)">
              <img src="/icons/i-log-in.svg" alt="Icon Login" />Sign In
            </button>
            <Link to="/user/topic" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-white)">
              <img src="/icons/i-plus.svg" alt="Icon Plus" />Report
            </Link>
          </>
        </div>
      </nav>

      <ModalLogin
        isOpen={isLoginOpen}
        onClose={handleCloseModal}
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