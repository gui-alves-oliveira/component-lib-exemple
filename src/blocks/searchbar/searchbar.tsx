import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./searchbar.module.css";

import { Icon } from "../../components/icon";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

export function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Icon className={styles.leadingIcon} icon={Search} size="sm" />

        <Input
          fill
          variant="secondary"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.(value);
            }
          }}
        />
      </div>

      <Button variant="primary" onClick={() => onSearch?.(value)}>
        Search
      </Button>
    </div>
  );
}
