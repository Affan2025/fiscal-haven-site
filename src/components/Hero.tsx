import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5] py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              SA Global Accounting and Tax Services
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-600">
              Expert accounting solutions designed to help your business thrive. We handle the numbers, so you can focus on growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
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