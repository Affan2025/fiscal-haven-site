import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
            Mission, Vision & Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guiding principles that drive our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide exceptional financial and accounting services that empower businesses to thrive in the UAE and UK markets, delivering innovative solutions with unwavering integrity and expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be the leading accounting and advisory firm known for transforming businesses through technological innovation, exceptional service, and deep market understanding in the UAE and UK.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Excellence in service delivery</li>
                <li>• Integrity and transparency</li>
                <li>• Innovation and adaptability</li>
                <li>• Client-centric approach</li>
                <li>• Professional expertise</li>
                <li>• Continuous improvement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};