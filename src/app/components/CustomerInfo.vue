<template>
    <div class="customer-info">
        <h4>YOUR SHARED DETAILS</h4>
        <hr class="hr">
        <p class="notice">
            For optimal speed of settlement, the following details about you will be shared with parties in the transaction.
        </p>
        <div v-if="isSubmitted">
            <h1>Success!</h1>
            <p>
                Please check console for payload.
            </p>
        </div>
        <form @submit="submitForm" v-if="!isSubmitted"> 
            <div class="row">
                <div class="col-sm-3">&nbsp;</div><div class="col-sm-6">&nbsp;</div><div class="col-sm-3">Inc.</div>
            </div>
            <div class="row">
                <label class="col-sm-3">Name:</label>
                <div class="col-sm-6">
                    <!-- TODO: use span for disabled properties -->
                    <span>{{ formModel['sender/name'].value }}</span>
                    <!-- <input id="sender/name" type="text" v-model="formModel['sender/name'].value"> -->
                </div>
                <div class="col-sm-3"><input type="checkbox" value="sender/name" v-model="formModel['sender/name'].include"></div>
            </div>
            <div class="row">
                <label class="col-sm-3">Entity type:</label>
                <div class="col-sm-6">
                    <span>{{ getEntityName(formModel['sender/entityType'].value).name }}</span>
                    <!-- TODO: add model for selected entity type 
                    <select v-model="selectedEntityType">
                        <option v-for="type in entityTypes" v-bind:key="type.value">{{ type.name }}</option>
                    </select>
                    -->
                </div>
                <div class="col-sm-3">
                    <input type="checkbox" v-model="formModel['sender/entityType'].include">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-3">Country:</label>
                <div class="col-sm-6">
                    <span>{{ getCountryName(formModel['sender/country'].value).name }}</span>
                    <!-- <select v-model="selectedCountry">
                        <option v-for="country in countries" v-bind:key="country.value">{{country.name}}</option>
                    </select> -->
                </div>
                <div class="col-sm-3">
                    <input type="checkbox" value="sender/country" v-model="formModel['sender/country'].include">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-3">Address:</label>
                <!-- <div class="col">100 California Drive, CA 90210</div> -->
                <div class="col-sm-6">
                    <textarea rows="4" v-model="formModel['sender/address'].value"></textarea>
                </div>
                <div class="col-sm-3">
                    <input type="checkbox" value="sender/address" v-model="formModel['sender/address'].include">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-3">Postcode:</label>
                <div class="col-sm-6"><input type="text" v-model="formModel['sender/postcode'].value"></div>
                <div class="col-sm-3">
                    <input type="checkbox" v-model="formModel['sender/postcode'].include">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-3">Email:</label>
                <div class="col-sm-6">
                    <input type="email" v-model="formModel['sender/email'].value" placeholder="dustybottoms@threeamigos.com">
                </div>
                <div class="col-sm-3">
                    <input type="checkbox" v-model="formModel['sender/email'].include">
                    </div>
            </div>
            <div class="row">
                <div class="col-sm-offset-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                    <button type="button" class="btn btn-secondary" v-on:click="clearAttributes()">Clear Shared Details</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { store, api } from '../store';

export default {
    name: 'CustomerInfo',
    data() {
        return {
            isSubmitted: false,
            selectedCountry: null,
            selectedEntityType: null,
            entityTypes: store.getEntityTypes(),
            countries: store.getCountries(),
            formModel: store.getCustomerInfo()
        };
    },

    // component created lifecycle hook
    created() {
        // load saved attrs from local storage
        api.loadItems(savedAttrs => {
            console.log('saved attribures from local storage', savedAttrs);
            
            // this is throwing errors
            // this.formModel = savedAttrs;
        });
    },
    methods: {  
        getEntityName(entityValue) {
            return store.getEntityByName(entityValue);

        },
        getCountryName(countryValue) {
             return store.getCountryByName(countryValue);
        },
        clearAttributes() {
            api.clearAttributes();
        },
        submitForm(event) {
            event.preventDefault();

            // TODO: process payload here
            console.log(this.selectedCountry);
            console.log(this.selectedEntityType);

            // filter attributes to share
            const attributesToInclude = Object.keys(this.formModel)
                                                .map(key => this.formModel[key])
                                                .filter(attribute => attribute.include);

            console.log(attributesToInclude);
            
            // TODO: pass payload to service what deals with http

            // transform array collection into object before storing in localstorage
            const attrsToStore = {};
            attributesToInclude.forEach(attr => attrsToStore[attr.id] = attr);      
            api.saveAttributes(attrsToStore);
            this.isSubmitted = true;
        }
    }
}
</script>


<style>
    h5 {
        color: #333;
    }
    .customer-info {
        width: 450px;
        background-color: #f2f2f2;
        margin: 10px;
        padding: 10px;
    }
    .notice {
        font-style: italic;
        color: #666666;
        font-size: 12px; 
    }  
    .hr {
        border-top: 1px solid #ccc;
        margin: 15px 0 10px 0;
    }
    .row {
        margin-bottom: 5px;
    }
</style>
