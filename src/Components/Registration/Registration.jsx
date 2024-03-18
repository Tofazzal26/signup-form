import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [check, setCheck] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!check) {
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    setIsSubmit(true);
  };

  return (
    <div className="bg-purple-500">
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="bg-white h-[500px] rounded-md p-10 w-[600px]">
          <form onSubmit={(event) => handleClick(event)}>
            <h2 className="text-center text-4xl text-purple-500 font-semibold mb-8">
              Signup Form
            </h2>
            <h4 className="text-lg font-semibold mb-1">Name</h4>
            <label className="input input-bordered flex items-center gap-2">
              <input
                required
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>
            <h4 className="text-lg font-semibold mb-1">Email</h4>
            <label className="input input-bordered flex items-center gap-2">
              <input
                required
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>
            <h4 className="text-lg font-semibold mb-1">Password</h4>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <input
                required
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>
            <input
              required
              onChange={(event) => setCheck(event.target.checked)}
              type="checkbox"
            />{" "}
            Do you agree with our terms and condition
            <div className="text-end mt-10">
              <button className="bg-purple-500 text-white py-2 px-4 text-lg font-semibold rounded-md">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSubmit && (
        <div className="fixed top-0 h-screen w-full flex justify-center bg-purple-500 items-center">
          <div className="bg-purple-300 w-1/2 h-2/3 rounded text-center">
            <h2 className="text-3xl mt-3 mb-6 text-purple-500">
              You have submitted the form successfully !
            </h2>
            <p className="text-lg font-semibold">Name: {name}</p>
            <p className="text-lg font-semibold">Email: {email}</p>
            <p className="text-lg font-semibold">Password: {password}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
