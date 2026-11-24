import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Receipt() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="w-full rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-5 md:w-[60%] md:p-7.5">
          <div className="border-b border-(--border-color-gray-light) pb-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-full border border-(--border-color-gray-light) bg-(--bg-color-body) px-4 py-2 text-sm font-medium text-(--font-color-gray)">
                <img src="/icons/i-clock.svg" alt="Icon Clock" />
                Submitted
              </div>
              <span className="font-['IBM_Plex_Mono'] text-sm text-(--font-color-gray-light)">Logged 04:41 PM</span>
            </div>
            <span className="mt-4 font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">OFFICIAL TRACKING REFERENCE</span>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="font-['IBM_Plex_Mono'] text-2xl font-semibold text-(--font-color-green) sm:text-3xl md:text-4xl">CMP-2026-9472</span>
              <span className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--border-color-gray-light)">
                <img src="/icons/i-copy.svg" alt="Icon Copy" />
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-body) p-4">
              <span className="text-sm font-semibold text-(--font-color-black)">Pohon tumbang di depan Kebun Binatang samping Kampus ITB</span>
              <span className="font-['IBM_Plex_Mono'] text-xs leading-[1.6] text-(--font-color-gray-light)">Dinas Pertamanan dan Hutan Kota · Jl. Tamansari depan Kebun Binatang</span>
            </div>
          </div>
          <div className="border-b border-(--border-color-gray-light) py-4">
            <span className="font-['Fraunces'] text-base font-semibold text-(--font-color-black)">What happens next</span>
            <ol className="mt-4 list-decimal space-y-3 pl-5 marker:text-(--font-color-green)">
              <li className="text-sm leading-[1.6] text-(--font-color-gray)">Your report is awaiting evidence verification. Proposed bureau: <span className="font-bold text-(--font-color-gray)">Dinas Pertamanan dan Hutan Kota</span>.</li>
              <li className="text-sm leading-[1.6] text-(--font-color-gray)">A duty inspector will assess site urgency within the target <span className="font-bold text-(--font-color-gray)">48-hour SLA window</span> once routed.</li>
              <li className="text-sm leading-[1.6] text-(--font-color-gray)">Status transitions and official statements will appear directly on your tracking page.</li>
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link to="/track" className="flex items-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-2.5 text-sm font-semibold text-(--font-color-white)">
              Track report status<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
            </Link>
            <a href="#" className="flex items-center gap-2 rounded-full border border-(--border-color-gray-light) px-5 py-2.5 text-sm font-medium text-(--font-color-black)">
              <img src="/icons/i-print.svg" alt="Icon Print" />Print receipt
            </a>
            <Link to="/live-feed" className="text-sm font-medium text-(--font-color-green)">Back to feed</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}