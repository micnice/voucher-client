import React, { Component, Fragment } from 'react';
import Home from './components/Home';

import CityList from './components/administration/CityList';
import LevelList from './components/administration/LevelList';
import UserList from './components/administration/UserList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import LoginPage from './components/security/LogingPage';
import { PrivateRoute } from './components/security/PrivateRoute';
import {logout} from './components/security/logout';




class App extends Component {
  render() {



    return (
      <Router>

        <Switch >
          <Route exact path="/login" exact component={LoginPage} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/administration" exact component={AdministrationList} />
          <PrivateRoute exact path="/reporting" exact component={ReportingList} />
          <PrivateRoute exact path="/reporting/beneficiary-list" exact component={BeneficiaryList} />
          <PrivateRoute exact path="/reporting/voucher-sales-list" exact component={VoucherSalesList} />
          <PrivateRoute exact path="/reporting/beneficiaries-without-sales-list" exact component={BeneficiaryWithoutSales} />
          <PrivateRoute exact path="/administration/city" exact component={CityList} />
          <PrivateRoute exact path="/administration/level" exact component={LevelList} />
          <PrivateRoute exact path="/administration/user" exact component={UserList} />
          <PrivateRoute exact path="/administration/voucher-type" exact component={VoucherTypeAdd} />
          <PrivateRoute exact path="/administration/voucher-type-list" exact component={VoucherTypeList} />
          <PrivateRoute exact path="/administration/facility-list" exact component={FacilityList} />
          <PrivateRoute exact path="/administration/user-list" exact component={UserList} />
          <PrivateRoute exact p2ath="/administration/user-add" exact component={UserAdd} />
          <PrivateRoute exact path="/administration/service-provider-list" exact component={ServiceProviderList} />
          <PrivateRoute exact path="/administration/city-add" exact component={CityAdd} />
          <PrivateRoute exact path="/administration/level-add" exact component={LevelAdd} />
          <PrivateRoute exact path="/administration/parameter-configuartion" exact component={ParameterConfiguration} />
          <PrivateRoute exact path="/administration/role-list" exact component={RoleList} />
          <PrivateRoute exact path="/administration/role-add" exact component={RoleAdd} />
          <PrivateRoute exact path="/administration/permission-list" exact component={PermisionsList} />
          <PrivateRoute exact path="/administration/permission-add" exact component={PermisionsAdd} />
          <PrivateRoute exact path="/administration/voucher-set" exact component={VoucherSetPage} />
          <PrivateRoute exact path="/administration/voucher-set-add" exact component={VoucherSetPageAdd} />
          <PrivateRoute exact path="/logout" exact component={logout} />
        </Switch>
      </Router>
    );


  }
}

export default App;
