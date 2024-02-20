"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Input,
  InputContainer,
  SearchContainer,
} from "../styles/search.styles";
import Button from "./button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

interface SearchProps {
  // Define props here
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  const handleOnClick = () => {
    const currentParams = new URLSearchParams();

    if (!searchValue) {
      router.push(pathname);
    } else {
      currentParams.set("search", searchValue);
      router.push(pathname + "?" + currentParams.toString());
    }
  };

  return (
    <SearchContainer>
      <InputContainer>
        <FaSearch />
        <Input
          id="hash-search-input"
          placeholder="Search for block by 'Hash'"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </InputContainer>
      <Button onClick={handleOnClick} text="Search" />
    </SearchContainer>
  );
};

export default Search;
