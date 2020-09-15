/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateOrgInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
};

export type ModelOrgConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelOrgConditionInput | null> | null;
  or?: Array<ModelOrgConditionInput | null> | null;
  not?: ModelOrgConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateOrgInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
};

export type DeleteOrgInput = {
  id?: string | null;
};

export type CreateShipmentInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
};

export type ModelShipmentConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelShipmentConditionInput | null> | null;
  or?: Array<ModelShipmentConditionInput | null> | null;
  not?: ModelShipmentConditionInput | null;
};

export type UpdateShipmentInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
};

export type DeleteShipmentInput = {
  id?: string | null;
};

export type CreateBoxInput = {
  id?: string | null;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  isActive: boolean;
};

export type ModelBoxConditionInput = {
  title?: ModelStringInput | null;
  contents?: ModelStringInput | null;
  size?: ModelStringInput | null;
  orgID?: ModelIDInput | null;
  shipmentID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelBoxConditionInput | null> | null;
  or?: Array<ModelBoxConditionInput | null> | null;
  not?: ModelBoxConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBoxInput = {
  id: string;
  title?: string | null;
  contents?: string | null;
  size?: string | null;
  orgID?: string | null;
  shipmentID?: string | null;
  isActive?: boolean | null;
};

export type DeleteBoxInput = {
  id?: string | null;
};

export type CreateLocationInput = {
  id?: string | null;
  boxID: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
};

export type ModelLocationConditionInput = {
  boxID?: ModelIDInput | null;
  locationLabel?: ModelStringInput | null;
  latitude?: ModelStringInput | null;
  longitude?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
};

export type UpdateLocationInput = {
  id: string;
  boxID?: string | null;
  locationLabel?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  isActive?: boolean | null;
};

export type DeleteLocationInput = {
  id?: string | null;
};

export type ModelOrgFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelOrgFilterInput | null> | null;
  or?: Array<ModelOrgFilterInput | null> | null;
  not?: ModelOrgFilterInput | null;
};

export type ModelShipmentFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelShipmentFilterInput | null> | null;
  or?: Array<ModelShipmentFilterInput | null> | null;
  not?: ModelShipmentFilterInput | null;
};

export type ModelBoxFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  contents?: ModelStringInput | null;
  size?: ModelStringInput | null;
  orgID?: ModelIDInput | null;
  shipmentID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelBoxFilterInput | null> | null;
  or?: Array<ModelBoxFilterInput | null> | null;
  not?: ModelBoxFilterInput | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  boxID?: ModelIDInput | null;
  locationLabel?: ModelStringInput | null;
  latitude?: ModelStringInput | null;
  longitude?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type CreateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type GetOrgQuery = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListOrgsQuery = {
  __typename: "ModelOrgConnection";
  items: Array<{
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetShipmentQuery = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListShipmentsQuery = {
  __typename: "ModelShipmentConnection";
  items: Array<{
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoxQuery = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListBoxsQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    boxID: string;
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  isActive: boolean;
  boxes: {
    __typename: "ModelBoxConnection";
    items: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentID: string;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    isActive: boolean;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  locations: {
    __typename: "ModelLocationConnection";
    items: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  boxID: string;
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentID: string;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    locations: {
      __typename: "ModelLocationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOrg(
    input: CreateOrgInput,
    condition?: ModelOrgConditionInput
  ): Promise<CreateOrgMutation> {
    const statement = `mutation CreateOrg($input: CreateOrgInput!, $condition: ModelOrgConditionInput) {
        createOrg(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrgMutation>response.data.createOrg;
  }
  async UpdateOrg(
    input: UpdateOrgInput,
    condition?: ModelOrgConditionInput
  ): Promise<UpdateOrgMutation> {
    const statement = `mutation UpdateOrg($input: UpdateOrgInput!, $condition: ModelOrgConditionInput) {
        updateOrg(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrgMutation>response.data.updateOrg;
  }
  async DeleteOrg(
    input: DeleteOrgInput,
    condition?: ModelOrgConditionInput
  ): Promise<DeleteOrgMutation> {
    const statement = `mutation DeleteOrg($input: DeleteOrgInput!, $condition: ModelOrgConditionInput) {
        deleteOrg(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrgMutation>response.data.deleteOrg;
  }
  async CreateShipment(
    input: CreateShipmentInput,
    condition?: ModelShipmentConditionInput
  ): Promise<CreateShipmentMutation> {
    const statement = `mutation CreateShipment($input: CreateShipmentInput!, $condition: ModelShipmentConditionInput) {
        createShipment(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShipmentMutation>response.data.createShipment;
  }
  async UpdateShipment(
    input: UpdateShipmentInput,
    condition?: ModelShipmentConditionInput
  ): Promise<UpdateShipmentMutation> {
    const statement = `mutation UpdateShipment($input: UpdateShipmentInput!, $condition: ModelShipmentConditionInput) {
        updateShipment(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShipmentMutation>response.data.updateShipment;
  }
  async DeleteShipment(
    input: DeleteShipmentInput,
    condition?: ModelShipmentConditionInput
  ): Promise<DeleteShipmentMutation> {
    const statement = `mutation DeleteShipment($input: DeleteShipmentInput!, $condition: ModelShipmentConditionInput) {
        deleteShipment(input: $input, condition: $condition) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShipmentMutation>response.data.deleteShipment;
  }
  async CreateBox(
    input: CreateBoxInput,
    condition?: ModelBoxConditionInput
  ): Promise<CreateBoxMutation> {
    const statement = `mutation CreateBox($input: CreateBoxInput!, $condition: ModelBoxConditionInput) {
        createBox(input: $input, condition: $condition) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBoxMutation>response.data.createBox;
  }
  async UpdateBox(
    input: UpdateBoxInput,
    condition?: ModelBoxConditionInput
  ): Promise<UpdateBoxMutation> {
    const statement = `mutation UpdateBox($input: UpdateBoxInput!, $condition: ModelBoxConditionInput) {
        updateBox(input: $input, condition: $condition) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBoxMutation>response.data.updateBox;
  }
  async DeleteBox(
    input: DeleteBoxInput,
    condition?: ModelBoxConditionInput
  ): Promise<DeleteBoxMutation> {
    const statement = `mutation DeleteBox($input: DeleteBoxInput!, $condition: ModelBoxConditionInput) {
        deleteBox(input: $input, condition: $condition) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBoxMutation>response.data.deleteBox;
  }
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async GetOrg(id: string): Promise<GetOrgQuery> {
    const statement = `query GetOrg($id: ID!) {
        getOrg(id: $id) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrgQuery>response.data.getOrg;
  }
  async ListOrgs(
    filter?: ModelOrgFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrgsQuery> {
    const statement = `query ListOrgs($filter: ModelOrgFilterInput, $limit: Int, $nextToken: String) {
        listOrgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrgsQuery>response.data.listOrgs;
  }
  async GetShipment(id: string): Promise<GetShipmentQuery> {
    const statement = `query GetShipment($id: ID!) {
        getShipment(id: $id) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShipmentQuery>response.data.getShipment;
  }
  async ListShipments(
    filter?: ModelShipmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShipmentsQuery> {
    const statement = `query ListShipments($filter: ModelShipmentFilterInput, $limit: Int, $nextToken: String) {
        listShipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShipmentsQuery>response.data.listShipments;
  }
  async GetBox(id: string): Promise<GetBoxQuery> {
    const statement = `query GetBox($id: ID!) {
        getBox(id: $id) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBoxQuery>response.data.getBox;
  }
  async ListBoxs(
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBoxsQuery> {
    const statement = `query ListBoxs($filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        listBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBoxsQuery>response.data.listBoxs;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            locationLabel
            latitude
            longitude
            isActive
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  OnCreateOrgListener: Observable<OnCreateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrg($owner: String!) {
        onCreateOrg(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateOrgSubscription>;

  OnUpdateOrgListener: Observable<OnUpdateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrg($owner: String!) {
        onUpdateOrg(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateOrgSubscription>;

  OnDeleteOrgListener: Observable<OnDeleteOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrg($owner: String!) {
        onDeleteOrg(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteOrgSubscription>;

  OnCreateShipmentListener: Observable<
    OnCreateShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShipment($owner: String!) {
        onCreateShipment(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateShipmentSubscription>;

  OnUpdateShipmentListener: Observable<
    OnUpdateShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShipment($owner: String!) {
        onUpdateShipment(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateShipmentSubscription>;

  OnDeleteShipmentListener: Observable<
    OnDeleteShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShipment($owner: String!) {
        onDeleteShipment(owner: $owner) {
          __typename
          id
          name
          isActive
          boxes {
            __typename
            items {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteShipmentSubscription>;

  OnCreateBoxListener: Observable<OnCreateBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBox($owner: String!) {
        onCreateBox(owner: $owner) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateBoxSubscription>;

  OnUpdateBoxListener: Observable<OnUpdateBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBox($owner: String!) {
        onUpdateBox(owner: $owner) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateBoxSubscription>;

  OnDeleteBoxListener: Observable<OnDeleteBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBox($owner: String!) {
        onDeleteBox(owner: $owner) {
          __typename
          id
          title
          contents
          size
          orgID
          org {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          shipmentID
          shipment {
            __typename
            id
            name
            isActive
            boxes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationLabel
              latitude
              longitude
              isActive
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteBoxSubscription>;

  OnCreateLocationListener: Observable<
    OnCreateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation($owner: String!) {
        onCreateLocation(owner: $owner) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateLocationSubscription>;

  OnUpdateLocationListener: Observable<
    OnUpdateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation($owner: String!) {
        onUpdateLocation(owner: $owner) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateLocationSubscription>;

  OnDeleteLocationListener: Observable<
    OnDeleteLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation($owner: String!) {
        onDeleteLocation(owner: $owner) {
          __typename
          id
          boxID
          box {
            __typename
            id
            title
            contents
            size
            orgID
            org {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            shipmentID
            shipment {
              __typename
              id
              name
              isActive
              createdAt
              updatedAt
              owner
            }
            isActive
            locations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          latitude
          longitude
          isActive
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteLocationSubscription>;
}
