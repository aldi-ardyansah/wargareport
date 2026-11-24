import { Link } from "react-router";
import NavAdmin from "../components/NavAdmin";
import Footer from "../components/Footer";

const categories = [
  {
    name: "Roads & Transit",
    bureau: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
    description: "Road damage, sidewalks, and public transportation infrastructure.",
  },
  {
    name: "Water & Sewage",
    bureau: "Perumda PAM JAYA (Clean Drinking Water)",
    description: "Clean water supply, water distribution, and sewage issues.",
  },
  {
    name: "Street Lighting",
    bureau: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
    description: "Street lights, public lighting, and traffic-related facilities.",
  },
  {
    name: "Sanitation & Waste",
    bureau: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
    description: "Waste collection, illegal dumping, and river cleanliness.",
  },
  {
    name: "Public Parks & Trees",
    bureau: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
    description: "Public parks, damaged trees, and green public spaces.",
  },
  {
    name: "Noise & Disturbance",
    bureau: "Satpol PP Provinsi DKI Jakarta (Public Order)",
    description: "Noise complaints, public disturbances, and neighborhood disruptions.",
  },
  {
    name: "Building & Zoning",
    bureau: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
    description: "Building permits, zoning violations, and land-use issues.",
  },
];

function Categories() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavAdmin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-3 py-5">
          <span className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-widest text-(--font-color-gray-light)">SYSTEM GOVERNANCE</span>
          <h1 className="font-['Fraunces'] text-2xl font-semibold text-(--font-color-black) sm:text-2xl md:text-3xl">Civic Administration & Policies</h1>
          <p className="max-w-180 text-sm leading-[1.75] text-(--font-color-gray)">Manage report categories, define service classifications, and assign each category to its responsible government bureau.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray) pb-3">
          <Link to="/admin/escalation-desk" className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">
            Escalation Desk
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-(--bg-color-green)/10 font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">1</span>
          </Link>
          <Link to="/admin/sla-benchmark" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">SLA Benchmarks</Link>
          <Link to="/admin/categories" className="rounded-full border border-(--border-color-green) bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white)">Categories</Link>
          <Link to="/admin/agencies" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Agencies</Link>
          <Link to="/admin/officer-accounts" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Officer Accounts</Link>
          <Link to="/admin/moderation" className="rounded-full px-4 py-2 text-xs font-medium text-(--font-color-gray)">Moderation</Link>
        </div>

        <section className="mt-8 flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <h2 className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light) sm:text-sm">ROUTING TAXONOMY (7)</h2>
              <p className="text-xs leading-relaxed text-(--font-color-gray-light)">Categories route new reports to an agency and define their SLA window.</p>
            </div>
            <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-4 py-1 text-xs font-semibold text-(--font-color-white) sm:w-fit">
              <span className="text-base">+</span>
              Add category
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="overflow-x-auto rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white)">
              <table className="w-full min-w-225 border-collapse text-left">
                <tbody>
                  {categories.map((item) => (
                    <tr key={item.name} className="border-b border-(--border-color-gray) last:border-b-0">
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="text-xs font-semibold text-(--font-color-black)">{item.name}</span>
                      </td>
                      <td className="max-w-70 px-4 py-4">
                        <span className="text-xs leading-relaxed text-(--font-color-gray)">{item.description}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="text-xs text-(--font-color-gray)">{item.bureau}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex items-center justify-center rounded-full border border-(--border-color-green-light) bg-(--bg-color-green-light) px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-(--font-color-green)">ACTIVE</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button type="button" className="rounded-full border border-(--border-color-gray) px-3 py-1 text-xs font-semibold text-(--font-color-black) hover:bg-(--bg-color-gray)">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-(--font-color-gray-light) sm:hidden">Geser tabel ke samping untuk melihat kolom lainnya.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Categories;