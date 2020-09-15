# Welcome to HelpAidAfrica Box Api

## About our API
Use our GraphQL API to track donation boxes using a simple QR Code or unique box number.

# GraphQL Schema

[GraphQL Schema](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/haa-api/amplify/backend/api/haaApi/schema.graphql)

# Example Graphql Query

## Get Active Boxes
```graphql
query GetActiveBoxes {
  listBoxs(filter: {isActive: {eq: true}}) {
    items {
      id
      isActive
      contents
      orgID
      shipmentID
      title
    }
  }
}
```

## Response
```json
{
  "data": {
    "listBoxs": {
      "items": [
        {
          "id": "Box-003",
          "isActive": true,
          "contents": "Donation Package with Girls Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-003"
        },
        {
          "id": "Box-004",
          "isActive": true,
          "contents": "Donation Package with Shoes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-B",
          "title": "Box-004"
        },
        {
          "id": "Box-001",
          "isActive": true,
          "contents": "Donation Package with Men's Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-001"
        },
        {
          "id": "Box-002",
          "isActive": true,
          "contents": "Donation Package with Women's Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-002"
        },
        {
          "id": "Box-005",
          "isActive": true,
          "contents": "Donation Package with Bedding and Household items",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-B",
          "title": "Box-005"
        }
      ]
    }
  }
}
```

---

![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/5%20Reasons%20for%20HAA%20box%20Api-small.png?raw=true "5 Reasons for help aid Africa Box API")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-1.png?raw=true "HAA-DataModel-1")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-2.png?raw=true "HAA-DataModel-2")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-3.png?raw=true "HAA-DataModel-4")

---

