import React from "react";
import { Card, CardBody, Input, Textarea, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FadeIn } from "./animation/fade-in";
import { StaggerContainer, StaggerItem } from "./animation/stagger-container";

export const ContactSection = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
    // Reset form
    setEmail("");
    setMessage("");
    // Show success message (in a real app, you'd use a toast or other notification)
    alert("Thank you for your message! We'll get back to you soon.");
  };
  
  return (
    <div>
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-4">Visit & Contact Us</h2>
          <p className="text-amber-200 max-w-2xl mx-auto">
            Stop by our bakery to experience our fresh breads and pastries, plus breakfast and lunch sandwiches.
          </p>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FadeIn direction="left">
          <Card className="bg-amber-50 border-none" shadow="sm">
            <CardBody className="p-6">
              <h3 className="font-serif text-xl font-bold text-amber-900 mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                  variant="bordered"
                  color="default"
                  isRequired
                  className="max-w-full"
                />
                <Textarea
                  label="Message"
                  placeholder="What would you like to know?"
                  value={message}
                  onValueChange={setMessage}
                  variant="bordered"
                  color="default"
                  isRequired
                  className="max-w-full"
                  minRows={4}
                />
                <Button 
                  type="submit" 
                  color="primary" 
                  className="bg-amber-700 text-amber-50 w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
        </FadeIn>
        
        <FadeIn direction="right">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-100 mb-4">Hours & Location</h3>
              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:clock" className="text-amber-300 mt-1" />
                    <div>
                      <p className="font-medium text-amber-100">Hours</p>
                      <p className="text-amber-200">Open daily until 2:00 PM</p>
                      <p className="text-amber-200 text-sm italic mt-1">Hours may vary on holidays</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:map-pin" className="text-amber-300 mt-1" />
                    <div>
                      <p className="font-medium text-amber-100">Address</p>
                      <p className="text-amber-200">32 Windermere Blvd</p>
                      <p className="text-amber-200">Charleston, SC 29407</p>
                      <p className="text-amber-200 text-sm mt-1">Located in: South Windermere Center</p>
                      <Link href="https://maps.google.com/?q=32+Windermere+Blvd,+Charleston,+SC+29407" isExternal className="text-amber-300 text-sm flex items-center gap-1 mt-1">
                        Get Directions (22 min)
                        <Icon icon="lucide:external-link" className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:phone" className="text-amber-300 mt-1" />
                    <div>
                      <p className="font-medium text-amber-100">Phone</p>
                      <p className="text-amber-200">(843) 769-6400</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:menu" className="text-amber-300 mt-1" />
                    <div>
                      <p className="font-medium text-amber-100">Menu</p>
                      <Link href="https://places.singleplatform.com" isExternal className="text-amber-300 text-sm flex items-center gap-1">
                        View Full Menu
                        <Icon icon="lucide:external-link" className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
            
            <FadeIn delay={0.6}>
              <div>
                <h3 className="font-serif text-xl font-bold text-amber-100 mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="https://www.instagram.com/normandyfarm/" isExternal>
                    <Button isIconOnly variant="flat" className="bg-amber-700/30 text-amber-200">
                      <Icon icon="lucide:instagram" />
                    </Button>
                  </Link>
                  <Link href="#" isExternal>
                    <Button isIconOnly variant="flat" className="bg-amber-700/30 text-amber-200">
                      <Icon icon="lucide:facebook" />
                    </Button>
                  </Link>
                  <Link href="#" isExternal>
                    <Button isIconOnly variant="flat" className="bg-amber-700/30 text-amber-200">
                      <Icon icon="lucide:twitter" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};