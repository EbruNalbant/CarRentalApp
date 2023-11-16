import Select from "react-select";
import { OptionType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    const key = title === "Fuel Type" ? "fuel" : "year";
    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      params.delete(key);
    }

    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        className="text-black min-w-[100px]"
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
