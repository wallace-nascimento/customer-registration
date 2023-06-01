import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import Button from '../../components/mui/ButtonAdd';

import Modal from '../../components/modal/Modal';
import Close from '../../animation/close/Close';

import Pagination from '../../components/pagination/pagination';



function Read(){
    const { id } = useParams();
    const[lists, setLists] = useState([]);
    const[removeClients, setRemoveClients] = useState([]);

    const[total, setTotal] =useState(0);
    const[limit, setLimit] = useState(5);
    const[pages, setPages] = useState([]);
    const[currentPage, setCurrentPages] = useState(1)

    const[count, setCount] = useState([]);

    const[isOpen, setIsOpen] = useState(false)

    //request returns the exact amount of items from the backend
    useEffect(()=>{
        axios.get(`https://api-crud.cyclic.app/client/count`)
            .then(response => {
                const data = response.data
                setCount(data)
                //console.log(count)
            })
    },[]) 

    useEffect(()=>{
        //Get from data backend
        axios.get(`https://api-crud.cyclic.app/client?page=${currentPage}&limit=${limit}`)
        .then(response => {
            const data = response.data.results
            setLists(data)
            setTotal(response.data.results["length"]);
            //calculation to define the number of pages
            const totalPages = Math.ceil(count / limit)
           
            //new array for pagination table
            const arrayPages = [];
            for(let i = 1; i <= totalPages; i++){
                arrayPages.push(i);
            }
            setPages(arrayPages);
        })
    },[currentPage, limit, total])

    //function to delete table items
    const deleteClient = (id) =>{
        axios.delete(`https://api-crud.cyclic.app/client/${id}`)
        setRemoveClients(removeClients.filter((removeClient)=> removeClient._id !== removeClient.id));
        setIsOpen(true)   
    }

    //reload deleted page
    const reload = () =>{
        window.location.reload()
    }
    
    //"close" animation for modal
    const close = () =>{
        return(
            <div>
                <Close/>
            </div>
        )  
    }
   
      return(
        <div> 
            
            <Button />
            
            <TableContainer component={Paper} variant="outlined" sx={{m: 2, width:'auto'}} >

                <Modal 
                    isOpen={isOpen}
                    setIsOpen={reload}
                    animation={close}
                    text= "Deleted Customer"
                />
                <Table>
                    <TableHead>
                        <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Action</TableCell>
            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                lists?.map(list =>
                                    <TableRow key={list._id}>
                                        <TableCell>{list.name}</TableCell>
                                        <TableCell>{list.email}</TableCell>
                                        <TableCell>{list.contact}</TableCell>
                                        <TableCell>
                                            <Link to={`/customer-registration/edit/${list._id}`}>
                                                <EditRoadOutlinedIcon/>
                                            </Link>
                                                <DeleteForeverOutlinedIcon
                                                    style={{cursor:'pointer'}}
                                                    onClick={()=>deleteClient(list._id)}
                                                />
            
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                    </TableBody>
                </Table>
                
            </TableContainer>
            
            <Pagination 
                pages={pages}
                setPages={setPages}
                setCurrentPages={setCurrentPages}
                currentPage={currentPage}
                count={count}
            />
        </div>
    )
}

export default Read;