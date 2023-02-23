import React from "react";
import SideNavigation from "../../components/Navigation/SideNavigation";
import TopNavigation from "../../components/Navigation/TopNavigation";
import * as S from "./styled";

export default function FirstPage() {
  return (
    <div>
      <TopNavigation />
      <div>
        <SideNavigation />
      </div>
    </div>
  );
}
