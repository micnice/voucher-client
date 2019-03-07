import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { CREATE_VOUCHER_TYPE } from './../mutation';
import { LEVEL_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { print } from 'graphql';
import Header from './../fragments/Header';
import FooterPage from '../fragments/FooterPage';
import { Container } from 'reactstrap';

import { Redirect,NavLink } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';




export default class VoucherTypeAdd extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            level: "",
            price: "",
            levelList: [],
            toVoucherList: false
        }
        this.handleVoucherTypeSubmit = this.handleVoucherTypeSubmit.bind(this);
        this.handleVoucherTypeChange = this.handleVoucherTypeChange.bind(this);

    }


    handleVoucherTypeChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleVoucherTypeSubmit = (e) => {
        e.preventDefault();
        axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_VOUCHER_TYPE), variables: {

                voucherTypeInput: {
                    name: this.state.name,
                    description: this.state.description,
                    level: this.state.level,
                    price: this.state.price
                }
            }
        }, {
                headers: {
                    'content-Type': 'json/application'
                }
            }).then(() => this.setState(() => ({
                toVoucherList: true
            })))
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, { query: print(LEVEL_LIST) }, {
            headers: {
                'content-Type': 'json/application'
            }
        }).then((result) => {
            
            this.setState({ levelList: result.data.data.levelList });
        });
    }

    render() {

        if (this.state.toVoucherList === true) {
            return <Redirect to='/administration/voucher-type-list' />
        }
        const { name, description, level, price } = this.state;
        let levelList = this.state.levelList.map(l => { return <option key={l.id}>{l.name}</option> });

        return (
            <div>
                <Header />
                <br/><br/><br/><br/>
                <MDBContainer>

                    <MDBBreadcrumb >
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><NavLink to="/administration/voucher-type-list">Voucher Type List</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Voucher Add</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>
                <Container>
                    <Fragment>
                        <div>
                            <form onSubmit={this.handleVoucherTypeSubmit} >
                                <br /><br />
                                <MDBRow>
                                    <MDBCol md="4" className="mb-3">
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Name</label>
                                        <input
                                            value={name}
                                            name="name"
                                            onChange={this.handleVoucherTypeChange}
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            required
                                        />
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3">
                                        <label className="grey-text">
                                            Description
                                        </label>
                                        <input
                                            value={description}
                                            name="description"
                                            onChange={this.handleVoucherTypeChange}
                                            type="text"
                                            className="form-control"
                                            placeholder="Description" />
                                    </MDBCol>

                                    <MDBCol md="4" className="mb-3">
                                        <label className="grey-text" > Price </label>
                                        <input
                                            value={price}
                                            name="price"
                                            onChange={this.handleVoucherTypeChange}
                                            type="number"
                                            className="form-control"
                                            placeholder="Price"
                                            required />
                                    </MDBCol>

                                </MDBRow>
                                <MDBRow>

                                    <MDBCol md="4" className="mb-3">
                                        <label className="grey-text" >
                                            Level
                                      </label>
                                        <div>
                                            <select required value={level} name="level" onChange={this.handleVoucherTypeChange} className="browser-default custom-select">
                                                {levelList}
                                            </select>
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBBtn color="blue" type="submit">
                                    Save
                             </MDBBtn>
                            </form>
                        </div>

                    </Fragment>

                </Container>
                <FooterPage />
            </div>

        );


    }





}