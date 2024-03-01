"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import {
  Input,
  InputContainer,
  SearchContainer,
} from "../styles/search.styles";
import Button from "./button";
import { toast } from "react-toastify";

const BitcoinHashSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParam = params.get("search");

  useEffect(() => {
    if (searchParam) {
      if (searchParam.length !== 64) {
        toast.warn(`I can't let you just break things, mkay?`, {
          toastId: "searchParam-length-warn",
        });
        return;
      }
      setSearchValue(searchParam);
    }
  }, [searchParam]);

  const handleOnClick = () => {
    if (searchValue.length !== 64) {
      setValid(false);
      toast.warn(
        `Hey, bud. I need 64 characters for things to work, but you only got ${searchValue.length} so far. See the problem?`,
        { toastId: "search-length-warn" }
      );
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
    <SearchContainer>
      <InputContainer $isValid={valid}>
        <FaSearch />
        <Input
          id="hash-search-input"
          placeholder="Search for block by 'Hash'"
          $isValid={valid}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (!valid) {
              setValid(true); // This allows the user to try again on valid hash entry
            }
          }}
        />
        {searchValue && (
          <FiX
            style={{ cursor: "pointer" }}
            onClick={() => setSearchValue("")}
          />
        )}
      </InputContainer>
      <Button onClick={handleOnClick} text="Search" />
    </SearchContainer>
  );
};

export default BitcoinHashSearch;
