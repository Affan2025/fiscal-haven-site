import { Calculator, FileCheck, Receipt, LineChart, Briefcase, Building } from "lucide-react";

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

const Services = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#e6e9f0] to-[#eef1f5] py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent text-center">
            Our Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;