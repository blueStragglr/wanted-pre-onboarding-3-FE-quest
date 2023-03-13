# 3월 원티드 프리온보딩 사전 과제

## 🖼 구현 화면

(아래는 샘플 이미지로 실제 구현된 화면과 차이 있음)

<fugure>
<img src='./sample.jpg' width='500' />
</fugure>

(실제 구현 화면 추가 예정)

## 🧨 구현 기능
- 로그인 (유저네임 + 비밀번호)
- **로그인(인증) 여부에 따라 각 페이지 접근(인가) 제어 (=> React Router)**
- 모든 페이지에 공통으로 반복되는 헤더와 사이드바 (로그인 페이지 제외)
- 왼쪽 사이드바 탭 기능

## 🛩 추가한 요소
1. **Grid**를 사용하여 수평/수직 방향 반응형 화면 구성
2. 테스트 코드(@testing-library/react) - 예정


## 📗 구현 메모
1. Grid 사용
* 단순 배치를 위한 추가적인 `div` 태그가 불필요해짐
  ```
  // Grid 사용 전
  
  <div className={styles.container}>
      <Header />

      <div className={styles.mainContainer}>
        <Sidebar />
        {children}
      </div>
  </div>
  ```
  
  ```
  // Grid 사용 후
  
  <div className={styles.container}>
      <Header />
      <Sidebar />
      {children}
  </div>
  ```
  
  2. 로그인 여부에 따라 다른 페이지로 리다이렉팅 (React Router v6)
  
  구현중🧩


