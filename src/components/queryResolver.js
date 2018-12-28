import gql from 'graphql-tag'

export const LMPLIST=gql`query lMPList($lmp:String){
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

  export const SEARCH_BENEFICIARY_IDENTIFICATION_NUMBER=gql`query byIdentificationNumber($identificationNumber:String){
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



  export const TRACK_BENEFICIARY=gql`query trackBeneficiary($identificationNumber:String,$firstName:String,$lastName:String){
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


export const VOUCHER_LIST=gql`  
query voucherTypeList{
  voucherTypeList{
    name
    description
  }
}`;


export const VOUCHER_TYPE_BY_NAME=gql`query voucherTypeByName($name:String){
    voucherTypeByName(name: $name){
      name
      description
    }
  }`;

  export const MARITAL_STATUS=gql`query maritalStatusList{
    maritalStatusList
  }`;

  export const VOUCHER_PRICE_SCALE_LIST_BY_VOUCHER_TYPE_ID=gql`query voucherPriceScaleListByvoucherTypeId($voucherType:ID) {
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

  export const CITY_LIST=gql`query cityList{
    cityList{
      id
      name
      description
    }
  }`;
  

  export const CITY_BY_NAME=gql`query cityByName($name:String){
    cityByName(name: $name){
      id
      name
      description
    }
  }`;

  export const SERVICE_PROVIDER_LIST=gql`query serviceProviderList{
    serviceProviderList{
      id
      city{
        id
        name
        description
      }
      name
      description
    }
  }`;

  export const SERVICE_PROVIDER_BY_NAME=gql`query serviceProviderByName($name:String){
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

  export const POVERTY_ASSESSMENT_TOOL_BY_BENEFICIARY_ID=gql`query povertyAssessmentToolBybeneficiaryIdentityId($beneficiaryIdentityId:ID){
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

  export const POVERTY_ASSESSMENT_TOOL_LIST=gql`query povertyAssessmentToolList{
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

  export const BENEFICIARY_ASSESSMENT_BY_ID=gql`query beneficiaryAssessmentById($id:ID){
    beneficiaryAssessmentById(id: $id){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

  export const BENEFICIARY_ASSESSMENT_BY_BENEFICIARY_IDENTITY_ID=gql`query beneficiaryAssessmentByBeneficiaryIdentityId( $beneficiaryIdentityId:ID){
    beneficiaryAssessmentByBeneficiaryIdentityId(beneficiaryIdentityId: $beneficiaryIdentityId){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

 

  
  
  
 export const BENEFICIARY_ASSESSMENT_LIST=gql`query beneficiaryAssessmentList{
    beneficiaryAssessmentList{
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`
  
  
  
 export const PREGNANCY_LIST=gql`query pregnacyStatusList {
    pregnacyStatusList
  }`;

  export const SERVICE_PROVISION_LEVEL_LIST=gql`query serviceProvisionLevelList{
    serviceProvisionLevelList
  }`;
  
  
  