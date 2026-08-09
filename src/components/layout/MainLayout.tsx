import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";

export function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-24" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
