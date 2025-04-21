import React from 'react';
import { Train, Clock, Briefcase, ShieldCheck, Armchair as Wheelchair, Coffee, Phone, CreditCard } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Train className="h-8 w-8 text-orange-600" />,
      title: "Train Information",
      description: "Real-time updates on train arrivals, departures, and platform changes"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "24/7 Operations",
      description: "Station services available round the clock for passenger convenience"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-600" />,
      title: "Porter Services",
      description: "Professional porters available for luggage assistance"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
      title: "Security Services",
      description: "24-hour surveillance and security personnel for passenger safety"
    },
    {
      icon: <Wheelchair className="h-8 w-8 text-orange-600" />,
      title: "Accessibility",
      description: "Wheelchair assistance and accessible facilities for all passengers"
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-600" />,
      title: "Refreshments",
      description: "Multiple food courts and vending machines throughout the station"
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Communication",
      description: "Public phones and free Wi-Fi connectivity"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Payment Services",
      description: "Multiple payment options including cards and digital wallets"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive services for a seamless travel experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-orange-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;