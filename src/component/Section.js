import React from "react";
import { page2, page3 } from "../modules/pagenation";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function Section() {
  const [page, setPage] = React.useState({
    page1: false,
    page2: false,
    page3: false,
  });

  return (
    <div className="section">
      <div className="sidebar">
        <ul>
          <li
            onClick={() =>
              setPage((prev) => {
                return {
                  page1: true,
                  page2: false,
                  page3: false,
                };
              })
            }
            className={page.page1 ? "active" : null}
          >
            Page A
          </li>
          <li
            onClick={() =>
              setPage((prev) => {
                return {
                  page1: false,
                  page2: true,
                  page3: false,
                };
              })
            }
            className={page.page2 ? "active" : null}
          >
            Page B
          </li>
          <li
            onClick={() =>
              setPage((prev) => {
                return {
                  page1: false,
                  page2: false,
                  page3: true,
                };
              })
            }
            className={page.page3 ? "active" : null}
          >
            Page C
          </li>
        </ul>
      </div>
      <div className="content">
        {page.page1 && <Page1 />}
        {page.page2 && <Page2 />}
        {page.page3 && <Page3 />}
      </div>
    </div>
  );
}
