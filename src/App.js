import React from 'react';
import './App.css';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { Table, Column, Cell } from 'fixed-data-table-2';
import getData from './getData';

function App() {
  const data = getData();
  return (
    <div>
      <header>
        Meteorite Explorer
      </header>
      <div className="search-box">
        <input type="text" id="search-input"></input>
        <input type="button" id="search-button" value="SEARCH"></input>
      </div>
      <div>
      <Table
        rowHeight={50}
        rowsCount={data.length}
        headerHeight={50}
        width={1000}
        height={500}
      >
        <Column
          columnKey="firstName"
          header={<Cell>First Name</Cell>}
          width={130}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{data[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="lastName"
          header={<Cell>Last Name</Cell>}
          width={130}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{data[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="email"
          header={<Cell>Email</Cell>}
          width={320}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{data[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="city"
          header={<Cell>City</Cell>}
          width={180}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{data[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="salary"
          header={<Cell>Salary</Cell>}
          width={180}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{data[rowIndex][columnKey]}</Cell>;
          }}
        />
      </Table>
      </div>
    </div>
  );
}

export default App;
