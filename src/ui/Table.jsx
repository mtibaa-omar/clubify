import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  // columns = `grid-cols-${columns}`;
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="p-2 border-2 rounded lg:px-1 border-neutral-500">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      className={`text-md sm:text-xl lg:text-2xl tableRow text-neutral-200 ${columns} border-b-2 border-neutral-500 py-2`}
    >
      {children}
    </header>
  );
}
function Body({ data, render }) {
  if (!data.length)
    return (
      <div className="p-4 text-xl font-bold text-white lg:text-4xl">
        No data to show at the moment
      </div>
    );

  return <section className="py-2">{data.map(render)}</section>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className={`${columns} first:pt-1 pt-2 text-sm sm:text-xl font-bold lg:text-xl tableRow text-white lg:font-normal`}
    >
      {children}
    </header>
  );
}
function Footer({ children }) {
  return (
    <header
      className={`first:pt-1 pt-2 text-sm sm:text-xl font-bold lg:text-xl tableRow text-white lg:font-normal`}
    >
      {children}
    </header>
  );
}
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
export default Table;
