import { useState } from "react";

// Parent Component
export function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");
  const [childData, setChildData] = useState("No data from child yet");

  // Function to receive data from child
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <p>
        <strong>Parent Message:</strong> {message}
      </p>
      <p>
        <strong>Data from Child:</strong> {childData}
      </p>

      {/* Passing data and callback to child */}
      <ChildComponent
        messageFromParent={message}
        onChildData={handleChildData}
      />
    </div>
  );
}

// Child Component
function ChildComponent({ messageFromParent, onChildData }) {
  const [inputValue, setInputValue] = useState("");

  const handleSendToParent = () => {
    // Sending data back to parent through callback
    onChildData(inputValue || "Data from Child!");
  };

  return (
    <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p>
        <strong>Message from Parent:</strong> {messageFromParent}
      </p>

      <input
        type="text"
        placeholder="Type something to send to parent"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleSendToParent} style={{ padding: "8px 15px" }}>
        Send to Parent
      </button>

      {/* Passing data to grandchild */}
      <GrandchildComponent messageFromParent={messageFromParent} />
    </div>
  );
}

// Grandchild Component (demonstrates multi-level prop drilling)
function GrandchildComponent({ messageFromParent }) {
  return (
    <div
      style={{ border: "2px solid orange", padding: "15px", margin: "10px" }}
    >
      <h4>Grandchild Component</h4>
      <p>
        <strong>Message reached here through 2 levels:</strong>{" "}
        {messageFromParent}
      </p>
    </div>
  );
}

export default ParentComponent;
