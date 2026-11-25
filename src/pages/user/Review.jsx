import { Link } from "react-router";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

export default function Review() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto min-h-200 w-[90%] px-4 pt-25 pb-20 md:px-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9">
          <div className="w-full lg:w-1/4">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">COMMUNITY INTAKE</span>
            <h2 className="mt-2 font-['Fraunces'] text-2xl font-semibold text-(--font-color-black)">Report an Issue</h2>
            <span className="mt-2 block text-sm leading-[1.4] text-(--font-color-gray)">Public civic reporting for Indonesian municipal services.</span>
            <div className="mt-3 flex flex-col gap-1">
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">01</span>
                <span className="text-sm">Topic</span>
                <img className="ml-auto h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">02</span>
                <span className="text-sm">Location</span>
                <img className="ml-auto h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">03</span>
                <span className="text-sm">Proof</span>
                <img className="ml-auto h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-green flex items-center gap-3 rounded-full bg-(--bg-color-green) px-3 py-3 text-(--font-color-white)">
                <span className="font-['IBM_Plex_Mono'] text-xs">04</span>
                <span className="text-sm">Review & Send</span>
              </span>
            </div>
            <div className="mt-3 rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-white) p-3">
              <span className="flex items-center gap-2 text-xs font-semibold text-(--font-color-black)">
                <img src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="mt-2 text-xs leading-[1.7] text-(--font-color-gray-light)">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link to="/live-feed" className="mt-3 block text-sm font-semibold text-(--font-color-green)">Cancel and return to feed</Link>
          </div>
          <div className="w-full rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-5 md:p-7.5 lg:w-3/4">
            <div>
              <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">STEP 04 OF 04</span>
              <h1 className="mt-1 font-['Fraunces'] text-2xl font-semibold text-(--font-color-black) sm:text-3xl">Report summary & declaration</h1>
              <span className="mt-1 block text-sm text-(--font-color-gray)">Review the report and choose notifications before final submission.</span>
            </div>
            <div className="space-y-5 py-6">
              <div className="flex flex-col gap-2">
                <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">CONCISE TITLE *</span>
                <input className="min-w-0 w-full rounded-lg border border-(--border-color-gray) bg-transparent px-4 py-3 text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" type="text" defaultValue="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">INCIDENT OBSERVATION DETAILS *</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">100 chars (min 15)</span>
                </div>
                <textarea className="min-h-32 w-full rounded-lg border border-(--border-color-gray) bg-transparent px-4 py-3 text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" defaultValue="Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan"></textarea>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-(--border-color-green-light) bg-(--bg-color-green-light) p-4">
                <img className="shrink-0" src="/icons/i-lock-green.svg" alt="Icon Lock" />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-sm text-(--font-color-black)">Post anonymously on public feed</span>
                  <span className="text-xs text-(--font-color-gray)">Your name will be masked as Warga Anonim on open records.</span>
                </div>
                <input className="h-4 w-4 shrink-0 accent-(--bg-color-green)" type="checkbox" />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">FILLER NAME *</span>
                  <input className="min-w-0 w-full rounded-lg border border-(--border-color-gray) bg-transparent px-4 py-3 text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" type="text" defaultValue="Aldi Ardyansah" />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">EMAIL FOR STATUS ALERTS *</span>
                  <input className="min-w-0 w-full rounded-lg border border-(--border-color-gray) bg-transparent px-4 py-3 text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" type="text" defaultValue="aldi@wargareport.id" />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">PHONE / WHATSAPP</span>
                  <input className="min-w-0 w-full rounded-lg border border-(--border-color-gray) bg-transparent px-4 py-3 text-sm text-(--font-color-black) outline-none focus:border-(--border-color-green)" type="text" defaultValue="+62 812-9842-1054" />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">STATUS ALERT CHANNELS</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <input className="h-4 w-4 accent-(--bg-color-green)" type="checkbox" />
                    <span className="text-sm text-(--font-color-black)">Email</span>
                    <input className="h-4 w-4 accent-(--bg-color-green)" type="checkbox" />
                    <span className="text-sm text-(--font-color-black)">SMS</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 h-4 w-4 shrink-0 accent-(--bg-color-green)" type="checkbox" />
                <span className="text-sm text-(--font-color-black)">I confirm this incident was authentically observed on-site under Law No. 25/2009.</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-(--border-color-gray-light) pt-4">
              <Link to="/user/proof" className="flex items-center gap-2 rounded-full border border-(--border-color-gray) px-4 py-2 text-sm font-medium text-(--font-color-black)">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link to="/user/receipt" className="flex items-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-2.5 text-sm font-semibold text-(--font-color-white)">
                Dispatch Report<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}