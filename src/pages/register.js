import "./Login.scoped.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function Register() {
  return (
    <body className="bg-[#A0855B] h-screen flex justify-center items-center">
      <div className="bg-white flex flex-row px-6 py-12 lg:px-20  justify-center   border-black border-solid my-12 lg:my-56  border-2 rounded-md">
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <div className="w-96 pt-10">
              <img src="./img/logologin.png"></img>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-[#000000]"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-[#000000]"
                    >
                      Password
                    </label>
                    <div className="text-sm" />
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-1 border-black py-1.5  text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-[#000000]"
                    >
                      Confirmpassword
                    </label>
                    <div className="text-sm" />
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-1 border-black py-1.5  text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#A0855B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ddb97f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-back"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                alredy have a member?{" "}
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-[#7C913D] hover:text-[#def59a]"
                >
                  login
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </body>
  );
}
export default Register;
