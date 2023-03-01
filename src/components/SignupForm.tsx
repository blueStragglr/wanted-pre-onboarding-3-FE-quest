import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div className="w-full rounded-lg shadow bg-white p-6 space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
      <h1 className="text-xl font-bold text-gray-900 leading-tight tracking-tight md:text-2xl">
        Create an account.
      </h1>
      <form className="space-y-4 md:space-y-6">
        <div className="relative z-0 w-full mb-6">
          <input
            id="email"
            type="email"
            className="floating-input peer"
            placeholder=" "
          />
          <label htmlFor="email" className="floating-label">
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6">
          <input
            id="password"
            type="password"
            className="floating-input peer"
            placeholder=" "
          />
          <label htmlFor="password" className="floating-label">
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6">
          <input
            id="confirm-password"
            type="password"
            className="floating-input peer"
            placeholder=" "
          />
          <label htmlFor="confirm-password" className="floating-label">
            Confirm password
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-2.5 rounded-lg font-medium text-sm text-center button-blue"
        >
          Sign up
        </button>
        <p className="text-sm text-gray-500 font-light select-none">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline pl-1"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
