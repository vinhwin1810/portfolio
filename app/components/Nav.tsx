// app/components/Navbar.tsx
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border-b border-white py-4 bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
