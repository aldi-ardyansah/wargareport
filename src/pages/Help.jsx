import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Help() {
  const statuses = [
    {
      name: "Submitted",
      description: "Your report was submitted and received by our intake router.",
      icon: "/icons/i-clock.svg",
      color: "bg-(--bg-color-gray) text-(--font-color-gray) border-(--border-color-gray-light)"
    },
    {
      name: "Received",
      description: "Verified by WargaReport and queued for agency dispatch.",
      icon: "/icons/i-inbox.svg",
      color: "bg-(--bg-color-green-light) text-(--font-color-green) border-(--border-color-green-light)"
    },
    {
      name: "In review",
      description: "Agency coordinators are assessing field safety and equipment.",
      icon: "/icons/i-search.svg",
      color: "bg-(--bg-color-orange-light) text-(--font-color-orange) border-(--border-color-orange-light)"
    },
    {
      name: "Assigned",
      description: "A field crew or technician is dispatched to the street.",
      icon: "/icons/i-user-check.svg",
      color: "bg-(--bg-color-blue-light) text-(--font-color-gray) border-(--border-color-blue-light)"
    },
    {
      name: "Awaiting your info",
      description: "Inspector needs clarification or an updated photo.",
      icon: "/icons/i-alert-circle.svg",
      color: "bg-(--bg-color-orange-light) text-(--font-color-orange) border-(--border-color-orange-light)"
    },
    {
      name: "Resolved",
      description: "Physical fix completed and inspection statement published.",
      icon: "/icons/i-check-circle.svg",
      color: "bg-(--bg-color-green-light) text-(--font-color-green) border-(--border-color-green-light)"
    },
    {
      name: "Closed",
      description: "Case completed and archived.",
      icon: "/icons/i-archive.svg",
      color: "bg-(--bg-color-gray) text-(--font-color-gray-light) border-(--border-color-gray-light)"
    }
  ];

  const faqs = [
    {
      category: "HOW IT WORKS",
      question: "How does WargaReport get city issues fixed?",
      answer: (
        <ol className="flex list-decimal flex-col gap-2 pl-5">
          <li>You spot an issue (pothole, water leak, dark street) and snap a photo.</li>
          <li>WargaReport verifies the evidence and dispatches it directly to the responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).</li>
          <li>A public countdown starts. Neighbors can upvote the report to increase priority.</li>
          <li>Field crews resolve the physical issue and post verification proof before closing.</li>
        </ol>
      )
    },
    {
      category: "PRIVACY (UU PDP)",
      question: "Will my name or contact info be visible to the public?",
      answer: (
        <ol className="flex list-decimal flex-col gap-2 pl-5">
          <li>You spot an issue (pothole, water leak, dark street) and snap a photo.</li>
          <li>WargaReport verifies the evidence and dispatches it directly to the responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).</li>
          <li>A public countdown starts. Neighbors can upvote the report to increase priority.</li>
          <li>Field crews resolve the physical issue and post verification proof before closing.</li>
        </ol>
      )
    },
    {
      category: "ACCOUNT MANDATORY",
      question: "Do I need an account to lodge a report or interact?",
      answer: (
        <ol className="flex list-decimal flex-col gap-2 pl-5">
          <li>You spot an issue (pothole, water leak, dark street) and snap a photo.</li>
          <li>WargaReport verifies the evidence and dispatches it directly to the responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).</li>
          <li>A public countdown starts. Neighbors can upvote the report to increase priority.</li>
          <li>Field crews resolve the physical issue and post verification proof before closing.</li>
        </ol>
      )
    },
    {
      category: "ESCALATION",
      question: "What happens if an agency ignores or delays the report?",
      answer: (
        <ol className="flex list-decimal flex-col gap-2 pl-5">
          <li>You spot an issue (pothole, water leak, dark street) and snap a photo.</li>
          <li>WargaReport verifies the evidence and dispatches it directly to the responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).</li>
          <li>A public countdown starts. Neighbors can upvote the report to increase priority.</li>
          <li>Field crews resolve the physical issue and post verification proof before closing.</li>
        </ol>
      )
    },
    {
      category: "NOTIFICATIONS",
      question: "Can I get status alerts sent to my WhatsApp or Email?",
      answer: (
        <ol className="flex list-decimal flex-col gap-2 pl-5">
          <li>You spot an issue (pothole, water leak, dark street) and snap a photo.</li>
          <li>WargaReport verifies the evidence and dispatches it directly to the responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).</li>
          <li>A public countdown starts. Neighbors can upvote the report to increase priority.</li>
          <li>Field crews resolve the physical issue and post verification proof before closing.</li>
        </ol>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <Nav />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="pt-10 md:pt-15">
          <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray-light)">CITIZEN HELP</span>
          <h1 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) md:mt-6 md:text-4xl">How WargaReport Works</h1>
          <p className="mt-3 max-w-160 text-sm leading-relaxed text-(--font-color-gray) md:mt-4">Everything you need to know about reporting civic issues, public countdown timers, and tracking city fixes.</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-[1.6fr_1fr] md:gap-8">
          <section>
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray-light)">FREQUENTLY ASKED QUESTIONS</span>
            <div className="mt-4 flex flex-col gap-2 md:mt-6">
              {faqs.map((faq, index) => (
                <details key={index} open={index === 0} className="group rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white) open:bg-(--bg-color-card)">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-3 sm:gap-4 sm:p-4 [&::-webkit-details-marker]:hidden">
                    <div className="flex min-w-0 flex-col gap-2">
                      <span className="font-['IBM_Plex_Mono'] text-[11px] font-semibold text-(--font-color-green)">{faq.category}</span>
                      <span className="text-sm font-medium text-(--font-color-black)">{faq.question}</span>
                    </div>
                    <img className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" src="/icons/i-chevron-up.svg" alt="" />
                  </summary>
                  {faq.answer && (
                    <div className="rounded-b-2xl border-t border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-4 text-sm leading-relaxed text-(--font-color-gray) sm:px-5 sm:py-5">
                      {faq.answer}
                    </div>
                  )}
                </details>
              ))}
            </div>
          </section>
          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white) p-4 sm:p-5">
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray-light)">STATUS MEANINGS</span>
              <h2 className="mt-3 font-['Fraunces'] text-lg font-semibold text-(--font-color-black)">What does each status mean?</h2>
              <div className="mt-5 flex flex-col gap-4 sm:mt-7">
                {statuses.map((status, index) => (
                  <div key={index} className="flex flex-wrap items-start gap-2">
                    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${status.color}`}>
                      <img className="h-3.5 w-3.5" src={status.icon} alt="" />
                      {status.name}
                    </span>
                    <p className="min-w-0 flex-1 pt-0.5 text-xs leading-[1.35] text-(--font-color-gray)">{status.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-(--border-color-red-light) bg-(--bg-color-red) p-4 sm:p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-(--font-color-red)">
                <img className="h-4 w-4 shrink-0" src="/icons/i-phone-call.svg" alt="" />
                Is this an acute life-safety emergency?
              </div>
              <p className="mt-2 text-xs leading-relaxed text-(--font-color-gray)">WargaReport is for non-urgent municipal infrastructure. If there is an active fire, medical crisis, or immediate hazard to life:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="tel:112" className="rounded-full border border-(--border-color-red-light) bg-(--bg-color-white) px-3 py-1 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-red)">Call 112 (National Emergency)</a>
                <a href="tel:113" className="rounded-full border border-(--border-color-red-light) bg-(--bg-color-white) px-3 py-1 font-['IBM_Plex_Mono'] text-xs font-medium text-(--font-color-red)">Call 113 (Fire Dispatch)</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}