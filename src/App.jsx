import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/global/Landing";
import LiveFeed from "./pages/global/LiveFeed";
import Track from "./pages/global/Track";
import Help from "./pages/global/Help";
import DetailReport from "./pages/global/DetailReport";
import NotFound from "./pages/global/NotFound";

import Topic from "./pages/user/Topic";
import Location from "./pages/user/Location";
import Proof from "./pages/user/Proof";
import Review from "./pages/user/Review";
import Receipt from "./pages/user/Receipt";
import Notification from "./pages/user/Notification";
import ListComplaint from "./pages/user/ListComplaint";
import Profile from "./pages/user/Profile";
import NotificationSettings from "./pages/user/NotificationSettings";
import DataExport from "./pages/user/DataExport";
import Security from "./pages/user/Security";

import EscalationDesk from "./pages/admin/EscalationDesk";
import SlaBenchmark from "./pages/admin/SlaBenchmark";
import Categories from "./pages/admin/Categories";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/live-feed" element={<LiveFeed />} />
          <Route path="/track" element={<Track />} />
          <Route path="/help" element={<Help />} />
          <Route path="/detail-report" element={<DetailReport />} />
          <Route path="/not-found" element={<NotFound />} />

          <Route element={<ProtectedRoute allowedRole="user" />}>
            <Route path="/user/topic" element={<Topic />} />
            <Route path="/user/location" element={<Location />} />
            <Route path="/user/proof" element={<Proof />} />
            <Route path="/user/review" element={<Review />} />
            <Route path="/user/receipt" element={<Receipt />} />
            <Route path="/user/notification" element={<Notification />} />
            <Route path="/user/list-complaint" element={<ListComplaint />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/notification-settings" element={<NotificationSettings />} />
            <Route path="/user/data-export" element={<DataExport />} />
            <Route path="/user/security" element={<Security />} />
          </Route>

          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route path="/admin/escalation-desk" element={<EscalationDesk />} />
            <Route path="/admin/sla-benchmark" element={<SlaBenchmark />} />
            <Route path="/admin/categories" element={<Categories />} />
          </Route>

          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;