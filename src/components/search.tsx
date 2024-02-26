"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  ErrorMessage,
  Input,
  InputContainer,
  MainContainer,
  SearchContainer,
} from "../styles/search.styles";
import Button from "./button";

const BitcoinHashSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();

  const handleOnClick = () => {
    console.log("valid: ", valid);

    if (valid && searchValue.length !== 64) {
      console.log("searchValue.length: ", searchValue.length);
      setValid(false);
      return;
    }

    const currentParams = new URLSearchParams();

    if (!searchValue) {
      router.push(pathname);
    } else {
      currentParams.set("search", searchValue);
      router.push(`${pathname}?${currentParams.toString()}`);
    }
  };

  return (
    <MainContainer>
      <SearchContainer>
        <InputContainer $isValid={valid}>
          <FaSearch />
          <Input
            id="hash-search-input"
            placeholder="Search for block by 'Hash'"
            $isValid={valid}
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (!valid) {
                setValid(true); // This allows the user to try again on valid hash entry
              }
            }}
          />
        </InputContainer>
        <Button onClick={handleOnClick} text="Search" />
      </SearchContainer>
      <ErrorMessage>
        {!valid ? "Hash should be 64 characters long" : " "}
      </ErrorMessage>
    </MainContainer>
  );
};

export default BitcoinHashSearch;
