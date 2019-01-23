export const customerInfo = { 
    "attributes": [
        { "id": "sender/name", "contentType": "text/string", "value": "Three Amigos", "editable": false },
        { "id": "sender/entityType", "contentType": "text/string", "editable": true },
        { "id": "sender/address", "contentType": "text/string", "editable": true },    
        { "id": "sender/country", "contentType": "text/string", "value": "US", "editable": false },
        { "id": "sender/postcode", "contentType": "", "editable": true },
        { "id": "sender/email", "contentType": "text/email", "editable": true }
    ],
    "formTypes": {
        "name": {
            "uiType": "input"
        },
        "entityType": {
            "uiType": "select",
            "uiOptions": {
                "options": [
                  { "name": "Individual", "value": "identitii/individual" },
                  { "name": "Business", "value": "identitii/business" }
                ]
            }
        },
        "address": {
            "uiType": "textarea",
            "uiOptions": {
                "rows": 4
            }
        },
        "country": {
            "uiType": "select",
            "uiOptions": {
                "options": [
                    { "name": "Australia", "value": "AU" },
                    { "name": "United States", "value": "US" }
                ]
            }
        },
        "postcode": {
            "uiType": "input"
        },
        "email": {
            "uiType": "input",
            "uiOptions": {
                "type": "email"
            }
        }
    }
};