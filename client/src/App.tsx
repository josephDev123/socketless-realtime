import { useDeferredValue, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<any[]>([]);
  console.log(conversation);
  // const deferred = useDeferredValue(message);

  const handlePostMessage = async () => {
    const payload = {
      event: "message",
      message,
    };

    const request = await fetch("http://localhost:9000/api/post", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      alert("message not successful");
    }
  };

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:9000/api/stream");

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("📥 Received:", data);
        console.log("📥 event:", event);
        setConversation((prev) => [...prev, JSON.parse(data)]);
      } catch (err) {
        alert("❌ Error parsing SSE data");
        console.error("Error parsing SSE data", err);
      }
    };

    eventSource.onerror = (err) => {
      alert("❌ SSE connection error:");
      console.error("❌ SSE connection error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
      console.log("🧹 SSE connection closed");
    };
  }, []);

  return (
    <section className="grid grid-cols-2 w-full gap-4">
      <div className="flex flex-col space-y-1 w-full">
        <textarea
          name=""
          id=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          rows={5}
          placeholder="Chat us"
          className="placeholder:text-center border rounded-md p-2"
        ></textarea>
        <button
          onClick={handlePostMessage}
          type="button"
          className="bg-green-300 hover:bg-green-200 p-1 rounded-md mt-2"
        >
          Send
        </button>
      </div>
      <div className="flex flex-col w-full ">
        <h2 className="font-semibold">Stream messages</h2>
        <div className="space-y-1">
          {conversation.map((msg, i) => (
            <div key={i} className="bg-gray-200 p-2 rounded">
              {msg.message}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
