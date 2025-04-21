import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface NavigationProps {
  currentStation: string;
}

const stationFacilities = {
  "Chennai Central": [
    
      {
        title: "Main Entrance (Rajaji Salai)",
        description: "Primary entrance to Chennai Central Railway Station, facing Rajaji Salai.",
        url: "https://maps.google.com/?cid=4319642981220669426"
      },
      {
        title: "EVR Periyar Salai Entrance",
        description: "Another major entrance to the station, accessible from EVR Periyar Salai.",
        url: "https://maps.google.com/?cid=5450580586406034959"
      },
      {
        title: "Suburban Terminal Entrance (Moore Market Complex)",
        description: "Entrance specifically for the suburban train terminal, located near the Moore Market Complex.",
        url: "https://maps.google.com/?cid=5322217413490791526"
      },
      {
        title: "Restrooms (General)",
        description: "General restroom facilities available on various platforms.",
        url: "https://maps.google.com/?cid=11442796295773713264"
      },
      {
        title: "Restrooms (for Ladies & Gents)",
        description: "Separate restroom facilities for ladies and gentlemen.",
        url: "https://maps.google.com/?cid=14333707836877196097"
      },
      {
        title: "Prepaid A/C Waiting Room",
        description: "Air-conditioned waiting room available for passengers (may require a fee). Located on the 1st floor.",
        url: "https://maps.google.com/?cid=13190869764971982099"
      },
      {
        title: "Executive Lounge (AC)",
        description: "Premium air-conditioned lounge with seating, and possibly other amenities. Often located on Platform 1.",
        url: "https://maps.google.com/?cid=12658709401677303242"
      },
      {
        title: "Platforms",
        description: "Chennai Central has multiple platforms serving long-distance and suburban trains. Check train information displays for your platform.",
        url: "https://maps.google.com/?cid=6270510434520939481"
      },
      {
        title: "Platform 1",
        description: "One of the main platforms for long-distance trains.",
        url: "https://maps.google.com/?cid=7654444059057645070"
      },
      {
        title: "Suburban Platforms",
        description: "Separate platforms dedicated to Chennai Suburban Railway services.",
        url: "https://maps.google.com/?cid=10407561286700319745"
      },
      {
        title: "Central Bank of India ATM",
        description: "ATM at Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=6876805972705612768"
      },
      {
        title: "CANARA BANK ATM",
        description: "ATM at Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=16571308602847235905"
      },
      {
        title: "North Indian& Bengali peral Restaurant",
        description: "Restaurant near Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=5163288295126576191"
      },
      {
        title: "Luggage Cloak Room",
        description: "Cloak room at Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=14764273794261099492"
      },
      {
        title: "Platform Ticket Counter - Chennai Central",
        description: "Ticket counter at Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=11665238896473200503"
      },
      {
        title: "Chennai Central Station Parking",
        description: "Parking at Chennai Central Railway Station",
        url: "https://maps.google.com/?cid=10190512955456367701"
      }
    
  ],
  "Coimbatore Junction": [
    {
      title: "Coimbatore Junction (main)",
      description: "Main railway station with 6 platforms serving major routes",
      url: "https://maps.app.goo.gl/KUyqbGGm25419x647"
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
    {title: "Ticket Counter",
      description: "Central ticket booking counter",
      url: "https://www.google.com/maps/place/Ticket+Counter+-+Coimbatore+Junction/@10.9977273,76.9666267,21z/data=!4m6!3m5!1s0x3ba8594f473aa50f:0x30e6e50e27e1f543!8m2!3d10.9977161!4d76.9666837!16s%2Fg%2F11ry7qjk96?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Restrooms & Toilets",
      description: "Clean facilities including accessible toilets",
      url: "https://www.google.com/maps/place/Swachh+Public+Toilet/@10.9984642,76.968264,21z/data=!4m6!3m5!1s0x3ba859a6c167aaab:0x9d4a9a10c7cf743b!8m2!3d10.9985006!4d76.9683004!16s%2Fg%2F11f1ntj91h?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "IRCTC Catering",
      description: "Official food service provider with quality meals and snacks",
      url: "https://www.google.com/maps/place/IRCTC+CATERING/@10.996398,76.9671427,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859b7c4485d65:0x2414e04e53efd11!8m2!3d10.996398!4d76.9671427!16s%2Fg%2F11gy638646?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "AC Waiting Hall",
      description: "Air-conditioned waiting area with comfortable seating",
      url: "https://www.google.com/maps/place/Ac+waiting+hall/@10.9966715,76.966741,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859b2d9df1d0b:0xc7bb86476358196d!8m2!3d10.9966715!4d76.966741!16s%2Fg%2F11shd59qm7?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Cloak Room",
      description: "Secure luggage storage facility for passengers",
      url: "https://www.google.com/maps/place/Railway+Station+Cloak+Room/@10.9966175,76.9678001,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859ca669174e7:0x36e6a491db3ee3f0!8m2!3d10.9966175!4d76.9678001!16s%2Fg%2F11st8h8l0s?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Book Store",
      description: "Wide selection of books, magazines, and reading materials",
      url: "https://www.google.com/maps/place/Railway+Station+Cloak+Room/@10.9966175,76.9678001,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859ca669174e7:0x36e6a491db3ee3f0!8m2!3d10.9966175!4d76.9678001!16s%2Fg%2F11st8h8l0s?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3Dz"
    },
    
    {
      title: "Food Plaza",
      description: "Centralized food court with multiple cuisine options",
      url: "https://www.google.com/maps/place/IRCTC+Food+Plaza/@10.9956508,76.9679147,21z/data=!4m6!3m5!1s0x3ba85996a964af0b:0x948413e669a69d6f!8m2!3d10.995664!4d76.9679118!16s%2Fg%2F11khcn4m_0?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Police Outpost",
      description: "24/7 police presence for passenger safety",
      url: "https://www.google.com/maps/place/Coimbatore+Railway+Police+Station/@10.9950331,76.9680015,21z/data=!4m6!3m5!1s0x3ba859a10ef88e7d:0x317caaa2952565d!8m2!3d10.9950384!4d76.9680686!16s%2Fg%2F1tc_jky8?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    }
  ],
  "Madurai Junction": 
    [
        {
          title: "MDU Junction Ticket Counter",
          description: "Ticket counter at MDU Junction",
          url: "https://maps.google.com/?cid=17371545459110026418"
        },
        {
          title: "Madurai Railway Station Ticket Counter",
          description: "Ticket counter at Madurai Railway Station",
          url: "https://maps.google.com/?cid=12786403560204152112"
        },
        {
          title: "Railway Ticket Center",
          description: "Railway Ticket Center in Madurai",
          url: "https://maps.google.com/?cid=16958208101787803878"
        },
        {
          title: "Railway Reservation Center",
          description: "Railway Reservation Center in Madurai",
          url: "https://maps.google.com/?cid=14679922400357712114"
        },
        {
          title: "MADURAI RAILWAY JUNCTION 1st platform Ticket Counter",
          description: "Ticket counter at MADURAI RAILWAY JUNCTION 1st platform",
          url: "https://maps.google.com/?cid=13456797522566435259"
        },
        {
          title: "Multi-level Two-Wheeler Parking",
          description: "Parking facility with ground and three floors, accommodating 700 two-wheelers and including electric vehicle charging points.",
          url: "https://maps.google.com/?cid=12786403560204152112"
        },
        {
          title: "Open Parking Area",
          description: "Existing open parking space near the main entrance.",
          url: "https://maps.google.com/?cid=17371545459110026418"
        },
        {
          title: "Executive Lounge",
          description: "Modern AC Executive Lounge on Platform 1 with Wi-Fi, TV, business center, and travel desk.",
          url: "https://maps.google.com/?cid=13456797522566435259"
        },
        {
          title: "Shower Facility (in Executive Lounge)",
          description: "Bathing and shower facilities available inside the Executive Lounge.",
          url: "https://maps.google.com/?cid=6319598071148897078"
        },
        {
          title: "Business Center (in Executive Lounge)",
          description: "Computer, internet, print, photocopy, and scanning services in the Executive Lounge.",
          url: "https://maps.google.com/?cid=10735603991250426027"
        },
        {
          title: "Temporary Waiting Hall",
          description: "A temporary waiting hall with toilet facilities near the foot over bridge.",
          url: "https://maps.google.com/?cid=15728314792430938885"
        },
        {
          title: "Breast-feeding Room (in Temporary Waiting Hall)",
          description: "Dedicated breast-feeding room within the temporary waiting hall.",
          url: "https://maps.google.com/?cid=11578715344016921437"
        },
        {
          title: "Escalators",
          description: "Available from the entrance to Platforms 2, 3, 4, 5, and 6 via the northern Foot Over-Bridge.",
          url: "https://maps.google.com/?cid=15471091389149587350"
        },
        {
          title: "Foot Over-Bridges",
          description: "Two foot over-bridges connecting all platforms.",
          url: "https://maps.google.com/?cid=11131332166404201687"
        },
        {
          title: "Wi-Fi",
          description: "Free Wi-Fi service available at the station.",
          url: "https://maps.google.com/?cid=572504989666249180"
        },
        {
          title: "Enquiry Desk",
          description: "Information and enquiry counter near the main entrance.",
          url: "https://maps.google.com/?cid=6139895759854581410"
        },
        {
          title: "Cloak Room",
          description: "Facility to leave luggage, located on Platform 1 near the ticket counter at the main entrance.",
          url: "https://maps.google.com/?cid=15011643425048791509"
        },
        {
          title: "Food Stalls and Restaurants",
          description: "Various options for food and beverages on all platforms.",
          url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA6"
        },
        {
          title: "Water Taps",
          description: "Potable water available on all platforms.",
          url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA7"
        },
        {
          title: "Seating Areas",
          description: "Ample seating arrangements across all platforms.",
          url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA8"
        },
        {
          title: "Battery Operated Cars",
          description: "Available for assistance in moving around the station.",
          url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA9"
        },
        {
          title: "Coin Vending Machine (SBI)",
          description: "Automatic coin vending machine provided by SBI.",
          url: "https://www.google.com/maps/place/Madurai+Junction+Railway+Station/@9.919842,78.110817,17z0"
        }
      
      
    ],
  "Trichy Junction": [
    [
      {
      title: "Main Entrance",
      description: "Main entrance to Tiruchchirappalli Junction.",
      url: "https://maps.google.com/?cid=1090881400801060771"
      },
      {
      title: "Restrooms",
      description: "Restroom facilities are available at Tiruchchirappalli Junction.",
      url: "https://indiarailinfo.com/station/tips/tiruchchirappalli-junction-tpj/787"
      },
      {
      title: "AC Lounge",
      description: "An AC lounge is available for passengers on Platform 1.",
      url: "https://en.wikipedia.org/wiki/Tiruchchirappalli_Junction_railway_station"
      },
      {
      title: "Clock Room",
      description: "Clock room facility for luggage storage.",
      url: "https://maps.google.com/?cid=11955665872587426884"
      },
      {
      title: "Wi-Fi",
      description: "Free Wi-Fi is available at Tiruchchirappalli Junction.",
      url: "https://en.wikipedia.org/wiki/Tiruchchirappalli_Junction_railway_station"
      },
      {
      title: "Retiring Rooms",
      description: "Retiring rooms are available at Tiruchchirappalli Junction.",
      url: "https://en.wikipedia.org/wiki/Tiruchchirappalli_Junction_railway_station"
      },
      {
      title: "Food Stalls",
      description: "Food stalls are available at the station.",
      url: "https://indiarailinfo.com/station/tips/tiruchchirappalli-junction-tpj/787"
      },
      {
      title: "ATM",
      description: "ATM facility available.",
      url: "https://indiarailinfo.com/station/tips/tiruchchirappalli-junction-tpj/787"
      },
      {
      title: "Digital Lockers",
      description: "Digital lockers are available on Platform 1 for luggage storage.",
      url: "https://timesofindia.indiatimes.com/city/trichy/digital-lockers-at-trichy-rly-station-gain-popularity-among-passengers/articleshow/111070017.cms"
      },
      {
        title: "Platforms",
        description: "General area of the platforms at Tiruchchirappalli Junction.",
        url: "https://maps.google.com/?cid=7217848767637568705"
        }
     ]
  ],
  "Salem Junction": [
    
      {
        title: "ATM",
        description: "ATM located near Salem Junction.",
        url: "https://maps.google.com/?cid=8247320451701965103"
      },
      {
        title: "Main Entrance",
        description: "Main entrance of Salem Junction Railway Station.",
        url: "https://maps.google.com/?cid=6435611294886892001"
      },
      {
        title: "Restrooms",
        description: "Restroom facilities available inside Salem Junction.",
        url: "https://maps.google.com/?cid=10862534228966586553"
      },
      {
        title: "Waiting Room",
        description: "Waiting hall at Salem Junction, Platform 1.",
        url: "https://maps.google.com/?cid=17234531940440572284"
      },
      {
        title: "Platforms",
        description: "General area of the platforms at Salem Junction.",
        url: "https://maps.google.com/?cid=6435611294886892001"
      },
      {
        title: "Cloak Room",
        description: "Cloak room facility at Salem Junction.",
        url: "https://maps.google.com/?cid=6435611294886892001"
      },
      {
        title: "Ticket Counter",
        description: "Ticket counters at Salem Railway Station.",
        url: "https://maps.google.com/?cid=6536669808839991426"
      },
      {
        title: "Parking",
        description: "Parking area available at Salem Junction.",
        url: "https://maps.google.com/?cid=13027722055437132669"
      },
      {
        title: "Cloak Room",
        description: "Facility for luggage storage at Salem Junction.",
        url: "https://maps.google.com/?cid=15511403402683558075"
      },
      {
        title: "IRCTC Food Plaza",
        description: "IRCTC Food Plaza or catering services likely available within Salem Junction.",
        url: "https://maps.google.com/?cid=14912519958536296335"
      }
    ],
  "Erode Junction": 
  [
    
      {
      title: "Main Entrance",
      description: "Main entrance of Erode Junction Railway Station.",
      url: "https://maps.google.com/?cid=26891486402716610110"
      },
      {
      title: "Restrooms",
      description: "Restroom facilities available inside Erode Junction.",
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s113763331519968283837!2s0x3baaf53df38c7a0b:0x642af3365d873cc1"
      },
      {
      title: "AC Waiting Hall",
      description: "Air-conditioned waiting hall for passengers at Erode Junction.",
      url: "http://prosouthernrailwaysalem.blogspot.com/2015/09/airconditioned-passenger-waiting-hall.html"
      },
      {
      title: "Clock Room",
      description: "Cloak room facility for luggage storage at Erode Junction.",
      url: "https://erail.in/info/erode-railway-station-ED/22183"
      },
      {
      title: "Platforms",
      description: "General area of the platforms at Erode Junction.",
      url: "https://maps.google.com/?cid=26891486402716610112"
      },
      {
      title: "Food Stalls",
      description: "Various food stalls and vendors available at Erode Junction.",
      url: "http://207.115.81.2/station/blog/39/23"
      },
      {
      title: "ATM",
      description: "ATM facility available at Erode Junction.",
      url: "http://207.115.81.2/station/blog/39/23"
      },
      {
      title: "Parking",
      description: "Parking area available at Erode Junction.",
      url: "https://erail.in/info/erode-railway-station-ED/22183"
      }
     
  ]
};

function Navigation({ currentStation }: NavigationProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFacilitySelect = (url: string) => {
    window.open(url, '_blank');
  };

  const facilities = stationFacilities[currentStation] || [];

  const filteredFacilities = facilities.filter(facility =>
    facility.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Station Facilities - {currentStation}
        </h2>

        <input
          type="text"
          placeholder="Search facilities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleFacilitySelect(facility.url)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFacilities.length === 0 && (
          <p className="text-gray-500 mt-6 text-center">No facilities found.</p>
        )}
      </div>
    </div>
  );
}

export default Navigation;