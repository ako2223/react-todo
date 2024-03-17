import React, { useCallback, useEffect, useState } from "react";

function Header() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName("Alex");
  }, []);

  return <header>Header {name}</header>;
}

export default Header;
