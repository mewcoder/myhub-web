import type { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout(children: ReactNode ) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main >{children}</main>
    </div>
  );
}
