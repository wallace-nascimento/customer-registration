import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Modal from "../../components/modal/Modal";
import EditAnimation from "../../animation/edit/Edit"; 
import './edit.css';

function Edit(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const [isOpen, setIsOpen] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate();

    //request that puts data into forms
    useEffect(()=>{
        axios.get(`https://api-crud.cyclic.app/client/${id}`)
        .then(data=>{
            setName(data.data.name)
            setEmail(data.data.email)
            setContact(data.data.contact)
        })
        .catch(err=>console.log(err))
        
    },[id])

    //Request patch
    const update = (e) =>{
        e.preventDefault()

        const clientEdit ={
            name: name,
            email: email,
            contact: contact
        }
        axios.patch(`https://api-crud.cyclic.app/client/update/${id}`, clientEdit)
            //.then((resp) => resp.json())
            .then(data=>{ data})
            .catch(err=>console.log(err))
            
            setIsOpen(true)
    }

    const reload = () =>{
        navigate('/customer-registration/read')
    }

    //Modal "edit" animation
    const edit = () =>{
        return(
            <div>
                <Edit/>
            </div>
        )
    }

    return(
        <div className='container'>

                          

            <h1>Edit information </h1>

            <form onSubmit={update}>

                <Modal
                    isOpen={isOpen}
                    setIsOpen={reload}
                    animation={EditAnimation}
                    text="Successfully Edit"
                />

                <div>
                    <div className="label"><label htmlFor="name">Name</label></div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name ..."
                        onChange={(e)=>setName(e.target.value)}
                    
                    />
                </div>

                <div>
                    <div className="label"><label htmlFor='email'>Email</label></div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <div className="label"><label htmlFor='contact'>Contact</label></div>
                    <input
                        type="number"
                        name="Contact"
                        value={contact}
                        placeholder="Contact"
                        onChange={(e)=>setContact(e.target.value)}
                    />
                </div>
                <div className='box_button'>
                    <button className='submit'>Update</button>
                </div>
            </form>
            
        </div>
    )
}

export default Edit;