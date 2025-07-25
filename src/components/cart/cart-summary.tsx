import React from "react";
import { Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "./cart-context";
import { CartItem } from "./cart-item";

interface CartSummaryProps {
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { items, itemCount, subtotal, clearCart } = useCart();
  
  // Calculate taxes (8.5%)
  const tax = subtotal * 0.085;
  
  // Calculate total
  const total = subtotal + tax;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toFixed(2);
  };
  
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
          <Icon icon="lucide:shopping-bag" className="text-amber-700 text-2xl" />
        </div>
        <h3 className="text-lg font-medium text-amber-900 mb-2">Your cart is empty</h3>
        <p className="text-amber-700 mb-6">Add some delicious items to your cart</p>
        <Button 
          color="primary" 
          variant="flat" 
          className="bg-amber-100 text-amber-800"
        >
          Browse Products
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif text-xl font-bold text-amber-900">Your Cart ({itemCount})</h3>
        <Button 
          size="sm" 
          variant="light" 
          color="danger" 
          onPress={clearCart}
          className="text-amber-700"
        >
          Clear All
        </Button>
      </div>
      
      <div className="flex-grow overflow-y-auto max-h-[300px] pr-2 -mr-2">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-amber-200">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-amber-700">Subtotal</span>
            <span className="font-medium text-amber-900">${formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-amber-700">Tax (8.5%)</span>
            <span className="font-medium text-amber-900">${formatCurrency(tax)}</span>
          </div>
          <Divider className="my-2 bg-amber-200" />
          <div className="flex justify-between">
            <span className="font-medium text-amber-900">Total</span>
            <span className="font-serif font-bold text-amber-900">${formatCurrency(total)}</span>
          </div>
        </div>
        
        <Button 
          color="primary" 
          className="w-full bg-amber-700 text-amber-50"
          endContent={<Icon icon="lucide:arrow-right" />}
          onPress={onCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};