import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Landing from "./pages/Landing";
import Help from "./pages/Help";
import LiveFeed from "./pages/LiveFeed";
import Track from "./pages/Track";
import DetailReport from "./pages/DetailReport";
import ListComplaint from "./pages/ListComplaint";
import Topic from "./pages/Topic";
import Location from "./pages/Location";
import Proof from "./pages/Proof";
import Review from "./pages/Review";
import Receipt from "./pages/Receipt";
import Notification from "./pages/Notification";
import NotificationSettings from "./pages/NotificationSettings";
import Profile from "./pages/Profile";
import DataExport from "./pages/DataExport";
import Security from "./pages/Security";
import EscalationDesk from "./pages/EscalationDesk";
import SlaBenchmark from "./pages/SlaBenchmark";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/track" element={<Track />} />
        <Route path="/help" element={<Help />} />
        <Route path="/detail-report" element={<DetailReport />} />
        <Route path="user/list-complaint" element={<ListComplaint />} />
        <Route path="user/topic" element={<Topic />} />
        <Route path="user/location" element={<Location />} />
        <Route path="user/proof" element={<Proof />} />
        <Route path="user/review" element={<Review />} />
        <Route path="user/receipt" element={<Receipt />} />
        <Route path="user/notification" element={<Notification />} />
        <Route path="user/notification-settings" element={<NotificationSettings />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/data-export" element={<DataExport />} />
        <Route path="user/security" element={<Security />} />
        <Route path="admin/escalation-desk" element={<EscalationDesk />} />
        <Route path="admin/sla-benchmark" element={<SlaBenchmark />} />
        <Route path="admin/categories" element={<Categories />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;