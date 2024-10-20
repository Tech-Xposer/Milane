"use client";
import { useState } from "react";
import menu from "../data/menu.js";

const Menu = ({ toggleMenu }) => {
  const [cart, setCart] = useState([]); // State to hold cart items
  const [quantities, setQuantities] = useState({}); // State to hold quantities

  // Function to handle adding items to the cart
  const handleAddToCart = (dish, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const cartItem = { ...dish, quantity };
        return [...prevCart, cartItem];
      }
    });
  };

  // Function to handle quantity change
  const handleQuantityChange = (dishId, quantity) => {
    setQuantities((prev) => ({ ...prev, [dishId]: quantity }));
  };

  return (
    <div className=" backdrop-blur-md inset-0 fixed z-10 bg-black/20  ">
      <div className="flex flex-col justify-center items-center h-screen w-screen p-20 gap-10">
        <div className="flex justify-around  h-auto items-center w-full ">
          {" "}
          <h1 className="text-8xl text-[#F4BE39] font-londrina text-center">
            Menu
          </h1>
          <button
            className="h-fit text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-2 py-1 border-solid rounded-md hover:bg-[#F4BE39] hover:text-black transition duration-200"
            onClick={toggleMenu}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col space-y-8 lg:w-1/2 overflow-auto   p-5">
          {menu &&
            menu.map((item, index) => (
              <div key={index} className="flex flex-col space-y-8 ">
                <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
                  {item.category}
                </span>
                <p className="font-quicksand text-xl text-white mb-4">
                  {item.description}
                </p>

                {
                  <div className="grid grid-cols-2 lg:grid-cols-3" key={index}>
                    {item.items &&
                      item.items.map((dish, dishIndex) => {
                        return (
                          <DishCard
                            key={dishIndex}
                            dish={dish}
                            handleAddToCart={handleAddToCart}
                            handleQuantityChange={handleQuantityChange}
                            quantities={quantities}
                          />
                        );
                      })}
                  </div>
                }
              </div>
            ))}
        </div>

        <button className="text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-2 py-1 border-solid rounded-md hover:bg-[#F4BE39] hover:text-white transition duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Menu;

const DishCard = ({ dish }) => {
  return (
    <div className="relative flex flex-col space-y-8 lg:w-1/2 overflow-auto p-5">
      <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
        {dish.name}
      </span>
      <p className="font-quicksand text-xl text-white mb-4">
        {dish.description}
      </p>
      <span className="font-quicksand text-lg text-white">{dish.price} €</span>
      <button className="absolute bottom-0 bg-[#E4C590] text-black font-bold font-quicksand py-2 px-8 mt-auto hover:bg-[#e1b15f] transition duration-200">
        Add
      </button>
    </div>
  );
};
