import gql from 'graphql-tag'

export const LMPLIST = gql`query lMPList($lmp:String){
    lMPList(lmp: $lmp){
      id
      firstName
      lastName
      maritalStatus
      birthDate
      educationStatus
      lmp
      parity
      identificationNumber
      latitude
      longitude
    }
  }`;

export const VOUCHER_SALES_LIST = gql`query salesList{
    salesList{

      voucherSerialNumber
      saleDate
      soldBy
     
    }
  }`;

export const BENEFICIARY_WITHOUT_SALES = gql`query beneficiariesWithNoSales{
    
    beneficiariesWithNoSales{
     
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

export const FACILITY_LIST = gql`query facilityList{
    facilityList{
      name
      description
    }
  }`;

export const USER_LIST = gql`query userList{
    userList{
      firstName
      lastName
      username
      email
     
    }
  }`


export const LEVEL_LIST = gql`query levelList{
    levelList{
      name
      description
    }
  }`;



export const BENEFICIARY_LIST = gql`
  query beneficiaryIdentificationList{
    beneficiaryIdentificationList{
    
      firstName
      lastName
      maritalStatus
      birthDate
      educationStatus
      lmp
      parity
      identificationNumber
      isAssessed
      dataCollectionDate
      povertyScore
    }
  }`;

export const SEARCH_BENEFICIARY_IDENTIFICATION_NUMBER = gql`query byIdentificationNumber($identificationNumber:String){
    byIdentificationNumber(identificationNumber: $identificationNumber){
      id
      firstName
      lastName
      maritalStatus
      birthDate
      educationStatus
      lmp
      parity
      identificationNumber
      latitude
      longitude
    }
  }`;


export const ROLE_LIST = gql`
{
  roleList{
   
    name
    description
  }
}`;

export const PERMISSION_LIST = gql`
query permissionList{
  permissionList{

    name
    
  }
}`;



export const TRACK_BENEFICIARY = gql`query trackBeneficiary($identificationNumber:String,$firstName:String,$lastName:String){
    trackBeneficiary(identificationNumber: $identificationNumber, firstName: $firstName, lastName: $lastName){
      id
      firstName
      lastName
      maritalStatus
      birthDate
      educationStatus
      lmp
      parity
      identificationNumber
      latitude
      longitude
    }
  }`;


export const VOUCHER_TYPE_LIST = gql`query{
  voucherTypeList{
    id
    name
    description
    price
  }
}`;


export const VOUCHER_TYPE_BY_NAME = gql`query voucherTypeByName($name:String){
    voucherTypeByName(name: $name){
      name
      description
    }
  }`;

export const MARITAL_STATUS = gql`query maritalStatusList{
    maritalStatusList
  }`;

export const VOUCHER_PRICE_SCALE_LIST_BY_VOUCHER_TYPE_ID = gql`query voucherPriceScaleListByvoucherTypeId($voucherType:ID) {
    voucherPriceScaleListByvoucherTypeId(voucherType: $voucherType){
      id
      voucherType{
        name
        description
      }
      serviceProvisionLevel
      priceOfService
    }
  }`

export const CITY_LIST = gql`query cityList{
    cityList{
      name
      description
    }
  }`;


export const CITY_BY_NAME = gql`query cityByName($name:String){
    cityByName(name: $name){
      id
      name
      description
    }
  }`;

export const SERVICE_PROVIDER_LIST = gql`query serviceProviderList{
    serviceProviderList{
     name
      description
    }
  }`;

export const SERVICE_PROVIDER_BY_NAME = gql`query serviceProviderByName($name:String){
    serviceProviderByName(name: $name){
      id
      city{
        id
        name
        description
      }
      name
      description
    }
  }`

export const POVERTY_ASSESSMENT_TOOL_BY_BENEFICIARY_ID = gql`query povertyAssessmentToolBybeneficiaryIdentityId($beneficiaryIdentityId:ID){
    povertyAssessmentToolBybeneficiaryIdentityId(beneficiaryIdentityId: $beneficiaryIdentityId){
      id
      beneficiaryIdentityId
      pat1
      pat2
      pat3
      pat4
      pat5
      pat6
      pat7
      pat8
      pat9
      pat10
      pat11
      trueCount
      falseCount
      dateCreated
      createdBy
    }
  }`

export const POVERTY_ASSESSMENT_TOOL_LIST = gql`query povertyAssessmentToolList{
    povertyAssessmentToolList{
      id
      beneficiaryIdentityId
      pat1
      pat2
      pat3
      pat4
      pat5
      pat6
      pat7
      pat8
      pat9
      pat10
      pat11
      trueCount
      falseCount
      dateCreated
      createdBy
    }
  }`;

export const BENEFICIARY_ASSESSMENT_BY_ID = gql`query beneficiaryAssessmentById($id:ID){
    beneficiaryAssessmentById(id: $id){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

export const BENEFICIARY_ASSESSMENT_BY_BENEFICIARY_IDENTITY_ID = gql`query beneficiaryAssessmentByBeneficiaryIdentityId( $beneficiaryIdentityId:ID){
    beneficiaryAssessmentByBeneficiaryIdentityId(beneficiaryIdentityId: $beneficiaryIdentityId){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;






export const BENEFICIARY_ASSESSMENT_LIST = gql`query beneficiaryAssessmentList{
    beneficiaryAssessmentList{
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`



export const PREGNANCY_LIST = gql`query pregnacyStatusList {
    pregnacyStatusList
  }`;

export const SERVICE_PROVISION_LEVEL_LIST = gql`query serviceProvisionLevelList{
    serviceProvisionLevelList
  }`;

export const VOUCHER_SET_LIST = gql`query voucherSetList{
    voucherSetList{
      name
      description
  
    }
  }`

export const VOUCHER_SET_LIST_FULL = gql`query voucherSetList{
    voucherSetList{
      id
      name
      description
      voucherTypeSet{
        id
        name
        description
        level{
          id
          name
          description
        }
        price
      }
    }
  }`


