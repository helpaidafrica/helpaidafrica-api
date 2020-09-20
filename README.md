# Welcome to HelpAidAfrica Box Api

## About our API
Use our GraphQL API to track donation boxes using a simple QR Code or unique box number.

# GraphQL Schema
[GraphQL Schema](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/haa-api/amplify/backend/api/haaapi/schema.graphql)

# wiki link
[wiki link](https://github.com/helpaidafrica/helpaidafrica-api/wiki)

# Example Graphql Query

## Get Active Boxes
```graphql
query GetActiveBoxes {
  listBoxs(filter: {isActive: {eq: true}}, limit: 5) {
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
          "id": "2020-08-B-Box-S77",
          "isActive": true,
          "contents": "Toys",
          "orgID": "KBF",
          "shipmentID": "2020-08-B",
          "title": "S77"
        },
        {
          "id": "2020-08-A-Box-74_2",
          "isActive": true,
          "contents": "Toys [71]",
          "orgID": "0",
          "shipmentID": "2020-08-A",
          "title": "74_2"
        },
        {
          "id": "2020-08-A-Box-178",
          "isActive": true,
          "contents": "Womens Clothes-Western [91]",
          "orgID": "0",
          "shipmentID": "2020-08-A",
          "title": "178"
        },
        {
          "id": "2020-08-A-Box-204",
          "isActive": true,
          "contents": "Kids/ Babies [254]",
          "orgID": "0",
          "shipmentID": "2020-08-A",
          "title": "204"
        },
        {
          "id": "2020-08-A-Box-11",
          "isActive": true,
          "contents": "Girls Clothes-Western [116]",
          "orgID": "0",
          "shipmentID": "2020-08-A",
          "title": "11"
        }
      ]
    }
  }
}
```
## Get New Boxes (detailed)

```graphql
query GetNewBoxes {
  listBoxs(filter: {status: {eq: NEW}, isActive: {eq: true}}, limit: 2) {
    items {
      id
      barCode
      contents
      status
      size
      title
      isActive
      shipment {
        id
        startDate
        status
        destinationLocation {
          locationLabel
          longitude
          latitude
        }
        description
        deliveryDate
        startLocation {
          locationLabel
          longitude
          latitude
        }
        weight
      }
      org {
        name
        id
      }
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
          "id": "2020-08-B-Box-S77",
          "barCode": "2020-08-B-Box-S77",
          "contents": "Toys",
          "status": "NEW",
          "size": "20x20",
          "title": "S77",
          "isActive": true,
          "shipment": {
            "id": "2020-08-B",
            "startDate": "2020-08-18T00:00Z",
            "status": "IN_PROGRESS",
            "destinationLocation": {
              "locationLabel": "Unknown Location",
              "longitude": "38.1201",
              "latitude": "86.9142"
            },
            "description": "Container Shipment B from Aug 18th 2020",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "weight": null
          },
          "org": {
            "name": "KBF",
            "id": "KBF"
          }
        },
        {
          "id": "2020-08-A-Box-74_2",
          "barCode": "2020-08-A-Box-74_2",
          "contents": "Toys [71]",
          "status": "NEW",
          "size": "20x20",
          "title": "74_2",
          "isActive": true,
          "shipment": {
            "id": "2020-08-A",
            "startDate": "2020-08-18T00:00Z",
            "status": "IN_PROGRESS",
            "destinationLocation": {
              "locationLabel": "Unknown Location",
              "longitude": "38.1201",
              "latitude": "86.9142"
            },
            "description": "Container Shipment A from Aug 18th 2020",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "weight": null
          },
          "org": {
            "name": "Unknown Org",
            "id": "0"
          }
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
