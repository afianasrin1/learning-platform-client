import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2> Here is our Terms and condition</h2>
      <p>
        Go back to: <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndCondition;
