import { useSearchParams } from "react-router-dom";
import { Pagination as Pagination2 } from "@mui/material";
import { useState } from "react";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const [page, setPage] = useState(currentPage);

  const handleClick = (event, value) => {
    setPage(value);
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-end w-full">
      <Pagination2
        count={pageCount}
        size="large"
        page={page}
        onChange={handleClick}
        classes={{
          root: "flex space-x-2",
          ul: "flex items-center",
          li: "inline-flex items-center",
        }}
        sx={{
          "& .MuiPaginationItem-root": {
            fontWeight: "bold",
            fontSize: "12px",
            color: "white",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          "& .Mui-selected": {
            color: "white",
            backgroundColor: "#3b82f6 !important",
          },
        }}
      />
    </div>
  );
}

export default Pagination;
