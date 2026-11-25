import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/useAuth";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

function Profile() {
  const { currentUser, updateProfile } = useAuth();

  const [formData, setFormData] = useState(() => ({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    nik: currentUser?.nik || ""
  }));

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id.replace("profile-", "")]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = updateProfile(formData);
    setMessage(result.message);
  }

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto w-[90%] px-4 pt-25 md:px-9">
        <div className="flex flex-col gap-6 py-2">
          <div className="flex flex-col gap-2">
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[1px] text-(--font-color-gray-light)">CITIZEN MANAGEMENT</span>
            <h1 className="font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl">Account & Case History</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray-light) py-2">
            <Link to="/user/list-complaint" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">My complaints</Link>
            <Link to="/user/profile" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">Profile</Link>
            <Link to="/user/notification-settings" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Security</Link>
          </div>
          <div className="flex justify-start">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-6">
              <div className="mb-6 flex flex-col gap-1">
                <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Filer Identity & Preferences</h2>
                <span className="text-xs text-(--font-color-gray-light)">Used to pre-fill future complaint forms and verify status inquiries.</span>
              </div>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-(--border-color-green-light) bg-(--bg-color-green-light) text-2xl font-medium text-(--font-color-green)">AA</div>
                <div className="flex min-w-0 flex-col items-start gap-1">
                  <span className="text-xs font-semibold text-(--font-color-black)">Profile photo</span>
                  <span className="text-xs text-(--font-color-gray-light)">JPG, PNG, or WebP. Square images work best.</span>
                  <label htmlFor="profile-photo-upload" className="mt-1 cursor-pointer rounded-full border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-1.5 text-xs font-medium text-(--font-color-black)">Upload photo</label>
                  <input type="file" id="profile-photo-upload" className="hidden" accept="image/jpeg,image/png,image/webp" />
                </div>
              </div>
              <div className="mb-4 border-t border-(--border-color-gray-light)"></div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="profile-name" className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray)">FULL LEGAL NAME</label>
                  <input type="text" id="profile-name" required className="w-full rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="profile-email" className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray)">PRIMARY NOTIFICATION EMAIL</label>
                  <input type="email" id="profile-email" required className="w-full rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="profile-phone" className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray)">SMS CONTACT NUMBER</label>
                  <input type="tel" id="profile-phone" required className="w-full rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" placeholder="+62 8xx-xxxx-xxxx" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="profile-nik" className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-(--font-color-gray)">NIK</label>
                  <input type="text" id="profile-nik" required className="w-full rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" placeholder="Enter your NIK" inputMode="numeric" maxLength={16} value={formData.nik} onChange={handleChange} />
                </div>
              </div>
              {message && (
                <p className="mt-3 text-xs text-(--font-color-green)">{message}</p>
              )}
              <div className="mt-4 flex justify-start">
                <button type="submit" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) hover:opacity-90">Save profile changes</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;