import React from "react";

import { useQuery } from "../../Hooks";

const ConfirmEmail: React.FC = () => {
  const query = useQuery();
  return (
    <>
      <div>Confirm Email</div>
      <div>{query.get("token")}</div>
      <div>{query.get("email")}</div>
    </>
  );
};

export default ConfirmEmail;
