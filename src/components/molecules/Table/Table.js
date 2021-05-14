import { Td } from "./Td.js";
import { Th } from "./Th.js";
import "./core_table.scss";
export const Table = ({ items, css, children }) => {
  let thead;
  let tbody;
  if (!!items) {
    const itemsArray = Object.values(items);
    thead = itemsArray.map((row, i) => {
      let tr;
      let td;
      if (i === 0) {
        td = row.map((item, j) => {
          // console.log(firstRow);
          return <Th key={j}>{item}</Th>;
        });
        return (
          <thead>
            <tr>{td}</tr>
          </thead>
        );
      } else {
        return;
      }
    });

    tbody = itemsArray.map((row, i) => {
      let tr;
      let td;
      if (i !== 0) {
        td = row.map((item, j) => {
          // console.log(firstRow);
          return (
            <Td dataTH={itemsArray[0][j]} key={j}>
              {item}
            </Td>
          );
        });
        return <tr>{td}</tr>;
      } else {
        return;
      }
    });
  }

  return (
    <div className={css}>
      <table className="table">
        <caption className="table__description">
          Descripción de la tabla
        </caption>
        {thead && thead}
        {tbody && <tbody>{tbody}</tbody>}

        {children}
      </table>
    </div>
  );
};
