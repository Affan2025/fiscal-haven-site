import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-primary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Expert Accounting Services for Your Business
            </h1>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              We provide comprehensive accounting solutions to help your business thrive in today's competitive market.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Professional accounting services"
              className="rounded-lg shadow-2xl animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};