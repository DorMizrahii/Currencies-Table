// src/MultiplicationTable.jsx
import React from 'react';

function MultiplicationTable({ size = 10 }) {
  // This function generates the table rows and cells
  const renderTable = () => {
    // Create an array for rows
    return Array.from({ length: size }, (_, rowIndex) => {
      // For each row, generate its cells
      const cells = Array.from({ length: size }, (_, cellIndex) => (
        <td key={`${rowIndex}-${cellIndex}`}>{(rowIndex + 1) * (cellIndex + 1)}</td>
      ));

      // Return a table row with these cells
      return <tr key={rowIndex}>{cells}</tr>;
    });
  };

  return (
    <table>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default MultiplicationTable;
