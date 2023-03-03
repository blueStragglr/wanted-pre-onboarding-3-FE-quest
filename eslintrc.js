// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            // eslint-plugin-react 에서 버전을 명시해줘야 오류가 나지않습니다.
            version: "^18.2.0",
        },
    },
    rules: {
        /*
         * 일시 개인적인 사용
         */
        // *jsx 파일에서 React를 가져오지 않을때 뱉는 오류 제거
        "react/react-in-jsx-scope": "off",

        // *AutoFix 가능
        // 사용하지 않는 변수가 존재해도 신경쓰지않음, extends 기능에 error로 명시되어있음.
        "no-unused-vars": "off",

        // 조건이 항상 같을경우 warning, Loop 안에선 무시.
        "no-constant-condition": ["warn", { checkLoops: false }],

        // 주요 중괄호 앞에 공백 1개.
        "space-before-blocks": "warn",

        // 중괄호 내에 일정한 간격을 유지시켜준다.
        "object-curly-spacing": ["warn", "always"],

        // 제어문의 소괄호 앞에 공백 1개.
        "keyword-spacing": ["error", { before: true }],

        // 연산자 사이에 공백.
        "space-infix-ops": "error",

        // 함수 호출시 공백 금지.
        "func-call-spacing": ["warn", "never"],

        // 객체 키와 값 사이에는 공백 넣기.
        "key-spacing": ["error", { afterColon: true }],

        // 세미콜론 필수적으로 넣어줘야한다.
        semi: ["error", "always"],

        // 배열 객체 비구조화 권장
        "prefer-destructuring": [
            "warn",
            {
                array: true,
                object: true,
            },
        ],

        // * else 안에서 리턴시 else 제거
        "no-else-return": "error",

        // 들여쓰기 space 4
        indent: ["warn", 4],

        // 스코프가 비어있을때 경고
        "no-empty": "off",

        // 싱글 쿼트 사용
        quotes: ["error", "single"],

        /*
         * 선언되지 않은 변수를 사용할경우 에러표시가 나는데 타입스크립트 내에 process.env를 사용할 때
         * 생성되는 오류를 잡아준다. 해당 설정이 없어도 정상적으로 작동한다.
         */
        "no-undef": ["off", { typeof: true }],

        // 인자를 괄호로 감싸기
        "arrow-parens": ["warn", "always"],

        // 여러 줄의 if와 else문을 사용할 때는 else를 if 블록의 닫는 중괄호와 같은 줄에 두세요
        "brace-style": "warn",

        // 모든 주석은 공백으로 시작합니다.
        "spaced-comment": "warn",

        // *AutoFix 불가능
        // 변수 할당 체이닝 금지
        "no-multi-assign": "error",

        // 함수 이외에 블록에서 함수 선언 금지
        "no-loop-func": "warn",

        /* 삭제 항목 */

        // 빈 행 최대 1개만.
        // 'no-multiple-empty-lines': ['error', {max: 1}],
        // 개발 단계에서 구분을위한 빈 행 제한은 불필요한 것 같다.
        // 가로 열 길이 제한, 문자열은 포함하지 않는다.

        // 'max-len': ['warn', {'code': 120, 'ignoreStrings': true }],
        // 개발자 마다 개인적인 가독성이 중요할 것 같다.
        // 기본 console.log 금지
        // 'no-console': ['error', { allow: ['warn', 'error'] }],
        // 개발을 진행시 console.log사용에 불편함이 생길 수 있다.
    },
};
