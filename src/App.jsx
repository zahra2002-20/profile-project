import "./App.css";
import avatarImage from "./assets/avatar.png";
import profilePage from "./components/profilePage";
function App() {
  const user = {
    name: "Zahra Mehmandoust",
    username: "@zahra-2003-m",
    avatarImage: avatarImage,
    streakDays: 2,
    longestStreak: 2,
    recentBadesText: "No badges yet.",

    personalInfo: {
      Email: "zahramehmandoust02@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province or State": "Herat",
      "Teaching Expreiance": "3",
      "Date of Birth": "2003/10/25",
      "Online Portfolio Link": "N/A",
      "Linkedin Link": "Open the Link",
      Languages: "Farsi, English",
      Bio: "Computer Teacher",
    },

    accountDetails: {
      Role: "Mentor",
      Status: "Active",
      Verification: "verified",
    },
  };

  return (
    <div className="page">
      <profilePage user={user}></profilePage>
    </div>
  );
}
export default App;
