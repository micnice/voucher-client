import React,{Component } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export default class SearchBar extends Component{

    render(){
        return (
            <div>
              
              <InputGroup >
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>Add New Beneficiary</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
             
            </div>
          );
    }



}