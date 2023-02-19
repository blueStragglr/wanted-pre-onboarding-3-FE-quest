import { ReactNode } from "react";
import { Navigate, Routes } from "react-router-dom";

interface PrivateRoutesProps {
  isLogin: boolean;
  children: ReactNode;
}

const PrivateRoutes = ({ isLogin, children }: PrivateRoutesProps) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Routes>{children}</Routes>;
};

export default PrivateRoutes;

// const Container = styled.div`
//   h1 {
//     font-weight: bolder;
//     margin-bottom: 2rem;
//   }
//   a {
//     font-size: 1.6rem;
//     margin-right: 2rem;
//   }
//   height: 100vmin;
//   font-size: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
