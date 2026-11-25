import { Link } from "react-router";
import NavGlobal from "../../components/NavGlobal";
import Footer from "../../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavGlobal />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex flex-col gap-3 pt-15 lg:flex-col">
          <h1 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-(--font-color-black) sm:text-4xl">Page Not Found</h1>
          <span className="mt-4 text-sm leading-relaxed text-(--font-color-gray)">Please enter correct address...</span>
          <Link to={"/"} className="mt-1 flex w-fit items-center justify-center gap-2 rounded-full bg-(--font-color-green) px-4 py-2 text-xs font-semibold text-white sm:w-fit">
            <img src="/icons/i-arrow-left-white.svg" alt="Icon Arrow Left" />
            Back to Landing Page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}