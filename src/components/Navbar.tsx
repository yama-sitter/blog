import { SITE_NAME } from "@constants";

export const Navbar: React.FC = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a
        href="/"
        className="p-2 hover:underline md:text-3xl font-black flex gap-4 items-center"
      >
        <img
          src="/assets/icon.png"
          width="48"
          height="48"
          alt="Icon"
          className="rounded-full bg-base-200 md:w-12 md:h-12 w-9 h-9"
        />
        {SITE_NAME}
      </a>
    </div>
  </div>
);
