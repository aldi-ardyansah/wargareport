import { useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function LiveFeed() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [photosOnly, setPhotosOnly] = useState(false);

  const categories = [
    { label: "All Issues (6)", icon: null },
    { label: "Roads & Transit", icon: "i-warning.svg" },
    { label: "Water & Sewage", icon: "i-water.svg" },
    { label: "Street Lighting", icon: "i-lighting.svg" },
    { label: "Sanitation & Waste", icon: "i-trashbin.svg" },
    { label: "Public Parks & Trees", icon: "i-tree.svg" },
    { label: "Noise & Disturbance", icon: "i-speaker.svg" },
    { label: "Building & Zoning", icon: "i-building.svg" }
  ];

  const statuses = ["All", "Submitted", "Received", "In review", "Assigned", "Awaiting your info", "Resolved", "Closed"];

  const reports = [
    {
      image: "/images/article-1.png",
      imageAlt: "Article 1",
      status: "In review",
      statusIcon: "i-search.svg",
      statusClass: "border-(--border-color-orange-light) bg-(--bg-color-orange-light) text-(--font-color-orange)",
      id: "CMP-2026-8841",
      agency: "Perumda PAM JAYA (Clean Drinking Water)",
      title: "PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT",
      likes: "148",
      proof: "2 proof",
      date: "Oct 29",
      location: "Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)",
      category: "Water & Sewage",
      link: "/detail-report",
      disabled: false
    },
    {
      image: "/images/article-2.png",
      imageAlt: "Article 2",
      status: "Assigned",
      statusIcon: "i-user-check.svg",
      statusClass: "border-(--border-color-blue-light) bg-(--bg-color-blue-light) text-(--font-color-blue)",
      id: "CMP-2026-8819",
      agency: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
      title: "Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage",
      likes: "92",
      proof: "1 proof",
      date: "Oct 28",
      location: "Jl. Gatot Subroto Kav. 38 (depan Menara Mulia, Jalur TransJakarta)",
      category: "Roads & Transit",
      link: "#",
      disabled: false
    },
    {
      image: "/images/article-3.png",
      imageAlt: "Article 3",
      status: "Resolved",
      statusIcon: "i-check-circle.svg",
      statusClass: "border-(--border-color-green-light) bg-(--bg-color-green-light) text-(--font-color-green)",
      id: "CMP-2026-8794",
      agency: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
      title: "Complete PJU streetlight outage spanning 300 meters along residential corridor",
      likes: "64",
      proof: "1 proof",
      date: "Oct 28",
      location: "Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03",
      category: "Street Lighting",
      link: "#",
      disabled: true
    },
    {
      image: "/images/article-4.png",
      imageAlt: "Article 4",
      status: "In review",
      statusIcon: "i-search.svg",
      statusClass: "border-(--border-color-orange-light) bg-(--bg-color-orange-light) text-(--font-color-orange)",
      id: "CMP-2026-8720",
      agency: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
      title: "Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang",
      likes: "78",
      proof: "1 proof",
      date: "Oct 29",
      location: "Kampung Kemang, RT 02 / RW 01 (bantaran Kali Krukut)",
      category: "Sanitation & Waste",
      link: "#",
      disabled: false
    },
    {
      image: "/images/article-5.png",
      imageAlt: "Article 5",
      status: "Assigned",
      statusIcon: "i-user-check.svg",
      statusClass: "border-(--border-color-blue-light) bg-(--bg-color-blue-light) text-(--font-color-blue)",
      id: "CMP-2026-8650",
      agency: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
      title: "Hazardous decayed Trembesi tree limb at risk of collapse over walking path",
      likes: "45",
      proof: "1 proof",
      date: "Oct 28",
      location: "Taman Suropati (sisi timur, dekat patung ASEAN)",
      category: "Public Parks & Trees",
      link: "#",
      disabled: false
    },
    {
      image: null,
      imageAlt: "",
      status: "Submitted",
      statusIcon: "i-clock.svg",
      statusClass: "border-(--border-color-gray) bg-(--bg-color-gray) text-(--font-color-gray)",
      id: "CMP-2026-8601",
      agency: "Satpol PP Provinsi DKI Jakarta (Public Order)",
      title: "Heavy excavation equipment operating past 22:00 WIB in residential alley",
      likes: "39",
      proof: "1 proof",
      date: "Oct 29",
      location: "Jl. Senopati No. 18, RT 06 / RW 02",
      category: "Noise & Disturbance",
      link: "#",
      disabled: false
    }
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch = [
      report.id,
      report.agency,
      report.title,
      report.location,
      report.category,
      report.status
    ].some((value) => value.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || report.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || report.status === selectedStatus;
    const matchesPhotos = !photosOnly || report.image !== null;

    return matchesSearch && matchesCategory && matchesStatus && matchesPhotos;
  });

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <Nav />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex flex-col gap-6 pt-10 md:pt-12">
          <div className="flex flex-col gap-3">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wide text-(--font-color-gray-light)">PUBLIC INCIDENT REGISTRY</span>
            <h1 className="font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl">Community Reports & Fixes</h1>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <p className="max-w-150 text-sm text-(--font-color-gray)">Open incident feed in Jakarta and surrounding urban regions. Public visitors may browse; sign in to interact.</p>
              <div className="flex items-center self-start rounded-full border border-(--border-color-gray) bg-(--bg-color-white) p-1">
                <div className="flex items-center gap-2 rounded-full bg-(--font-color-green) px-4 py-2 text-xs font-semibold text-white">
                  <img src="/icons/i-list.svg" alt="Icon List" />Feed
                </div>
                <div className="flex items-center gap-2 rounded-full px-4 py-2 text-xs text-(--font-color-gray)">
                  <img src="/icons/i-map.svg" alt="Icon Map" />Map
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-110 items-center gap-3 rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-3">
            <img src="/icons/i-search-gray.svg" alt="Icon Search" />
            <input className="w-full min-w-0 bg-transparent text-xs text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="text" placeholder="Search by street name, complaint ID, or keyword..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <label key={category.label} className="flex cursor-pointer items-center gap-2 rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2 text-xs text-(--font-color-gray) has-checked:border-(--font-color-green) has-checked:bg-(--font-color-green) has-checked:font-semibold has-checked:text-white sm:px-4">
                <input className="hidden" type="radio" name="category" checked={selectedCategory === (category.icon === null ? "All" : category.label)} onChange={() => setSelectedCategory(category.icon === null ? "All" : category.label)} />
                {category.icon && <img src={`/icons/${category.icon}`} alt="" />}
                {category.label}
              </label>
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-1 rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white) p-1 sm:rounded-full">
              <span className="px-3 py-2 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">STATUS:</span>
              {statuses.map((status) => (
                <label key={status} className="cursor-pointer rounded-full px-3 py-2 text-xs text-(--font-color-gray) has-checked:bg-(--font-color-green) has-checked:font-semibold has-checked:text-white sm:px-4">
                  <input className="hidden" type="radio" name="status" checked={selectedStatus === status} onChange={() => setSelectedStatus(status)} />
                  {status}
                </label>
              ))}
            </div>
            <label className="flex cursor-pointer items-center gap-2 self-start rounded-full border border-(--border-color-gray) bg-(--bg-color-white) px-4 py-3 text-xs text-(--font-color-gray)">
              <input className="h-4 w-4 accent-(--font-color-green)" type="checkbox" checked={photosOnly} onChange={(e) => setPhotosOnly(e.target.checked)} />
              With photos/proof only
            </label>
          </div>
        </div>
        <article className="mt-6 flex flex-col overflow-hidden rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white)">
          {filteredReports.map((report, index) => (
            <div key={report.id} className={`flex flex-col items-start gap-3 px-3 py-4 sm:px-4 md:flex-row md:items-center md:gap-3 ${index !== filteredReports.length - 1 ? "border-b border-(--border-color-gray)" : ""}`}>
              {report.image ? (
                <img className="h-20 w-20 shrink-0 rounded-xl object-cover" src={report.image} alt={report.imageAlt} />
              ) : (
                <div className="hidden h-20 w-20 shrink-0 md:block"></div>
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${report.statusClass} ${report.status === "Submitted" ? "opacity-80" : ""}`}>
                    <img src={`/icons/${report.statusIcon}`} alt="" />{report.status}
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">{report.id}</span>
                  <span className="text-xs text-(--font-color-gray-light)">·</span>
                  <span className="wrap-break-words text-xs font-semibold text-(--font-color-black)">{report.agency}</span>
                </div>
                <span className={`text-sm font-semibold leading-normal ${report.status === "Submitted" ? "text-(--font-color-green)" : "text-(--font-color-black)"}`}>{report.title}</span>
                <div className="flex flex-wrap items-center gap-1 text-xs leading-normal text-(--font-color-gray-light)">
                  <img className="shrink-0" src="/icons/i-map-pin.svg" alt="Icon Map Pin" width="12" height="12" />
                  <span>{report.location}</span>
                  <span>·</span>
                  <span>{report.category}</span>
                </div>
              </div>
              <div className="flex w-full shrink-0 flex-wrap items-center gap-3 md:w-auto md:pl-2">
                <span className={`flex items-center gap-1 rounded-full border border-(--border-color-gray) px-3 py-2 font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray) ${report.disabled ? "opacity-50" : ""}`}>
                  <img src="/icons/i-thumbs-up.svg" alt="Icon Thumbs Up" />{report.likes}
                </span>
                <span className="flex items-center gap-1 whitespace-nowrap font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray)">
                  <img src="/icons/i-list-green.svg" alt="Icon List" />{report.proof}
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">{report.date}</span>
                <Link className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-(--font-color-green)" to={report.link}>
                  Track<img src="/icons/i-arrow-right-green.svg" alt="Icon Arrow Right" />
                </Link>
              </div>
            </div>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default LiveFeed;