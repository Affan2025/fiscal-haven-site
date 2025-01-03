import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#e6e9f0] to-[#eef1f5] py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Dubai Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <p className="text-gray-600">
                      Premises number, HD18B First Floor<br />
                      In5 Tech Dubai Internet City
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-gray-600">00971545005947</p>
                  </div>
                </div>
                <div className="mt-4 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8861334401627!2d55.1510073!3d25.0920374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4a6a744729%3A0x6d01c3e088d10e7b!2sIn5%20Tech!5e0!3m2!1sen!2sae!4v1710644151359!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">London Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <p className="text-gray-600">
                      23 Eastern Road<br />
                      Romford, London
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-gray-600">00447888395646</p>
                  </div>
                </div>
                <div className="mt-4 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5975754721584!2d0.1834673!3d51.5754444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4f088b70f5f%3A0x3b1c9c0b7f7b3b0!2s23%20Eastern%20Rd%2C%20Romford%20RM1%203NH%2C%20UK!5e0!3m2!1sen!2sae!4v1710644151359!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;