import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-amber-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://img.heroui.chat/image/food?w=1920&h=1080&u=bakery-hero')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.2 
          }}
        >
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fresh Breads, Pastries & Sandwiches
          </motion.h1>
          <motion.p 
            className="text-xl text-amber-100 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Bakery turning out fresh breads and pastries, plus breakfast and lunch sandwiches. Visit us at South Windermere Center for breakfast, lunch, and fresh-baked goods.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              color="primary" 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              endContent={<Icon icon="lucide:shopping-bag" />}
              onPress={() => document.getElementById("order-online-button")?.click()}
            >
              Order Online
            </Button>
            <Button 
              size="lg" 
              variant="flat" 
              color="default"
              className="bg-amber-100/20 text-amber-50 backdrop-blur-sm"
              endContent={<Icon icon="lucide:map-pin" />}
              as="a"
              href="https://maps.google.com/?q=32+Windermere+Blvd,+Charleston,+SC+29407"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Us
            </Button>
          </motion.div>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Icon icon="lucide:star" className="text-amber-200" />
              <p className="text-amber-200 text-sm">
                <span className="font-bold">4.4/5</span> from over 142 Google reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};