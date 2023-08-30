import React from "react";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <Bars3Icon className="w-5" />
            <Link href="/">Logo</Link>
          </nav>
          <nav>
            <div>
              <UserIcon className="w-5" />
              Profile
            </div>
            <div>
              <ShoppingCartIcon className="w-5" />
              Cart
            </div>
          </nav>
        </div>
        <div>
          <form>
            <input type="search" name="search" placeholder="Search" />
            <button type="submit">
              <MagnifyingGlassIcon className="w-5" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
