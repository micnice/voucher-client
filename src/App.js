import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'; 

import CityList from './components/administration/CityList';
import LevelList from './components/administration/LevelList';
import UserList from './components/administration/UserList';

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import AdministrationList from './components/administration/AdministrationList';
import VoucherTypeAdd from './components/administration/VoucherTypeAdd';
import VoucherTypeList from './components/administration/VoucherTypeList';
import FacilityList from './components/administration/FacilityList';
import ServiceProviderList from './components/administration/ServiceProviderList';
import CityAdd from './components/administration/CityAdd';
import LevelAdd from './components/administration/LevelAdd';
import UserAdd from './components/administration/UserAdd';
import ParameterConfiguration from './components/administration/ParameterConfiguration';
import ReportingList from './components/reporting/ReportingList';
import BeneficiaryList from './components/reporting/BeneficiaryList';
import VoucherSalesList from './components/reporting/VoucherSalesList';
import BeneficiaryWithoutSales from './components/reporting/BeneficiaryWithoutSales';
import RoleList from './components/administration/RoleList';
import RoleAdd from './components/administration/RoleAdd';
import PermisionsList from './components/administration/PermisionsList';
import PermisionsAdd from './components/administration/PermisionsAdd';
import VoucherSetPage from './components/administration/VoucherSetPage';
import VoucherSetPageAdd from './components/administration/VoucherSetPageAdd';




class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
         <Route exact path="/" exact component={Home} />
         
         <Route exact path="/administration" exact  component={AdministrationList} /> 
         <Route exact path="/reporting" exact  component={ReportingList} /> 
         <Route exact path="/reporting/beneficiary-list" exact  component={BeneficiaryList} /> 
         <Route exact path="/reporting/voucher-sales-list" exact  component={VoucherSalesList} />    
         <Route exact path="/reporting/beneficiaries-without-sales-list" exact  component={BeneficiaryWithoutSales} />        
         <Route exact path="/administration/city"  exact  component={CityList} />
         <Route exact path="/administration/level" exact component={LevelList} />
         <Route exact path="/administration/user"  exact  component={UserList} />
         <Route exact path="/administration/voucher-type"  exact  component={VoucherTypeAdd} />
         <Route exact path="/administration/voucher-type-list"  exact  component={VoucherTypeList} />
         <Route exact path="/administration/facility-list"  exact  component={FacilityList} />
         <Route exact path="/administration/user-list"  exact  component={UserList} />
         <Route exact path="/administration/user-add"  exact  component={UserAdd} />
         <Route exact path="/administration/service-provider-list"  exact  component={ServiceProviderList} />
         <Route exact path="/administration/city-add"  exact  component={CityAdd} />
         <Route exact path="/administration/level-add"  exact  component={LevelAdd} />
         <Route exact path="/administration/parameter-configuartion"  exact  component={ParameterConfiguration} />
         <Route exact path="/administration/role-list"  exact  component={RoleList} />
         <Route exact path="/administration/role-add"  exact  component={RoleAdd} />
         <Route exact path="/administration/permission-list"  exact  component={PermisionsList} />
         <Route exact path="/administration/permission-add"  exact  component={PermisionsAdd} />
         <Route exact path="/administration/voucher-set"  exact  component={VoucherSetPage} />
         <Route exact path="/administration/voucher-set-add"  exact  component={VoucherSetPageAdd} />



         
       
        
         
         
         
         
        </Switch>
         </div>
    </Router>
    );
  }
}

export default App;
