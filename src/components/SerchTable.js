import * as React from "react";
import { useTable } from "react-table";
import Table from '@mui/material/Table';
import Image from 'next/image'
import styles from'@/styles/MainCompnent.module.css'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function SerchTable() {
    const fakeData =[
        { 
        id: <Image src="/Screenshot 2023-04-17 110242.png" alt="Logo" width={17} height={14}/>,
        keyword: <p style={{textDecoration:"underline"}}>Hajj</p>,
        searches: "12334",
        country: "Pakistan",
        assets: "325",
        Recommendation: <button className={styles.Recommendation} style={{backgroundColor:"#389741" , borderRadius:4,padding:4,border:0,color:"#fff" ,fontSize:13,fontFamily:" Open Sans"}}>Recommendation</button>,
        },
        { 
          id: <Image src="/Screenshot 2023-04-17 110242.png" alt="Logo" width={17} height={14}/>,
          keyword: <p style={{textDecoration:"underline"}}>Makkah</p>,
          searches: "1900",
          country: "Pakistan",
          assets: "720",
          },
          { 
            id: <Image src="/Screenshot 2023-04-17 110242.png" alt="Logo" width={17} height={14}/>,
            keyword: <p style={{textDecoration:"underline"}}>Riyadh</p> ,
            searches: "1632",
            country: "Lebanon",
            assets: "611",
            },
            { 
              id: <Image src="/Screenshot 2023-04-17 110242.png" alt="Logo" width={17} height={14}/>,
              keyword: <p style={{textDecoration:"underline"}}>Alula</p> ,
              searches: "1121",
              country: "Turkey",
              assets: "525",
              },
              { 
                id: <Image src="/Screenshot 2023-04-17 110242.png" alt="Logo" width={17} height={14}/>,
                keyword: <p style={{textDecoration:"underline"}}>Redsea</p>,
                searches: "932",
                country: "UAE",
                assets: "320",
                },
      
      ]
    
      const data = React.useMemo(() => fakeData, []);
      const columns = React.useMemo(
        () => [
          {
            Header: "",
            accessor: "id",
          },
          {
            Header: "Keyword",
            accessor: "keyword",
          },
          {
            Header: "#Searches",
            accessor: "searches",
          },
          {
            Header: "Country",
            accessor: "country",
          },
          {
            Header: "#Assets",
            accessor: "assets",
          },
          {
            Header: "",
            accessor:"Recommendation",
          },
          
        ],
        []
      );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });


  return (
    <>
    <Table sx={{ minWidth: 650  , bgcolor: "#fff"  ,  border: 1 ,borderColor: '#fff' ,borderRadius: 3  }} aria-label="simple table" {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} sx={{ bgcolor: "#F7F7F7" }}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()} sx={{ color: "#242D3C" ,fontWeight: 'bold' }} >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {row.cells.map((cell) => (
                    <TableCell sx={{ color: "#242D3C" ,fontFamily: "Open Sans" , fontWeight:"bold",}} component="th" scope="row"  {...cell.getCellProps()}> {cell.render("Cell")} </TableCell >
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    
    </>
  )
}
