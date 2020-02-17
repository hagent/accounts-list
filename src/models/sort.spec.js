import { createSorter, toggleSortFieldInSortList } from "./sort";
import { ASCEND_ORDER, DESCEND_ORDER } from "../constants";

describe("sorter", () => {
  it("should sort by one field ascend order", () => {
    const sort = createSorter([{ field: "name", order: ASCEND_ORDER }]);
    const sorted = sort([
      {
        name: "zzzz"
      },
      {
        name: "abcd"
      }
    ]);
    expect(sorted).toEqual([
      {
        name: "abcd"
      },
      {
        name: "zzzz"
      }
    ]);
  });

  it("should sort by one field descend order", () => {
    const sort = createSorter([{ field: "name", order: DESCEND_ORDER }]);
    const sorted = sort([
      {
        name: "bbb"
      },
      {
        name: "zz"
      }
    ]);
    expect(sorted).toEqual([
      {
        name: "zz"
      },
      {
        name: "bbb"
      }
    ]);
  });

  it("should sort by multiple fields ascend order", () => {
    const sort = createSorter([
      { field: "name", order: ASCEND_ORDER },
      { field: "surname", order: ASCEND_ORDER }
    ]);
    const sorted = sort([
      {
        name: "bob",
        surname: "dylan"
      },
      {
        name: "alex",
        surname: "versy"
      },
      {
        name: "alex",
        surname: "anix"
      }
    ]);
    expect(sorted).toEqual([
      {
        name: "alex",
        surname: "anix"
      },
      {
        name: "alex",
        surname: "versy"
      },
      {
        name: "bob",
        surname: "dylan"
      }
    ]);

    // todo test for multipe fields descend order
  });
});

describe("toggle field in fields sort list", () => {
  it("add new field to sort list", () => {
    const newList = toggleSortFieldInSortList(
      [{ field: "field1", order: ASCEND_ORDER }],
      "field2"
    );
    expect(newList).toEqual([
      { field: "field1", order: ASCEND_ORDER },
      { field: "field2", order: ASCEND_ORDER }
    ]);
  });

  it("toggle field sort order from ascend order to descend", () => {
    const newList = toggleSortFieldInSortList(
      [{ field: "field1", order: ASCEND_ORDER }],
      "field1"
    );
    expect(newList).toEqual([{ field: "field1", order: DESCEND_ORDER }]);
  });

  it("toggle field sort order from descend order to ascend", () => {
    const newList = toggleSortFieldInSortList(
      [{ field: "field1", order: DESCEND_ORDER }],
      "field1"
    );
    expect(newList).toEqual([{ field: "field1", order: ASCEND_ORDER }]);
  });
});
