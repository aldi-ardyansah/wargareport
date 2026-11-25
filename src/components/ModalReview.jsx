import { Link } from "react-router";

function ModalReview({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-2000 flex justify-end bg-black/50">
      <div className="flex h-full w-[90%] flex-col overflow-y-auto border-l border-(--border-color-gray) bg-(--bg-color-white) sm:w-full sm:max-w-105">
        <div className="sticky top-0 flex shrink-0 items-center justify-between border-b border-(--border-color-gray) bg-(--bg-color-gray) px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex flex-col gap-1">
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-widest text-(--font-color-gray-light)">ESCALATION DESK</span>
            <h2 className="font-['Fraunces'] text-lg font-semibold text-(--font-color-black)">Verify incoming report</h2>
          </div>
          <button type="button" onClick={onClose} className="text-xl text-(--font-color-gray)">×</button>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5">
          <div className="flex flex-col gap-1 rounded-xl border border-dashed border-(--border-color-gray) bg-(--bg-color-gray) p-3">
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">CMP-2026-8601</span>
            <h3 className="text-base font-semibold leading-relaxed text-(--font-color-black)">Heavy excavation equipment operating past 22:00 WIB in residential alley</h3>
            <p className="text-sm leading-relaxed text-(--font-color-gray)">Continuous hydraulic jackhammer and pile driver activity past 22:00 WIB at commercial construction site behind Jl. Senopati No. 18. Violates peaceful night hours under Perda No. 8/2007.</p>
            <p className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-(--font-color-gray-light)">Jl. Senopati No. 18, RT 06 / RW 02 · Selong, Kebayoran Baru, Jakarta Selatan</p>
            <p className="font-['IBM_Plex_Mono'] text-sm text-(--font-color-gray-light)">Reported by an anonymous resident</p>
            <p className="font-['IBM_Plex_Mono'] text-sm text-(--font-color-gray-light)">1 evidence file · submitted Nov 20, 07:09 AM GMT+7</p>
            <Link to="/admin/review-report" className="text-sm font-semibold text-(--font-color-green)">Open full case record →</Link>
          </div>

          <button type="button" className="flex items-center gap-2 rounded-xl border border-(--border-color-gray) px-3 py-3 text-left text-xs font-medium text-(--font-color-gray)">
            <span>•</span>
            Review attached evidence (1)
          </button>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">CATEGORY</label>
              <select className="w-full rounded-xl border border-(--border-color-green) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none">
                <option>Noise & Disturbance</option>
                <option>Infrastructure</option>
                <option>Public Safety</option>
                <option>Environment</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">ROUTE TO AGENCY</label>
              <select className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none">
                <option>Satpol PP Provinsi DKI Jakarta (Public Order)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">PRIORITY</label>
                <select className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none">
                  <option>Standard</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">SLA WINDOW (HOURS)</label>
                <input type="number" defaultValue="48" className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">ROUTING / AUDIT NOTE</label>
              <textarea rows="4" placeholder="Evidence check, priority override, or reason for rejection..." className="w-full resize-none rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-3 text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light) focus:border-(--border-color-green)" />
              <span className="text-xs text-(--font-color-gray-light)">Required when rejecting. Saved to the public audit trail.</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col-reverse items-stretch gap-2 border-t border-(--border-color-gray) pt-4 sm:flex-row sm:items-center sm:justify-end">
            <button type="button" onClick={onClose} className="w-full rounded-full border border-(--border-color-gray) px-4 py-2 text-xs font-semibold text-(--font-color-black) sm:w-auto">Cancel</button>
            <button type="button" className="w-full rounded-full bg-(--bg-color-red) px-4 py-2 text-xs font-semibold text-white sm:w-auto">Reject report</button>
            <button type="button" className="w-full rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) sm:w-auto">Verify & route</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalReview;