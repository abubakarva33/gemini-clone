import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { history } = useSelector((state) => state.chatHistory);
  const navigate = useNavigate();

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by your browser");
      } else {
        setStatus("Locating...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus("Location found!");
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          () => {
            setStatus("Unable to retrieve your location");
          }
        );
      }
    };
    getLocation();
    function getDeviceName() {
      const userAgent = navigator.userAgent;

      if (/android/i.test(userAgent)) {
        return "Android Device";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS Device";
      } else if (/Windows NT/.test(userAgent)) {
        return "Windows PC";
      } else if (/Macintosh/.test(userAgent)) {
        return "Macintosh";
      } else if (/Linux/.test(userAgent)) {
        return "Linux Device";
      }

      return "Unknown Device";
    }

    // Example usage:
    const deviceName = getDeviceName();
    console.log(deviceName);
  }, []);

  console.log({ location, status });
  return (
    <div className="header w-100">
      <div>
        <button onClick={() => navigate("/")}>New Chat</button>
        {Object.values(history).map((item, ind) => (
          <div key={ind} className="bg-secondary rounded px-3 py-1">
            <Link className="me-2" to={`/${item[0].id}`} key={item[0].id}>
              {item[0].user}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1>Dev</h1>
      </div>
    </div>
  );
};

export default SideBar;
