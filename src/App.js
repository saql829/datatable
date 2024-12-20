import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const customStyles = {
headRow: {
  style: {
    backgroundColor: 'blue',
    color: 'white'
  }
},
headcell:{
  style: {
    fontSize: "16px",
    fontweight: '550',
    textTransform:'uppercase',

  },
},
cells:{
  style:{
    fontSize:'15px'
  },
},
};

function App() {
  const column = [
    {
      name: "ID",
      selector : row => row.id
    },
    {
      name: "Name",
      selector : row => row.name
    },
    {
      name: "Email",
      selector : row => row.email
    },
    {
      name: "City",
      //selector : row => row.address.city
    }
  ];

  useEffect(() => {
    const fetData = async () => {
      axios
        .get('https://aptech.heritagejewels.com.pk/microservices/giftcard.php')
        .then(res =>setRecords(res.data) )
        .catch(err => console.log(err));
    };
    fetData();
  }, [])
  const [records, setRecords] = useState([])

  return (
    <div style={{padding:"50px 10px", backgroundColor:'gray'}}>
      <DataTable columns={column}
      data={records}>

      </DataTable>
    </div>
  );
}

export default App;
