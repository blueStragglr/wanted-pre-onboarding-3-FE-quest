// private 페이지가 되는 조건에 대한 정보
const useProtectedRouteConditions = () => {
  const {isLoggedIn,isAdmin,isBannedUser} = useCurrentUser();

  return {
    isLoggedIn,
    isAdmin,
    isBannedUser
  }
}

// PageRoutes.tsx
const PageRoutes = () => {
  const { isLoggedIn,isAdmin,isBannedUser } = useProtectedRouteConditions();

  return (
  <>
    <Routes>
      <AppRoute path="/design" element={DesignPageRouter} protectedBy={isLoggedIn} redirect="/login" />
      <AppRoute path="/setting" element={SettingPage}  protecedBy={isAdmin} redirect="/" />
      <AppRoute path="/pricing" element={PricingPage} public />  
      <AppRoute path="/login" element={LoginPage} public allowAppLayout={false}/> 
      <AppRoute path="/pageA" element={PageA} public /> 
      {/* 새로운 주소 확장  */}
      {/* <AppRoute path="/someprivatePage" element={PrivatePage} protectedBy={isBannedUser} />  */}
    </Routes>
  </>)
}


// AppRoute.tsx (커스텀 route 컴포넌트)

// 로그인 여부를 직접 가지고 있지 않음 
// 레이아웃이 어떻게 생겼는지 궁금하지 않음 
import { Route,Redirect } from "react-router";

interface AppRouteProps {
  element: ReactNode;
  path: string;
  protectedBy?: boolean;
  public?: boolean;
  hasLayout?: boolean;
  redirect?: string;
}

const AppRoute = ({element, protectedBy:canAccess, hasLayout, redirect, public}:AppRouteProps) => {
  if(public && canAccess) return withAppLayout(<Route path={path} element={element}/>, hasLayout);

  return redirect ? <Redirect path={redirect}/> : null;
}

const useAppLayout = ()=>{
  const value = useContext(AppLayoutContext);
  if(!value) throw new Error();
  return value.Layout;
}

// withAppLayout HOC
const withAppLayout = (component,hasLayout) => {
const { Layout } = useAppLayout()
  return hasLayout ? <Layout>{component}</Layout> : <>{component}</>;
}


// App.tsx (entry)
import { AppLayout } from "@component";

function App() {
  return 
  <ThemeProvider>
    <AuthProvider>
      <AppLayoutProvider layout={AppLayout}>
        <PageRoutes/>
      </AppLayoutProvider>
    </AuthProvider>
  </ThemeProvider>;
}

export default App;

