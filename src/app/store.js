import { customerInfo } from './seed.js';

export const store = {  
  state: {
    customerInfo 
  },

  getCustomerInfo() {
    const attributes = {};
     this.state.customerInfo.attributes.forEach(attr => attributes[attr.id] = attr);
     return attributes;
  },
  getEntityTypes() {
    return this.state.customerInfo.formTypes.entityType.uiOptions.options;
  },
  getEntityByName(entityValue) {
    if(entityValue) {
      return this.getEntityTypes()
                .filter(entity => entity.value === entityValue)[0];
    }
    return {name: 'Not Select', value: null};
  },
  getCountries() {
    return this.state.customerInfo.formTypes.country.uiOptions.options;
  },
  getCountryByName(countryValue) {
      if(countryValue) {
          return this.getCountries()
          .filter(country => countryValue === country.value)[0];
      }
      return {name: 'Not Selected', value: null};     
  }
}

// local storage api
export const api = {
  loadItems(cb) {
    if(localStorage.sharedAttrs) {
      cb(JSON.parse(localStorage.sharedAttrs));
    } else {
      cb(store.getCustomerInfo());
    }
  },
  saveAttributes(items) {
    localStorage.sharedAttrs = JSON.stringify(items);
    console.log(localStorage);
  },
  clearAttributes() {
        console.log('Shared data removed from storage');
        console.log('Before removal',localStorage);
        localStorage.removeItem('sharedAttrs');
        console.log('After removal', localStorage);
  }
}
