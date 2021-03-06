# Welcome to HelpAidAfrica Box Api

## About our API
Use our GraphQL API to track donation boxes using a simple QR Code or unique box number.

## Technology stack
Our GarphQL API is hosted on AWS. We use the following AWS services
- AWS Appsync
- AWS DynamoDb
- AWS Lambda Functions
- AWS S3
- AWS Cloud Formation
- AWS Amplify Cli

Click below to launch an AWS CloudFormation stack with our template, and AWS CloudFormation automatically provisions the specified resources and bootstraps the software running on them.

[![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=HelpAidAfricaBoxAPIStack&templateURL=https://s3-us-west-1.amazonaws.com/track.helpaidafrica.org/aws/template/helpaidafrica-api-stack.template)

---
## GraphQL
GraphQL types are composed like this:
- [Org] type contains one or more [Box] types
- [Shipment] type contains one or more [Box] types
- [BoxCategory] type contains one or more [Box] types
- [TrackingInfo] type contains one or more [BoxLocation] and [Image] types. 
- [BoxLocation] type contains one or more [LocationInfo] types for a [Box]
- [LocationInfo] type contains [Phone], [Address], and [Image] types with Lat/Long

Other types 
- [ApihealthCheckInfo] 

![HelpAidAfrica-BoxAPI-Schema](https://raw.githubusercontent.com/helpaidafrica/helpaidafrica-api/master/public/assets/img/HelpAidAfrica-BoxAPI-Schema.jpg)

> **Note: For brevity, directives (@key, @model, @connection, @auth) are remvoed from above diagram. Please see [GraphQL schema](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/haa-api/amplify/backend/api/haaapi/schema.graphql) for details**

---
## Queries

Below are some sample queries. For more detailed examples and use-cases, please visit our [wiki](https://github.com/helpaidafrica/helpaidafrica-api/wiki).


### Get Delivered Boxes
```graphql
query GetDeliveredBoxes {
 BoxByStatus(status: DELIVERED, filter: {isActive: {eq: true}}) {
 items {
      id
      barCode
      contents
      status
      title
      isActive
      }
  }
}
```

#### Response
```json
{
  "data": {
    "BoxByStatus": {
      "items": [
        {
          "id": "2020-08-A-Box-1",
          "barCode": "2020-08-A-Box-1",
          "contents": "Womens Clothes-Western [43]",
          "status": "DELIVERED",
          "title": "1",
          "isActive": true
        },
        {
          "id": "2020-08-A-Box-2",
          "barCode": "2020-08-A-Box-2",
          "contents": "Womens Clothes-Western [123]",
          "status": "DELIVERED",
          "title": "2",
          "isActive": true
        }
      ]
    }
  }
}
```
### Get Box Info (detailed)

```graphql
query BoxInfo {
  getBox(id: "2020-08-A-Box-1") {
    id
    barCode
    contents
    status
    size
    title
    isActive
    boxCategory {
      id
      name
    }
    locations {
      items {
        isFinal
        notes
        scannedByUser {
          id
          name
          rank
        }
        scanDateTime
        locationInfo {
          id
          isActive
          latitude
          locationLabel
          longitude
        }
      }
    }
    org {
      name
      id
    }
    shipment {
      id
      startDate
      status
      destinationLocation {
        locationLabel
        longitude
        latitude
        notes
      }
      description
      deliveryDate
      startLocation {
        locationLabel
        longitude
        latitude
      }
      weight
      image {
        id
        src
      }
    }
  }
}
```
### Response

```json
{
  "data": {
    "getBox": {
      "id": "2020-08-A-Box-1",
      "barCode": "2020-08-A-Box-1",
      "contents": "Womens Clothes-Western [43]",
      "status": "DELIVERED",
      "size": "20x20",
      "title": "1",
      "isActive": true,
      "boxCategory": {
        "id": "Womens Clothes-Western",
        "name": "Womens Clothes-Western"
      },
      "locations": {
        "items": [
          {
            "isFinal": true,
            "notes": null,
            "scannedByUser": {
              "id": "1",
              "name": "user 1",
              "rank": 0
            },
            "scanDateTime": "2020-09-19T10:00:00Z",
            "locationInfo": {
              "id": "2",
              "isActive": true,
              "latitude": "37.4213761",
              "locationLabel": "Saba Islamic Center",
              "longitude": "-121.9605887"
            }
          }
        ]
      },
      "org": {
        "name": "Unknown Org",
        "id": "0"
      },
      "shipment": {
        "id": "2020-08-A",
        "startDate": "2020-08-18T00:00Z",
        "status": "IN_PROGRESS",
        "destinationLocation": {
          "locationLabel": "Unknown Location",
          "longitude": "38.1201",
          "latitude": "86.9142",
          "notes": "Placeholder for an unknown location"
        },
        "description": "Container Shipment A from Aug 18th 2020",
        "deliveryDate": null,
        "startLocation": {
          "locationLabel": "Saba Islamic Center",
          "longitude": "-121.9605887",
          "latitude": "37.4213761"
        },
        "weight": null,
        "image": null
      }
    }
  }
}

```

---
# Use-case and Requirement Slides

![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/5%20Reasons%20for%20HAA%20box%20Api-small.png?raw=true "5 Reasons for help aid Africa Box API")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-1.png?raw=true "HAA-DataModel-1")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-2.png?raw=true "HAA-DataModel-2")

---
![alt text](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/public/assets/img/HAA-DataModel-3.png?raw=true "HAA-DataModel-4")

---
