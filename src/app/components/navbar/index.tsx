import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav className="w-full px-32 bg-blue-800">
      <div className="w-full flex justify-between items-center h-16 text-white relative shadow-sm">
        <div className="w-full flex justify-between items-center px-8">
          <div>
            <a href="/" className="text-2xl font-bold hover:text-gray-100">
              <h1>Logo</h1>
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="text-lg hover:text-gray-100">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-lg hover:text-gray-100">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-lg hover:text-gray-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
