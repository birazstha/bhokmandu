import { GoogleLogin } from "@react-oauth/google";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/profile-context";
import { ThemeContext } from "../context/theme-cart";

export default function Login(params) {
  const navigate = useNavigate();

  const { profile, login } = useContext(ProfileContext);
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    if (profile) {
      console.log(profile);
      navigate("/");
    }
  }, [profile, navigate]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium leading-6 ${
                  theme ? " text-gray-900" : "text-white"
                }`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 ${theme ? 'text-white' :'text-gray-900} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium leading-6 ${
                    theme ? " text-gray-900" : "text-white"
                  }`}
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 ${theme ? 'text-white' :'text-gray-900} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center mt-6">
            <p className="text-sm font-medium text-gray-600">
              Or Continue With
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <GoogleLogin
                onSuccess={(response) => login(response, navigate)}
                onError={() => {
                  console.log("Login Failed");
                }}
                scope="profile email"
                responseType="token"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="flex items-center justify-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.3 0 6.2 1.1 8.5 3.2l6.3-6.3C34.7 2.5 29.7 0 24 0 14.7 0 6.8 5.7 3 14l7.3 5.6C12.5 12.7 17.8 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.6 24.1c0-1.3-.1-2.7-.3-3.9H24v7.4h12.7c-.5 3-2.1 5.6-4.6 7.4l7.3 5.6c4.2-3.9 6.6-9.7 6.6-16.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.3 28.6C8.9 25.3 8.9 21.6 10.3 18.4l-7.3-5.6c-4.6 9.2-4.6 20.3 0 29.5l7.3-5.6c-1.5-3.2-1.5-6.9 0-10.2z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c5.7 0 10.6-1.9 14.1-5.1l-7.3-5.6c-2.1 1.4-4.8 2.2-7.8 2.2-6.2 0-11.5-4.2-13.4-9.9l-7.3 5.6c3.8 8.3 12 14 21.8 14z"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
