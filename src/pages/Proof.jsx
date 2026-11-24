import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Proof() {
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
                <img className="ml-auto h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-transparent flex items-center gap-3 rounded-full px-3 py-3 text-(--font-color-gray-light)">
                <span className="font-['IBM_Plex_Mono'] text-xs">02</span>
                <span className="font-['Public_Sans'] text-sm">Location</span>
                <img className="ml-auto h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </span>
              <span className="button-flow-green flex items-center gap-3 rounded-full bg-(--bg-color-green) px-3 py-3 text-(--font-color-white)">
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
          <div className="w-full rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-5 md:p-7.5 lg:w-3/4">
            <div className="pb-3">
              <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">STEP 03 OF 04</span>
              <h1 className="font-['Fraunces'] mt-1 text-2xl font-semibold text-(--font-color-black)">Attach evidence</h1>
              <span className="font-['Public_Sans'] mt-1 block text-sm text-(--font-color-gray)">Reports with photographic proof or audio notes are prioritized by field dispatchers.</span>
            </div>
            <div className="py-3">
              <div className="flex flex-col items-center rounded-xl border border-dashed border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-5 text-center sm:px-6">
                <img src="/icons/i-upload-green.svg" alt="Icon Upload" className="h-8 w-8" />
                <span className="font-['Public_Sans'] mt-3 text-sm font-medium text-(--font-color-black)">Upload evidence files or use camera simulation</span>
                <span className="font-['Public_Sans'] mt-1 text-xs text-(--font-color-gray-light)">Images, audio voice notes, inspection video clips (JPG, MP4, M4A)</span>
                <div className="mt-2 flex flex-wrap justify-center gap-2 font-['Public_Sans']">
                  <span className="flex cursor-pointer items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2 text-xs font-medium text-(--font-color-black) sm:px-4">
                    <img src="/icons/i-camera-black.svg" alt="Icon Camera" />Capture Photo
                  </span>
                  <span className="flex cursor-pointer items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2 text-xs font-medium text-(--font-color-black) sm:px-4">
                    <img src="/icons/i-record-black.svg" alt="Icon Record" />Record Audio Memo
                  </span>
                  <span className="flex cursor-pointer items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2 text-xs font-medium text-(--font-color-black) sm:px-4">
                    <img src="/icons/i-video-black.svg" alt="Icon Video" />Attach Video Clip
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">ATTACHED EVIDENCE (2)</span>
                  <span className="font-['Public_Sans'] text-xs text-(--font-color-green)">Click any card to inspect</span>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="overflow-hidden rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white)">
                    <img src="/images/evidence-1.svg" alt="Evidence 1" className="aspect-video w-full object-cover" />
                    <div className="p-3">
                      <span className="font-['Public_Sans'] flex items-center justify-between gap-2 text-xs font-medium text-(--font-color-black)"><span className="min-w-0 break-all">incident_capture_camera.jpg</span><img src="/icons/i-trashbin.svg" alt="Icon Trashbin" className="h-4 w-4 shrink-0" /></span>
                      <span className="font-['IBM_Plex_Mono'] mt-1 block text-xs text-(--font-color-gray-light)">IMAGE · 2.4 MB</span>
                      <span className="font-['Public_Sans'] mt-1 block text-xs text-(--font-color-gray)">Photographed live on-site by resident camera.</span>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white)">
                    <div className="relative flex aspect-video w-full items-center justify-center bg-[#12251d]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-[#12251d]">▶</span>
                      <span className="absolute right-2 bottom-2 rounded bg-black px-1.5 py-1 font-['IBM_Plex_Mono'] text-[10px] text-white">0:12</span>
                    </div>
                    <div className="p-3">
                      <span className="font-['Public_Sans'] flex items-center justify-between gap-2 text-xs font-medium text-(--font-color-black)"><span className="min-w-0 break-all">quick_site_clip.mp4</span><img src="/icons/i-trashbin.svg" alt="Icon Trashbin" className="h-4 w-4 shrink-0" /></span>
                      <span className="font-['IBM_Plex_Mono'] mt-1 block text-xs text-(--font-color-gray-light)">VIDEO · 4.8 MB</span>
                      <span className="font-['Public_Sans'] mt-1 block text-xs text-(--font-color-gray)">12-second horizontal pan of incident.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-(--border-color-gray-light) pt-3">
              <Link to="/location" className="font-['Public_Sans'] flex items-center gap-2 rounded-full border border-(--border-color-gray) px-4 py-2 text-sm font-medium text-(--font-color-black)">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link to="/review" className="font-['Public_Sans'] flex items-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-2.5 text-sm font-semibold text-(--font-color-white)">
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