import React from 'react';
import { Phone, AlertCircle, HeadphonesIcon, MapPin, Clock, Shield, MessageSquare, Users } from 'lucide-react';

function Help() {
  const emergencyContacts = [
    { title: "Railway Police", number: "1800-111-322" },
    { title: "Medical Emergency", number: "108" },
    { title: "Station Manager", number: "044-2345-6789" }
  ];

  const helpServices = [
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-orange-600" />,
      title: "24/7 Helpdesk",
      description: "Round-the-clock assistance for all your queries"
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: "Lost & Found",
      description: "Report and claim lost items at the help desk"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Train Enquiry",
      description: "Get real-time updates on train timings"
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "Security Help",
      description: "Report suspicious activities or seek assistance"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
      title: "Complaint Registration",
      description: "Register complaints or provide feedback"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Special Assistance",
      description: "Help for elderly and differently-abled passengers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600">We're here to assist you 24/7</p>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-orange-50 rounded-lg"
              >
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="font-medium text-gray-900">{contact.title}</span>
                </div>
                <span className="text-orange-600 font-semibold">{contact.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Help Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;