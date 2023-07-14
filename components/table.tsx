import React from 'react';

type TableProps = {
  state: State;
};

type State = {
  name: string;
  location: string;
  mobile: string;
  marks: string;
};

const Table = ({ state }: TableProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: '768px',
      }}
    >
      <table
        style={{
          maxWidth: '768px',
        }}
      >
        <tr>
          <td>Name</td>
          <td>{state?.name}</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>{state?.location}</td>
        </tr>
        <tr>
          <td>Mobile</td>
          <td>{state?.mobile}</td>
        </tr>
        <tr>
          <td>Marks</td>
          <td>{state?.marks}</td>
        </tr>
      </table>
    </div>
  );
};
export default Table;
