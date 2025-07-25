import React from "react";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "./cart/cart-context";
import { FadeIn } from "./animation/fade-in";
import { StaggerContainer, StaggerItem } from "./animation/stagger-container";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const ProductSection = ({ id, title, description, products }: ProductSectionProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (product: Product) => {
    // Fix: Convert string price to number and add proper item structure
    addItem({
      id: `${id}-${product.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: product.name,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image,
      category: title
    });
    
    // Add visual feedback when item is added to cart
    const button = document.activeElement as HTMLButtonElement;
    if (button) {
      const originalText = button.innerText;
      button.innerText = "Added!";
      button.classList.add("bg-green-100", "text-green-800");
      
      setTimeout(() => {
        button.innerText = originalText;
        button.classList.remove("bg-green-100", "text-green-800");
      }, 1000);
    }
  };
  
  const handleViewFullMenu = () => {
    // This will open the order modal
    const orderButton = document.querySelector('button[data-order-online]');
    if (orderButton) {
      (orderButton as HTMLButtonElement).click();
    }
  };
  
  return (
    <section id={id} className="scroll-mt-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mb-4">{title}</h2>
          <p className="text-amber-800 max-w-2xl mx-auto">{description}</p>
        </div>
      </FadeIn>
      
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <StaggerItem key={index}>
            <Card 
              className="border-none bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
              shadow="sm"
            >
              <CardBody className="p-0 overflow-hidden">
                <Image
                  removeWrapper
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  src={product.image}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-amber-900">{product.name}</h3>
                    <span className="font-serif font-bold text-amber-700">{product.price}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="flat" 
                    color="primary" 
                    className="w-full bg-amber-100 text-amber-800 mt-2"
                    endContent={<Icon icon="lucide:plus" />}
                    onPress={() => handleAddToCart(product)}
                  >
                    Add to Order
                  </Button>
                </div>
              </CardBody>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
      
      <FadeIn delay={0.4}>
        <div className="text-center mt-10">
          <Button 
            color="primary" 
            variant="bordered" 
            className="border-amber-700 text-amber-700"
            endContent={<Icon icon="lucide:arrow-right" />}
            onPress={handleViewFullMenu}
          >
            View Full Menu
          </Button>
        </div>
      </FadeIn>
    </section>
  );
};