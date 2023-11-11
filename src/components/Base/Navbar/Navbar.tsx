import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-16 py-4">
      <h1 className="text-lg text-white capitalize">
        <Link href="https://alihoushangi.iran.liara.run/" className="underline">
          Ali Houshangi{" "}
        </Link>
        👈🏻 My portfolio
      </h1>
    </nav>
  );
};

export default Navbar;
