import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

export const Hero = () => {
  const whatsappNumber = "971545005947";
  const phoneNumber = "+971545005947";

  return (
    <div className="relative bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5] py-12 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 animate-fadeIn text-center lg:text-left">
            <h1 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4 lg:mb-6">
              SA Global Accounting and Tax Services
            </h1>
            <p className="text-base lg:text-xl mb-6 lg:mb-8 text-gray-600">
              Expert accounting solutions designed to help your business thrive. We handle the numbers, so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                  Get Started
                </Button>
              </Link>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3"
              alt="Professional accounting services"
              className="relative rounded-2xl shadow-xl animate-fadeIn object-cover w-full aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};