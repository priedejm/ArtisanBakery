import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Radio, RadioGroup, Textarea, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "./cart/cart-context";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, clearCart } = useCart();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pickupMethod: "pickup",
    pickupDate: "",
    pickupTime: "",
    address: "",
    city: "",
    zipCode: "",
    specialInstructions: "",
    paymentMethod: "card"
  });
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState("");
  
  // Calculate taxes (8.5%)
  const tax = subtotal * 0.085;
  
  // Calculate delivery fee if applicable
  const deliveryFee = formData.pickupMethod === "delivery" ? 5.00 : 0;
  
  // Calculate total
  const total = subtotal + tax + deliveryFee;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toFixed(2);
  };
  
  // Generate tomorrow's date as the default pickup date
  React.useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    
    setFormData(prev => ({
      ...prev,
      pickupDate: formattedDate
    }));
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmitOrder = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate random order number
      const randomOrderNum = Math.floor(10000 + Math.random() * 90000);
      setOrderNumber(`NF-${randomOrderNum}`);
      
      setIsSubmitting(false);
      setIsOrderComplete(true);
      clearCart();
    }, 1500);
  };
  
  const handleCloseAndReset = () => {
    onClose();
    setStep(1);
    setIsOrderComplete(false);
  };
  
  // Validate current step
  const validateStep = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone;
    }
    if (step === 2) {
      if (formData.pickupMethod === "pickup") {
        return formData.pickupDate && formData.pickupTime;
      } else {
        return formData.address && formData.city && formData.zipCode && formData.pickupDate;
      }
    }
    return true;
  };
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={isOrderComplete ? handleCloseAndReset : onClose}
      size="2xl"
      isDismissable={!isSubmitting}
      hideCloseButton={isSubmitting}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {!isOrderComplete ? (
                <>
                  <h2 className="font-serif text-2xl font-bold text-amber-900">Checkout</h2>
                  <p className="text-sm text-amber-700">
                    {step === 1 ? "Contact Information" : 
                     step === 2 ? "Pickup Details" : "Review & Payment"}
                  </p>
                </>
              ) : (
                <h2 className="font-serif text-2xl font-bold text-amber-900">Order Confirmation</h2>
              )}
            </ModalHeader>
            <ModalBody>
              {!isOrderComplete ? (
                <>
                  {/* Step 1: Contact Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          variant="bordered"
                          color="default"
                          isRequired
                        />
                        <Input
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          variant="bordered"
                          color="default"
                          isRequired
                        />
                      </div>
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="bordered"
                        color="default"
                        isRequired
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="bordered"
                        color="default"
                        isRequired
                      />
                    </div>
                  )}
                  
                  {/* Step 2: Pickup Details */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <RadioGroup
                        label="Pickup Method"
                        value={formData.pickupMethod}
                        onValueChange={(value) => handleRadioChange("pickupMethod", value)}
                      >
                        <Radio value="pickup">In-Store Pickup</Radio>
                        <Radio value="delivery">Local Delivery (+$5.00)</Radio>
                      </RadioGroup>
                      
                      {formData.pickupMethod === "delivery" && (
                        <div className="space-y-4 mt-4">
                          <Input
                            label="Street Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            variant="bordered"
                            color="default"
                            isRequired
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <Input
                              label="City"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              variant="bordered"
                              color="default"
                              isRequired
                            />
                            <Input
                              label="ZIP Code"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              variant="bordered"
                              color="default"
                              isRequired
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label={formData.pickupMethod === "pickup" ? "Pickup Date" : "Delivery Date"}
                          name="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          variant="bordered"
                          color="default"
                          isRequired
                        />
                        
                        {formData.pickupMethod === "pickup" && (
                          <Input
                            label="Pickup Time"
                            name="pickupTime"
                            type="time"
                            value={formData.pickupTime}
                            onChange={handleInputChange}
                            variant="bordered"
                            color="default"
                            isRequired
                          />
                        )}
                      </div>
                      
                      <Textarea
                        label="Special Instructions"
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleInputChange}
                        variant="bordered"
                        color="default"
                        placeholder="Any special requests or notes for your order"
                      />
                    </div>
                  )}
                  
                  {/* Step 3: Review & Payment */}
                  {step === 3 && (
                    <div>
                      <div className="bg-amber-50 p-4 rounded-lg mb-4">
                        <h3 className="font-medium text-amber-900 mb-2">Order Summary</h3>
                        <div className="space-y-2">
                          {items.map(item => (
                            <div key={item.id} className="flex justify-between">
                              <span className="text-amber-800">
                                {item.quantity} x {item.name}
                              </span>
                              <span className="font-medium text-amber-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <Divider className="my-3 bg-amber-200" />
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-amber-700">Subtotal</span>
                            <span className="text-amber-900">${formatCurrency(subtotal)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-700">Tax (8.5%)</span>
                            <span className="text-amber-900">${formatCurrency(tax)}</span>
                          </div>
                          {formData.pickupMethod === "delivery" && (
                            <div className="flex justify-between">
                              <span className="text-amber-700">Delivery Fee</span>
                              <span className="text-amber-900">${formatCurrency(deliveryFee)}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-medium">
                            <span className="text-amber-900">Total</span>
                            <span className="font-serif font-bold text-amber-900">${formatCurrency(total)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-medium text-amber-900 mb-2">Contact Information</h3>
                        <p className="text-amber-800">{formData.firstName} {formData.lastName}</p>
                        <p className="text-amber-800">{formData.email}</p>
                        <p className="text-amber-800">{formData.phone}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-medium text-amber-900 mb-2">
                          {formData.pickupMethod === "pickup" ? "Pickup Details" : "Delivery Details"}
                        </h3>
                        {formData.pickupMethod === "pickup" ? (
                          <p className="text-amber-800">
                            In-store pickup on {new Date(formData.pickupDate).toLocaleDateString()} at {formData.pickupTime}
                          </p>
                        ) : (
                          <p className="text-amber-800">
                            Delivery to {formData.address}, {formData.city}, {formData.zipCode} on {new Date(formData.pickupDate).toLocaleDateString()}
                          </p>
                        )}
                        {formData.specialInstructions && (
                          <p className="text-amber-800 mt-2">
                            <span className="font-medium">Special Instructions:</span> {formData.specialInstructions}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-amber-900 mb-2">Payment Method</h3>
                        <RadioGroup
                          orientation="horizontal"
                          value={formData.paymentMethod}
                          onValueChange={(value) => handleRadioChange("paymentMethod", value)}
                        >
                          <Radio value="card">
                            <div className="flex items-center gap-2">
                              <Icon icon="lucide:credit-card" />
                              <span>Credit Card</span>
                            </div>
                          </Radio>
                          <Radio value="paypal">
                            <div className="flex items-center gap-2">
                              <Icon icon="logos:paypal" />
                              <span>PayPal</span>
                            </div>
                          </Radio>
                        </RadioGroup>
                        
                        {formData.paymentMethod === "card" && (
                          <div className="mt-4 p-4 border border-amber-200 rounded-lg bg-amber-50">
                            <p className="text-amber-700 text-sm mb-2">
                              <Icon icon="lucide:info" className="inline mr-1" />
                              Payment will be processed at pickup/delivery
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon icon="lucide:check" className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-2">Thank You For Your Order!</h3>
                  <p className="text-amber-800 mb-6">
                    Your order #{orderNumber} has been received and is being processed.
                  </p>
                  
                  <div className="bg-amber-50 p-4 rounded-lg mb-6 text-left">
                    <h4 className="font-medium text-amber-900 mb-2">Order Details</h4>
                    <p className="text-amber-800">
                      {formData.pickupMethod === "pickup" ? (
                        <>
                          Please pick up your order on {new Date(formData.pickupDate).toLocaleDateString()} at {formData.pickupTime}.
                        </>
                      ) : (
                        <>
                          Your order will be delivered to {formData.address}, {formData.city}, {formData.zipCode} on {new Date(formData.pickupDate).toLocaleDateString()}.
                        </>
                      )}
                    </p>
                    <p className="text-amber-800 mt-2">
                      We've sent a confirmation email to {formData.email}.
                    </p>
                  </div>
                  
                  <Button 
                    color="primary" 
                    className="bg-amber-700 text-amber-50"
                    onPress={handleCloseAndReset}
                  >
                    Done
                  </Button>
                </div>
              )}
            </ModalBody>
            {!isOrderComplete && (
              <ModalFooter>
                {step > 1 && (
                  <Button 
                    variant="flat" 
                    onPress={handlePrevStep}
                    isDisabled={isSubmitting}
                  >
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button 
                    color="primary" 
                    className="bg-amber-700"
                    onPress={handleNextStep}
                    isDisabled={!validateStep()}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    color="primary" 
                    className="bg-amber-700"
                    onPress={handleSubmitOrder}
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>
                )}
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};