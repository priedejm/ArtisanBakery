import React from "react";
import { Card, CardBody, Link, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FadeIn } from "./animation/fade-in";
import { StaggerContainer, StaggerItem } from "./animation/stagger-container";

// Mock Instagram posts
const instagramPosts = [
  {
    id: "1",
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=insta1",
    likes: 124,
    comments: 8,
    caption: "Fresh sourdough loaves hot from the oven! #artisanbread #sourdough"
  },
  {
    id: "2",
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=insta2",
    likes: 98,
    comments: 5,
    caption: "Morning pastry selection ready for the day. #croissants #danishpastry"
  },
  {
    id: "3",
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=insta3",
    likes: 156,
    comments: 12,
    caption: "Coffee roasting day! Small batch, big flavor. #specialtycoffee"
  },
  {
    id: "4",
    image: "https://img.heroui.chat/image/food?w=400&h=400&u=insta4",
    likes: 87,
    comments: 3,
    caption: "Weekend special: Fig and walnut bread. #seasonalbaking"
  }
];

export const InstagramFeed = () => {
  return (
    <div>
      <FadeIn>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon icon="lucide:instagram" className="text-amber-800 text-xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900">Follow Us on Instagram</h2>
          </div>
          <p className="text-amber-800">
            <Link href="https://www.instagram.com/normandyfarm/" isExternal color="primary" className="text-amber-700">
              @normandyfarm
            </Link> — Share your Normandy Farm moments with us!
          </p>
        </div>
      </FadeIn>
      
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {instagramPosts.map((post) => (
          <StaggerItem key={post.id}>
            <Card className="bg-white border-none" shadow="sm">
              <CardBody className="p-0 overflow-hidden">
                <div className="relative group">
                  <Image
                    removeWrapper
                    alt="Instagram post"
                    className="w-full aspect-square object-cover transition-all duration-300 group-hover:brightness-75"
                    src={post.image}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:heart" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:message-circle" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-amber-800 text-sm line-clamp-2">{post.caption}</p>
                </div>
              </CardBody>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
      
      <FadeIn delay={0.4}>
        <div className="text-center mt-10">
          <Link 
            href="https://www.instagram.com/normandyfarm/" 
            isExternal 
            className="inline-flex items-center gap-2 text-amber-700 font-medium"
          >
            See more on Instagram
            <Icon icon="lucide:external-link" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};