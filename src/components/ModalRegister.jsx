import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function ModalRegister({ isOpen = false, onClose = () => { }, onSwitchToLogin = () => { } }) {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const result = register({
      name,
      email,
      phone,
      nik,
      password
    });

    if (!result.success) {
      setError(result.message);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(result.message);

    setName("");
    setEmail("");
    setPhone("");
    setNik("");
    setPassword("");
  }

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center overflow-y-auto bg-[rgba(19,35,27,0.55)] px-4 py-6">
      <div className="my-auto w-full max-w-140 overflow-hidden rounded-2xl border border-(--border-color-gray-light) shadow-xl">
        <div className="flex items-start justify-between border-b border-(--border-color-gray-light) bg-(--bg-color-body) px-6 pt-6 pb-2">
          <div className="min-w-0">
            <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Register Citizen Account</h2>
            <p className="mt-1 font-['Public_Sans'] text-sm text-(--font-color-gray)">Create an account to lodge a complaint or upvote issues.</p>
          </div>
          <button type="button" onClick={onClose} className="shrink-0">
            <img src="/icons/i-close.svg" alt="Icon Close" />
          </button>
        </div>
        <div className="bg-(--bg-color-white) p-4">
          <div className="flex gap-2">
            <button type="button" onClick={onSwitchToLogin} className="flex-1 rounded-full bg-(--bg-color-body) px-2 py-3 text-center text-sm text-(--font-color-gray)">Sign In Existing Account</button>
            <span className="flex flex-1 items-center justify-center rounded-full bg-(--bg-color-green) px-2 py-3 text-center text-sm font-semibold text-(--font-color-white)">Register as Citizen</span>
          </div>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-name">FULL NAME (NAMA LENGKAP) *</label>
              <div className="flex items-center gap-2 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                <img src="/icons/i-user.svg" alt="Icon User" />
                <input className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="text" id="register-name" placeholder="e.g. Budi Santoso" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-email">EMAIL ADDRESS *</label>
                <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                  <input className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="email" id="register-email" placeholder="e.g. budi@wargareport.id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-phone">PHONE / WHATSAPP *</label>
                <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                  <input className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="tel" id="register-phone" placeholder="+62 812-..." value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-nik">NIK</label>
              <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                <input className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="text" id="register-nik" placeholder="16 digits for verified resident badge (e.g. 3174...)" maxLength={16} value={nik} onChange={(e) => setNik(e.target.value)} />
              </div>
              <span className="text-xs text-(--font-color-gray-light)">Used exclusively for verification under UU PDP and never shown to the public.</span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-password">PASSWORD *</label>
              <div className="flex items-center gap-2 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                <img src="/icons/i-lock.svg" alt="Icon Lock" />
                <input className="min-w-0 w-full bg-transparent text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="password" id="register-password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <img className="shrink-0 cursor-pointer" src="/icons/i-eye.svg" alt="Icon Eye" />
              </div>
            </div>
            {error && <p className="text-sm text-(--font-color-red)">{error}</p>}
            {success && <p className="text-sm text-(--font-color-green)">{success}</p>}
            <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-3 text-sm font-semibold text-(--font-color-white) hover:opacity-90">
              <img src="/icons/i-check.svg" alt="Icon Check" />Create Account & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;