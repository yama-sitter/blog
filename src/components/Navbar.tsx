import { SITE_NAME, SITE_NAVIGATION } from "@constants";

export type Props = {
  children?: React.ReactNode;
};

export const Navbar: React.FC<Props> = ({ children }) => (
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
    <div className="flex-none">
      <ul className="menu menu-horizontal p-1 hidden md:flex">
        {SITE_NAVIGATION.map((item) => (
          <li>
            <a href={item.slug}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
