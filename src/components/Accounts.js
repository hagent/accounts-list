import React, { useState, useEffect } from "react";

import { getAccounts } from "../models/account";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import AccountsTable from "./AccountsTable";

export default function Accounts() {
  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAccounts()
      .then(setAccounts)
      .catch(setError);
  }, []);

  const isLoading = !accounts && !error;

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader size={150} />}
      {accounts && <AccountsTable accounts={accounts} />}
    </>
  );
}
