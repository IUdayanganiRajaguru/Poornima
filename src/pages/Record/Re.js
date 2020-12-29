import React ,{useState,useCallback,useEffect}from 'react'
import {Table, TableHead,Paper,TextField,makeStyles, TableBody, TableRow, TableCell,Toolbar, InputAdornment,Button} from '@material-ui/core'
import axios from 'axios';
export default function Re() {

    const [records,setRecords] = useState();
    const [records1,setRecords1] = useState();
    const [records2,setRecords2] = useState();
    const [records3,setRecords3] = useState();

    const loadMedicine = useCallback(() => {
        axios
        .get("http://localhost:8080/stock/qun/1")
        .then(result => setRecords(result.data));
      }, []);

      const loadMedicine1 = useCallback(() => {
        axios
        .get("http://localhost:8080/stock/qun/2")
        .then(result => setRecords1(result.data));
      }, []);

      const loadMedicine2 = useCallback(() => {
        axios
        .get("http://localhost:8080/stock/qun/3")
        .then(result => setRecords2(result.data));
      }, []);


      const loadMedicine3 = useCallback(() => {
        axios
        .get("http://localhost:8080/stock/qun/6")
        .then(result => setRecords3(result.data));
      }, []);




      useEffect(() => {
        loadMedicine();
        loadMedicine1();
        loadMedicine2();
        loadMedicine3();
      }, [loadMedicine]);

    return (
        <div>
          <h3>Drug Order List</h3>

            <Table >
            <TableHead >
                <TableRow>
                <TableCell>Medicines</TableCell>
                <TableCell>required quantity</TableCell>
              
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Medicine</TableCell>
                <TableCell>{records} </TableCell>
                </TableRow>

                <TableRow>
                <TableCell>Medicine1</TableCell>
                <TableCell>{records1} </TableCell>
                </TableRow>

                <TableRow>
                <TableCell>Medicine2</TableCell>
                <TableCell>{records2} </TableCell>
                </TableRow>


                <TableRow>
                <TableCell>Medicine3</TableCell>
                <TableCell>{records3} </TableCell>
                </TableRow>


                
               
                
              
            </TableBody>
            </Table>
            

       </div>
    )
}






