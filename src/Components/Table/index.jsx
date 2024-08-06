// components/Table.js
import React from 'react';
import PropTypes from 'prop-types';
import { TableWrap } from './Table.styles';
import ImageTableData from './ImageTableData';
import TextImageTableData from './TextImageTableData';
import ButtonTable from './ButtonTable';

const Table = ({ columns, data, border, onImageClick }) => {
  const renderCell = (cellData, columnKey) => {
    if (columnKey === 'LastActive') {
      const color = cellData === 'Active' ? 'green' : 'red';
      return <span style={{ color }}>{cellData}</span>;
    }

    if (cellData && typeof cellData === 'object') {
      if (cellData.image && cellData.text) {
        return <TextImageTableData src={cellData.image} alt={cellData.text} text={cellData.text} />;
      } else if (cellData.image) {
        return <ImageTableData src={cellData.image} alt="" onClick={() => onImageClick && onImageClick(cellData.image)} />;
      } else if (cellData.buttons) {
        return <ButtonTable buttons={cellData.buttons} />;
      }
    }

    return cellData;
  };

  return (
    <TableWrap border={border}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.header}>
                  {renderCell(row[col.key], col.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  border: PropTypes.bool,
  onImageClick: PropTypes.func, 
};

export default Table;
