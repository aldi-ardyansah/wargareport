import { Link } from "react-router";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

function ListComplaint() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-6 py-2">
          <div className="flex flex-col gap-2">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">CITIZEN MANAGEMENT</span>
            <h1 className="font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl">Account & Case History</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray-light) py-2">
            <Link to="/user/list-complaint" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">My complaints</Link>
            <Link to="/user/profile" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Profile</Link>
            <Link to="/user/notification-settings" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Security</Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray-light) sm:text-sm">YOUR TRACKED RECORDS (2)</span>
              <Link to="/user/topic" className="flex items-center gap-2 rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white)">
                <img src="/icons/i-plus.svg" alt="Icon Plus" />File new complaint
              </Link>
            </div>
            <div className="w-full overflow-x-auto overflow-y-hidden rounded-[18px] border border-(--border-color-gray-light)">
              <div className="min-w-225">
                <div className="grid grid-cols-[0.9fr_3.2fr_1.7fr_1fr_1.5fr_0.6fr] gap-3 border-b border-(--border-color-gray-light) bg-(--bg-color-body) px-3 py-3">
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">CASE ID</span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">TITLE / LOCATION</span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">AGENCY</span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">STATUS</span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">SLA TARGET</span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-wide text-(--font-color-gray)">LAST UPDATE</span>
                </div>
                <div className="grid grid-cols-[0.9fr_3.2fr_1.7fr_1fr_1.5fr_0.6fr] items-center gap-3 border-b border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-4">
                  <span className="wrap-break-word font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-green)">CMP-2026-9472</span>
                  <div className="flex flex-col gap-2">
                    <span className="wrap-break-word text-xs font-semibold leading-normal text-(--font-color-black)">Pohon tumbang di depan Kebun Binatang samping Kampus ITB</span>
                    <span className="wrap-break-word text-xs leading-normal text-(--font-color-gray-light)">Jl. Tamansari depan Kebun Binatang</span>
                  </div>
                  <span className="wrap-break-word text-xs leading-normal text-(--font-color-gray)">Dinas Pertamanan dan Hutan Kota Bandung</span>
                  <span className="flex w-fit items-center gap-1 rounded-full border border-(--border-color-gray-light) bg-(--bg-color-body) px-3 py-1.5 text-xs font-medium text-(--font-color-gray)">
                    <img src="/icons/i-clock.svg" alt="Icon Clock" />Submitted
                  </span>
                  <span className="wrap-break-word font-['IBM_Plex_Mono'] text-xs leading-normal text-(--font-color-gray-light)">Awaiting verification</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">Oct 30</span>
                </div>
                <div className="grid grid-cols-[0.9fr_3.2fr_1.7fr_1fr_1.5fr_0.6fr] items-center gap-3 bg-(--bg-color-white) px-3 py-4">
                  <span className="wrap-break-word font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-green)">CMP-2026-8841</span>
                  <div className="flex flex-col gap-2">
                    <span className="wrap-break-word text-xs font-semibold leading-normal text-(--font-color-black)">PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT</span>
                    <span className="wrap-break-word text-xs leading-normal text-(--font-color-gray-light)">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)</span>
                  </div>
                  <span className="wrap-break-word text-xs leading-normal text-(--font-color-gray)">Perumda PAM JAYA (Clean Drinking Water)</span>
                  <span className="flex w-fit items-center gap-1 rounded-full border border-(--border-color-gray-light) bg-(--bg-color-orange-light) px-3 py-1.5 text-xs font-medium text-(--font-color-gray)">
                    <img src="/icons/i-search.svg" alt="Icon Search" />In review
                  </span>
                  <span className="flex items-start gap-1 wrap-break-word font-['IBM_Plex_Mono'] text-xs leading-normal text-(--font-color-red)">
                    <img className="mt-px shrink-0 self-center" src="/icons/i-warning-red.svg" alt="Icon Warning" />Breached by 64h 2m
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">Oct 29</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ListComplaint;