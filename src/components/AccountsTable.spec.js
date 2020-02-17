import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import AccountsTable from "./AccountsTable";

describe("AccountsTable", () => {
  it("renders table", () => {
    const accounts = [
      {
        id: 1,
        name: "Spread bet",
        profitLoss: 0.23,
        accountType: "IGSB",
        currency: "$",
        accountTypeTitle: "Spread bet account"
      },
      {
        id: 2,
        name: "New Spread bet",
        profitLoss: -679,
        accountType: "IGSB",
        currency: "$",
        accountTypeTitle: "Spread bet account"
      }
    ];

    const wrapper = shallow(<AccountsTable accounts={accounts} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
