import {Redirect } from 'react-router-dom';
import React from 'react';

export const logout =()=>{
   
    if(localStorage.getItem('token').length>20){
     localStorage.removeItem('token') ;
     return <Redirect to="/login"/>   
    }


}

