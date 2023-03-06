import { Outlet } from "react-router-dom";
import { Sidebar, Header, Detail } from "@/Components/index";
import { useState } from "react";

type Page = "Home" | "A" | "B" | "C";

function RootLayout() {
  const [currentPage, setCurrentPage] = useState<Page>("Home");

  const handleChangePage = (page: Page) => setCurrentPage(page);

  return (
    <>
      <Header handleChangePage={handleChangePage} />
      <Sidebar currentPage={currentPage} handleChangePage={handleChangePage} />
      <Detail>
        <Outlet />
      </Detail>
    </>
  );
}

export default RootLayout;
