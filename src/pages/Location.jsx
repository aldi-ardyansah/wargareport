import { Link } from "react-router";
import NavLogin from "../components/NavUser";
import Footer from "../components/Footer";

function Location() {
  const locations = [
    "Jl. Dago",
    "Institut Teknologi Bandung (ITB)",
    "Simpang Dago",
    "Pasar Dago",
    "Jl. Ir. H. Juanda"
  ];

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9">
          <div className="w-full lg:w-1/4">
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-[1px] text-(--font-color-gray-light) font-medium">COMMUNITY INTAKE</span>
            <h2 className="font-['Fraunces'] mt-2 text-2xl font-semibold text-(--font-color-black)">Report an Issue</h2>
            <span className="font-['Public_Sans'] mt-2 block text-sm leading-[1.4] text-(--font-color-gray)">Public civic reporting for Indonesian municipal services.</span>
            <div className="mt-3 flex flex-col gap-1">
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">01</span>
                <span className="font-['Public_Sans'] text-sm">Topic</span>
                <img className="h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-green flex items-center gap-3 rounded-full bg-(--bg-color-green) px-3 py-3 text-(--font-color-white)">
                <span className="font-['IBM_Plex_Mono'] text-xs">02</span>
                <span className="font-['Public_Sans'] text-sm">Location</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">03</span>
                <span className="font-['Public_Sans'] text-sm">Proof</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">04</span>
                <span className="font-['Public_Sans'] text-sm">Review & Send</span>
              </span>
            </div>
            <div className="mt-3 rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-white) p-3">
              <span className="font-['Public_Sans'] flex items-center gap-2 text-xs font-semibold text-(--font-color-black)">
                <img src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="font-['Public_Sans'] mt-2 text-xs leading-[1.7] text-(--font-color-gray-light)">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link to="/live-feed" className="font-['Public_Sans'] mt-3 block text-sm font-semibold text-(--font-color-green)">Cancel and return to feed</Link>
          </div>
          <div className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) p-5 lg:w-3/4 md:p-8">
            <div className="flex flex-col gap-2 border-b border-(--border-color-gray) pb-6">
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">STEP 02 OF 04</span>
              <h1 className="font-['Fraunces'] text-2xl font-semibold text-(--font-color-black)">Where is it located?</h1>
              <span className="font-['Public_Sans'] text-xs leading-[1.6] text-(--font-color-gray)">Provide street address, RT/RW, or notable landmark for inspection crews.</span>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray)">KELURAHAN / KECAMATAN & WILAYAH</label>
              <select className="w-full rounded-lg border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-3 font-['Public_Sans'] text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)">
                <option className="font-['Public_Sans']">Coblong</option>
              </select>
              <span className="font-['IBM_Plex_Mono'] mt-2 text-xs font-medium tracking-[1px] text-(--font-color-gray)">COMMON AREAS IN COBLONG · KOTA BANDUNG</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <label key={location} className="cursor-pointer rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2 font-['Public_Sans'] text-xs text-(--font-color-gray) transition-colors has-checked:border-(--border-color-green) has-checked:bg-(--bg-color-green-light) has-checked:text-(--font-color-green)">
                    <input className="hidden" type="radio" name="location-chip" value={location} />
                    {location}
                  </label>
                ))}
              </div>
              <label className="font-['IBM_Plex_Mono'] mt-3 text-xs font-medium tracking-[1px] text-(--font-color-gray)">STREET ADDRESS, RT/RW, OR LANDMARK *</label>
              <input className="w-full rounded-lg border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-3 font-['Public_Sans'] text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" type="text" defaultValue="Jl. Tamansari depan Kebun Binatang" />
              <div className="flex flex-wrap items-center gap-3 rounded-lg bg-(--bg-color-gray) px-4 py-3">
                <img src="/icons/i-map-pin.svg" alt="" />
                <span className="font-['Public_Sans'] text-xs font-medium text-(--font-color-green)">Coordinates auto-pinned</span>
                <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">6.2088° S, 106.8456° E (WIB)</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 border-t border-(--border-color-gray) pt-5 sm:flex-row">
              <Link className="font-['Public_Sans'] flex items-center justify-center gap-2 rounded-full border border-(--border-color-gray) px-5 py-3 text-sm font-medium text-(--font-color-gray)" to="/user/topic">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link className="font-['Public_Sans'] flex items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-3 text-sm font-semibold text-(--font-color-white)" to="/user/proof">
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

export default Location;