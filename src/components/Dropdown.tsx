import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { EB_Garamond } from "next/font/google";

interface Data {
  state: string;
  district: string;
  taluka: string;
}
interface DropdownProps {
  endpoint: string;
  filter?: string;
  setValues: React.Dispatch<React.SetStateAction<Data>>;
}
const Dropdown: React.FC<DropdownProps> = ({ endpoint, filter, setValues }) => {
  const { data, isLoading } = useQuery([endpoint, filter], async () => {
    return await axios.get(
      `https://script.google.com/macros/s/AKfycby__F7BmsXSbXon3oZidQC9C_ybpcXBJQA0g3eqS0Fzn_6eVNsgupyMZgRCxE8p1Z6l/exec?endpoint=${endpoint}&filter=${
        filter || ""
      }`
    );
  });
  return (
    <Select
      disabled={isLoading}
      onValueChange={(value: string) =>
        setValues((p) => ({ ...p, [endpoint]: value }))
      }
    >
      <SelectTrigger isLoading={isLoading}>
        <SelectValue placeholder={endpoint} />
      </SelectTrigger>
      <SelectContent>
        {data?.data &&
          data.data.map((item: string, index: number) => {
            return (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
