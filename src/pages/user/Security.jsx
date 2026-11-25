import { Link } from "react-router";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

export default function Security() {
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
            <Link to="/user/profile" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Profile</Link>
            <Link to="/user/notification-settings" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">Security</Link>
          </div>
          <div className="flex justify-start">
            <div className="w-full max-w-2xl rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-6">
              <form>
                <div>
                  <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Security</h2>
                  <span className="mt-2 block text-xs text-(--font-color-gray-light)">Change the password used to sign in to your WargaReport account.</span>
                </div>
                <div className="flex flex-col gap-5 py-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-current-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">CURRENT PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type="password" id="security-current-password" className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="Enter current password" />
                      <button type="button" className="shrink-0">
                        <img src="/icons/i-eye.svg" alt="Icon Eye" />
                      </button>
                    </div>
                    <span className="text-xs text-(--font-color-gray-light)">Required to confirm any password change.</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-new-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">NEW PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type="password" id="security-new-password" className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="At least 8 characters" />
                      <button type="button" className="shrink-0">
                        <img src="/icons/i-eye.svg" alt="Icon Eye" />
                      </button>
                    </div>
                    <span className="text-xs text-(--font-color-gray-light)">Use at least 8 characters, including a letter and a number.</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-confirm-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">CONFIRM NEW PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type="password" id="security-confirm-password" className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="Re-enter new password" />
                      <button type="button" className="shrink-0">
                        <img src="/icons/i-eye.svg" alt="Icon Eye" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button type="submit" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) hover:opacity-90">Update password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}