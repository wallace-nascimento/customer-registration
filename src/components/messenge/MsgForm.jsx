import { useState, useEffect } from 'react';

import { Box } from "@mui/material";

export default function MsgForm({ msg }){

    const [visible, setVisible] = useState('')
    

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)
    },[msg])

    return(

        <> 
            {
            visible && (
            <Box sx={{width:'400px', m:'auto', pt:.5, pb:.5, mb:1, borderRadius:2, color:'red' }}>
                <p>{msg}</p>
            </Box>
            )}
        </>

       
        
    )
}