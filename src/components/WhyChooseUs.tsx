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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center p-6 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <reason.icon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};