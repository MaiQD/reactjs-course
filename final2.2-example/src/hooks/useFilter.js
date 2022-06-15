import { head, isEmpty } from "lodash";
import { useState } from "react";

export default function useFilter() {
  const [filters, setFilters] = useState({
    sort: "D",
  });

  const toggleSort = () => {
    const nextSort = filters.sort === "D" ? "A" : "D";
    setFilters((pre) => ({
      ...pre,
      sort: nextSort,
    }));
  };

  return {
    filters,
    toggleSort,
  };
}
