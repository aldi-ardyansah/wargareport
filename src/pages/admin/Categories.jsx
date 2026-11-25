import { useState } from "react";
import { Link } from "react-router";
import NavAdmin from "../../components/NavAdmin";
import Footer from "../../components/Footer";
import ModalCreateCategory from "../../components/ModalCreateCategory";
import ModalEditCategory from "../../components/ModalEditCategory";

const categories = [
  {
    name: "Roads & Transit",
    bureau: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
    description: "Pothole / Sidewalk (Trotoar)",
    target: "48h",
    reports: "1 report",
  },
  {
    name: "Water & Sewage",
    bureau: "Perumda PAM JAYA (Clean Drinking Water)",
    description: "Water Burst / Pipa Bocor",
    target: "24h",
    reports: "1 report",
  },
  {
    name: "Street Lighting",
    bureau: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
    description: "Dark Street / PJU Padam",
    target: "72h",
    reports: "1 report",
  },
  {
    name: "Sanitation & Waste",
    bureau: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
    description: "Trash Pile / Sampah Liar",
    target: "36h",
    reports: "1 report",
  },
  {
    name: "Public Parks & Trees",
    bureau: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
    description: "Hazardous Tree / Rawan Tumbang",
    target: "48h",
    reports: "1 report",
  },
  {
    name: "Noise & Disturbance",
    bureau: "Satpol PP Provinsi DKI Jakarta (Public Order)",
    description: "Late-night Noise / Ketertiban",
    target: "48h",
    reports: "1 report",
  },
  {
    name: "Building & Zoning",
    bureau: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
    description: "Unsafe Construction / Bangunan",
    target: "72h",
    reports: "0 reports",
  },
];

function Categories() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
            <button type="button" onClick={() => setIsCreateModalOpen(true)} className="flex w-full items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) sm:w-fit">
              <img src="/icons/i-plus.svg" alt="Icon Plus" />
              Add category
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white)">
            {categories.map((item) => (
              <div key={item.name} className="flex flex-col gap-3 border-b border-(--border-color-gray) px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-xs font-semibold text-(--font-color-black)">{item.name}</span>
                  <span className="text-xs text-(--font-color-gray-light)">{item.description}</span>
                  <span className="text-xs leading-relaxed text-(--font-color-gray-light)">Assigned to: {item.bureau}</span>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
                  <div className="flex items-center gap-4 font-['IBM_Plex_Mono'] text-xs text-(--font-color-black)">
                    <span className="whitespace-nowrap">{item.target} SLA</span>
                    <span className="whitespace-nowrap">{item.reports}</span>
                  </div>
                  <button type="button" onClick={() => setSelectedCategory(item)} className="flex items-center gap-1 font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green) hover:bg-gray-200 px-4 py-2 rounded-full">
                    <img src="/icons/i-pencil-green.svg" alt="Icon Pencil" />
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <ModalCreateCategory
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <ModalEditCategory
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
      />
    </div>
  );
}

export default Categories;