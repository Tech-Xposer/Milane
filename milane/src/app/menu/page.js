"use client";
import { useState } from "react";
import menu from "../data/menu.js";

const Menu = () => {
  const [cart, setCart] = useState([]); // State to hold cart items

  const handleAddToCart = (dish, quantity) => {
    const cartItem = { ...dish, quantity };
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <div className="h-full w-full p-6 ">
      <div className="flex flex-col space-y-8">
        {menu &&
          menu.map((item, index) => (
            <div key={index}>
              <span className="text-4xl text-[#F4BE39] font-londrina block mb-2">
                {item.category}
              </span>
              <p className="font-quicksand text-xl text-white mb-4">
                {item.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {item.items &&
                  item.items.map((dish, dishIndex) => {
                    const [quantity, setQuantity] = useState(1); // State for quantity

                    return (
                      <div
                        key={dishIndex}
                        className=" rounded-lg p-4 flex flex-col"
                      >
                        <span className="block text-lg font-semibold text-[#F4BE39] font-forum">
                          {dish.name}
                        </span>
                        <p className=" text-white mb-2 font-quicksand text-xl">
                          {dish.description}
                        </p>
                        <p className="aa font-bold text-white font-quicksand text-xl">
                          {dish.price}€
                        </p>
                        <div className="flex items-center mt-2">
                          <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(Number(e.target.value))
                            }
                            className="w-16 border-2 border-[#F4BE39] rounded-lg p-1 text-center"
                          />
                          <button
                            onClick={() => handleAddToCart(dish, quantity)}
                            className="bg-[#F4BE39] text-black font-bold py-2 px-4 rounded-lg ml-2 hover:bg-yellow-400 transition duration-200"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
