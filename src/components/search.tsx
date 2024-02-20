"use client";

import {
  Input,
  InputContainer,
  SearchContainer,
} from "../styles/search.styles";
import Button from "./button";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  // Define props here
}

const Search: React.FC<SearchProps> = (props) => {
  return (
    <SearchContainer>
      <InputContainer>
        <FaSearch />
        <Input
          id="hash-search-input"
          placeholder="Search for block by 'Hash'"
        />
      </InputContainer>
      <Button onClick={() => console.log("Clicked Search")} text="Search" />
    </SearchContainer>
  );
};

export default Search;
