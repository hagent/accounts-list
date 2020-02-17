import * as api from "../api/api";

import { getAccounts } from "./account";

jest.mock("../api/api");

describe("getAccounts", () => {
  const accountTypesMock = [
    { id: "IGSB", title: "Spread bet account" },
    { id: "IGCFD", title: "CFD account" }
  ];
  api.fetchAccountTypes.mockReturnValue(accountTypesMock);

  beforeEach(() => {
    api.fetchAccounts.mockReset();
  });

  it("should return accounts with account type titles", async () => {
    const accountsMock = [
      { name: "person1", accountType: "IGSB" },
      { name: "person2", accountType: "IGCFD" }
    ];
    api.fetchAccounts.mockReturnValue(accountsMock);

    const accounts = await getAccounts();
    expect(accounts).toEqual([
      { name: "person1", accountType: "IGSB", accountTypeTitle: "Spread bet account"},
      { name: "person2", accountType: "IGCFD", accountTypeTitle: "CFD account"}
    ]);
  });

  it("should append unknown account title if id is not in the account types list", async () => {
    const accountsMock = [
      { name: "personUnknownType", accountType: "UnknownType" },
      { name: "person2", accountType: "IGCFD" }
    ];
    api.fetchAccounts.mockReturnValue(accountsMock);

    const accounts = await getAccounts();
    expect(accounts).toEqual([
      { name: "personUnknownType", accountType: "UnknownType", accountTypeTitle: "unknown account type"},
      { name: "person2", accountType: "IGCFD", accountTypeTitle: "CFD account"}
    ]);
  });
});
