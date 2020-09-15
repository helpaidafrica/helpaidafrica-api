/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateAddressInput = {
  id?: string | null;
  address: string;
  city?: string | null;
  state?: string | null;
  province?: string | null;
  country?: string | null;
};

export type ModelAddressConditionInput = {
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  province?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAddressConditionInput | null> | null;
  or?: Array<ModelAddressConditionInput | null> | null;
  not?: ModelAddressConditionInput | null;
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

export type UpdateAddressInput = {
  id: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  province?: string | null;
  country?: string | null;
};

export type DeleteAddressInput = {
  id?: string | null;
};

export type CreatePhoneInput = {
  id?: string | null;
  phone?: string | null;
  isPrimary?: boolean | null;
  isActive?: boolean | null;
  type?: PhoneType | null;
};

export enum PhoneType {
  WORK = "WORK",
  CELL = "CELL",
  HOME = "HOME",
  OTHER = "OTHER"
}

export type ModelPhoneConditionInput = {
  phone?: ModelStringInput | null;
  isPrimary?: ModelBooleanInput | null;
  isActive?: ModelBooleanInput | null;
  type?: ModelPhoneTypeInput | null;
  and?: Array<ModelPhoneConditionInput | null> | null;
  or?: Array<ModelPhoneConditionInput | null> | null;
  not?: ModelPhoneConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelPhoneTypeInput = {
  eq?: PhoneType | null;
  ne?: PhoneType | null;
};

export type UpdatePhoneInput = {
  id: string;
  phone?: string | null;
  isPrimary?: boolean | null;
  isActive?: boolean | null;
  type?: PhoneType | null;
};

export type DeletePhoneInput = {
  id?: string | null;
};

export type CreateOrgInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  email?: string | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  notes?: string | null;
  isActive: boolean;
};

export type ModelOrgConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  email?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelOrgConditionInput | null> | null;
  or?: Array<ModelOrgConditionInput | null> | null;
  not?: ModelOrgConditionInput | null;
};

export enum BoxStatus {
  NEW = "NEW",
  PACKAGED = "PACKAGED",
  PICKUP_IN_TRANSIT = "PICKUP_IN_TRANSIT",
  PICKUP_COMPLETED = "PICKUP_COMPLETED",
  READY_TO_SHIP = "READY_TO_SHIP",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  FAILED_TO_DELIVER = "FAILED_TO_DELIVER",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED",
  DAMAGED = "DAMAGED",
  PARTIALLY_DAMAGED = "PARTIALLY_DAMAGED",
  LOST = "LOST",
  DUPLICATE = "DUPLICATE",
  DIVERTED = "DIVERTED",
  ERROR = "ERROR"
}

export type UpdateOrgInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  email?: string | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  notes?: string | null;
  isActive?: boolean | null;
};

export type DeleteOrgInput = {
  id?: string | null;
};

export type CreateLocationInfoInput = {
  id?: string | null;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export type ModelLocationInfoConditionInput = {
  locationLabel?: ModelStringInput | null;
  latitude?: ModelStringInput | null;
  longitude?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelLocationInfoConditionInput | null> | null;
  or?: Array<ModelLocationInfoConditionInput | null> | null;
  not?: ModelLocationInfoConditionInput | null;
};

export type UpdateLocationInfoInput = {
  id: string;
  locationLabel?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  isActive?: boolean | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export type DeleteLocationInfoInput = {
  id?: string | null;
};

export type CreateShipmentInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  isActive: boolean;
  startDate?: string | null;
  deliveryDate?: string | null;
  shipmentNotes?: string | null;
  deliveryNotes?: string | null;
  trackingId?: string | null;
  weight?: string | null;
  shipmentReceiver?: string | null;
  status?: ShippingStatus | null;
  statusHistory?: Array<string> | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export enum ShippingStatus {
  NEW = "NEW",
  DEPARTED_FROM_SHIPPING_HUB = "DEPARTED_FROM_SHIPPING_HUB",
  IN_PROGRESS = "IN_PROGRESS",
  ARRIVED_AT_SHIPPING_HUB = "ARRIVED_AT_SHIPPING_HUB",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  ERROR = "ERROR"
}

export type ModelShipmentConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  startDate?: ModelStringInput | null;
  deliveryDate?: ModelStringInput | null;
  shipmentNotes?: ModelStringInput | null;
  deliveryNotes?: ModelStringInput | null;
  trackingId?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  shipmentReceiver?: ModelStringInput | null;
  status?: ModelShippingStatusInput | null;
  statusHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelShipmentConditionInput | null> | null;
  or?: Array<ModelShipmentConditionInput | null> | null;
  not?: ModelShipmentConditionInput | null;
};

export type ModelShippingStatusInput = {
  eq?: ShippingStatus | null;
  ne?: ShippingStatus | null;
};

export type UpdateShipmentInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  startDate?: string | null;
  deliveryDate?: string | null;
  shipmentNotes?: string | null;
  deliveryNotes?: string | null;
  trackingId?: string | null;
  weight?: string | null;
  shipmentReceiver?: string | null;
  status?: ShippingStatus | null;
  statusHistory?: Array<string> | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
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
  barCode?: string | null;
  qrCode?: string | null;
  barCodePhoto?: string | null;
  qrCodePhoto?: string | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  status: BoxStatus;
  statusHistory?: Array<BoxStatus> | null;
  internalNotes?: string | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export type ModelBoxConditionInput = {
  title?: ModelStringInput | null;
  contents?: ModelStringInput | null;
  size?: ModelStringInput | null;
  orgID?: ModelIDInput | null;
  shipmentID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  barCode?: ModelStringInput | null;
  qrCode?: ModelStringInput | null;
  barCodePhoto?: ModelStringInput | null;
  qrCodePhoto?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  status?: ModelBoxStatusInput | null;
  statusHistory?: ModelBoxStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
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

export type ModelBoxStatusInput = {
  eq?: BoxStatus | null;
  ne?: BoxStatus | null;
};

export type ModelBoxStatusListInput = {
  eq?: Array<BoxStatus | null> | null;
  ne?: Array<BoxStatus | null> | null;
  contains?: BoxStatus | null;
  notContains?: BoxStatus | null;
};

export type UpdateBoxInput = {
  id: string;
  title?: string | null;
  contents?: string | null;
  size?: string | null;
  orgID?: string | null;
  shipmentID?: string | null;
  isActive?: boolean | null;
  barCode?: string | null;
  qrCode?: string | null;
  barCodePhoto?: string | null;
  qrCodePhoto?: string | null;
  tags?: Array<string> | null;
  photosUrls?: Array<string> | null;
  status?: BoxStatus | null;
  statusHistory?: Array<BoxStatus> | null;
  internalNotes?: string | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export type DeleteBoxInput = {
  id?: string | null;
};

export type CreateLocationInput = {
  id?: string | null;
  boxID: string;
  locationLabel: string;
  locationInfoID: string;
  notes?: string | null;
  isFinal?: boolean | null;
  tags?: Array<string | null> | null;
  photosUrls?: Array<string | null> | null;
  isActive: boolean;
};

export type ModelLocationConditionInput = {
  boxID?: ModelIDInput | null;
  locationLabel?: ModelStringInput | null;
  locationInfoID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  isFinal?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
};

export type UpdateLocationInput = {
  id: string;
  boxID?: string | null;
  locationLabel?: string | null;
  locationInfoID?: string | null;
  notes?: string | null;
  isFinal?: boolean | null;
  tags?: Array<string | null> | null;
  photosUrls?: Array<string | null> | null;
  isActive?: boolean | null;
};

export type DeleteLocationInput = {
  id?: string | null;
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null;
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  province?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAddressFilterInput | null> | null;
  or?: Array<ModelAddressFilterInput | null> | null;
  not?: ModelAddressFilterInput | null;
};

export type ModelPhoneFilterInput = {
  id?: ModelIDInput | null;
  phone?: ModelStringInput | null;
  isPrimary?: ModelBooleanInput | null;
  isActive?: ModelBooleanInput | null;
  type?: ModelPhoneTypeInput | null;
  and?: Array<ModelPhoneFilterInput | null> | null;
  or?: Array<ModelPhoneFilterInput | null> | null;
  not?: ModelPhoneFilterInput | null;
};

export type ModelOrgFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  email?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelOrgFilterInput | null> | null;
  or?: Array<ModelOrgFilterInput | null> | null;
  not?: ModelOrgFilterInput | null;
};

export type ModelLocationInfoFilterInput = {
  id?: ModelIDInput | null;
  locationLabel?: ModelStringInput | null;
  latitude?: ModelStringInput | null;
  longitude?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelLocationInfoFilterInput | null> | null;
  or?: Array<ModelLocationInfoFilterInput | null> | null;
  not?: ModelLocationInfoFilterInput | null;
};

export type ModelShipmentFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  startDate?: ModelStringInput | null;
  deliveryDate?: ModelStringInput | null;
  shipmentNotes?: ModelStringInput | null;
  deliveryNotes?: ModelStringInput | null;
  trackingId?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  shipmentReceiver?: ModelStringInput | null;
  status?: ModelShippingStatusInput | null;
  statusHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
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
  barCode?: ModelStringInput | null;
  qrCode?: ModelStringInput | null;
  barCodePhoto?: ModelStringInput | null;
  qrCodePhoto?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  status?: ModelBoxStatusInput | null;
  statusHistory?: ModelBoxStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelBoxFilterInput | null> | null;
  or?: Array<ModelBoxFilterInput | null> | null;
  not?: ModelBoxFilterInput | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  boxID?: ModelIDInput | null;
  locationLabel?: ModelStringInput | null;
  locationInfoID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  isFinal?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  photosUrls?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateAddressMutation = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateAddressMutation = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteAddressMutation = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreatePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdatePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeletePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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

export type CreateLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type GetAddressQuery = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListAddresssQuery = {
  __typename: "ModelAddressConnection";
  items: Array<{
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhoneQuery = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListPhonesQuery = {
  __typename: "ModelPhoneConnection";
  items: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrgQuery = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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

export type GetLocationInfoQuery = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListLocationInfosQuery = {
  __typename: "ModelLocationInfoConnection";
  items: Array<{
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
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
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type ShipmentsByBoxIdQuery = {
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAddressSubscription = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateAddressSubscription = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteAddressSubscription = {
  __typename: "Address";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  province: string | null;
  country: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreatePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdatePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeletePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isPrimary: boolean | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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
  description: string | null;
  address: {
    __typename: "Address";
    id: string;
    address: string;
    city: string | null;
    state: string | null;
    province: string | null;
    country: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isPrimary: boolean | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  }> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
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

export type OnCreateLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  boxes: Array<{
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
    description: string | null;
    address: {
      __typename: "Address";
      id: string;
      address: string;
      city: string | null;
      state: string | null;
      province: string | null;
      country: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isPrimary: boolean | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    }> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
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
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    boxes: Array<{
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  photosUrls: Array<string> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  locations: Array<{
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
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    locationLabel: string;
    locationInfoID: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    notes: string | null;
    isFinal: boolean | null;
    tags: Array<string | null> | null;
    photosUrls: Array<string | null> | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
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
      description: string | null;
      email: string | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
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
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      photosUrls: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    photosUrls: Array<string> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    locations: Array<{
      __typename: "Location";
      id: string;
      boxID: string;
      locationLabel: string;
      locationInfoID: string;
      notes: string | null;
      isFinal: boolean | null;
      tags: Array<string | null> | null;
      photosUrls: Array<string | null> | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  locationLabel: string;
  locationInfoID: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  };
  notes: string | null;
  isFinal: boolean | null;
  tags: Array<string | null> | null;
  photosUrls: Array<string | null> | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAddress(
    input: CreateAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<CreateAddressMutation> {
    const statement = `mutation CreateAddress($input: CreateAddressInput!, $condition: ModelAddressConditionInput) {
        createAddress(input: $input, condition: $condition) {
          __typename
          id
          address
          city
          state
          province
          country
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
    return <CreateAddressMutation>response.data.createAddress;
  }
  async UpdateAddress(
    input: UpdateAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<UpdateAddressMutation> {
    const statement = `mutation UpdateAddress($input: UpdateAddressInput!, $condition: ModelAddressConditionInput) {
        updateAddress(input: $input, condition: $condition) {
          __typename
          id
          address
          city
          state
          province
          country
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
    return <UpdateAddressMutation>response.data.updateAddress;
  }
  async DeleteAddress(
    input: DeleteAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<DeleteAddressMutation> {
    const statement = `mutation DeleteAddress($input: DeleteAddressInput!, $condition: ModelAddressConditionInput) {
        deleteAddress(input: $input, condition: $condition) {
          __typename
          id
          address
          city
          state
          province
          country
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
    return <DeleteAddressMutation>response.data.deleteAddress;
  }
  async CreatePhone(
    input: CreatePhoneInput,
    condition?: ModelPhoneConditionInput
  ): Promise<CreatePhoneMutation> {
    const statement = `mutation CreatePhone($input: CreatePhoneInput!, $condition: ModelPhoneConditionInput) {
        createPhone(input: $input, condition: $condition) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
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
    return <CreatePhoneMutation>response.data.createPhone;
  }
  async UpdatePhone(
    input: UpdatePhoneInput,
    condition?: ModelPhoneConditionInput
  ): Promise<UpdatePhoneMutation> {
    const statement = `mutation UpdatePhone($input: UpdatePhoneInput!, $condition: ModelPhoneConditionInput) {
        updatePhone(input: $input, condition: $condition) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
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
    return <UpdatePhoneMutation>response.data.updatePhone;
  }
  async DeletePhone(
    input: DeletePhoneInput,
    condition?: ModelPhoneConditionInput
  ): Promise<DeletePhoneMutation> {
    const statement = `mutation DeletePhone($input: DeletePhoneInput!, $condition: ModelPhoneConditionInput) {
        deletePhone(input: $input, condition: $condition) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
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
    return <DeletePhoneMutation>response.data.deletePhone;
  }
  async CreateOrg(
    input: CreateOrgInput,
    condition?: ModelOrgConditionInput
  ): Promise<CreateOrgMutation> {
    const statement = `mutation CreateOrg($input: CreateOrgInput!, $condition: ModelOrgConditionInput) {
        createOrg(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
  async CreateLocationInfo(
    input: CreateLocationInfoInput,
    condition?: ModelLocationInfoConditionInput
  ): Promise<CreateLocationInfoMutation> {
    const statement = `mutation CreateLocationInfo($input: CreateLocationInfoInput!, $condition: ModelLocationInfoConditionInput) {
        createLocationInfo(input: $input, condition: $condition) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
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
    return <CreateLocationInfoMutation>response.data.createLocationInfo;
  }
  async UpdateLocationInfo(
    input: UpdateLocationInfoInput,
    condition?: ModelLocationInfoConditionInput
  ): Promise<UpdateLocationInfoMutation> {
    const statement = `mutation UpdateLocationInfo($input: UpdateLocationInfoInput!, $condition: ModelLocationInfoConditionInput) {
        updateLocationInfo(input: $input, condition: $condition) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
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
    return <UpdateLocationInfoMutation>response.data.updateLocationInfo;
  }
  async DeleteLocationInfo(
    input: DeleteLocationInfoInput,
    condition?: ModelLocationInfoConditionInput
  ): Promise<DeleteLocationInfoMutation> {
    const statement = `mutation DeleteLocationInfo($input: DeleteLocationInfoInput!, $condition: ModelLocationInfoConditionInput) {
        deleteLocationInfo(input: $input, condition: $condition) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
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
    return <DeleteLocationInfoMutation>response.data.deleteLocationInfo;
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
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
  async GetAddress(id: string): Promise<GetAddressQuery> {
    const statement = `query GetAddress($id: ID!) {
        getAddress(id: $id) {
          __typename
          id
          address
          city
          state
          province
          country
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
    return <GetAddressQuery>response.data.getAddress;
  }
  async ListAddresss(
    filter?: ModelAddressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAddresssQuery> {
    const statement = `query ListAddresss($filter: ModelAddressFilterInput, $limit: Int, $nextToken: String) {
        listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            address
            city
            state
            province
            country
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
    return <ListAddresssQuery>response.data.listAddresss;
  }
  async GetPhone(id: string): Promise<GetPhoneQuery> {
    const statement = `query GetPhone($id: ID!) {
        getPhone(id: $id) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
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
    return <GetPhoneQuery>response.data.getPhone;
  }
  async ListPhones(
    filter?: ModelPhoneFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhonesQuery> {
    const statement = `query ListPhones($filter: ModelPhoneFilterInput, $limit: Int, $nextToken: String) {
        listPhones(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            phone
            isPrimary
            isActive
            type
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
    return <ListPhonesQuery>response.data.listPhones;
  }
  async GetOrg(id: string): Promise<GetOrgQuery> {
    const statement = `query GetOrg($id: ID!) {
        getOrg(id: $id) {
          __typename
          id
          name
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
  async GetLocationInfo(id: string): Promise<GetLocationInfoQuery> {
    const statement = `query GetLocationInfo($id: ID!) {
        getLocationInfo(id: $id) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
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
    return <GetLocationInfoQuery>response.data.getLocationInfo;
  }
  async ListLocationInfos(
    filter?: ModelLocationInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationInfosQuery> {
    const statement = `query ListLocationInfos($filter: ModelLocationInfoFilterInput, $limit: Int, $nextToken: String) {
        listLocationInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
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
    return <ListLocationInfosQuery>response.data.listLocationInfos;
  }
  async GetShipment(id: string): Promise<GetShipmentQuery> {
    const statement = `query GetShipment($id: ID!) {
        getShipment(id: $id) {
          __typename
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
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
  async ShipmentsByBoxId(
    shipmentID?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ShipmentsByBoxIdQuery> {
    const statement = `query ShipmentsByBoxId($shipmentID: ID, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        shipmentsByBoxId(shipmentID: $shipmentID, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (shipmentID) {
      gqlAPIServiceArguments.shipmentID = shipmentID;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <ShipmentsByBoxIdQuery>response.data.shipmentsByBoxId;
  }
  OnCreateAddressListener: Observable<
    OnCreateAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAddress($owner: String!) {
        onCreateAddress(owner: $owner) {
          __typename
          id
          address
          city
          state
          province
          country
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateAddressSubscription>;

  OnUpdateAddressListener: Observable<
    OnUpdateAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAddress($owner: String!) {
        onUpdateAddress(owner: $owner) {
          __typename
          id
          address
          city
          state
          province
          country
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateAddressSubscription>;

  OnDeleteAddressListener: Observable<
    OnDeleteAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAddress($owner: String!) {
        onDeleteAddress(owner: $owner) {
          __typename
          id
          address
          city
          state
          province
          country
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteAddressSubscription>;

  OnCreatePhoneListener: Observable<OnCreatePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhone($owner: String!) {
        onCreatePhone(owner: $owner) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreatePhoneSubscription>;

  OnUpdatePhoneListener: Observable<OnUpdatePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhone($owner: String!) {
        onUpdatePhone(owner: $owner) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdatePhoneSubscription>;

  OnDeletePhoneListener: Observable<OnDeletePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhone($owner: String!) {
        onDeletePhone(owner: $owner) {
          __typename
          id
          phone
          isPrimary
          isActive
          type
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeletePhoneSubscription>;

  OnCreateOrgListener: Observable<OnCreateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrg($owner: String!) {
        onCreateOrg(owner: $owner) {
          __typename
          id
          name
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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
          description
          address {
            __typename
            id
            address
            city
            state
            province
            country
            createdAt
            updatedAt
            owner
          }
          email
          primaryPhone {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          otherPhones {
            __typename
            id
            phone
            isPrimary
            isActive
            type
            createdAt
            updatedAt
            owner
          }
          tags
          photosUrls
          notes
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
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

  OnCreateLocationInfoListener: Observable<
    OnCreateLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocationInfo($owner: String!) {
        onCreateLocationInfo(owner: $owner) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateLocationInfoSubscription>;

  OnUpdateLocationInfoListener: Observable<
    OnUpdateLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocationInfo($owner: String!) {
        onUpdateLocationInfo(owner: $owner) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateLocationInfoSubscription>;

  OnDeleteLocationInfoListener: Observable<
    OnDeleteLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocationInfo($owner: String!) {
        onDeleteLocationInfo(owner: $owner) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          notes
          notesHistory
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteLocationInfoSubscription>;

  OnCreateShipmentListener: Observable<
    OnCreateShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShipment($owner: String!) {
        onCreateShipment(owner: $owner) {
          __typename
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
          description
          isActive
          startDate
          deliveryDate
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          photosUrls
          notes
          notesHistory
          boxes {
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
            description
            address {
              __typename
              id
              address
              city
              state
              province
              country
              createdAt
              updatedAt
              owner
            }
            email
            primaryPhone {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            otherPhones {
              __typename
              id
              phone
              isPrimary
              isActive
              type
              createdAt
              updatedAt
              owner
            }
            tags
            photosUrls
            notes
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
            description
            isActive
            startDate
            deliveryDate
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            photosUrls
            notes
            notesHistory
            boxes {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          photosUrls
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          locations {
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
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              photosUrls
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            locationLabel
            locationInfoID
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            notes
            isFinal
            tags
            photosUrls
            isActive
            createdAt
            updatedAt
            owner
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
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
              description
              email
              tags
              photosUrls
              notes
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
              description
              isActive
              startDate
              deliveryDate
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              photosUrls
              notes
              notesHistory
              createdAt
              updatedAt
              owner
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            photosUrls
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            locations {
              __typename
              id
              boxID
              locationLabel
              locationInfoID
              notes
              isFinal
              tags
              photosUrls
              isActive
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          locationLabel
          locationInfoID
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            notes
            notesHistory
            createdAt
            updatedAt
            owner
          }
          notes
          isFinal
          tags
          photosUrls
          isActive
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteLocationSubscription>;
}
