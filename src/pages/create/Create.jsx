import {useState, useEffect} from 'react'
import axios from 'axios';
import MsgForm from '../../components/messenge/MsgForm';
import Button from '../../components/button/Button';

import styles from './Create.module.css';
import Modal from '../../components/modal/Modal';

import Check from '../../animation/check/Check';

function Create(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [contact, setContact] = useState('');
    const [msg, setMsg] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    //function that will validate the forums and make the POST request
    const submit= (e)=>{
        e.preventDefault()

        if(name === ''){
            setMsg('Preencha o Nome!')
            return false
        }

        if(email === ''){
            setMsg('Preencha o Email!')
            return false
        }

        if(contact === ''){
            setMsg('Preencha o Contact!')
            return false
        }

        const client = {
            name: name,
            email: email,
            contact: contact
        }
    
        axios.post('https://api-crud.cyclic.app/client/add', client)
            .then(res=> console.log(res.data));
        
        setName('');
        setEmail('');
        setContact('');
        setIsOpen(true)
    }

    //Modal "check" animation
    const check = () =>{
        return(
            <div>
                <Check/>
            </div>
        )
    }
    
    return(
        <div className={styles.container}>
            
            <form onSubmit={submit} className={styles.form} >

                <h1 >Add Client</h1>

                <div><input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Complete Name"/></div>
                <div><input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/></div>
                <div><input type='number' name='contact' value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="Contact"/></div>
                <MsgForm
                    msg={msg}
                />
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    animation={check}
                    text="Successfully Added"
                />
                <div className={styles.button}>
                    <Button
                        text="Submit"
                    />
                </div>

            </form>
            
        </div>
    )
}

export default Create;