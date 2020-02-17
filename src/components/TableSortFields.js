import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { propOr } from "ramda";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonDiv = styled.div`
  cursor: pointer;
  background: rgb(200, 200, 200);
  border-radius: 6px;
  padding: 5px 10px;
  margin-right: 5px;
  &:hover {
    background: rgb(140, 140, 140);
  }
`;

const RemoveButtonDiv = styled(ButtonDiv)`
  background: #ff5722;
  padding: 5px 5px 5px 8px;
  margin-right: 15px;
  &:hover {
    background: rgb(255, 26, 26);
  }
`;

const Label = styled.div`
  padding: 5px;
`;

export default function TableSortFields({
  sortFields,
  columns,
  toggleField,
  removeField
}) {
  const getTitle = field => {
    const column = columns.find(c => c.field === field);
    return propOr("unknown column", "title", column);
  };
  return (
    <FlexRow>
      {sortFields.length > 0 && (
        <>
          <Label>Sorted by &nbsp;</Label>
          {sortFields.map(x => (
            <FlexRow key={x.field}>
              <ButtonDiv role="button" onClick={toggleField(x.field)}>
                {getTitle(x.field)} ({x.order})
              </ButtonDiv>
              <RemoveButtonDiv role="button" onClick={removeField(x.field)}>
                🗑
              </RemoveButtonDiv>
            </FlexRow>
          ))}
        </>
      )}
    </FlexRow>
  );
}

TableSortFields.propTypes = {
  sortFields: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      order: PropTypes.string.isRequired
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  removeField: PropTypes.func.isRequired,
  toggleField: PropTypes.func.isRequired
};
