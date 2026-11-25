import { Link } from "react-router";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

function NotificationSettings() {
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
            <Link to="/user/notification-settings" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full bg-(--bg-color-green-light) px-4 py-2 text-sm text-(--font-color-green)">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Security</Link>
          </div>
          <div className="flex justify-start">
            <form className="w-full max-w-176 rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-6">
              <div className="mb-4 flex flex-col gap-1">
                <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Dispatch Notification Preferences</h2>
                <span className="text-xs text-(--font-color-gray-light)">Control when municipal bureaus may send automated status alerts.</span>
              </div>
              <div className="flex flex-col">
                <label className="flex cursor-pointer items-start gap-3 py-2">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-(--bg-color-green)" name="email-alerts" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-(--font-color-black)">Email Status Transitions</span>
                    <span className="text-xs text-(--font-color-gray-light)">Receive an email whenever an inspector triages, assigns, or resolves your case.</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 py-2">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-(--bg-color-green)" name="sms-alerts" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-(--font-color-black)">Urgent SMS Alerts</span>
                    <span className="text-xs text-(--font-color-gray-light)">Receive text messages when emergency crews need physical gate access.</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 py-2">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-(--bg-color-green)" name="weekly-digest" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-(--font-color-black)">Weekly Ward Resolution Digest</span>
                    <span className="text-xs text-(--font-color-gray-light)">Summary of all public infrastructure projects completed in your postal code.</span>
                  </span>
                </label>
              </div>
              <div className="mt-3 flex justify-start pt-2">
                <button type="submit" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) hover:opacity-90">Update alert preferences</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotificationSettings;