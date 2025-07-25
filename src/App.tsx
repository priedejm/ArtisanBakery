import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Card, CardBody, Tabs, Tab, Spacer, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { ProductSection } from "./components/product-section";
import { InstagramFeed } from "./components/instagram-feed";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { CartProvider } from "./components/cart/cart-context";
import { OrderOnline } from "./components/order-online";
import { Checkout } from "./components/checkout";
import { motion } from "framer-motion";

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  
  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };
  
  const handleOpenCheckout = () => {
    setIsOrderModalOpen(false);
    setIsCheckoutOpen(true);
  };
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50 overflow-x-hidden w-full">
        {/* Navbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar maxWidth="xl" className="bg-amber-50/90 backdrop-blur-md">
            <NavbarBrand>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:wheat" className="text-amber-800 text-2xl" />
                <p className="font-serif font-bold text-xl text-amber-900">Normandy Farm</p>
              </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="#breads" className="text-amber-900 font-medium">
                  Breads
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#pastries" className="text-amber-900 font-medium">
                  Pastries
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#coffee" className="text-amber-900 font-medium">
                  Coffee
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#about" className="text-amber-900 font-medium">
                  About
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#contact" className="text-amber-900 font-medium">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button 
                  color="primary" 
                  variant="solid" 
                  className="bg-amber-700 text-amber-50"
                  endContent={<Icon icon="lucide:shopping-bag" />}
                  onPress={handleOpenOrderModal}
                  data-order-online
                  id="order-online-button"
                >
                  Order Online
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </motion.div>

        {/* Hero Section */}
        <Hero />

        {/* Products Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <ProductSection 
            id="breads"
            title="Artisan Breads" 
            description="Our breads are made with organic flour, natural fermentation, and baked fresh daily for that perfect crust and flavor."
            products={[
              { name: "Country Sourdough", price: "$7.50", image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread1" },
              { name: "Rustic Baguette", price: "$4.25", image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread2" },
              { name: "Multigrain Loaf", price: "$8.00", image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread3" },
              { name: "Fig & Walnut", price: "$8.50", image: "https://img.heroui.chat/image/food?w=400&h=300&u=bread4" }
            ]}
          />

          <Spacer y={16} />
          <Divider className="max-w-md mx-auto opacity-40" />
          <Spacer y={16} />

          <ProductSection 
            id="pastries"
            title="Fresh Pastries" 
            description="Handcrafted pastries made fresh daily with European butter and local ingredients. Perfect with our house coffee."
            products={[
              { name: "Almond Croissant", price: "$4.75", image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry1" },
              { name: "Pain au Chocolat", price: "$4.50", image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry2" },
              { name: "Morning Bun", price: "$4.25", image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry3" },
              { name: "Fruit Danish", price: "$4.50", image: "https://img.heroui.chat/image/food?w=400&h=300&u=pastry4" }
            ]}
          />

          <Spacer y={16} />
          <Divider className="max-w-md mx-auto opacity-40" />
          <Spacer y={16} />

          <ProductSection 
            id="sandwiches"
            title="Breakfast & Lunch" 
            description="Delicious sandwiches made with our fresh-baked bread and quality ingredients. Try our popular Italian Panini or Spinach Salad."
            products={[
              { name: "Italian Panini", price: "$9.50", image: "https://img.heroui.chat/image/food?w=400&h=300&u=sandwich1" },
              { name: "Breakfast Sandwich", price: "$7.25", image: "https://img.heroui.chat/image/food?w=400&h=300&u=sandwich2" },
              { name: "Spinach Salad", price: "$8.75", image: "https://img.heroui.chat/image/food?w=400&h=300&u=food1" },
              { name: "Turkey & Avocado", price: "$9.25", image: "https://img.heroui.chat/image/food?w=400&h=300&u=sandwich3" }
            ]}
          />
        </div>

        {/* Instagram Feed */}
        <div className="bg-amber-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <InstagramFeed />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="max-w-7xl mx-auto px-4 py-16">
          <AboutSection />
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-amber-800 text-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ContactSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-100 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Icon icon="lucide:wheat" className="text-amber-200 text-xl" />
                <p className="font-serif font-bold text-lg">Normandy Farm Artisan Bakery</p>
              </div>
              <div className="flex gap-6">
                <Link href="https://www.instagram.com/normandyfarm/" isExternal showAnchorIcon={false}>
                  <Icon icon="lucide:instagram" className="text-amber-200 text-xl" />
                </Link>
                <Link href="#" isExternal showAnchorIcon={false}>
                  <Icon icon="lucide:facebook" className="text-amber-200 text-xl" />
                </Link>
                <Link href="#" isExternal showAnchorIcon={false}>
                  <Icon icon="lucide:twitter" className="text-amber-200 text-xl" />
                </Link>
              </div>
            </div>
            <Divider className="my-6 bg-amber-700" />
            <p className="text-center text-amber-300 text-sm">
              © {new Date().getFullYear()} Normandy Farm Artisan Bakery. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Order Online Modal */}
        <OrderOnline 
          isOpen={isOrderModalOpen} 
          onClose={() => setIsOrderModalOpen(false)}
          onCheckout={handleOpenCheckout}
        />
        
        {/* Checkout Modal */}
        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </CartProvider>
  );
}