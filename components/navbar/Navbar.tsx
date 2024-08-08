import Link from "next/link";

import SearchInput from "../header/SearchInput";
import Profile from "../header/Profile";
import Logo from "../header/Logo";

const Navbar = () => {
  return (
    <header className="bg-[#E9E6F8] rounded-2xl">
      <nav className="p-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>
          <li className="flex justify-center flex-1">
            <SearchInput />
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
