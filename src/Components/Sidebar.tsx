import { Link } from "react-router-dom";
import { css } from "@emotion/react";

type Props = {
  currentPage: "Home" | "A" | "B" | "C";
  handleChangePage: (page: "Home" | "A" | "B" | "C") => void;
};

const pages: { name: "Home" | "A" | "B" | "C" }[] = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
];

function Sidebar({ currentPage, handleChangePage }: Props) {
  return (
    <nav
      css={css`
        width: 200px;
        height: 100vh;
        border-right: 1px solid #000;
        position: absolute;
      `}
    >
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            css={css`
              padding: 0 30px;
              & a {
                display: block;
                padding: 10px;
                height: 30px;
                color: ${currentPage === page.name ? "skyblue" : ""};
              }
            `}
            onClick={() => handleChangePage(page.name)}
          >
            <Link to={`${page.name}`}>Page {page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
