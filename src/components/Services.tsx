import { Calculator, ChartBar, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Tax Planning & Preparation",
    description: "Strategic tax planning and accurate preparation services for businesses and individuals.",
    icon: Calculator,
  },
  {
    title: "Financial Analysis",
    description: "In-depth analysis of your financial data to drive better business decisions.",
    icon: ChartBar,
  },
  {
    title: "Payroll Services",
    description: "Comprehensive payroll management and compliance services.",
    icon: Users,
  },
  {
    title: "Audit & Assurance",
    description: "Professional audit services to ensure financial accuracy and compliance.",
    icon: Shield,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};