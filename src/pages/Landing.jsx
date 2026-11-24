import { Link } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Landing() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <Nav />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex flex-col gap-6 py-10 sm:py-12 md:py-16">
          <h1 className="w-full font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl md:w-[65%] md:text-5xl">See something broken? Snap it. We push the city to fix it.</h1>
          <p className="max-w-162.5 text-md leading-[1.75] text-(--font-color-gray)">Potholes, dark streetlights, PAM water leaks, or trash piles. Drop photos, track fixes like a food delivery order, and keep authorities accountable.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="flex items-center gap-2 rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-5 py-3 text-sm font-semibold text-(--font-color-white) sm:px-6" to="/user/proof">
              <img src="/icons/i-camera.svg" alt="Icon Camera" />Snap a report<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
            </Link>
            <Link className="rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-5 py-3 text-sm font-semibold text-(--font-color-black)" to="/track">Track a case</Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-black)">48</span>
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">reports today</span>
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">·</span>
            <span className="font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">194</span>
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">fixed this week</span>
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">·</span>
            <span className="font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">2.3 days</span>
            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">avg response</span>
          </div>
        </div>
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">01</span>
            <span className="font-['Fraunces'] text-md font-semibold text-(--font-color-black)">Snap & Tag</span>
            <p className="text-xs text-(--font-color-gray)">Take a photo or quick audio of the issue and provide the street location.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">02</span>
            <span className="font-['Fraunces'] text-md font-semibold text-(--font-color-black)">Report Review</span>
            <p className="text-xs text-(--font-color-gray)">Our team verifies evidence and routes directly to the responsible bureau.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">03</span>
            <span className="font-['Fraunces'] text-md font-semibold text-(--font-color-black)">Field Fix</span>
            <p className="text-xs text-(--font-color-gray)">Dispatched technicians do the repairs under strict public SLA windows.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">04</span>
            <span className="font-['Fraunces'] text-md font-semibold text-(--font-color-black)">Proof & Close</span>
            <p className="text-xs text-(--font-color-gray)">Before/after photos published openly so everyone sees the resolution.</p>
          </div>
        </section>
        <article className="mt-10 flex flex-col gap-6 border-t border-(--border-color-gray) pt-6">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Recent Community Reports</h3>
              <span className="text-xs text-(--font-color-gray-light)">Verified reports lodged in Jakarta and surrounding regions</span>
            </div>
            <Link className="text-sm font-semibold leading-relaxed text-(--font-color-green)" to="/live-feed">View live feed<br />→</Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-row gap-3 overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-3 sm:p-4">
              <img className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24" src="/images/article-1.png" alt="Article 1" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-orange-light) bg-(--bg-color-orange-light) px-2 py-1 text-xs font-medium text-(--font-color-orange)"><img src="/icons/i-search.svg" alt="Icon Search" />In review</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">CMP-2026-8841</span>
                </div>
                <span className="text-sm font-semibold text-(--font-color-black)">PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT</span>
                <div className="flex items-start gap-1 text-xs leading-normal text-(--font-color-gray-light)">
                  <img className="mt-0.5 h-3 w-3 shrink-0" src="/icons/i-map-pin.svg" width="12px" height="12px" alt="Icon Map Pin" />Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-gray) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)"><img src="/icons/i-thumbs-up.svg" alt="Icon Thumbs Up" />148</span>
                  <Link className="shrink-0 text-xs font-semibold leading-relaxed text-(--font-color-green)" to="/detail-report">Inspect<br />→</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-3 sm:p-4">
              <img className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24" src="/images/article-2.png" alt="Article 2" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-blue-light) bg-(--bg-color-blue-light) px-2 py-1 text-xs font-medium text-(--font-color-blue)"><img src="/icons/i-user-check.svg" alt="Icon User Check" />Assigned</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">CMP-2026-8819</span>
                </div>
                <span className="text-sm font-semibold text-(--font-color-black)">Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage</span>
                <div className="flex items-start gap-1 text-xs leading-normal text-(--font-color-gray-light)">
                  <img className="mt-0.5 h-3 w-3 shrink-0" src="/icons/i-map-pin.svg" width="12px" height="12px" alt="Icon Map Pin" />Jl. Gatot Subroto Kav. 38 (depan Menara Mulia)
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-gray) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)"><img src="/icons/i-thumbs-up.svg" alt="Icon Thumbs Up" />92</span>
                  <Link className="shrink-0 text-xs font-semibold leading-relaxed text-(--font-color-green)" to="#">Inspect<br />→</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-3 sm:p-4">
              <img className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24" src="/images/article-3.png" alt="Article 3" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) px-2 py-1 text-xs font-medium text-(--font-color-green)"><img src="/icons/i-check-circle.svg" alt="Icon Check Circle" />Resolved</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">CMP-2026-8794</span>
                </div>
                <span className="text-sm font-semibold text-(--font-color-black)">Complete PJU streetlight outage spanning 300 meters along residential corridor</span>
                <div className="flex items-start gap-1 text-xs leading-normal text-(--font-color-gray-light)">
                  <img className="mt-0.5 h-3 w-3 shrink-0" src="/icons/i-map-pin.svg" width="12px" height="12px" alt="Icon Map Pin" />Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-gray) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)"><img src="/icons/i-thumbs-up.svg" alt="Icon Thumbs Up" />64</span>
                  <Link className="shrink-0 text-xs font-semibold leading-relaxed text-(--font-color-green)" to="#">Inspect<br />→</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-3 sm:p-4">
              <img className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24" src="/images/article-4.png" alt="Article 4" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-orange-light) bg-(--bg-color-orange-light) px-2 py-1 text-xs font-medium text-(--font-color-orange)"><img src="/icons/i-search.svg" alt="Icon Search" />In review</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">CMP-2026-8720</span>
                </div>
                <span className="text-sm font-semibold text-(--font-color-black)">Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang</span>
                <div className="flex items-start gap-1 text-xs leading-normal text-(--font-color-gray-light)">
                  <img className="mt-0.5 h-3 w-3 shrink-0" src="/icons/i-map-pin.svg" width="12px" height="12px" alt="Icon Map Pin" />Kampung Kemang, RT 02 / RW 01 (bantaran Kali Krukut)
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-(--border-color-gray) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)"><img src="/icons/i-thumbs-up.svg" alt="Icon Thumbs Up" />78</span>
                  <Link className="shrink-0 text-xs font-semibold leading-relaxed text-(--font-color-green)" to="#">Inspect<br />→</Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;