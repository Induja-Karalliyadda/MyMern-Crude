import React, { useState, useEffect, useRef } from "react";
import Nav from "../Home/Nav/Nav";
import axios from "axios";
import User from "../Adduser/User";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Users Reports",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!"),
  });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResult(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    // Create the WhatsApp Chat URL
    const phoneNumber = "+94778121808";
    const message = "Selected User reports from here";
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new window
    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div>
      <Nav />
      <div ref={ComponentsRef}>
        <h1>User Details Display Page</h1>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search User Details"
        />
        <button onClick={handleSearch}>Search</button>
        {noResult ? (
          <div>
            <p>No Users Found</p>
          </div>
        ) : (
          <div>
            {users &&
              users.map((user, i) => (
                <div key={i}>
                  <User user={user} />
                </div>
              ))}
          </div>
        )}
      </div>
      <br />
      <button onClick={handlePrint}>Download Report</button>
      <br />
      <button onClick={handleSendReport}>
        Send WhatsApp message
      </button>
    </div>
  );
}

export default UserDetails;