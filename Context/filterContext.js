import { createContext } from "react";

const FilterContext = createContext({
  gov_id: "",
  city_id: "",
  setFilterState: (state) => {},
});

export default FilterContext;
