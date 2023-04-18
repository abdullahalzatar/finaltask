import * as React from "react";
import { useTable } from "react-table";
import Table from '@mui/material/Table';
import Image from 'next/image'
import styles from'@/styles/MainCompnent.module.css'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function DownloadTable() {
    const fakeData =[
        { 
            assetName: <p style={{textDecoration:"underline"}}>Riyadh.jpg</p>,
            views: "2334",
            saved: "1234",
            downloads: "893",
        },
        { 
            assetName: <p style={{textDecoration:"underline"}}>City_view.png</p>,
            views: "1900",
            saved: "1500",
            downloads: "720",
          },
          { 
            assetName: <p style={{textDecoration:"underline"}}>Urban_scene.jpg</p>,
            views: "1632",
            saved: "900",
            downloads: "611",
            },
            { 
                assetName: <p style={{textDecoration:"underline"}}>Cityscape_jeddah.png</p>,
                views: "1121",
                saved: "234",
                downloads: "525",
              },
              { 
                assetName: <p style={{textDecoration:"underline"}}>Red_sea.jpg</p>,
                views: "932",
                saved: "421",
                downloads: "320",
                },
      
      ]
    
      const data = React.useMemo(() => fakeData, []);
      const columns = React.useMemo(
        () => [
          
          {
            Header: "Asset Name",
            accessor: "assetName",
          },
          {
            Header: "Views",
            accessor: "views",
          },
          {
            Header: "Saved",
            accessor: "saved",
          },
          {
            Header: "Downloads",
            accessor: "downloads",
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
