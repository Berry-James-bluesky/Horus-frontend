import React, { useState } from "react";
import { useBetween } from "use-between";

const useFilterState = () => {
  const [filterParams, setFilter]: any = useState([]);
  const setFilterParams = (value: any) => {
    setFilter(value);
  };
  return { filterParams, setFilterParams };
};

export const useSharedFilterState = () => useBetween(useFilterState);
