import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/useAuth";
import NavLogin from "../../components/NavUser";
import Footer from "../../components/Footer";

export default function Security() {
  const { changePassword } = useAuth();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;

    const fieldNames = {
      "security-current-password": "currentPassword",
      "security-new-password": "newPassword",
      "security-confirm-password": "confirmPassword"
    };

    setFormData((prev) => ({
      ...prev,
      [fieldNames[id]]: value
    }));
  }

  function togglePasswordVisibility(field) {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.newPassword.length < 8) {
      setMessage("New password must contain at least 8 characters.");
      setMessageType("error");
      return;
    }

    if (!/[a-zA-Z]/.test(formData.newPassword) || !/[0-9]/.test(formData.newPassword)) {
      setMessage("New password must contain at least one letter and one number.");
      setMessageType("error");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("New password and confirmation password do not match.");
      setMessageType("error");
      return;
    }

    const result = changePassword(formData.currentPassword, formData.newPassword);

    setMessage(result.message);
    setMessageType(result.success ? "success" : "error");

    if (result.success) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });

      setShowPassword({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
      });
    }
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
            <Link to="/user/profile" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Profile</Link>
            <Link to="/user/notification-settings" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Notifications</Link>
            <Link to="/user/data-export" className="rounded-full px-4 py-2 text-sm text-(--font-color-gray) hover:bg-(--bg-color-gray)">Privacy & data</Link>
            <Link to="/user/security" className="rounded-full bg-(--bg-color-green) px-4 py-2 text-sm font-semibold text-(--font-color-white)">Security</Link>
          </div>
          <div className="flex justify-start">
            <div className="w-full max-w-2xl rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-4 sm:p-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Security</h2>
                  <span className="mt-2 block text-xs text-(--font-color-gray-light)">Change the password used to sign in to your WargaReport account.</span>
                </div>
                <div className="flex flex-col gap-5 py-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-current-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">CURRENT PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type={showPassword.currentPassword ? "text" : "password"} id="security-current-password" required className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="Enter current password" value={formData.currentPassword} onChange={handleChange} />
                      <button type="button" onClick={() => togglePasswordVisibility("currentPassword")} className="shrink-0">
                        <img src={showPassword.currentPassword ? "/icons/i-eye-closed.svg" : "/icons/i-eye.svg"} alt="Toggle password visibility" />
                      </button>
                    </div>
                    <span className="text-xs text-(--font-color-gray-light)">Required to confirm any password change.</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-new-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">NEW PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type={showPassword.newPassword ? "text" : "password"} id="security-new-password" required className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="At least 8 characters" value={formData.newPassword} onChange={handleChange} />
                      <button type="button" onClick={() => togglePasswordVisibility("newPassword")} className="shrink-0">
                        <img src={showPassword.newPassword ? "/icons/i-eye-closed.svg" : "/icons/i-eye.svg"} alt="Toggle password visibility" />
                      </button>
                    </div>
                    <span className="text-xs text-(--font-color-gray-light)">Use at least 8 characters, including a letter and a number.</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="security-confirm-password" className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)">CONFIRM NEW PASSWORD</label>
                    <div className="flex items-center rounded-xl border border-(--border-color-gray-light) px-4 py-3 focus-within:border-(--border-color-green)">
                      <input type={showPassword.confirmPassword ? "text" : "password"} id="security-confirm-password" required className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none" placeholder="Re-enter new password" value={formData.confirmPassword} onChange={handleChange} />
                      <button type="button" onClick={() => togglePasswordVisibility("confirmPassword")} className="shrink-0">
                        <img src={showPassword.confirmPassword ? "/icons/i-eye-closed.svg" : "/icons/i-eye.svg"} alt="Toggle password visibility" />
                      </button>
                    </div>
                  </div>
                </div>
                {message && (
                  <p className={`mb-3 text-xs ${messageType === "success" ? "text-(--font-color-green)" : "text-(--font-color-red)"}`}>{message}</p>
                )}
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