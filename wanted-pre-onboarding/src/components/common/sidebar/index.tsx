import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SideBar(props: any) {
  const navigate = useNavigate();
  const [pageList, setPageList] = useState<Array<String>>(["A", "B", "C"]);
  const onClick = (page: string) => {
    navigate(`/pageDetail/${page}`, {
      state: {
        text: page,
      },
    });
  };

  return (
    <S.SideBarLayout>
      <S.PageList>
        {pageList &&
          pageList.map((page: any) => (
            <S.Page
              key={page}
              onClick={() => onClick(page)}
              style={
                props.currentPage === page
                  ? { color: "blue" }
                  : { color: "black" }
              }
            >
              Page {page}
            </S.Page>
          ))}
      </S.PageList>
    </S.SideBarLayout>
  );
}

export default SideBar;
