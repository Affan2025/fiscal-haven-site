import { Award, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "25+ Years of Experience",
    description: "Decades of expertise serving businesses across various industries.",
    icon: Award,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your accounting needs.",
    icon: Clock,
  },
  {
    title: "Personalized Service",
    description: "Tailored solutions that match your specific business requirements.",
    icon: HeartHandshake,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their financial success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};