import { Link } from "react-router";

function NavAdmin() {
  return (
    <header>
      <nav className="fixed top-0 z-1000 w-full border-b border-(--border-color-gray) bg-(--bg-color-white) px-4 py-3 sm:px-6 md:px-25">
        <div className="mx-auto grid w-full grid-cols-2 items-center gap-3 md:grid-cols-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/icons/logo.svg" alt="Logo" />
            <span className="font-['Fraunces'] text-base font-bold text-(--font-color-black) sm:text-[19px]">WargaReport</span>
          </Link>
          <div className="order-3 col-span-2 flex justify-center md:order-0 md:col-span-1">
            <Link to="admin/escalation-desk">
              <div className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-3 py-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-white) sm:text-sm">
                <img src="/icons/i-shield-white.svg" alt="Icon Shield" />
                Admin Console
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3 sm:gap-6">
            <Link to="admin/notification">
              <img src="/icons/i-bell.svg" alt="Icon Notifications" />
            </Link>
            <button type="button" className="flex items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-2 py-1 sm:gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-(--border-color-green) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">SR</span>
              <span className="hidden flex-col items-start sm:flex">
                <span className="font-['Public_Sans'] text-xs font-semibold text-(--font-color-black)">Siti Rahma</span>
                <span className="font-['Public_Sans'] text-xs text-(--font-color-green)">Admin</span>
              </span>
              <img className="hidden sm:block" src="/icons/i-chevron-down.svg" alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavAdmin;