import { useState } from "react";

import ProfileCard from "./components/ProfileCard";
import ReportCard from "./components/ReportCard";

const App = () => {
  const [report, setReport] = useState("weekly");

  const handleReport = (e) => {
    setReport(e.target.value);
  };

  return (
    <main className="main">
      {/* PROFILE CARD */}
      <ProfileCard report={report} handleReport={handleReport} />
      {/* REPORT CARD */}
      <ReportCard report={report} />
    </main>
  );
};

export default App;
