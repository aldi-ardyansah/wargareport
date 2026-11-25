import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

function ModalLogin({ isOpen = false, onClose = () => { }, onSwitchToRegister = () => { } }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    onClose();

    navigate(
      result.user.role === "admin"
        ? "/admin/escalation-desk"
        : "/user/topic"
    );
  }

  return (
    <header>
      <div className="fixed inset-0 z-2000 flex items-center justify-center overflow-y-auto bg-[rgba(19,35,27,0.55)] px-4 py-6">
        <div className="my-auto w-full max-w-120 overflow-hidden rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) shadow-xl">
          <div className="flex items-start justify-between gap-4 border-b border-(--border-color-gray-light) bg-(--bg-color-body) px-6 pt-6 pb-2">
            <div className="min-w-0">
              <h2 className="font-['Fraunces'] text-xl font-semibold text-(--font-color-black)">Sign In to WargaReport</h2>
              <p className="mt-1 font-['Public_Sans'] text-sm text-(--font-color-gray)">Sign in to lodge a complaint or upvote issues.</p>
            </div>
            <button type="button" onClick={onClose} className="shrink-0">
              <img src="/icons/i-close.svg" alt="Icon Close" />
            </button>
          </div>
          <div className="p-4">
            <div className="flex gap-2">
              <span className="flex flex-1 items-center justify-center rounded-full bg-(--bg-color-green) px-2 py-3 text-center text-sm font-semibold text-(--font-color-white)">Sign In Existing Account</span>
              <button type="button" onClick={onSwitchToRegister} className="flex-1 rounded-full bg-(--bg-color-body) px-2 py-3 text-center text-sm text-(--font-color-gray)">Register as Citizen</button>
            </div>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="login-email">EMAIL ADDRESS</label>
                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                  <img src="/icons/i-email.svg" alt="Icon Email" />
                  <input className="min-w-0 w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="email" id="login-email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="login-password">PASSWORD</label>
                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-3 py-2 focus-within:border-(--border-color-green)">
                  <img src="/icons/i-lock.svg" alt="Icon Lock" />
                  <input className="min-w-0 w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type={showPassword ? "text" : "password"} id="login-password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="shrink-0">
                    <img src={showPassword ? "/icons/i-eye-closed.svg" : "/icons/i-eye.svg"} alt="Toggle password visibility" />
                  </button>
                </div>
              </div>
              {error && <p className="text-sm text-(--font-color-red)">{error}</p>}
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-3 font-['Public_Sans'] text-sm font-semibold text-(--font-color-white) hover:opacity-90">
                Sign In<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ModalLogin;