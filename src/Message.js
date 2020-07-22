import React from "react";

const Message = ({ isFormValid }) => {
  return (
    <div className="mt-2">
      <h3 className="text-center">
        {isFormValid ? "Form is Complete!" : "Form is Incomplete!"}
      </h3>
    </div>
  );
};

export default Message;
