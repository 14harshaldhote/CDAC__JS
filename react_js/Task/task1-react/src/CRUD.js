import React, { useState } from 'react';
import Table from './Table';

function CRUD() {
  const initialFormData = { id: '', name: '', age: '', college: '', city: '' };

  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = () => {
    const updatedData = editIndex !== null
      ? tableData.map((item, index) => (index === editIndex ? formData : item))
      : [...tableData, { ...formData, id: Date.now() }];

    setTableData(updatedData);
    setFormData(initialFormData);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTableData((prevData) => [
      ...prevData.slice(0, index),
      ...prevData.slice(index + 1)
    ]);
  };

  return (
    <div className='container p-5  '>
        <div className='bg-warning p-5'>
      <form className="text-left ">
        <div className="form-group mt-1">
          <label htmlFor="inputName">Name</label>
          <input type="text" className="form-control" id="inputName" name="name" value={formData.name} onChange={handleInputChange} />
        </div>

        <div className="form-group mt-1">
          <label htmlFor="inputAge">Age</label>
          <input type="text" className="form-control" id="inputAge" name="age" value={formData.age} onChange={handleInputChange} />
        </div>

        <div className="form-group mt-1">
          <label htmlFor="inputCollege">College</label>
          <input type="text" className="form-control" id="inputCollege" name="college" value={formData.college} onChange={handleInputChange} />
        </div>

        <div className="form-group mt-1">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" name="city" value={formData.city} onChange={handleInputChange} />
        </div>

        <button type="button" className="btn btn-primary mt-1" onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      </div>

      <div className="table-container mt-3" >
        <Table data={tableData} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default CRUD;
