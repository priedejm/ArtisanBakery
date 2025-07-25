import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CartItem as CartItemType, useCart } from "./cart-context";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  
  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };
  
  const formattedPrice = (item.price * item.quantity).toFixed(2);
  
  return (
    <div className="flex gap-3 py-3 border-b border-amber-200">
      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
        <Image
          removeWrapper
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between">
          <h4 className="font-medium text-amber-900">{item.name}</h4>
          <button 
            onClick={() => removeItem(item.id)}
            className="text-amber-500 hover:text-amber-700"
            aria-label="Remove item"
          >
            <Icon icon="lucide:x" className="text-sm" />
          </button>
        </div>
        
        <p className="text-xs text-amber-600 mb-2">{item.category}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center border border-amber-300 rounded-md">
            <button 
              onClick={handleDecrement}
              className="px-2 py-1 text-amber-700 hover:bg-amber-100"
              aria-label="Decrease quantity"
            >
              <Icon icon="lucide:minus" className="text-xs" />
            </button>
            <span className="px-3 text-sm font-medium text-amber-900">{item.quantity}</span>
            <button 
              onClick={handleIncrement}
              className="px-2 py-1 text-amber-700 hover:bg-amber-100"
              aria-label="Increase quantity"
            >
              <Icon icon="lucide:plus" className="text-xs" />
            </button>
          </div>
          <p className="font-serif font-bold text-amber-800">${formattedPrice}</p>
        </div>
      </div>
    </div>
  );
};