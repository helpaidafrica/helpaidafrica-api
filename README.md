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
          "orgID": "1",
          "shipmentID": "2020-08-A",
          "title": "Box-003"
        },
        {
          "id": "Box-004",
          "isActive": true,
          "contents": "Donation Package with Shoes",
          "orgID": "1",
          "shipmentID": "2020-08-B",
          "title": "Box-004"
        },
        {
          "id": "Box-001",
          "isActive": true,
          "contents": "Donation Package with Men's Clothes",
          "orgID": "1",
          "shipmentID": "2020-08-A",
          "title": "Box-001"
        },
        {
          "id": "Box-002",
          "isActive": true,
          "contents": "Donation Package with Men's Clothes",
          "orgID": "1",
          "shipmentID": "2020-08-A",
          "title": "Box-002"
        }
      ]
    }
  }
}
```
## Get New Boxes (detailed)

```graphql
query GetNewBoxes {
  listBoxs(filter: 
    {
      status: {eq: NEW}, 
      isActive: {eq: true}}
  )
  {
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
      qrCode
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
          "barCode": "Box-003 Bar Code",
          "contents": "Donation Package with Girls Clothes",
          "status": "NEW",
          "size": "20x20",
          "title": "Box-003",
          "isActive": true,
          "shipment": {
            "id": "2020-08-A",
            "startDate": "2020-08-18T00:00Z",
            "status": "NEW",
            "destinationLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "description": "",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Golden Gate Park (Landmark)",
              "longitude": "-122.4884025",
              "latitude": "37.7694208"
            },
            "weight": null
          },
          "org": {
            "name": "Help Aid Africa Global Org",
            "id": "1"
          },
          "qrCode": "Box-003 QR Code"
        },
        {
          "id": "Box-004",
          "barCode": "Box-004 Bar Code",
          "contents": "Donation Package with Shoes",
          "status": "NEW",
          "size": "20x20",
          "title": "Box-004",
          "isActive": true,
          "shipment": {
            "id": "2020-08-B",
            "startDate": "2020-08-18T00:00Z",
            "status": "NEW",
            "destinationLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "description": "",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Golden Gate Park (Landmark)",
              "longitude": "-122.4884025",
              "latitude": "37.7694208"
            },
            "weight": null
          },
          "org": {
            "name": "Help Aid Africa Global Org",
            "id": "1"
          },
          "qrCode": "Box-004 QR Code"
        },
        {
          "id": "Box-001",
          "barCode": "Box-001 Bar Code",
          "contents": "Donation Package with Men's Clothes",
          "status": "NEW",
          "size": "20x20",
          "title": "Box-001",
          "isActive": true,
          "shipment": {
            "id": "2020-08-A",
            "startDate": "2020-08-18T00:00Z",
            "status": "NEW",
            "destinationLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "description": "",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Golden Gate Park (Landmark)",
              "longitude": "-122.4884025",
              "latitude": "37.7694208"
            },
            "weight": null
          },
          "org": {
            "name": "Help Aid Africa Global Org",
            "id": "1"
          },
          "qrCode": "Box-001 QR Code"
        },
        {
          "id": "Box-002",
          "barCode": "Box-001 Bar Code",
          "contents": "Donation Package with Men's Clothes",
          "status": "NEW",
          "size": "20x20",
          "title": "Box-002",
          "isActive": true,
          "shipment": {
            "id": "2020-08-A",
            "startDate": "2020-08-18T00:00Z",
            "status": "NEW",
            "destinationLocation": {
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887",
              "latitude": "37.4213761"
            },
            "description": "",
            "deliveryDate": null,
            "startLocation": {
              "locationLabel": "Golden Gate Park (Landmark)",
              "longitude": "-122.4884025",
              "latitude": "37.7694208"
            },
            "weight": null
          },
          "org": {
            "name": "Help Aid Africa Global Org",
            "id": "1"
          },
          "qrCode": "Box-001 QR Code"
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

