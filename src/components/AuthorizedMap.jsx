import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Distributor data
const distributors = [
  // Middle East & Asia
  { name: "Nano Technic", country: "Singapore", lat: 1.3521, lng: 103.8198, type: "Authorized Distributor Hub" },
  { name: "Blackout Protection and Service Company", country: "Qatar", lat: 25.2854, lng: 51.5310, type: "Certified Partner" },
  { name: "Smart Shield", country: "Bahrain", lat: 26.0667, lng: 50.5577, type: "Certified Partner" },
  { name: "Elite World for General Trading Company", country: "Iraq", lat: 33.3152, lng: 44.3661, type: "Certified Partner" },
  { name: "SupaKoto", country: "Egypt", lat: 30.0444, lng: 31.2357, type: "Authorized Distributor Hub" },
  { name: "SupaKoto", country: "UAE", lat: 25.2048, lng: 55.2708, type: "Authorized Distributor Hub" },
  
  // South America - Hub
  { name: "TAKAI Colombia", country: "Colombia", lat: 4.7110, lng: -74.0721, type: "Authorized Distributor Hub" },
  
  // Europe
  { name: "TAKAI Croatia", country: "Croatia", lat: 45.1000, lng: 15.2000, type: "Certified Partner" },
  
  // South America - Certified Installers
  { name: "ProTech Films", country: "Brazil", lat: -23.5505, lng: -46.6333, type: "Certified Installer" },
  { name: "AutoShield Peru", country: "Peru", lat: -12.0464, lng: -77.0428, type: "Certified Installer" },
  { name: "Premium Protection", country: "Chile", lat: -33.4489, lng: -70.6693, type: "Certified Installer" },
  { name: "Elite Car Care", country: "Argentina", lat: -34.6118, lng: -58.3960, type: "Certified Installer" },
  { name: "VenezuelaPPF", country: "Venezuela", lat: 10.4806, lng: -66.9036, type: "Certified Installer" },
  
  // SupaKoto Egypt Locations - Certified Installers
  { name: "SupaKoto - Fifth Settlement", country: "Egypt", location: "Shell Out Station, in front of Air Force Hospital", lat: 30.0131, lng: 31.4914, type: "Certified Installer" },
  { name: "SupaKoto - Zahraa Maadi", country: "Egypt", location: "Inside Skoda Showroom", lat: 29.9597, lng: 31.2584, type: "Certified Installer" },
  { name: "SupaKoto - Sheikh Zayed", country: "Egypt", location: "Dahshour Road, beside Auto Samir Rayan", lat: 30.0776, lng: 30.9776, type: "Certified Installer" },
  { name: "SupaKoto - New Damietta", country: "Egypt", location: "In front of Faculty of Applied Arts, next to Hady Mall", lat: 31.4165, lng: 31.8133, type: "Certified Installer" },
  
  // SupaKoto Dubai Location - Certified Installer
  { name: "SupaKoto - Al Quoz", country: "UAE", location: "Al Quoz 4 – Industrial Area", lat: 25.1372, lng: 55.2307, type: "Certified Installer" }
];

const AuthorizedMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [tileErrors, setTileErrors] = useState(0);

  const handleMapLoad = () => {
    console.log('Map loaded successfully');
    setMapLoaded(true);
  };

  const handleTileError = (error) => {
    console.error('Tile loading error:', error);
    setTileErrors(prev => prev + 1);
    // Try to reload tiles after error
    setTimeout(() => {
      console.log('Attempting to reload tiles...');
    }, 1000);
  };

  // Ensure we're on the client side and set fallback timeout
  useEffect(() => {
    setIsClient(true);
    const timeout = setTimeout(() => {
      setMapLoaded(true);
    }, 2000); // Show map after 2 seconds regardless

    return () => clearTimeout(timeout);
  }, []);

  // Don't render anything on server side
  if (!isClient) {
    return (
      <div className="w-full max-w-full mx-auto">
        <div className="relative rounded-2xl shadow-xl overflow-hidden bg-[#0a0a0a] border border-gray-800 max-w-full">
          <div className="h-[400px] md:h-[500px] w-full relative flex items-center justify-center">
            <div className="text-white text-lg">Loading map...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="relative rounded-2xl shadow-xl overflow-hidden bg-[#0a0a0a] border border-gray-800 max-w-full">
        {!mapLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center z-10">
            <div className="text-blue-800 text-lg font-semibold">Map loading...</div>
          </div>
        )}
        
        {mapLoaded && tileErrors > 5 && (
          <div className="absolute top-4 left-4 bg-blue-900/90 text-white px-4 py-2 rounded-lg text-sm z-[999]">
            <div className="font-semibold">Interactive Partner Map</div>
            <div className="text-xs opacity-90">Click markers to view partner details</div>
          </div>
        )}
        
        <div className="h-[400px] md:h-[500px] w-full relative">
          <MapContainer
            center={[30, 30]}
            zoom={3}
            minZoom={1}
            maxZoom={18}
            scrollWheelZoom={true}
            doubleClickZoom={true}
            dragging={true}
            zoomControl={true}
            className="h-full w-full"
            whenReady={handleMapLoad}
            style={{ 
              background: '#f8f9fa',
              borderRadius: '1rem',
              height: '100%',
              width: '100%'
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map-tiles"
              eventHandlers={{
                tileerror: handleTileError,
                tileload: () => console.log('OSM tile loaded successfully')
              }}
            />
            
            {distributors.map((distributor, index) => {
              // Different colors and sizes based on partner type
              const getMarkerStyle = (type) => {
                switch (type) {
                  case 'Authorized Distributor Hub':
                    return {
                      fillColor: '#C9A227', // Gold for hubs
                      color: '#C9A227',
                      radius: 12,
                      weight: 3
                    };
                  case 'Certified Partner':
                    return {
                      fillColor: '#3B82F6', // Blue for certified partners
                      color: '#3B82F6',
                      radius: 8,
                      weight: 2
                    };
                  case 'Certified Installer':
                    return {
                      fillColor: '#6B7280', // Grey for installers
                      color: '#6B7280',
                      radius: 6,
                      weight: 2
                    };
                  default:
                    return {
                      fillColor: '#6B7280',
                      color: '#6B7280',
                      radius: 8,
                      weight: 2
                    };
                }
              };

              const markerStyle = getMarkerStyle(distributor.type);

              return (
                <CircleMarker
                  key={index}
                  center={[distributor.lat, distributor.lng]}
                  radius={markerStyle.radius}
                  pathOptions={{
                    fillColor: markerStyle.fillColor,
                    color: markerStyle.color,
                    weight: markerStyle.weight,
                    opacity: 1,
                    fillOpacity: 0.8
                  }}
                  eventHandlers={{
                    mouseover: (e) => {
                      e.target.setStyle({
                        fillColor: markerStyle.fillColor,
                        color: markerStyle.color,
                        radius: markerStyle.radius + 2,
                        fillOpacity: 1
                      });
                    },
                    mouseout: (e) => {
                      e.target.setStyle({
                        fillColor: markerStyle.fillColor,
                        color: markerStyle.color,
                        radius: markerStyle.radius,
                        fillOpacity: 0.8
                      });
                    }
                  }}
              >
                <Popup
                  className="custom-popup"
                  closeButton={true}
                  autoClose={false}
                  closeOnEscapeKey={true}
                >
                  <div className="bg-gray-900 text-white p-3 rounded-lg border border-gray-700 min-w-[200px]">
                    <h3 className="font-semibold text-lg mb-1" style={{ color: markerStyle.fillColor }}>
                      {distributor.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      📍 {distributor.country}
                    </p>
                    {distributor.location && (
                      <p className="text-gray-300 text-xs mt-1">
                        📍 {distributor.location}
                      </p>
                    )}
                    <div className="mt-2 text-xs text-gray-400">
                      {distributor.type}
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            );
            })}
          </MapContainer>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-gray-700 text-xs z-[1000]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#C9A227]"></div>
              <span>Distributor Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
              <span>Certified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6B7280]"></div>
              <span>Certified Installers</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .leaflet-container {
          border-radius: 1rem !important;
          max-width: 100% !important;
          max-height: 100% !important;
          height: 100% !important;
          width: 100% !important;
        }
        
        .leaflet-control-container {
          position: relative !important;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
        }
        
        .custom-popup .leaflet-popup-content {
          margin: 0 !important;
          padding: 0 !important;
          background: transparent !important;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: #1f2937 !important;
          border: 1px solid #374151 !important;
        }
        
        .map-tiles {
          opacity: 1 !important;
          filter: none !important;
          visibility: visible !important;
        }
        
        /* Ensure map tiles render properly */
        .leaflet-tile-pane {
          z-index: 1 !important;
        }
        
        .leaflet-map-pane {
          z-index: 1 !important;
        }
        
        /* Force tile visibility */
        .leaflet-tile {
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
        }
        
        .leaflet-tile-container {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        /* Ensure attribution and controls stay within bounds */
        .leaflet-control-attribution {
          max-width: calc(100% - 20px) !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }
        
        .leaflet-control-zoom {
          margin: 10px !important;
        }
        
        /* Prevent any element from extending beyond container */
        .leaflet-container * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        
        /* Allow normal tile loading */
        .leaflet-container {
          overflow: visible !important;
        }
        
        .leaflet-tile-container {
          overflow: visible !important;
        }
        
        /* Ensure legend stays on top */
        .leaflet-control-container {
          pointer-events: none !important;
        }
        
        .leaflet-control-container .leaflet-control {
          pointer-events: auto !important;
        }
        
        @media (max-width: 768px) {
          .custom-popup .leaflet-popup-content-wrapper {
            max-width: 250px !important;
          }
          
          .leaflet-container {
            border-radius: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthorizedMap;
