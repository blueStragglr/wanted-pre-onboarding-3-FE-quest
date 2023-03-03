// 각 테스트가 DOM에 렌더링해놓은 내용들을 테스트가 끝날 때 다음 테스트를 위해서 지워줌
// import '@testing-library/react/cleanup-after-each';
// jest-dom가 제공하는 matcher를 Jest 테스트 러너에게 인식시킴
import '@testing-library/jest-dom/extend-expect';
