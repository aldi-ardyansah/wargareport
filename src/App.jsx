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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/track" element={<Track />} />
        <Route path="/help" element={<Help />} />
        <Route path="/detail-report" element={<DetailReport />} />
        <Route path="/list-complaint" element={<ListComplaint />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/location" element={<Location />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/review" element={<Review />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/notification-settings" element={<NotificationSettings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data-export" element={<DataExport />} />
        <Route path="/security" element={<Security />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;