import React, { Component, Fragment } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { print } from 'graphql';
import { CREATE_VOUCHER_SET } from './../mutation';
import { VOUCHER_TYPE_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { MDBInput, MDBBtn, MDBContainer,  MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';
import { Redirect } from 'react-router-dom';



export default class VoucherSetPageAdd extends Component {

    state = {
        name: "",
        description: "",
        voucherTypeSet:[],
        voucherTypeList: [],
        isSaved: false,
        // isChecked:false,
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(VOUCHER_TYPE_LIST)
        }).then(res => {
            this.setState({ voucherTypeList: res.data.data.voucherTypeList })
        })
    }

    handleVoucherSetSubmit = (e) => {
        e.preventDefault();
         axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_VOUCHER_SET), variables: {
                voucherSetInput:
                {
                    name: e.target.name.value,
                    description: e.target.description.value,
                    voucherTypeSet: this.state.voucherTypeSet,
                },


            }
        }, {
                headers: {
                    'content-Type': 'json/application'
                }
            }
        ).then(() => this.setState(() => ({
            isSaved: true
        })))
    }

    handleVoucherSetChange = (e) => {
        
        this.state.voucherTypeSet.push("" + e.target.value)
        

    }

   


    render() {

      
        if (this.state.isSaved === true) {
            return <Redirect to='/administration/voucher-set' />
        }

        let vs = this.state.voucherTypeList.map(p => {
            return (<MDBInput key={p.id} name="voucherTypeSet" value={p.id} onChange={this.handleVoucherSetChange} label={p.name} type="checkbox" />);})
               

        return (
            <div>
                <Header />
                <br/><br/><br/><br/>
                <MDBContainer>

                    <MDBBreadcrumb >
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><NavLink to="/administration/voucher-set">Voucher Set </NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Voucher Set Add</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleVoucherSetSubmit}   id="formData">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Name </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Description </label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                />
                                <br />
                                <div>
                                   {vs}
                                </div>

                                <div className="text-center mt-4">
                                    <MDBBtn color="blue" type="submit">Save</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <FooterPage />
            </div>
        );
    }

}