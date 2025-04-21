import React, { useState } from 'react';
import { Navigation as NavigationIcon, Menu, X, Train, Search, MapPin, Coffee, ShieldCheck, Wifi, Clock, Users, Bell, ArrowRight, Phone, Home } from 'lucide-react';
import Navigation from './components/Navigation';
import StationSelect from './components/StationSelect';
import Facilities from './components/Facilities';
import Services from './components/Services';
import Help from './components/Help';

function App() {
  const [selectedStation, setSelectedStation] = useState('');
  const [showNavigation, setShowNavigation] = useState(false);
  const [showFacilities, setShowFacilities] = useState(false);
  const [currentPage, setCurrentPage] = useState<'navigation' | 'services' | 'help' | 'search' | 'select-station' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStationSelect = (station: string) => {
    setSelectedStation(station);
    setShowNavigation(false);
    setShowFacilities(false);
    setCurrentPage(null);
  };

  const handleStartNavigation = () => {
    setCurrentPage('select-station');
  };

  const handleTicketBooking = () => {
    window.open('https://www.irctc.co.in/nget/train-search', '_blank');
  };

  const handleChangeStation = () => {
    setSelectedStation('');
    setShowNavigation(false);
    setShowFacilities(false);
    setCurrentPage('select-station');
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    setSelectedStation('');
    setShowNavigation(false);
    setShowFacilities(false);
    setCurrentPage(null);
    setIsMobileMenuOpen(false);
  };

  const features = [
    {
      icon: <MapPin className="h-12 w-12 text-orange-600" />,
      title: "Interactive Navigation",
      description: "Find your way through stations with our intuitive navigation system"
    },
    {
      icon: <Coffee className="h-12 w-12 text-orange-600" />,
      title: "Station Facilities",
      description: "Discover amenities like food courts, restrooms, and more"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-orange-600" />,
      title: "Security Services",
      description: "24/7 security and emergency assistance throughout stations"
    },
    {
      icon: <Wifi className="h-12 w-12 text-orange-600" />,
      title: "Digital Services",
      description: "Free Wi-Fi and real-time train information updates"
    }
  ];

  const stats = [
    { icon: <Train className="h-8 w-8" />, value: "500+", label: "Stations Covered" },
    { icon: <Users className="h-8 w-8" />, value: "10M+", label: "Daily Passengers" },
    { icon: <Bell className="h-8 w-8" />, value: "24/7", label: "Support" },
    { icon: <Phone className="h-8 w-8" />, value: "100%", label: "Accessibility" }
  ];

  const renderMainContent = () => {
    if (currentPage === 'select-station' || (!selectedStation && currentPage === 'search')) {
      return <StationSelect onStationSelect={handleStationSelect} />;
    }

    if (selectedStation) {
      if (!showNavigation && !showFacilities && !currentPage) {
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full px-6">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedStation}</h1>
                <p className="text-gray-600">Choose what you'd like to do</p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => setShowNavigation(true)}
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                  <NavigationIcon className="h-6 w-6 mr-2" />
                  Find Your Way
                </button>
                <button
                  onClick={handleTicketBooking}
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  <Train className="h-6 w-6 mr-2" />
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        );
      }

      if (showFacilities) {
        return <Facilities onNavigate={() => setShowNavigation(true)} />;
      }

      switch (currentPage) {
        case 'services':
          return <Services />;
        case 'help':
          return <Help />;
        default:
          return showNavigation ? <Navigation currentStation={selectedStation} /> : null;
      }
    }

    // Home Page
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?auto=format&fit=crop&q=80"
              alt="Railway Station"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="pt-16 pb-20 lg:pt-24 lg:pb-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Navigate Indian Railways</span>
                  <span className="block text-orange-200 mt-2">with confidence</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-orange-100 sm:max-w-3xl">
                  Find your way through railway stations, discover facilities, and make your journey smoother with IRCTC RailNav.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <button
                    onClick={handleStartNavigation}
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Start Navigation
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto pb-12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center text-orange-200 mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-orange-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Everything you need for a smooth journey
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Discover the features that make your railway station navigation experience better.
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div key={index} className="relative">
                    <div className="absolute h-24 w-24 rounded-xl bg-orange-100 -top-12 left-1/2 transform -translate-x-12 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="pt-16 text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to start your journey?</span>
                <span className="block text-orange-200">Navigate with confidence.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-100">
                Get started with IRCTC RailNav today and experience hassle-free station navigation.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <button
                onClick={handleStartNavigation}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedStation && (
        <header className="bg-orange-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <NavigationIcon className="h-6 w-6" />
                <span className="text-xl font-semibold">IRCTC RailNav</span>
                <span className="text-sm opacity-75">| {selectedStation}</span>
              </div>
              
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              <nav className="hidden md:flex space-x-4">
                <button
                  onClick={handleHomeClick}
                  className="hover:text-orange-200 transition-colors flex items-center"
                >
                  <Home className="h-5 w-5 mr-1" />
                  Home
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => setCurrentPage('help')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Help
                </button>
                <button 
                  onClick={handleChangeStation}
                  className="hover:text-orange-200 transition-colors"
                >
                  Change Station
                </button>
              </nav>
            </div>
          </div>
        </header>
      )}

      {isMobileMenuOpen && selectedStation && (
        <div className="md:hidden bg-orange-500 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                handleHomeClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center"
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('services');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => {
                setCurrentPage('help');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Help
            </button>
            <button
              onClick={handleChangeStation}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Change Station
            </button>
          </div>
        </div>
      )}

      <main>
        {renderMainContent()}
      </main>
    </div>
  );
}

export default App;