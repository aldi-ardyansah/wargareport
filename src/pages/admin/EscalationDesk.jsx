import { useState } from "react";
import { Link } from "react-router";
import NavAdmin from "../../components/NavAdmin";
import Footer from "../../components/Footer";
import ModalReview from "../../components/ModalReview";

function EscalationDesk() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavAdmin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-3 py-5">
          <span className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-widest text-(--font-color-gray-light)">SYSTEM GOVERNANCE</span>
          <h1 className="font-['Fraunces'] text-2xl font-semibold text-(--font-color-black) sm:text-2xl md:text-3xl">Civic Administration & Policies</h1>
          <p className="max-w-180 text-sm leading-[1.75] text-(--font-color-gray)">Verify incoming citizen reports, route them to the responsible bureau, and configure statutory SLA benchmarks, taxonomy, and agency contacts.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray) pb-3">
          <Link to="/admin/escalation-desk" className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white)">
            Escalation Desk
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 font-['IBM_Plex_Mono'] text-xs">1</span>
          </Link>
          <Link to="/admin/sla-benchmark" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">SLA Benchmarks</Link>
          <Link to="/admin/categories" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Categories</Link>
          <Link to="/admin/agencies" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Agencies</Link>
          <Link to="/admin/officer-accounts" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Officer Accounts</Link>
          <Link to="/admin/moderation" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Moderation</Link>
        </div>

        <section className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <h2 className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">VERIFICATION & AGENCY ROUTING</h2>
              <p className="text-xs leading-relaxed text-(--font-color-gray-light)">1 report awaiting evidence review and agency routing. Oldest submitted Nov 20, 07:09 AM GMT+7.</p>
            </div>
            <Link to="#" className="flex w-full items-center justify-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-2 text-xs font-semibold text-(--font-color-black) sm:w-fit">
              <img src="/icons/i-shield-black.svg" alt="Icon Shield Black" />
              Open officer queue
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Search by ID, title, category, or street..."
              className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-2 text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light) focus:border-(--border-color-green) sm:max-w-138"
            />

            <div className="overflow-x-auto rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white)">
              <table className="w-full min-w-225 border-collapse text-left">
                <thead>
                  <tr className="border-b border-(--border-color-gray) bg-(--bg-color-gray)">
                    <th className="px-4 py-4 font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-gray)">CASE</th>
                    <th className="px-4 py-4 font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-gray)">PROPOSED ROUTE</th>
                    <th className="px-4 py-4 font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-gray)">SUBMITTED</th>
                    <th className="px-4 py-4 font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-gray)">EVIDENCE</th>
                    <th className="px-4 py-4 text-center font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-gray)">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-(--font-color-black)">Heavy excavation equipment operating past 22:00 WIB in residential alley</span>
                        <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">CMP-2026-8601</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-(--font-color-black)">Noise & Disturbance</span>
                        <span className="text-xs text-(--font-color-gray-light)">Satpol PP Provinsi DKI Jakarta (Public Order)</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 font-['IBM_Plex_Mono'] text-xs text-(--font-color-black)">Nov 20, 07:09 AM GMT+7</td>
                    <td className="whitespace-nowrap px-4 py-5 font-['IBM_Plex_Mono'] text-xs text-(--font-color-black)">1 file</td>
                    <td className="px-4 py-5 text-center">
                      <button type="button" onClick={() => setIsReviewOpen(true)} className="inline-flex rounded-full border border-(--border-color-gray) px-2 py-1 text-xs font-semibold text-(--font-color-black) hover:bg-(--bg-color-gray)">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-(--font-color-gray-light) sm:hidden">Geser tabel ke samping untuk melihat kolom lainnya.</p>
          </div>
        </section>
      </main>
      <ModalReview isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      <Footer />
    </div>
  );
}

export default EscalationDesk;