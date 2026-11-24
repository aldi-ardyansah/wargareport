import { Link } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function DetailReport() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <Nav />
      <main className="mx-auto mt-5 w-[90%] px-4 md:px-9">
        <div className="flex flex-col gap-5 pt-20">
          <div className="flex items-center justify-between gap-3">
            <Link className="flex items-center gap-2 text-xs font-semibold text-(--font-color-green) no-underline" to="/live-feed">
              <img src="/icons/i-arrow-left-green.svg" alt="Icon Arrow Left" />
              Back to Live Feed
            </Link>
            <Link className="flex shrink-0 items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-1.5 text-xs font-semibold text-(--font-color-black) no-underline" to="#">
              <img src="/icons/i-share.svg" alt="Icon Share" />
              Share
            </Link>
          </div>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex min-w-0 flex-[2.05] flex-col gap-4">
              <div className="flex flex-col gap-4 rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white) p-4 sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-2 rounded-full border border-(--border-color-orange-light) bg-(--bg-color-orange-light) px-3 py-1.5 text-xs font-medium text-(--font-color-orange)">
                        <img src="/icons/i-search.svg" alt="" />In review
                      </span>
                      <span className="flex items-center gap-1.5 font-['IBM_Plex_Mono'] text-xs font-normal text-(--font-color-gray-light)">
                        <img src="/icons/i-clock.svg" alt="Icon Clock" />18h 59m left
                      </span>
                    </div>
                    <Link className="flex items-center gap-2 self-start rounded-full border border-(--border-color-gray) px-3 py-1.5 text-xs font-semibold text-(--font-color-gray) no-underline sm:self-auto" to="#">
                      <img src="/icons/i-thumbs-up.svg" alt="Icon Upvote" />Upvote <span>(148)</span>
                    </Link>
                  </div>
                  <h1 className="font-['Fraunces'] text-2xl font-semibold leading-[1.15] text-(--font-color-black) sm:text-3xl">PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT</h1>
                  <p className="text-sm font-normal leading-[1.7] text-(--font-color-gray)">Clean drinking water is bursting through the sidewalk pavement outside Jl. Fatmawati Raya No. 42 (RT 04 / RW 07, Cilandak Barat) right in front of Cipete Raya MRT. Clean water has been flooding the roadway for 4 hours, causing motorbikes to slip.</p>
                </div>
                <div className="flex flex-col gap-3 border-t border-(--border-color-gray) pt-4">
                  <h2 className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wide text-(--font-color-gray-light)">RESOLUTION PIPELINE</h2>
                  <div className="grid grid-cols-2 gap-1.5 md:grid-cols-4">
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-(--border-color-green) bg-(--bg-color-green-light) px-2 py-2">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-green)">01</span>
                      <span className="text-center text-xs font-semibold text-(--font-color-green)">Submitted</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-(--border-color-green) bg-(--bg-color-green-light) px-2 py-2">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-green)">02</span>
                      <span className="text-center text-xs font-semibold text-(--font-color-green)">Verified by WargaReport</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-(--border-color-gray-light) bg-(--bg-color-body-card) px-2 py-2 opacity-60">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-gray-light)">03</span>
                      <span className="text-center text-xs font-medium text-(--font-color-gray-light)">Dispatched to Agency</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-(--border-color-gray-light) bg-(--bg-color-body-card) px-2 py-2 opacity-60">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] text-(--font-color-gray-light)">04</span>
                      <span className="text-center text-xs font-medium text-(--font-color-gray-light)">Fixed & Verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5">
                  <h2 className="font-['Fraunces'] text-lg font-semibold text-(--font-color-black)">Evidence on File</h2>
                  <p className="text-xs text-(--font-color-gray-light)">2 attachments (tap to expand)</p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white)">
                    <img className="block aspect-[1.8/1] w-full border-b border-(--border-color-gray) object-cover" src="/images/pam_water_pipeline_fracture.jpg" alt="Water pipeline fracture evidence" />
                    <div className="flex flex-col gap-1.5 p-2.5">
                      <h3 className="break-all text-xs font-semibold text-(--font-color-black)">pam_water_pipeline_fracture.jpg</h3>
                      <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">IMAGE · 2.4 MB</span>
                      <p className="text-xs leading-relaxed text-(--font-color-gray)">Water runoff flooding pedestrian sidewalk slabs and bike lane.</p>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-xl border border-(--border-color-gray) bg-(--bg-color-white)">
                    <div className="flex aspect-[1.8/1] items-center justify-center gap-2 border-b border-(--border-color-gray) bg-(--bg-color-green-light) p-4">
                      <div className="flex flex-col items-center gap-1">
                        <img className="h-6 w-6" src="/icons/i-music.svg" alt="Icon Music" />
                        <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">Audio clip · 0:34</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 p-2.5">
                      <h3 className="break-all text-xs font-semibold text-(--font-color-black)">acoustic_pipe_pressure_sound.m4a</h3>
                      <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">AUDIO · 1.1 MB</span>
                      <p className="text-xs leading-relaxed text-(--font-color-gray)">Acoustic underground hissing recorded near customer meter vault.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <h2 className="font-['Fraunces'] text-lg font-semibold text-(--font-color-black)">Action History</h2>
                  <p className="text-xs text-(--font-color-gray-light)">Chronological updates from intake router and field teams</p>
                </div>
                <div className="flex flex-col pl-2">
                  <div className="relative flex gap-3 pb-3 pl-3 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-(--border-color-gray)">
                    <div className="absolute -left-2.5 top-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-white)">
                      <img className="h-3 w-3" src="/icons/i-user-green.svg" alt="Icon User" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-xs font-semibold text-(--font-color-black)">Report submitted via WargaReport intake</h3>
                        <span className="flex items-center gap-1 rounded-full border border-(--border-color-gray) bg-(--bg-color-body-card) px-2 py-0.5 text-xs font-medium text-(--font-color-gray)"><img className="h-3 w-3" src="/icons/i-clock.svg" alt="Icon Clock" />Submitted</span>
                      </div>
                      <p className="text-xs text-(--font-color-gray-light)">Aldi Ardyansah <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 05:09 PM GMT+7</span></p>
                      <div className="rounded-lg border border-(--border-color-gray) px-2.5 py-2 text-xs leading-relaxed text-(--font-color-gray)">Citizen attached visual photo evidence and acoustic audio note.</div>
                    </div>
                  </div>
                  <div className="relative flex gap-3 pb-3 pl-3 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-(--border-color-gray)">
                    <div className="absolute -left-2.5 top-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-white)">
                      <img className="h-3 w-3" src="/icons/i-settings-green.svg" alt="Icon Settings" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-xs font-semibold text-(--font-color-black)">Verified by WargaReport & dispatched to Perumda PAM JAYA</h3>
                        <span className="flex items-center gap-1 rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) px-2 py-0.5 text-xs font-medium text-(--font-color-green)"><img className="h-3 w-3" src="/icons/i-inbox.svg" alt="Icon Inbox" />Received</span>
                      </div>
                      <p className="text-xs text-(--font-color-gray-light)">WargaReport Civic Router <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 05:12 PM GMT+7</span></p>
                      <div className="rounded-lg border border-(--border-color-gray) px-2.5 py-2 text-xs leading-relaxed text-(--font-color-gray)">Priority: High. Clean water conservation target. 24h statutory countdown initiated.</div>
                    </div>
                  </div>
                  <div className="relative flex gap-3 pl-3 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-(--border-color-gray)">
                    <div className="absolute -left-2.5 top-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-white)">
                      <img className="h-3 w-3" src="/icons/i-shield-green.svg" alt="Icon Shield" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-xs font-semibold text-(--font-color-black)">Case accepted by Duty Triage Coordinator</h3>
                        <span className="flex items-center gap-1 rounded-full border border-(--border-color-orange-light) bg-(--bg-color-orange-light) px-2 py-0.5 text-xs font-medium text-(--font-color-orange)"><img className="h-3 w-3" src="/icons/i-search.svg" alt="Icon Search" />In review</span>
                      </div>
                      <p className="text-xs text-(--font-color-gray-light)">Hendra Kurniawan <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 06:39 PM GMT+7</span></p>
                      <div className="rounded-lg border border-(--border-color-gray) px-2.5 py-2 text-xs leading-relaxed text-(--font-color-gray)">Dispatched secondary valve isolation team from Cilandak maintenance station.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-col gap-3 rounded-[14px] border border-(--border-color-gray) bg-(--bg-color-white) p-4 sm:p-5">
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">TRACKING CODE</span>
                  <h2 className="font-['IBM_Plex_Mono'] text-xl font-semibold text-(--font-color-green) sm:text-2xl">CMP-2026-8841</h2>
                </div>
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">ASSIGNED AUTHORITY</span>
                  <p className="text-sm font-semibold leading-relaxed text-(--font-color-black)">Perumda PAM JAYA (Clean Drinking Water)</p>
                </div>
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">CATEGORY</span>
                  <p className="text-sm font-semibold text-(--font-color-black)">Water & Sewage</p>
                </div>
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">LOCATION</span>
                  <div className="flex items-start gap-1.5">
                    <img className="mt-0.5 h-3.5 w-3.5 shrink-0" src="/icons/i-map-pin.svg" alt="Icon Location" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-xs font-semibold leading-relaxed text-(--font-color-black)">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)</span>
                      <span className="text-xs text-(--font-color-gray-light)">Cilandak Barat, Jakarta Selatan</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">REPORTED ON</span>
                  <p className="font-['IBM_Plex_Mono'] text-sm font-semibold text-(--font-color-black)">Nov 8, 2026</p>
                </div>
                <div className="flex flex-col gap-1.5 border-b border-(--border-color-gray) pb-3">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">REPORTED BY</span>
                  <p className="text-sm font-semibold text-(--font-color-black)">Aldi A.</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray-light)">FIELD OFFICER</span>
                  <p className="text-sm font-semibold text-(--font-color-black)">Hendra Kurniawan</p>
                  <span className="font-['IBM_Plex_Mono'] text-xs leading-relaxed text-(--font-color-gray-light)">Tim Reaksi Cepat PAM JAYA [PAM-JKT-044]</span>
                </div>
                <Link className="mt-1 flex items-center justify-center rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-3 py-2.5 text-center text-xs font-semibold text-(--font-color-white) no-underline" to="/topic">Report similar issue nearby</Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailReport;