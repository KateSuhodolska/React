import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, onStatusChange] = useState("online");

  useEffect(() => {
    const onlineEvent = () => {
      onStatusChange("online");
    };

    const offlineEvent = () => {
      onStatusChange("offline");
    };
    window.addEventListener("online", onlineEvent);
    window.addEventListener("offline", offlineEvent);
    return () => {
      window.removeEventListener("online", onlineEvent);
      window.removeEventListener("offline", offlineEvent);
    };
  }, [status]);

  return status === "online" ? (
    <div className="status">{status}</div>
  ) : (
    <div className="status status_offline">{status}</div>
  );
};

export default ConnectionStatus;
