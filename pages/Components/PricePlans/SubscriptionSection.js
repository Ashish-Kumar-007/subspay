import SubscriptionPlan from "./SubscriptionPlan";

const SubscriptionSection = () => {
  const subscriptionPlans = [
    {
      title: "Basic Plan",
      price: "10",
      features: ["Access to all movies and shows", "HD streaming"],
    },
    {
      title: "Plus Plan",
      price: "20",
      features: ["Access to all movies and shows", "Ultra HD streaming"],
    },
    {
      title: "Premium Plan",
      price: "40",
      features: [
        "Access to all movies and shows",
        "Ultra HD streaming",
        "Download content for offline viewing",
      ],
    },
    // Add more subscription plans as needed
  ];

  return (
    <>
      <h2 className="flex justify-center lg:m-20 m-10 text-4xl font-bold">Price Plans</h2>
      <div className="flex justify-center lg:m-20 m-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionPlan
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionSection;
