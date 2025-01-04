import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import { NewsTicker } from "@/components/NewsTicker";
import { FinancialTrends } from "@/components/FinancialTrends";
import { Calculators } from "@/components/Calculators";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <NewsTicker />
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Financial Markets at a Glance
        </h2>
        <FinancialTrends />
      </div>
      <Services />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Financial Calculators
        </h2>
        <Calculators />
      </div>
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
};

export default Index;