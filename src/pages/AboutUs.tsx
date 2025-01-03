import { Building2, Users, Globe2, Trophy, Briefcase, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#e6e9f0] to-[#eef1f5] py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent text-center">
            About SA Global Accounting and Tax Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">12 Years of Excellence</h3>
              <p className="text-gray-600">
                Over a decade of providing exceptional accounting and tax services across multiple markets.
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Globe2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-600">
                Based in UAE and UK markets with extensive experience and understanding of both regions.
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                A perfect blend of professionals from Big Four firms and SME management experts.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team brings together the best of both worlds - professionals who have worked in Big Four accounting firms and experts who have managed small and medium-sized businesses. This unique combination allows us to provide comprehensive services that cater to businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We have hands-on experience serving entrepreneurs, startups, and high-net-worth individuals, understanding their unique needs and challenges.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Accounting and Bookkeeping",
                "Audit and Assurance",
                "VAT Consultancy",
                "Corporate Tax Advisory",
                "CFO Services",
                "Business Setup and Liquidation"
              ].map((service, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <p className="text-gray-700 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;