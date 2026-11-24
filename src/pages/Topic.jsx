import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Topic() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9">
          <div className="w-full lg:w-1/4">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">COMMUNITY INTAKE</span>
            <h2 className="mt-2 font-['Fraunces'] text-2xl font-semibold text-(--font-color-black)">Report an Issue</h2>
            <span className="mt-2 block text-sm leading-[1.4] text-(--font-color-gray)">Public civic reporting for Indonesian municipal services.</span>
            <div className="mt-3 flex flex-col gap-1">
              <span className="button-flow-green flex items-center gap-3 rounded-full bg-(--bg-color-green) px-3 py-3 text-(--font-color-white)">
                <span className="font-['IBM_Plex_Mono'] text-xs">01</span>
                <span className="text-sm">Topic</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">02</span>
                <span className="text-sm">Location</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">03</span>
                <span className="text-sm">Proof</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">04</span>
                <span className="text-sm">Review & Send</span>
              </span>
            </div>
            <div className="mt-3 rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-white) p-3">
              <span className="flex items-center gap-2 text-xs font-semibold text-(--font-color-black)">
                <img className="shrink-0" src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="mt-2 text-xs leading-[1.7] text-(--font-color-gray-light)">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link to="/live-feed" className="mt-3 block text-sm font-semibold text-(--font-color-green)">Cancel and return to feed</Link>
          </div>
          <div className="w-full rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-5 md:p-7.5 lg:w-3/4">
            <div className="mb-3">
              <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">STEP 01 OF 04</span>
              <h1 className="mt-1 font-['Fraunces'] text-2xl font-semibold text-(--font-color-black) sm:text-3xl">What needs fixing?</h1>
              <span className="mt-1 block text-sm text-(--font-color-gray)">Select the municipal service category that best matches the issue observed.</span>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="roads-transit" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-warning-green.svg" alt="Icon Warning" />
                  Roads & Transit
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">48h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Pothole / Sidewalk (Trotoar)</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Potholes, broken sidewalk slabs, damaged drainage grates</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="water-sewage" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-water-green.svg" alt="Icon Water" />
                  Water & Sewage
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">24h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Water Burst / Pipa Bocor</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Pipeline bursts, flooding tap leaks, dry taps</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="street-lighting" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-lighting-green.svg" alt="Icon Lighting" />
                  Street Lighting
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">72h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Dark Street / PJU Padam</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Dark street lamps (PJU), damaged base poles, broken traffic signals</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="sanitation-waste" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-trashbin-green.svg" alt="Icon Trashbin" />
                  Sanitation & Waste
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">36h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Trash Pile / Sampah Liar</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Illegal dump spots in alleys, overflowing TPS bins, river refuse</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="public-parks-trees" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-tree-green.svg" alt="Icon Tree" />
                  Public Parks & Trees
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">48h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Hazardous Tree / Rawan Tumbang</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Falling branches (pohon rawan tumbang), RPTRA playground hazards</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="noise-disturbance" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-speaker-green.svg" alt="Icon Speaker" />
                  Noise & Disturbance
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">48h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Late-night Noise / Ketertiban</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Nocturnal construction past 22:00 WIB, sidewalk encroachment</p>
              </label>
              <label className="relative cursor-pointer rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-3 transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light)">
                <input type="radio" name="topic" value="building-zoning" className="sr-only" />
                <div className="flex w-full items-center gap-2 text-sm font-semibold text-(--font-color-black)">
                  <img className="shrink-0" src="/icons/i-building-green.svg" alt="Icon Building" />
                  Building & Zoning
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-(--bg-color-green-light) px-2 py-1 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-green)">72h SLA</span>
                </div>
                <span className="mt-3 block text-xs text-(--font-color-gray)">Unsafe Construction / Bangunan</span>
                <p className="mt-2 text-xs leading-[1.4] text-(--font-color-gray-light)">Unsafe scaffolding, structural hazards, building boundary violations</p>
              </label>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-(--border-color-gray-light) pt-4">
              <Link to="/live-feed" className="px-4 py-2 text-sm font-semibold text-(--font-color-green)">Cancel</Link>
              <Link to="/location" className="flex items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-2.5 text-sm font-semibold text-(--font-color-white)">
                Continue<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}