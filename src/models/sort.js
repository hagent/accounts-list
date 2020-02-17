import { ASCEND_ORDER, DESCEND_ORDER } from "../constants";
import { ascend, prop, descend, sortWith } from "ramda";

export function createSorter(sortFields) {
  const makeFieldSorter = x =>
    x.order === ASCEND_ORDER ? ascend(prop(x.field)) : descend(prop(x.field));
  return sortWith(sortFields.map(makeFieldSorter));
}

function getNextSortOrder(order) {
  switch (order) {
    case ASCEND_ORDER:
      return DESCEND_ORDER;
    case DESCEND_ORDER:
      return ASCEND_ORDER;
    default:
      return ASCEND_ORDER;
  }
}

// toggle sort order for a field, or add field in the sort fields list if field wasn't there
export function toggleSortFieldInSortList(sortFields, fieldName) {
  const fieldAlreadyInList = sortFields.some(x => x.field === fieldName);
  if (!fieldAlreadyInList) {
    return [...sortFields, { field: fieldName, order: ASCEND_ORDER }];
  }
  return sortFields.map(x =>
    x.field === fieldName ? { ...x, order: getNextSortOrder(x.order) } : x
  );
}

export function getOrderSign(sortFields, fieldName) {
  const sortField = sortFields.find(f => f.field === fieldName);
  if (!sortField) {
    return "";
  }
  if (sortField.order === ASCEND_ORDER) {
    return "↓";
  }
  return "↑";
}
