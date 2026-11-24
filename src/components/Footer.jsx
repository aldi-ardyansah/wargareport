import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-15 flex w-full flex-col flex-wrap justify-between gap-10 border-t border-(--border-color-gray) bg-(--bg-color-white) px-6 py-10 md:mt-25 md:flex-row md:gap-12.5 md:px-25 md:pb-6.25 md:pt-12.5">
      <div className="flex min-w-0 flex-2 flex-col gap-5">
        <h2 className="font-['Fraunces'] text-xl font-bold text-(--font-color-black)">WargaReport</h2>
        <p className="font-['Public_Sans'] text-sm leading-normal text-(--font-color-gray)">WargaReport is an independent civic reporting platform for municipal infrastructure issues across Indonesia. Residents submit evidence, follow SLA countdowns, and track resolution updates from the responsible agencies.</p>
        <p className="font-['Public_Sans'] text-sm leading-normal text-(--font-color-red)">Not for life-threatening emergencies — call 112 (National Emergency Call Center) or BPBD DKI directly.</p>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-widest text-(--font-color-green)">CITIZENS</div>
        <div className="flex flex-col gap-2.5">
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="/proof">File a report</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="/track">Track complaint</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="/live-feed">Public reports registry</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="/list-complaint">My filing history</Link>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-widest text-(--font-color-green)">AGENCIES</div>
        <div className="flex flex-col gap-2.5">
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">Participating bureaus</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">Officer triage queue</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">SLA benchmarks</Link>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-widest text-(--font-color-green)">CIVIC TRUST</div>
        <div className="flex flex-col gap-2.5">
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">Help & FAQs</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">Evidence guidelines</Link>
          <Link className="font-['Public_Sans'] text-sm text-(--font-color-gray)" to="#">PII & redaction policy</Link>
        </div>
      </div>
      <div className="flex w-full basis-full flex-col justify-between gap-3 border-t border-[rgba(220,215,204,1)] pt-6 sm:flex-row">
        <span className="font-['Public_Sans'] text-xs text-(--font-color-gray-light)">© 2026 WargaReport. All rights reserved.</span>
        <span className="font-['IBM_Plex_Mono'] text-[11px] text-(--font-color-gray-light)">UU No. 25/2009 Compliant</span>
      </div>
    </footer>
  )
}

export default Footer;