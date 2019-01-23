import CustomerInfo from '@/app/components/CustomerInfo';
import { expect } from 'chai';

describe('CustomerInfo', () => {
    it('should set data', () => {
        const initData = CustomerInfo.data();
        console.log(initData);

        expect(initData.isSubmitted).to.equal(false);
        expect(initData.selectedCountry).to.equal(null);
        expect(initData.selectedEntityType).to.equal(null);

        expect(initData.entityTypes.length).to.equal(2);
        expect(initData.countries.length).to.equal(2);
        
        expect(initData.formModel['sender/name'].id).to.equal('sender/name');
    })
})