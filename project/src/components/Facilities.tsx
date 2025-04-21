import React, { useState } from 'react';
import {  Navigation as NavigationIcon ,Search } from 'lucide-react';

interface FacilitiesProps {
  onNavigate: () => void;
}

function Facilities({ onNavigate }: FacilitiesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const facilities = [
    {
      title: "Coimbatore Junction (main)",
      description: "Main railway station with 6 platforms serving major routes",
      url: "https://www.google.com/maps/place/Coimbatore+Railway+Station+-+East+Entrance/@10.9960764,76.9677388,17z"
    },
    {
      title: "Southern Railway Parcel Service",
      description: "Parcel service facility for luggage and goods",
      url: "https://maps.app.goo.gl/dwLPEu1nNFwiu7Hv5"
    },
    {
      title: "SBI ATM",
      description: "State Bank of India ATM inside the station",
      url: "https://maps.app.goo.gl/cycBNQXfG73yfVmr6"
    },
    {
      title: "Railway Dormitory",
      description: "Coimbatore Railway Dormitory for passenger stay",
      url: "https://maps.app.goo.gl/ejBHaThZAnvujTD56"
    },
    {
      title: "Deputy Station Manager Room",
      description: "Administrative office of the deputy station manager",
      url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA"
    },
    {
      title: "Pay and Use Toilet",
      description: "Modern pay-and-use toilet and bathing facility",
      url: "https://maps.app.goo.gl/RZpgvngZKw32YQp47"
    },
    {
      title: "West Entrance",
      description: "Coimbatore Railway Station - West Entrance",
      url: "https://maps.app.goo.gl/nJ36yy6EgSxnVw1j9"
    },
    {
      title: "Bike Parking Lot",
      description: "Dedicated parking area for two-wheelers",
      url: "https://maps.app.goo.gl/JuEuWrvzPE3cu8z1A"
    },
    {
      title: "EMS Speed Post",
      description: "Express mail service counter at the station",
      url: "https://maps.app.goo.gl/FqJ1ZTA8pyqMn9wJ9"
    },
    {
      title: "Retiring Room",
      description: "Resting facility for passengers with short stay options",
      url: "https://maps.app.goo.gl/PyCgXsRx4rsGFZzH9"
    },
    {
      title: "AC Waiting Hall",
      description: "Air-conditioned waiting area for travelers",
      url: "https://maps.app.goo.gl/pzvym7gS1BQNjhkbA"
    },
    {
      title: "Red Taxi Booking Office",
      description: "Taxi booking counter for passengers",
      url: "https://maps.app.goo.gl/dJBZREtvYANrhfkC7"
    },
    {
      title: "Multilevel 2 Wheeler Parking",
      description: "Multi-level parking facility for two-wheelers",
      url: "https://maps.app.goo.gl/AZGPjQJhCHra2viGA"
    },
    {
      title: "Railway Mail Service",
      description: "Railway-based mail and courier service center",
      url: "https://maps.app.goo.gl/oXNB5a6AydRhyz216"
    },
    {
      title: "Railway Station Bus Stop",
      description: "Bus stop located near the railway station",
      url: "https://maps.app.goo.gl/jB6Zag4Afwb42yao8"
    },
    {
      title: "Subway (Platform 1 and 2)",
      description: "Underground pedestrian subway connecting platforms 1 and 2",
      url: "https://maps.app.goo.gl/xMRxxvc1dDgXJ1CR7"
    },
    {
      title: "Anandh Xerox",
      description: "Xerox and document printing shop near the station",
      url: "https://maps.app.goo.gl/NKRSqCPCBzNEM3tu5"
    },
    {
      title: "Platform No. 4",
      description: "Platform No. 4 at Coimbatore Railway Station",
      url: "https://maps.app.goo.gl/V7HBFbV6PM3c9ZB6A"
    },
    {
      title: "Prepaid Waiting Hall",
      description: "Waiting hall with prepaid access for passengers",
      url: "https://maps.app.goo.gl/AW3ao63hPMe9xbz68"
    },
    {
      title: "Ticket Counter",
      description: "Central ticket booking counter",
      url: "https://www.google.com/maps/place/Ticket+Counter+-+Coimbatore+Junction"
    },
    {
      title: "Restrooms & Toilets",
      description: "Clean facilities including accessible toilets",
      url: "https://www.google.com/maps/place/Swachh+Public+Toilet"
    },
    {
      title: "IRCTC Catering",
      description: "Official food service provider with quality meals and snacks",
      url: "https://www.google.com/maps/place/IRCTC+CATERING"
    },
    {
      title: "Cloak Room",
      description: "Secure luggage storage facility for passengers",
      url: "https://www.google.com/maps/place/Railway+Station+Cloak+Room"
    },
    {
      title: "Book Store",
      description: "Wide selection of books, magazines, and reading materials",
      url: "https://www.google.com/maps/place/Railway+Station+Cloak+Room"
    },
    {
      title: "Food Plaza",
      description: "Centralized food court with multiple cuisine options",
      url: "https://www.google.com/maps/place/IRCTC+Food+Plaza"
    },
    {
      title: "Police Outpost",
      description: "24/7 police presence for passenger safety",
      url: "https://www.google.com/maps/place/Coimbatore+Railway+Police+Station"
    }
  ];

  const filteredFacilities = facilities.filter((facility) =>
    facility.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search facilities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-3 py-2 w-full max-w-md"
        />
      </div>
      <ul className="space-y-4">
        {filteredFacilities.length > 0 ? (
          filteredFacilities.map((facility, index) => (
            <li key={index} className="border p-4 rounded shadow-sm">
              <a
                href={facility.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {facility.title}
              </a>
              <p className="text-gray-700">{facility.description}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No facilities found matching your search.</p>
        )}
      </ul>
    </div>
  );
}

export default Facilities;
