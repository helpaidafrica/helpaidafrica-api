# Welcome to HelpAidAfrica Box Api

## About our API
Use our API to track donation boxes using a simple QR Code or unique box number. Our public API conforms to industry-wide OpenAPI version 3.


[HelpAidAfrica Box API Spec](https://app.swaggerhub.com/apis/bilgrami/helpaidafrica/1.0.0)

[YAML file location](https://github.com/helpaidafrica/helpaidafrica-api/blob/master/swagger.yaml)

[Html documentation](
https://app.swaggerhub.com/apis-docs/bilgrami/helpaidafrica/1.0.0)

## Server Stubs
Our Server stubs can be auto-generated in any of the following languages.

Ada, C# (ASP.NET Core, NancyFx), C++ (Pistache, Restbed, Qt5 QHTTPEngine), Erlang, F# (Giraffe), Go (net/http, Gin), Haskell (Servant), Java (MSF4J, Spring, Undertow, JAX-RS: CDI, CXF, Inflector, Jersey, RestEasy, Play Framework, PKMST, Vert.x), Kotlin (Spring Boot, Ktor, Vertx), PHP (Laravel, Lumen, Slim, Silex, Symfony, Zend Expressive), Python (Flask), NodeJS, Ruby (Sinatra, Rails5), Rust (rust-server), Scala (Akka, Finch, Lagom, Play, Scalatra)

---

### Python Server Stub
We include Python/Flask stub to mock test our API

Goto this folder and follow the ReadMe instructions
    https://github.com/helpaidafrica/helpaidafrica-api/tree/master/python-flask-stub

Once you setup the client, browse to the following URL
http://localhost:8080/bilgrami/helpaidafrica/1.0.0/ui/

For more information, please write to info@helpaidafrica.org

---

# Sample Graphql Query

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
          "contents": "Donation Package with Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-003"
        },
        {
          "id": "Box-004",
          "isActive": true,
          "contents": "Donation Package with Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-B",
          "title": "Box-004"
        },
        {
          "id": "Box-001",
          "isActive": true,
          "contents": "Donation Package with Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-001"
        },
        {
          "id": "Box-002",
          "isActive": true,
          "contents": "Donation Package with Clothes",
          "orgID": "Help Aid Africa",
          "shipmentID": "2020-08-A",
          "title": "Box-002"
        },
        {
          "id": "Box-005",
          "isActive": true,
          "contents": "Donation Package with Clothes",
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

