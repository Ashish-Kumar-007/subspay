import { FaCheck } from 'react-icons/fa';

const SubscriptionPlan = ({ title, price, features }) => {
  return (
    <div className="border-0 rounded-lg shadow-lg p-8 bg-gray-800 text-white ">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold mr-2">{price}</span>
        <span className="text-gray-200">ERC20 tokens/month</span>
      </div>
      <ul className="list-disc pl-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <FaCheck className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-purple-500 hover:bg-purple-900 text-white py-2 px-4 mt-6 rounded-lg">
        Subscribe Now
      </button>
    </div>
  );
};

export default SubscriptionPlan;
