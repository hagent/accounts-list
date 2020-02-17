const SERVICE_URL = "https://recruitmentdb-508d.restdb.io/rest";

// endpoints
// https://recruitmentdb-508d.restdb.io/rest/accounts
// https://recruitmentdb-508d.restdb.io/rest/accounttypes

const getRequest = path => async () => {
  const url = `${SERVICE_URL}/${path}`;
  const headers = new Headers({
    "x-apikey": "5d9f48133cbe87164d4bb12c" // should be in env vars
  });
  const settings = { headers };
  return await (await fetch(url, settings)).json();
};

const fetchAccounts = getRequest("accounts");
const fetchAccountTypes = getRequest("accounttypes");

export { fetchAccounts, fetchAccountTypes };
