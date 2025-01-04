import { Calculator, FileCheck, Receipt, LineChart, Briefcase, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Accounting and Bookkeeping",
    description: "Comprehensive accounting solutions including daily bookkeeping, financial statements preparation, and management reporting.",
    icon: Calculator,
  },
  {
    title: "Audit and Assurance",
    description: "Independent audit services ensuring compliance and providing stakeholders with reliable financial information.",
    icon: FileCheck,
  },
  {
    title: "VAT Consultancy",
    description: "Expert guidance on VAT registration, compliance, returns filing, and strategic planning for optimal tax efficiency.",
    icon: Receipt,
  },
  {
    title: "Corporate Tax Advisory",
    description: "Strategic tax planning and compliance services to help businesses navigate complex tax regulations.",
    icon: LineChart,
  },
  {
    title: "CFO Services and Business Performance Review",
    description: "Professional financial leadership and strategic analysis to drive business growth and optimization.",
    icon: Briefcase,
  },
  {
    title: "Business Setup and Liquidation",
    description: "End-to-end support for business establishment and closure processes in UAE and UK markets.",
    icon: Building,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm animate-fadeIn" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};