import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Go to our community and get new issues.
          <Link to="/community" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Login Challenge with Wanted in March 2023
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          이번 2023년 3월 원티드 프론트엔드 챌린지에서는 실제 동작하는 서버를 바탕으로 로그인 기능을
          구현합니다. 배포된 서버와 로컬 서버를 호출해 보면서 인프라와 백엔드에 대해서도 알아보고,
          보안이나 디렉토리 구조 등 현업에서 조금 더 나은 프로젝트를 위해 함께 고민합니다.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/features"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
