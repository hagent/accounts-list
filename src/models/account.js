import { fetchAccounts, fetchAccountTypes } from "../api/api";

const UNKNOWN_TYPE = "unknown account type";

function appendAccountTypeTitle(accounts, accountTypes) {
  const getAccountTypeTitle = accountTypeId => {
    const accountType = accountTypes.find(x => x.id === accountTypeId);
    return accountType ? accountType.title : UNKNOWN_TYPE;
  };
  return accounts.map(a => ({
    ...a,
    accountTypeTitle: getAccountTypeTitle(a.accountType)
  }));
}

export async function getAccounts() {
  const [accounts, accountTypes] = await Promise.all([
    fetchAccounts(),
    fetchAccountTypes()
  ]);
  return appendAccountTypeTitle(accounts, accountTypes);
}
