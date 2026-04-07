import React, { useState } from "react";
import "./App.css";

function App() {
  const plans = [
    { id: 1, name: "Basic", price: 10 },
    { id: 2, name: "Pro", price: 50 }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [autoRenew, setAutoRenew] = useState(true);
  const [subscription, setSubscription] = useState(null);

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert("Please select a plan");
      return;
    }

    if (cardNumber.length < 4) {
      alert("Enter valid card number");
      return;
    }

    setSubscription({
      planName: selectedPlan.name,
      price: selectedPlan.price,
      autoRenew: autoRenew,
      status: "Active"
    });

    alert("Subscription Successful!");
  };

  return (
    <div className="container">
      <h2>Subscription System</h2>

      {/* Pricing Section */}
      {!subscription && (
        <>
          <h3>Choose a Plan</h3>

          {plans.map((plan) => (
            <div key={plan.id} className="plan">
              <div>
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">${plan.price}</p>
              </div>

              <button onClick={() => setSelectedPlan(plan)}>
                Select
              </button>
            </div>
          ))}

          {selectedPlan && (
            <div className="form">
              <h3>Subscribe to {selectedPlan.name}</h3>

              <input
                type="text"
                placeholder="Enter Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={autoRenew}
                  onChange={() => setAutoRenew(!autoRenew)}
                />
                Auto Renew
              </label>

              <button className="subscribe-btn" onClick={handleSubscribe}>
                Subscribe Now
              </button>
            </div>
          )}
        </>
      )}

      {/* Dashboard Section */}
      {subscription && (
        <div className="dashboard">
          <h3>Dashboard</h3>
          <p><strong>Plan:</strong> {subscription.planName}</p>
          <p><strong>Price:</strong> ${subscription.price}</p>
          <p><strong>Status:</strong> {subscription.status}</p>
          <p>
            <strong>Auto Renew:</strong>{" "}
            {subscription.autoRenew ? "Enabled" : "Disabled"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;