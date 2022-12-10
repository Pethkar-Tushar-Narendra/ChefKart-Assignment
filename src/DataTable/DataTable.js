import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import data from './data/ChefKartdata';
import { SlOptionsVertical } from 'react-icons/sl';
import './DataTable.css';
import IdPopup from './Popups/IdPopup/IdPopup';
import FirstNamePopup from './Popups/FirstNamePopup/FirstNamePopup';
import LastNamePopup from './Popups/LastNamePopup/LastNamePopup';
const DataTable = () => {
  const [click, setclick] = useState(null);
  const [idIsOpen, setIdIsOpen] = useState(false);
  const [firstNameIsOpen, setFirstNameIsOpen] = useState(false);
  const [lastNameIsOpen, setLastNameIsOpen] = useState(false);
  const [dataArray, setDataArray] = useState(data);
  const backColor = '#fff';

  const idToggle = () => {
    setIdIsOpen(!idIsOpen);
    setFirstNameIsOpen(false);
    setLastNameIsOpen(false);
  };
  const firstNameToggle = () => {
    setIdIsOpen(false);
    setFirstNameIsOpen(!firstNameIsOpen);
    setLastNameIsOpen(false);
  };
  const lastNameToggle = () => {
    setIdIsOpen(false);
    setFirstNameIsOpen(false);
    setLastNameIsOpen(!lastNameIsOpen);
  };
  return (
    <div className="dataTable-conatiner">
      <h1 className="title">Data Table</h1>
      <div className="table">
        <Table bordered>
          <thead>
            <tr>
              <th>
                <div className="header">
                  <h2>Id</h2>
                  <div className="icon" onClick={idToggle}>
                    <SlOptionsVertical />
                  </div>
                  <div
                    className="popup"
                    style={idIsOpen ? { display: 'flex' } : { display: 'none' }}
                  >
                    <IdPopup
                      setDataArray={setDataArray}
                      dataArray={dataArray}
                      idToggle={idToggle}
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="header">
                  <h2>First Name</h2>
                  <div className="icon" onClick={firstNameToggle}>
                    <SlOptionsVertical />
                  </div>
                  <div
                    className="popup"
                    style={
                      firstNameIsOpen
                        ? { display: 'flex' }
                        : { display: 'none' }
                    }
                  >
                    <FirstNamePopup
                      firstNameToggle={firstNameToggle}
                      setDataArray={setDataArray}
                      dataArray={dataArray}
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="header">
                  <h2>Last Name</h2>
                  <div className="icon" onClick={lastNameToggle}>
                    <SlOptionsVertical />
                  </div>
                  <div
                    className="popup"
                    style={
                      lastNameIsOpen ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <LastNamePopup
                      lastNameToggle={lastNameToggle}
                      setDataArray={setDataArray}
                      dataArray={dataArray}
                    />
                  </div>
                </div>
              </th>
              <th>
                <h2>Email</h2>
              </th>
              <th>
                <h2>Gender</h2>
              </th>
              <th>
                <h2>Ip Address</h2>
              </th>
              <th>
                <h2>Time</h2>
              </th>
              <th>
                <h2>Status</h2>
              </th>
              <th>
                <h2>Mobile</h2>
              </th>
              <th>
                <h2>Area</h2>
              </th>
              <th>
                <h2>Show</h2>
              </th>
              <th>
                <h2>Edit</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((data, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor:
                    click === i
                      ? backColor
                      : data.status === 'true'
                      ? 'green'
                      : 'red',
                }}
                onClick={() => setclick(i)}
              >
                <td>
                  <p>{data.id}</p>
                </td>
                <td>
                  <p>{data.first_name}</p>
                </td>
                <td>
                  <p>{data.last_name}</p>
                </td>
                <td>
                  <p>{data.email}</p>
                </td>
                <td>
                  <p>{data.gender}</p>
                </td>
                <td>
                  <p>{data.ip_address}</p>
                </td>
                <td>
                  <p>{data.time}</p>
                </td>
                <td>
                  <p>{data.status}</p>
                </td>
                <td>
                  <p>{data.mobile}</p>
                </td>
                <td>
                  <p>{data.area}</p>
                </td>
                <td>
                  <p>{data.show}</p>
                </td>
                <td>
                  <p>{data.edit}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
