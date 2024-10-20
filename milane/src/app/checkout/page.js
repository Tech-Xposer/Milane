"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  // Fetch orders from local storage
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
  console.log(orders);

  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [error, setError] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Basic email and phone validatio
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/; // Simple 10-digit validation
    return regex.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone } = formData;

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");

    // Send mail API call
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        orders
      })
    });

    if (!response.ok) {
      alert("Error sending email. Please try again.");
      return;
    }
    localStorage.clear();
    alert("Orders placed successfully!");
  };

  return (
    <div className=" flex flex-col items-center justify-center  p-5  text-white h-screen w-full overflow-auto">
      <h2 className="text-5xl mb-4 text-[#F4BE39] font-londrina">Checkout</h2>

      {/* Conditionally render either order details or an empty cart message */}
      {orders.length ? (
        <div>
          {/* Display orders details */}
          <div className="  border border-[#F4BE39] p-4 mb-6">
            <h3 className="text-3xl font-semibold text-[#F4BE39] font-londrina">
              Your orders:
            </h3>
            {orders.length && (
              <table className="table-auto  w-full mb-6">
                <thead>
                  <tr>
                    <th className="text-left p-2 border-b border-[#F4BE39]">
                      Product
                    </th>
                    <th className="text-left p-2 border-b border-[#F4BE39]">
                      Quantity
                    </th>
                    <th className="text-left p-2 border-b border-[#F4BE39]">
                      Price (€)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b border-[#F4BE39]">
                      <td className="p-2">{order.name}</td>
                      <td className="p-2">{order.quantity}</td>
                      <td className="p-2">
                        {(order.quantity * order.price).toFixed(2)} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                required
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                required
                placeholder="Your Phone Number"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#F4BE39] text-black p-2 rounded mt-4 hover:bg-yellow-600 transition duration-200"
            >
              Place Order
            </button>
          </form>
        </div>
      ) : (
        // Display when there are no orders
        <div className="flex flex-col items-center justify-center h-screen w-full gap-10">
          <span className="text-center text-5xl font-semibold text-[#F4BE39]">
            Your cart is empty.
          </span>
          <span className="ml-2 text-8xl">😕</span>
          <Link
            href="/"
            className="border border-[#F4BE39] px-5 py-2 text-[#F4BE39] rounded hover:bg-[#F4BE39] hover:text-white transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;