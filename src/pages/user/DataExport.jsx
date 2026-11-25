import { Link } from "react-router";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

function DataExport() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-6 py-2">
          <div className="flex flex-col gap-2">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">CITIZEN MANAGEMENT</span>
            <h1 className="font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) md:text-4xl">Account & Case History</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray-light) py-2">
            <Link to="/user/list-complaint" className="rounded-full px-3 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray) md:px-4">My complaints</Link>
            <Link to="/user/profile" className="rounded-full px-3 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray) md:px-4">Profile</Link>
            <Link to="/user/notification-settings" className="rounded-full px-3 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray) md:px-4">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full bg-(--bg-color-green) px-3 py-2 text-sm font-semibold text-(--font-color-white) md:px-4">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full px-3 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray) md:px-4">Security</Link>
          </div>
          <div className="flex w-full max-w-2xl flex-col rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 md:p-6">
            <div className="flex flex-col gap-1">
              <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Privacy Rights & Data Portability</h2>
              <span className="text-xs font-normal text-(--font-color-gray-light)">Review personal records retained under municipal open data laws.</span>
            </div>
            <span className="pt-4 text-xs font-normal leading-relaxed text-(--font-color-gray)">Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No. 14/2008 on Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated from public registers.</span>
            <div className="mt-4 flex flex-col gap-3 rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-body) p-4">
              <span className="text-sm font-semibold text-(--font-color-black)">Download your case archive</span>
              <span className="text-xs font-normal leading-relaxed text-(--font-color-gray-light)">Export all submitted complaints, attached media metadata, and officer replies as standard JSON.</span>
              <a href="#" className="flex w-fit items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-2 text-xs font-semibold text-(--font-color-black)">
                <span className="flex items-center justify-center"><img src="/icons/i-download.svg" alt="Icon Download" className="h-4 w-4" /></span>Download JSON archive
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DataExport;