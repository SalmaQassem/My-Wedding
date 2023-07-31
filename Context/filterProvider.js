import FilterContext from "./filterContext";
import { useState } from "react";

const FilterProvider = (props) => {
  const [filterState, setFilter] = useState({
    gov_id: "",
    city_id: "",
  });

  const setFilterStateHandler = ({ govId, cityId }) => {
    setFilter((currentState) => {
      return { ...currentState, gov_id: govId, city_id: cityId };
    });
  };

  const filterContext = {
    gov_id: filterState.gov_id,
    city_id: filterState.city_id,
    setFilterState: setFilterStateHandler,
  };
  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
