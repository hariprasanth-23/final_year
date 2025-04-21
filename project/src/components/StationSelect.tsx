import React, { useState } from 'react';
import { Train, Search, MapPin, Users } from 'lucide-react';

interface Station {
  code: string;
  name: string;
  platforms: number;
  dailyTraffic: number;
  
}

const stations: Station[] = [
  {
    code: "MAS",
    name: "Chennai Central",
    platforms: 17,
    dailyTraffic: 550000,
    facilities: [
      
    ]
  },
  {
    code: "CBE",
    name: "Coimbatore Junction",
    platforms: 6,
    dailyTraffic: 150000,
    facilities: []
  },
  {
    code: "MDU",
    name: "Madurai Junction",
    platforms: 8,
    dailyTraffic: 200000,
    facilities: []
  },
  {
    code: "TPJ",
    name: "Trichy Junction",
    platforms: 7,
    dailyTraffic: 180000,
    facilities: [
    ]
  },
  {
    code: "SA",
    name: "Salem Junction",
    platforms: 5,
    dailyTraffic: 120000,
    facilities: [
    ]
  },
  {
    code: "ED",
    name: "Erode Junction",
    platforms: 4,
    dailyTraffic: 100000,
    facilities: [
    ]
  }
];

interface StationSelectProps {
  onStationSelect: (station: string) => void;
}

function StationSelect({ onStationSelect }: StationSelectProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStations = stations.filter(station => 
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFacilityClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Select Your Station</h1>
          <p className="mt-2 text-gray-600">Find detailed information about railway stations</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search stations..."
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.code}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{station.name}</h3>
                    <p className="text-sm text-gray-500">{station.code}</p>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Train className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{station.platforms} Platforms</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{(station.dailyTraffic / 1000).toFixed(0)}K Daily</span>
                  </div>
                </div>

                <div className="mt-4">
                  
                  <div className="flex flex-wrap gap-2">
                    {station.facilities.map((facility, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleFacilityClick(facility.url, e)}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {facility.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onStationSelect(station.name)}
                  className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Select Station
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StationSelect;