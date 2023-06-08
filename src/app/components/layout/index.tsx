import { PropsWithChildren } from "react";

import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-full px-10 lg:px-20 xl:px-32">{children}</main>
      <Footer />
    </div>
  );
};
