import React from 'react';
import './Table.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Table({ data, onEdit, onDelete }) {
  return (
    <div  className="custom-table-container">
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">College</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.college}</td>
              <td>{item.city}</td>
              <td>
                <button type="button" className="btn btn-primary me-2" onClick={() => onEdit(index)}>
                  Edit
                </button>
                <button type="button" className="btn btn-danger" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
