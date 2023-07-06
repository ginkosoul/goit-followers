import Select from "react-select";
import { customStyles, options } from "@/defaults";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "@/redux/users/selectors";
import { resetPage, updateFilter } from "@/redux/users/slice";
import { Header } from "./Filter.styled";

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const defaultOption = options.find((e) => e.value === filter);
  const handleChange = ({ value }) => {
    dispatch(updateFilter(value));
    dispatch(resetPage());
  };
  return (
    <Header>
      <Select
        options={options}
        styles={customStyles}
        defaultValue={defaultOption}
        onChange={handleChange}
      />
    </Header>
  );
}
