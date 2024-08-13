import React, { useState } from "react";

const EsewaPayment = () => {
  const [amount, setAmount] = useState("");
  const [productID, setProductID] = useState("");

  const handlePayment = () => {
    const path = "https://esewa.com.np/epay/main";
    const params = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: productID,
      scd: "9844044750",
      su: "https://yourwebsite.com/success", // success URL
      fu: "https://yourwebsite.com/failure", // failure URL
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = path;

    Object.keys(params).forEach((key) => {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];
      form.appendChild(hiddenField);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div>
      <h1>eSewa Payment</h1>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product ID"
        value={productID}
        onChange={(e) => setProductID(e.target.value)}
      />
      <button onClick={handlePayment}>Pay with eSewa</button>
    </div>
  );
};

export default EsewaPayment;
