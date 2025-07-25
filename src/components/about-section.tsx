import React from "react";
import { Card, CardBody, Image, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FadeIn } from "./animation/fade-in";
import { StaggerContainer, StaggerItem } from "./animation/stagger-container";

export const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 gap-12 items-center">
      <div>
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-amber-800 mb-4">
            At Normandy Farm Artisan Bakery, we're dedicated to creating exceptional breads and pastries using traditional methods and the finest ingredients.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-amber-800 mb-4">
            We're known for our fresh breads and pastries, plus delicious breakfast and lunch sandwiches that keep our customers coming back day after day.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-amber-800 mb-6">
            From our popular spinach salad to our Italian Panini, we take pride in every item we serve. Our friendly staff and pleasant atmosphere make Normandy Farm a favorite local spot in Charleston.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="bg-amber-100 p-6 rounded-lg mb-8">
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4">What Our Customers Say</h3>
            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <div className="flex gap-3">
                  <Icon icon="lucide:star" className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-900">Charles Ramberg</p>
                    <p className="text-amber-700">"Great staff, tasty savory and sweet items, and a pleasant atmosphere."</p>
                  </div>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex gap-3">
                  <Icon icon="lucide:star" className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-900">Dee Clere</p>
                    <p className="text-amber-700">"Excellent food, good coffee, friendly service"</p>
                  </div>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex gap-3">
                  <Icon icon="lucide:star" className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-900">Victoria Davich</p>
                    <p className="text-amber-700">"I love the spinach salad too, and the Italian Panini."</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
            
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-amber-500" />
                  ))}
                  <Icon icon="lucide:star-half" className="text-amber-500" />
                </div>
                <p className="text-amber-700 font-medium">4.4/5</p>
                <p className="text-amber-600 text-sm">(142 Google reviews)</p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.7}>
          <div className="flex items-center gap-2">
            <Icon icon="lucide:quote" className="text-amber-500 text-xl" />
            <p className="italic text-amber-700">
              Bakery turning out fresh breads and pastries, plus breakfast and lunch sandwiches.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};