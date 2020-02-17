import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TableSortFields from "./TableSortFields";
import {
  createSorter,
  toggleSortFieldInSortList,
  getOrderSign
} from "../models/sort";

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.th`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 3px solid black;
  text-align: left;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: rgb(200, 200, 200);
  }
`;

const TableCell = styled.td`
  border-bottom: 1px solid black;
  padding: 5px 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 10px;
`;

const COLUMNS = [
  {
    field: "name",
    title: "Name"
  },
  {
    field: "profitLoss",
    title: "Profit & Loss"
  },
  {
    field: "accountTypeTitle",
    title: "Account Type"
  }
];

// abstract sortable table could be extracted from the component
// though I decided that without additional requirements it would be premature complication
export default function AccountsTable({ accounts }) {
  const [sortFields, setSortFields] = useState([]);

  const toggleSortField = fieldName => () =>
    setSortFields(toggleSortFieldInSortList(sortFields, fieldName));
  const removeSortField = fieldName => () =>
    setSortFields(sortFields.filter(x => x.field !== fieldName));
  const sort = createSorter(sortFields);
  const sortedAccounts = sort(accounts);
  return (
    <MainPanel>
      <TableSortFields
        sortFields={sortFields}
        toggleField={toggleSortField}
        removeField={removeSortField}
        columns={COLUMNS}
      />
      <Table>
        <thead>
          <tr>
            {COLUMNS.map(c => (
              <TableHeader key={c.field} onClick={toggleSortField(c.field)}>
                {c.title} {getOrderSign(sortFields, c.field)}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedAccounts.map(a => (
            <tr key={a.id}>
              <TableCell>{a.name}</TableCell>
              <TableCell>
                {a.currency} {a.profitLoss}
              </TableCell>
              <TableCell>{a.accountTypeTitle}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainPanel>
  );
}

AccountsTable.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      accountTypeTitle: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};
