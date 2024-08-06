import React from 'react';
import PropTypes from 'prop-types';
import { TableWrap } from './tableButton.styles';
import ImageTableData from '../../Table/ImageTableData';
import TextImageTableData from '../../Table/TextImageTableData';
import Button from './Button';
import { serverDomain } from '../../../Constants/serverDomain';

const ButtonTable = ({ columns, data, border, onImageClick, onButtonClick }) => {
  const renderCell = (cellData, columnKey) => {
    if (columnKey === 'avatar') {
      return <ImageTableData src={`${serverDomain}${cellData}`} alt="" onClick={() => onImageClick && onImageClick(cellData)} />;
    }

    if (columnKey === 'status') {
      const color = cellData.includes('ago') ? 'red' : 'green';
      return <span style={{ color }}>{cellData}</span>;
    }

    if (cellData && typeof cellData === 'object') {
      if (Array.isArray(cellData.buttons)) {
        return (
          <div>
            {cellData.buttons.map((button, index) => (
              <Button
                key={index}
                color={button.color}
                onClick={() => onButtonClick && onButtonClick(button.id)}
              >
                {button.text}
              </Button>
            ))}
          </div>
        );
      } else if (cellData.text && cellData.color) {
        return (
          <Button color={cellData.color} onClick={() => onButtonClick && onButtonClick(cellData.id)}>
            {cellData.text}
          </Button>
        );
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

ButtonTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  border: PropTypes.bool,
  onImageClick: PropTypes.func,
  onButtonClick: PropTypes.func, // New prop for button click handler
};

export default ButtonTable;
