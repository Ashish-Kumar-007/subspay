import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";

const AdminPanel = () => {
  // Sample data for demonstration
  const totalSubscriptions = 1200;
  const revenue = "$10,000";
  const activeUsers = 500;

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
      <div className="flex items-center justify-center lg:py-24 py-16">
        <div className="flex items-center lg:flex-row flex-col space-x-6">
          <div className="flex items-center flex-col px-5">
            <FaUsers className="text-white text-2xl md:text-5xl mb-2" />
            <h3 className="text-white text-lg lg:text-xl font-semibold">
              Total Subscriptions
            </h3>
            <div className="text-white text-xl md:text-4xl font-bold mb-6 md:mb-0">
              {totalSubscriptions}
            </div>
          </div>

          <div className="flex items-center flex-col  px-5">
            <FaChartLine className="text-white text-2xl lg:text-5xl mb-2" />
            <h3 className="text-white text-lg lg:text-xl font-semibold">
              Revenue
            </h3>
            <div className="text-white text-xl md:text-4xl font-bold mb-6 md:mb-0">
              {revenue}
            </div>
          </div>

          <div className="flex items-center flex-col px-5">
            <FaDollarSign className="text-white text-2xl lg:text-5xl mb-2" />
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Active Users
            </h3>
            <div className="text-white text-xl md:text-4xl font-bold">
              {activeUsers}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
      <label className="text-lg text-white font-semibold mb-2">Enter Token Amount</label>
      <div className="relative">
        <input
          type="text"
          name="token"
          id="token"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-96 w-72"
          placeholder="Enter something..."
        />
        <span className="absolute right-3 top-2 text-gray-400">
          {/* Add an icon here if desired */}
        </span>
      </div>
      <button
        type="button"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-indigo-800 transition-colors duration-300 w-60"
        // onClick={handleButtonClick}
      >
        Approve
      </button>
    </div>
    </div>
  );
};

export default AdminPanel;
