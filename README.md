# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

-해당 사전 과제는 React와 TypeScript로 제작되었습니다.
  
    
    

### 메인페이지  
![image](https://user-images.githubusercontent.com/94662639/221827508-2a5559e4-4eec-42ff-97b8-1460e397ad13.png)
  
- 유저 첫 접속시 보이는 Home 화면입니다.


### 로그인 페이지  ![image](https://user-images.githubusercontent.com/94662639/221827528-d0ac5d24-dd5e-4e11-885c-c6b81ba3987a.png)  
-  로그인 페이지입니다. (실제 작동 x) 
 
### 사이드바를 통한 페이지 이동  
![image](https://user-images.githubusercontent.com/94662639/221763862-17f433b3-1a7e-404b-8770-3a2427c1410d.png)
  
- 페이지 이동은 React-Router-Dom을 이용한 라우팅으로 기능 구현했습니다.


### 고민한 지점  

❓ 3개의 페이지가 고정되는 앱이 아니라, 여러 개의 페이지가 언제든 추가될 수 있다고 생각하고 프로젝트를 수행해 보세요.  
✔ 중첩 라우팅이 되어도 상위 컴포넌트를 레이아웃화 할 수 있도록 React-router-dom의 Outlet을 이용해 레이아웃을 구현했습니다. 
  

❓ 만들어진 페이지별로 로그인 여부를 판단하고자 한다면 어떻게 구조를 확장해야할지 고민해 보세요.  
✔ react-cookie를 이용해 유저 정보가 있을시 페이지를 보여주는 방식  
✔ useState와 useEffect를 사용해 페이지마다 IsLogin Boolean 값을 주는 방식   

