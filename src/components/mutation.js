import gql from 'graphql-tag';

export const CREATE_BENEFICIARY_IDENTIFICATION = gql`mutation createBeneficiaryIdentification($BeneficiaryIdentificationInput:BeneficiaryIdentificationInput){
    createBeneficiaryIdentification(BeneficiaryIdentificationInput:$BeneficiaryIdentificationInput){
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
   `;

   export const UPDATE_BENEFICIARY_IDENTIFICATION= gql``;

   export const CREATE_VOUCHER_TYPE=gql`mutation createVoucherType($voucherTypeInput:VoucherTypeInput){
    createVoucherType(voucherTypeInput: $voucherTypeInput){
      name
      description
    }
  }`;
  export const UPDATE_VOUCHER_TYPE=gql`mutation updateVoucherType($voucherTypeInput:VoucherTypeInput,$id:ID){
    updateVoucherType(voucherTypeInput: $voucherTypeInput, id: $id){
      name
      description
    }
  }`;

  export const CREATE_VOUCHER_PRICE_SCALE=gql`mutation createVoucherPriceScale($voucherPriceScaleInput:VoucherPriceScaleInput){
    createVoucherPriceScale(voucherPriceScaleInput: $voucherPriceScaleInput){
      id
      voucherType{name
      description
      }
      serviceProvisionLevel
      priceOfService
    }
  }`;

  export const UPDATE_VOUCHER_PRICE_SCALE=gql`mutation updateVoucherPriceScale($voucherPriceScaleInput:VoucherPriceScaleInput,$id:ID){
    updateVoucherPriceScale(voucherPriceScaleInput: $voucherPriceScaleInput, id: $id){
      id
      voucherType{
        name
        description
      }
      serviceProvisionLevel
      priceOfService
    }
  }`


  
  export const CREATE_CITY=gql`mutation createCity($cityInput:CityInput){
    createCity(cityInput: $cityInput){
      id
      name
      description
    }
  }`

  export const UPDATE_CITY=gql`mutation updateCity($cityInput:CityInput,$id:ID){
    updateCity(cityInput: $cityInput, id: $id){
      id
      name
      description
    }
  }`;

  export const CREATE_SERVICE_PROVIDER=gql`mutation createServiceProvider($serviceProviderInput:ServiceProviderInput){
    createServiceProvider(serviceProviderInput: $serviceProviderInput){
      id
      city{
        id
        name
      }
      name
      description
    }
  }
  `;

  export const UPDATE_SERVICE_PROVIDER=gql`mutation updateServiceProvider($serviceProviderInput:ServiceProviderInput,$id:ID){
    updateServiceProvider(serviceProviderInput: $serviceProviderInput, id: $id){
      id
      city{
        id
        name
      }
      name
      description
    }
  }`
 
  export const CREATE_POVERT_ASSESSMENT_TOOL=gql`mutation createPovertyAssessmentTool($povertyAssessmentToolInput:PovertyAssessmentToolInput){
    createPovertyAssessmentTool(povertyAssessmentToolInput: $povertyAssessmentToolInput){
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

  export const UPDATE_POVERTY_ASSESSMENT_TOOL=gql`mutation updatePovertyAssessmentTool($povertyAssessmentToolInput:PovertyAssessmentToolInput,$id:ID){
    updatePovertyAssessmentTool(povertyAssessmentToolInput: $povertyAssessmentToolInput, id: $id){
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

  export const CREATE_BENEFICIARY_ASSESSMENT=gql`mutation createBeneficiaryAssessment($beneficiaryAssessmentInput:BeneficiaryAssessmentInput){
    createBeneficiaryAssessment(beneficiaryAssessmentInput: $beneficiaryAssessmentInput){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

  export const UPDATE_BENEFICIARY_ASSESSMENT=gql`mutation updateBeneficiaryAssessment($beneficiaryAssessmentInput:BeneficiaryAssessmentInput,$id:ID){
    updateBeneficiaryAssessment(beneficiaryAssessmentInput: $beneficiaryAssessmentInput, id: $id){
      id
      beneficiaryIdentityId
      pregnancyStatus
      povertyScore
      latitude
      longitude
    }
  }`;

  
  

 

  
  


