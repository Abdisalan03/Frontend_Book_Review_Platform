import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email cannot be empty");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    axios.defaults.withCredentials = true;
    try {
      const res = await axios.post("http://localhost:8000/users/forgot-password", { email });
      if (res.data.Status === "Success") {
        toast.success("Email sent successfully");
   
      } else {
          console.log(res.data);
          toast.success("Email sent successfully");
          

        }
      } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };




  return (
    <div className="w-full md:w-2/4 xl:w-1/3 p-6 sm:p-8 rounded-lg flex flex-col  shadow-[0px_0px_6px_rgb(0,0,0,0.1)]">
      <h2 className="text-3xl font-medium text-center ">Forget Password</h2>
      <p className="text-center text-gray-500 text-base mt-2 ">
        Please enter your email address you like your password reset information
        sent to
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setEmailError(""); // Reset email error when user types
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-primaryColor bg-opacity-90 hover:bg-opacity-100 px-4 py-3 text-sm flex items-center justify-center rounded-xl text-white duration-100 "
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;