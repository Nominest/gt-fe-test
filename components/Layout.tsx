import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

type PropType = {
  children: ReactNode;
};
export default function Layout({ children }: PropType) {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-sidebar">
        <Sidebar />
        <Main />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
