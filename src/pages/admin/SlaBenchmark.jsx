import { Link } from "react-router";
import NavAdmin from "../../components/NavAdmin";
import Footer from "../../components/Footer";

const slaBenchmarks = [
  {
    domain: "Roads & Transit",
    bureau: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
    target: "48 hours",
    threshold: "+12h (Warning)",
  },
  {
    domain: "Water & Sewage",
    bureau: "Perumda PAM JAYA (Clean Drinking Water)",
    target: "24 hours",
    threshold: "+6h (Warning)",
  },
  {
    domain: "Street Lighting",
    bureau: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
    target: "72 hours",
    threshold: "+18h (Warning)",
  },
  {
    domain: "Sanitation & Waste",
    bureau: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
    target: "36 hours",
    threshold: "+9h (Warning)",
  },
  {
    domain: "Public Parks & Trees",
    bureau: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
    target: "48 hours",
    threshold: "+12h (Warning)",
  },
  {
    domain: "Noise & Disturbance",
    bureau: "Satpol PP Provinsi DKI Jakarta (Public Order)",
    target: "48 hours",
    threshold: "+12h (Warning)",
  },
  {
    domain: "Building & Zoning",
    bureau: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
    target: "72 hours",
    threshold: "+18h (Warning)",
  },
];

function SlaBenchmark() {
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
          <Link to="/admin/escalation-desk" className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">
            Escalation Desk
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-(--bg-color-green)/10 font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">1</span>
          </Link>
          <Link to="/admin/sla-benchmarks" className="rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white)">SLA Benchmarks</Link>
          <Link to="/admin/categories" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Categories</Link>
          <Link to="/admin/agencies" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Agencies</Link>
          <Link to="/admin/officer-accounts" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Officer Accounts</Link>
          <Link to="/admin/moderation" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Moderation</Link>
        </div>

        <section className="mt-8 flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">STATUTORY RESOLUTION WINDOWS</h2>
            <span className="font-['IBM_Plex_Mono'] text-sm text-(--font-color-green)">Enforced across all wards</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white)">
            <table className="w-full min-w-225 border-collapse text-left">
              <thead>
                <tr className="border-b border-(--border-color-gray) bg-(--bg-color-gray)">
                  <th className="px-3 py-4 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-gray)">SERVICE DOMAIN</th>
                  <th className="px-3 py-4 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-gray)">RESPONSIBLE BUREAU</th>
                  <th className="px-3 py-4 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-gray)">TARGET SLA</th>
                  <th className="px-3 py-4 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-gray)">ESCALATION THRESHOLD</th>
                  <th className="px-3 py-4 text-center font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-gray)">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {slaBenchmarks.map((item) => (
                  <tr key={item.domain} className="border-b border-(--border-color-gray) last:border-b-0">
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className="text-xs font-semibold text-(--font-color-black)">{item.domain}</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className="text-xs text-(--font-color-gray)">{item.bureau}</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className="font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">{item.target}</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">{item.threshold}</span>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <span className="inline-flex items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">ACTIVE</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SlaBenchmark;