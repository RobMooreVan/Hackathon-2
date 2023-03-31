import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Chat from "../../components/Chat/Chat";

function RetentionPage({ chatState, handleChatContent }) {
  useEffect(() => {
    handleChatContent("retention");
  }, []);
  return (
    <>
      <div className="page-layout">
        {" "}
        {/* do not touch pls */}
        <div>RetentionPage</div>
        <Chat chatState={chatState} />
        <Link to="/main">Link to main page</Link>
      </div>
    </>
  );
}

export default RetentionPage;
