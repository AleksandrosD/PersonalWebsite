import { useState } from "react";
import "./modal.css";
export default function PasswordModalExample({ onClose }) {
  const [sword, setPassword] = useState("");

  const handleSubmit = () => {
    if (sword === "676767") {
      alert("Access granted!");
    } else {
     window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
      "_blank"
    );
    }
  };

  return (
    <>
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Password</h2>

            <input
              className="mt-2"
              type="password"
              value={sword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                handleSubmit();
                }
            }}
            />

            <div className="modal-buttons">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
    </>
  );
}
