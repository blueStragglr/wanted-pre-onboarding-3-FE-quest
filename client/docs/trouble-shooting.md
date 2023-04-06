# Trouble Shooting

### POST api/auth/signup의 payload에 비밀번호 보임

> 크롬 네트워크 창으로 보면 보이는데 문제가 없나??

문제없다. 회원 가입시에 호출하는 url 프로토콜이 https면 구간 암호된다. 브라우져 개발자 도구에서는 평문으로 보이이지만 HTTPS는 전송하는 중간 구간에서 가로채도 암호화가 되어있기 때문에 괜찮다.

하지만 HTTPS를 사용한다고 하더라도 그 외의 이중/삼중의 추가적인 보안 솔루션의 도입은 필요할 수 있다.

https에서 평문으로 중요한 정보를 보낼 때 고려할 사항은 3가지 정도있다.

1.Client Side

- 악의적인 목적의 프로그램이 pc에 깔려있을 때 사용자가 입력할 때 가로채기

  2.MITM(Man in the middle)

- 중간자가 통신 패킷을 볼 수 있다고 하더라도 HTTPS로 패킷이 암호화 되어있기 때문에 유의미한 정보를 얻을 수는 없습니다.

  3.Server Side

- 서버 입장에서는 패스워드가 평문일 경우 길이/중복문자/사전단어/영문자+숫자+특수문자의 조합/등등의 유효성을 검사할 수 있다는 장점이 있습니다.
- 클라이언트가 유효성 검사 후에 해싱하여 보내준다면, 서버는 클라이언트가 유효성 검사를 조작 후에 해시하여 보내줬는지를 파악할 수가 없습니다.

결론적으로

> 구글링을 통해 몇몇 블로그, 홈페이지들을 찾아본 결과 HTTPS를 통해 암호를 전송할때 해시/암호화 등의 조치를 한번 더 취하는 것이 사이트 보안 이점을 얻기 어렵다는 글들을 보았습니다. 왜냐하면 공격자가 해시/암호화된 패스워드를 획득하였을 때 서버가 두 경우의 차이를 알 수 없기 때문입니다 https://yoonhogo.github.io/blog/2020-09-08/HTTPS-plain-text-safety/#conclusion

- https://yoonhogo.github.io/blog/2020-09-08/HTTPS-plain-text-safety/
- https://youtu.be/_5bkFRwSfFQ
- https://okky.kr/questions/496801
- https://d2.naver.com/helloworld/318732

## gh-pages 배포 링크 에러

> 깃허브에서 이런 메인 호스팅작업은 1계정당 1페이지 밖에 제공하지 않는다. 여러 Repository를 만들어 띄우고 싶을 때 해결 방법

“userName.github.io” 형식이 아닌 자유형식으로 지정하되, 별도의 GitHubpages 활성화 설정을 해주면 “userName.github.io/repoName”형식으로 호스팅이 가능

### 상대 경로 문제

- package.json의 homepage를 배포될 url로 변경하기

```json
"homepage": "https://kimyouknow.github.io/wanted-pre-onboarding-3-FE-quest/",

```

- react-router-dom의 baseUrl 설정 및 개발 모드와 배포모드 url 구분

```tsx
<BrowserRouter basename={process.env.PUBLIC_URL}>
```

```json
"scripts": {
  "deploy": "gh-pages -d build -b deploy",
  "start": "PUBLIC_URL=/ craco start ",
  "build": "craco build",
},
```
