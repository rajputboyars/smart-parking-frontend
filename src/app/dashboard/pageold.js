"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import BookSlotModal from '@/components/BookSlotModal';
import UserBookings from '@/components/UserBookings';
import ParkingLocationsSlots from '@/components/ParkingLocationsSlots';

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [locations, setLocations] = useState([]);
  const [slots, setSlots] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ locationId: '', slotId: '' });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('current'); // Tab state: 'current' or 'history'
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    try {
      jwtDecode(token); // Verify token validity
    } catch (err) {
      router.push('/login');
    }
  }, [router]);

  // Fetch data
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserProfile(profileRes.data);

        // Fetch current bookings
        const bookingsRes = await axios.get('http://localhost:5000/api/user/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserBookings(bookingsRes.data);

        // Fetch booking history
        const historyRes = await axios.get('http://localhost:5000/api/user/booking-history', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookingHistory(historyRes.data);

        // Fetch locations and slots
        const locationsSlotsRes = await axios.get('http://localhost:5000/api/user/locations-slots', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLocations(locationsSlotsRes.data.locations);
        setSlots(locationsSlotsRes.data.slots);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  // Handle slot click to open modal
  const handleSlotClick = (locationId, slotId) => {
    setSelectedSlot({ locationId, slotId });
    setIsModalOpen(true);
  };

  // Handle booking success
  const handleBookingSuccess = () => {
    const token = localStorage.getItem('token');
    // Refresh bookings
    axios
      .get('http://localhost:5000/api/user/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserBookings(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to fetch bookings');
      });
    // Refresh booking history
    axios
      .get('http://localhost:5000/api/user/booking-history', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBookingHistory(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to fetch booking history');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">User Dashboard</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* User Profile */}
        {userProfile && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">My Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span> {userProfile.name}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {userProfile.email}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Role:</span> {userProfile.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tabs */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex border-b mb-4">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === 'current'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('current')}
            >
              Current Bookings
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === 'history'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('history')}
            >
              Booking History
            </button>
          </div>
          {activeTab === 'current' ? (
            <UserBookings bookings={userBookings} />
          ) : (
            <UserBookings bookings={bookingHistory} />
          )}
        </div>

        {/* Parking Locations and Slots */}
        <ParkingLocationsSlots
          locations={locations}
          slots={slots}
          onSlotClick={handleSlotClick}
        />

        {/* Book Slot Modal */}
        <BookSlotModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          locationId={selectedSlot.locationId}
          slotId={selectedSlot.slotId}
          onBookingSuccess={handleBookingSuccess}
        />
      </div>
    </div>
  );
}