import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { nextPage } from "../api";

function NextPage() {
  const [changePage, setChangePage] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    nextPage(number).then((change) => {
      setChangePage(change);
    });
  }, [number]);

  return (
    <>
      <button>{changePage}</button>
    </>
  );
}

export default NextPage;
