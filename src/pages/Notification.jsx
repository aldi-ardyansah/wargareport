import { useState } from "react";
import { Link } from "react-router";
import NavLogin from "../components/NavUser";
import Footer from "../components/Footer";

function Notification() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Unread", "Status", "Replies"];

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="mx-auto max-w-1100px">
          <div className="mb-5 border-b border-(--border-color-gray-light) pb-3">
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray-light)">ALERTS & ACTIVITY</span>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <h1 className="font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl">Notifications</h1>
              <span className="flex cursor-pointer items-center gap-2 text-sm font-medium text-(--font-color-green)">
                <img src="/icons/i-check-green.svg" alt="Icon Check" />Mark all as read
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="mr-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">FILTER:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer rounded-full border px-3 py-2 text-xs sm:px-4 ${
                    activeCategory === category
                      ? "border-(--border-color-green) bg-(--bg-color-green) font-semibold text-(--font-color-white)"
                      : "border-(--border-color-gray-light) bg-(--bg-color-white) text-(--font-color-black)"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex h-fit flex-col overflow-hidden rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white)">
              <div className="border-l-4 border-(--border-color-green) bg-(--bg-color-green-light) p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">CMP-2026-9472</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">04:41 PM</span>
                </div>
                <div className="mb-2 text-xs font-semibold text-(--font-color-black)">
                  Report received — verification pending
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-(--font-color-gray-light)">Status Change</span>
                  <span className="size-2 rounded-full bg-(--bg-color-green)"></span>
                </div>
              </div>
              <div className="border-t border-(--border-color-gray-light) p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">CMP-2026-8841</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">01:28 PM</span>
                </div>
                <div className="mb-2 text-xs font-semibold text-(--font-color-black)">
                  Status changed to In review
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-(--font-color-gray-light)">Status Change</span>
                  <span className="size-2 rounded-full bg-(--bg-color-green)"></span>
                </div>
              </div>
            </div>
            <div className="h-fit overflow-hidden rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--border-color-gray-light) pb-4">
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray-light)">INCIDENT REFERENCE</span>
                  <span className="font-['IBM_Plex_Mono'] text-base font-semibold text-(--font-color-green) sm:text-lg">CMP-2026-9472</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-(--border-color-gray-light) bg-(--bg-color-body) px-3 py-1">
                  <img src="/icons/i-clock.svg" alt="Icon Clock" />
                  <span className="text-sm text-(--font-color-black)">Submitted</span>
                </div>
              </div>
              <div className="py-4">
                <div className="mb-4 flex flex-col gap-1">
                  <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Report received — verification pending</h2>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">Dispatched Oct 30, 04:41 PM GMT+7</span>
                </div>
                <p className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-body) p-4 text-sm leading-[1.7] text-(--font-color-black)">
                  Your report CMP-2026-9472 is queued for WargaReport evidence verification. Proposed bureau: Dinas Pertamanan dan Hutan Kota DKI Jakarta. The SLA countdown starts once the report is routed.
                </p>
                <Link to="/track" className="mt-4 flex w-fit flex-wrap items-center gap-3 rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">
                  Open complaint tracking record
                  <img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Notification;