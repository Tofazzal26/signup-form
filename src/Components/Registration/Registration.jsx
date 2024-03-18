const Registration = () => {
  return (
    <div className="bg-purple-500">
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="bg-white h-[300px] rounded-md p-10 w-[600px]">
          <h2 className="text-center text-4xl text-purple-500 font-semibold mb-8">
            Signup Form
          </h2>
          <h4 className="text-lg font-semibold mb-1">Name</h4>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow text-base text-gray-500 font-semibold"
              placeholder="Enter your name"
            />
          </label>
          <div className="text-end mt-10">
            <button className="bg-purple-500 text-white py-2 px-4 text-lg font-semibold rounded-md">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
