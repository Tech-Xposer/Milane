"use client";
import { useState, useEffect } from "react";
import menu from "../app/data/menu.js";
import { useRouter } from "next/navigation.js";

const Menu = ({ toggleMenu }) => {
  const [orders, setOrders] = useState([]);

  const router = useRouter();

  // Load orders from local storage when the component mounts
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const updateLocalStorage = (newOrders) => {
    localStorage.setItem("orders", JSON.stringify(newOrders));
  };

  const handleAddToCart = (dish, quantity) => {
    setOrders((prevOrders) => {
      const existingItem = prevOrders.find((item) => item.name === dish.name); // Find by name

      let updatedOrders;
      if (existingItem) {
        // Update the quantity if the item already exists
        updatedOrders = prevOrders.map((item) =>
          item.name === dish.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item to the orders
        const orderItem = { name: dish.name, price: dish.price, quantity }; // Only include name
        updatedOrders = [...prevOrders, orderItem];
      }

      // Update local storage whenever the orders change
      updateLocalStorage(updatedOrders);
      return updatedOrders; // Update state with new orders
    });
  };

  return (
    <div className="backdrop-blur-md inset-0 fixed z-10 bg-black/20">
      <div className="flex flex-col justify-center items-center h-screen w-screen p-20 gap-10">
        <div className="flex justify-around h-auto items-center w-full">
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
        <div className="flex flex-col space-y-8 overflow-auto p-5">
          {menu &&
            menu.map((item, index) => (
              <div key={index} className="flex flex-col space-y-8">
                <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
                  {item.category}
                </span>
                <p className="font-quicksand text-xl text-white mb-4">
                  {item.description}
                </p>

                <div
                  className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3"
                  key={index}
                >
                  {item.items &&
                    item.items.map((dish, dishIndex) => (
                      <DishCard
                        key={dishIndex}
                        dish={dish}
                        handleAddToCart={handleAddToCart} // Pass handleAddToCart here
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>

        <button
          className="text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-2 py-1 border-solid rounded-md hover:bg-[#F4BE39] hover:text-white transition duration-200"
          onClick={() => {
            router.push("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

const DishCard = ({ dish, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex gap-5 overflow-auto p-5 w-full items-center">
      <div className="flex flex-col items-center gap-5">
        <img
          src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2.jpg"
          alt=""
          className="rounded-full w-[100px] object-cover h-[100px]"
        />
        <span className="font-quicksand text-2xl text-white">
          {dish.price} €
        </span>
      </div>
      <div className="flex flex-col items-start gap-3">
        <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
          {dish.name}
        </span>
        <p className="font-quicksand text-xl text-white mb-4">
          {dish.description}
        </p>
        <div className="flex gap-10 items-center">
          <button
            className="bg-[#E4C590] text-black font-bold font-quicksand py-1 px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
            onClick={() =>
              handleAddToCart({ name: dish.name, price: dish.price }, quantity)
            } 
          >
            Add
          </button>
          <div className="flex gap-5 items-center">
            <button
              onClick={handleQuantityDecrement}
              className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
            >
              -
            </button>
            <p className="text-2xl text-white font-quicksand">{quantity}</p>

            <button
              onClick={handleQuantityIncrement}
              className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
