import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="px-1 border-2 rounded border-neutral-500">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      className={`text-2xl tableRow text-neutral-200 grid-cols-3 border-b-2 border-neutral-500 py-2`}
    >
      {children}
    </header>
  );
}
function Body({ data, render }) {
  if (!data.length) return <div>No data to show at the moment</div>;

  return <section className="py-2">{data.map(render)}</section>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className={`grid-cols-${columns} text-xl tableRow text-white font-normal`}
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
