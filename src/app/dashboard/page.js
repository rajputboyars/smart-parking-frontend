"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import AdminStatCard from "@/components/AdminStatCard/AdminStatCard";
import AdminParkingOccupancy from "@/components/AdminParkingOccupancy/AdminParkingOccupancy";
import AdminEVStationsOccupancy from "@/components/AdminEVStationsOccupancy/AdminEVStationsOccupancy";
import AdminLoyaltyCardCustomers from "@/components/AdminLoyaltyCardCustomers/AdminLoyaltyCardCustomers";
import AdminParkingLotAllotment from "@/components/AdminParkingLotAllotment/AdminParkingLotAllotment";

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [locations, setLocations] = useState([]);
  const [slots, setSlots] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({
    locationId: "",
    slotId: "",
  });
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("current"); // Tab state: 'current' or 'history'
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      jwtDecode(token); // Verify token validity
    } catch (err) {
      router.push("/login");
    }
  }, [router]);

  // Fetch data
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserProfile(profileRes.data);

        // Fetch current bookings
        const bookingsRes = await axios.get(
          "http://localhost:5000/api/user/bookings",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserBookings(bookingsRes.data);

        // Fetch booking history
        const historyRes = await axios.get(
          "http://localhost:5000/api/user/booking-history",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBookingHistory(historyRes.data);

        // Fetch locations and slots
        const locationsSlotsRes = await axios.get(
          "http://localhost:5000/api/user/locations-slots",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLocations(locationsSlotsRes.data.locations);
        setSlots(locationsSlotsRes.data.slots);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch data");
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
    const token = localStorage.getItem("token");
    // Refresh bookings
    axios
      .get("http://localhost:5000/api/user/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserBookings(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to fetch bookings");
      });
    // Refresh booking history
    axios
      .get("http://localhost:5000/api/user/booking-history", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBookingHistory(res.data);
      })
      .catch((err) => {
        setError(
          err.response?.data?.message || "Failed to fetch booking history"
        );
      });
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex text-gray-800">
        {/* Sidebar Component */}
        <AdminSidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          <AdminHeader />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdminStatCard
              title="Parking Lots Occupied"
              value="13 / 50"
              color="text-red-500"
            />
            <AdminStatCard
              title="EV Charging Occupation"
              value="3 / 9"
              color="text-blue-500"
            />
            <AdminStatCard
              title="Today's Collection"
              value="₹12656"
              color="text-green-500"
            />
            <AdminStatCard
              title="Loyalty Card Customers"
              value="3"
              color="text-purple-500"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AdminParkingOccupancy />
            <AdminEVStationsOccupancy />
            <AdminLoyaltyCardCustomers />
          </div>

          <div className="mt-6">
            <AdminParkingLotAllotment />
          </div>
        </main>
      </div>
    </>
  );
}
