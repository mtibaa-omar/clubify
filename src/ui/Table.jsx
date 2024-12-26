import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="p-2 border-2 rounded sm:px-1 border-neutral-500">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      className={`text-md sm:text-2xl tableRow text-neutral-200 grid-cols-3 border-b-2 border-neutral-500 py-2`}
    >
      {children}
    </header>
  );
}
function Body({ data, render }) {
  if (!data.length)
    return (
      <div className="p-4 text-xl font-bold text-white sm:text-4xl">
        No data to show at the moment
      </div>
    );

  return <section className="py-2">{data.map(render)}</section>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className={`grid-cols-${columns} first:pt-1 pt-2 text-sm font-bold sm:text-xl tableRow text-white sm:font-normal`}
    >
      {children}
    </header>
  );
}

function Footer({ children }) {}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
export default Table;
