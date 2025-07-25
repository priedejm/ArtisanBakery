import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab, Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "./cart/cart-context";
import { CartSummary } from "./cart/cart-summary";

// Product data
const products = {
  breads: [
    { id: "bread-1", name: "Country Sourdough", price: 7.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread1", category: "Artisan Breads" },
    { id: "bread-2", name: "Rustic Baguette", price: 4.25, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread2", category: "Artisan Breads" },
    { id: "bread-3", name: "Multigrain Loaf", price: 8.00, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread3", category: "Artisan Breads" },
    { id: "bread-4", name: "Olive & Rosemary", price: 8.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread4", category: "Artisan Breads" },
    { id: "bread-5", name: "Walnut & Raisin", price: 9.00, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread5", category: "Artisan Breads" },
    { id: "bread-6", name: "Seeded Rye", price: 7.75, image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread6", category: "Artisan Breads" }
  ],
  pastries: [
    { id: "pastry-1", name: "Almond Croissant", price: 4.75, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry1", category: "Fresh Pastries" },
    { id: "pastry-2", name: "Pain au Chocolat", price: 4.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry2", category: "Fresh Pastries" },
    { id: "pastry-3", name: "Morning Bun", price: 4.25, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry3", category: "Fresh Pastries" },
    { id: "pastry-4", name: "Fruit Danish", price: 4.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry4", category: "Fresh Pastries" },
    { id: "pastry-5", name: "Kouign-Amann", price: 5.25, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry5", category: "Fresh Pastries" },
    { id: "pastry-6", name: "Cinnamon Roll", price: 4.75, image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry6", category: "Fresh Pastries" }
  ],
  coffee: [
    { id: "coffee-1", name: "Espresso", price: 3.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee1", category: "House-Roasted Coffee" },
    { id: "coffee-2", name: "Pour Over", price: 4.25, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee2", category: "House-Roasted Coffee" },
    { id: "coffee-3", name: "Cold Brew", price: 4.75, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee3", category: "House-Roasted Coffee" },
    { id: "coffee-4", name: "Whole Beans (12oz)", price: 16.00, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee4", category: "House-Roasted Coffee" },
    { id: "coffee-5", name: "Latte", price: 4.50, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee5", category: "House-Roasted Coffee" },
    { id: "coffee-6", name: "Cappuccino", price: 4.25, image: "https://img.heroui.chat/image/food?w=400&h=300&u=coffee6", category: "House-Roasted Coffee" }
  ]
};

interface OrderOnlineProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const OrderOnline: React.FC<OrderOnlineProps> = ({ isOpen, onClose, onCheckout }) => {
  const { addItem, itemCount } = useCart();
  const [selectedCategory, setSelectedCategory] = React.useState("breads");
  
  const handleAddToCart = (product: any) => {
    addItem(product);
  };
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="5xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="font-serif text-2xl font-bold text-amber-900">Order Online</h2>
              <p className="text-sm text-amber-700">Select items for pickup or local delivery</p>
            </ModalHeader>
            <ModalBody className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 p-6">
                  <Tabs 
                    selectedKey={selectedCategory}
                    onSelectionChange={(key) => setSelectedCategory(key as string)}
                    color="primary"
                    variant="underlined"
                    classNames={{
                      tabList: "bg-amber-50 p-2 rounded-lg",
                      cursor: "bg-amber-600",
                      tab: "text-amber-800 data-[selected=true]:text-amber-900 font-medium"
                    }}
                  >
                    <Tab 
                      key="breads" 
                      title={
                        <div className="flex items-center gap-2">
                          <Icon icon="lucide:bread" />
                          <span>Breads</span>
                        </div>
                      }
                    />
                    <Tab 
                      key="pastries" 
                      title={
                        <div className="flex items-center gap-2">
                          <Icon icon="lucide:croissant" />
                          <span>Pastries</span>
                        </div>
                      }
                    />
                    <Tab 
                      key="coffee" 
                      title={
                        <div className="flex items-center gap-2">
                          <Icon icon="lucide:coffee" />
                          <span>Coffee</span>
                        </div>
                      }
                    />
                  </Tabs>
                  
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products[selectedCategory as keyof typeof products].map((product) => (
                      <Card key={product.id} className="border border-amber-100" shadow="sm">
                        <CardBody className="p-0">
                          <div className="flex">
                            <Image
                              removeWrapper
                              src={product.image}
                              alt={product.name}
                              className="w-24 h-24 object-cover"
                            />
                            <div className="p-3 flex-grow flex flex-col justify-between">
                              <div>
                                <h3 className="font-medium text-amber-900">{product.name}</h3>
                                <p className="text-amber-700 font-serif font-bold">${product.price.toFixed(2)}</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="flat" 
                                color="primary" 
                                className="bg-amber-100 text-amber-800 self-end"
                                endContent={<Icon icon="lucide:plus" />}
                                onPress={() => handleAddToCart(product)}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <CartSummary onCheckout={onCheckout} />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button 
                color="primary" 
                className="bg-amber-700"
                isDisabled={itemCount === 0}
                onPress={onCheckout}
              >
                Checkout
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};