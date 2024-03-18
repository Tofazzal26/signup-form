import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
  };

  return (
    <div className="bg-purple-500">
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="bg-white h-[470px] rounded-md p-10 w-[600px]">
          <form onSubmit={(event) => handleClick(event)}>
            <h2 className="text-center text-4xl text-purple-500 font-semibold mb-8">
              Signup Form
            </h2>
            <h4 className="text-lg font-semibold mb-1">Name</h4>
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>

            <h4 className="text-lg font-semibold mb-1">Email</h4>
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>
            <h4 className="text-lg font-semibold mb-1">Password</h4>
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="grow text-base text-gray-500 font-semibold"
                placeholder="Enter your name"
              />
            </label>

            <div className="text-end mt-10">
              <button className="bg-purple-500 text-white py-2 px-4 text-lg font-semibold rounded-md">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
