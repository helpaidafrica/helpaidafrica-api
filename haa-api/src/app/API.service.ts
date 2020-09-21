/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateImageInput = {
  id?: string | null;
  altTex?: string | null;
  src: string;
  userID: string;
};

export type ModelImageConditionInput = {
  altTex?: ModelStringInput | null;
  src?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelImageConditionInput | null> | null;
  or?: Array<ModelImageConditionInput | null> | null;
  not?: ModelImageConditionInput | null;
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

export enum UserStatus {
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  FLAGGED = "FLAGGED"
}

export type UpdateImageInput = {
  id: string;
  altTex?: string | null;
  src?: string | null;
  userID?: string | null;
};

export type DeleteImageInput = {
  id?: string | null;
};

export type CreateBoxCategoryInput = {
  id?: string | null;
  name: string;
  active: boolean;
};

export type ModelBoxCategoryConditionInput = {
  name?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelBoxCategoryConditionInput | null> | null;
  or?: Array<ModelBoxCategoryConditionInput | null> | null;
  not?: ModelBoxCategoryConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
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

export type UpdateBoxCategoryInput = {
  id: string;
  name?: string | null;
  active?: boolean | null;
};

export type DeleteBoxCategoryInput = {
  id?: string | null;
};

export type CreateApihealthCheckInfoInput = {
  id?: string | null;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message?: string | null;
  lastUpdated?: string | null;
};

export enum ApiHealthStatus {
  UP = "UP",
  DOWN = "DOWN"
}

export type ModelApihealthCheckInfoConditionInput = {
  status?: ModelApiHealthStatusInput | null;
  isActive?: ModelBooleanInput | null;
  proceed?: ModelBooleanInput | null;
  message?: ModelStringInput | null;
  lastUpdated?: ModelStringInput | null;
  and?: Array<ModelApihealthCheckInfoConditionInput | null> | null;
  or?: Array<ModelApihealthCheckInfoConditionInput | null> | null;
  not?: ModelApihealthCheckInfoConditionInput | null;
};

export type ModelApiHealthStatusInput = {
  eq?: ApiHealthStatus | null;
  ne?: ApiHealthStatus | null;
};

export type UpdateApihealthCheckInfoInput = {
  id: string;
  status?: ApiHealthStatus | null;
  isActive?: boolean | null;
  proceed?: boolean | null;
  message?: string | null;
  lastUpdated?: string | null;
};

export type DeleteApihealthCheckInfoInput = {
  id?: string | null;
};

export type CreateAddressInput = {
  id?: string | null;
  label: string;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state?: string | null;
  province?: string | null;
  zipCode?: string | null;
  postalCode?: string | null;
  country: string;
};

export type ModelAddressConditionInput = {
  label?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  province?: ModelStringInput | null;
  zipCode?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAddressConditionInput | null> | null;
  or?: Array<ModelAddressConditionInput | null> | null;
  not?: ModelAddressConditionInput | null;
};

export type UpdateAddressInput = {
  id: string;
  label?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  province?: string | null;
  zipCode?: string | null;
  postalCode?: string | null;
  country?: string | null;
};

export type DeleteAddressInput = {
  id?: string | null;
};

export type CreatePhoneInput = {
  id?: string | null;
  phone?: string | null;
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
  isActive?: ModelBooleanInput | null;
  type?: ModelPhoneTypeInput | null;
  and?: Array<ModelPhoneConditionInput | null> | null;
  or?: Array<ModelPhoneConditionInput | null> | null;
  not?: ModelPhoneConditionInput | null;
};

export type ModelPhoneTypeInput = {
  eq?: PhoneType | null;
  ne?: PhoneType | null;
};

export type UpdatePhoneInput = {
  id: string;
  phone?: string | null;
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
  addressID: string;
  email?: string | null;
  primaryDomain?: string | null;
  privacyPolicy?: string | null;
  tags?: Array<string> | null;
  notes?: string | null;
  isActive: boolean;
};

export type ModelOrgConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  addressID?: ModelIDInput | null;
  email?: ModelStringInput | null;
  primaryDomain?: ModelStringInput | null;
  privacyPolicy?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  and?: Array<ModelOrgConditionInput | null> | null;
  or?: Array<ModelOrgConditionInput | null> | null;
  not?: ModelOrgConditionInput | null;
};

export type UpdateOrgInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  addressID?: string | null;
  email?: string | null;
  primaryDomain?: string | null;
  privacyPolicy?: string | null;
  tags?: Array<string> | null;
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
  addressID: string;
  plusCode?: string | null;
  website?: Array<string> | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
  tags?: Array<string> | null;
};

export type ModelLocationInfoConditionInput = {
  locationLabel?: ModelStringInput | null;
  latitude?: ModelStringInput | null;
  longitude?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  addressID?: ModelIDInput | null;
  plusCode?: ModelStringInput | null;
  website?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
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
  addressID?: string | null;
  plusCode?: string | null;
  website?: Array<string> | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
  tags?: Array<string> | null;
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
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes?: string | null;
  deliveryNotes?: string | null;
  trackingId?: string | null;
  weight?: string | null;
  shipmentReceiver?: string | null;
  status?: ShippingStatus | null;
  statusHistory?: Array<string> | null;
  tags?: Array<string> | null;
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
  startLocationID?: ModelIDInput | null;
  destinationLocationID?: ModelIDInput | null;
  shipmentNotes?: ModelStringInput | null;
  deliveryNotes?: ModelStringInput | null;
  trackingId?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  shipmentReceiver?: ModelStringInput | null;
  status?: ModelShippingStatusInput | null;
  statusHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
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
  startLocationID?: string | null;
  destinationLocationID?: string | null;
  shipmentNotes?: string | null;
  deliveryNotes?: string | null;
  trackingId?: string | null;
  weight?: string | null;
  shipmentReceiver?: string | null;
  status?: ShippingStatus | null;
  statusHistory?: Array<string> | null;
  tags?: Array<string> | null;
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
  boxCategoryID: string;
  isActive: boolean;
  barCode?: string | null;
  qrCode?: string | null;
  barCodePhoto?: string | null;
  qrCodePhoto?: string | null;
  tags?: Array<string> | null;
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
  boxCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  barCode?: ModelStringInput | null;
  qrCode?: ModelStringInput | null;
  barCodePhoto?: ModelStringInput | null;
  qrCodePhoto?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  status?: ModelBoxStatusInput | null;
  statusHistory?: ModelBoxStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelBoxConditionInput | null> | null;
  or?: Array<ModelBoxConditionInput | null> | null;
  not?: ModelBoxConditionInput | null;
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
  boxCategoryID?: string | null;
  isActive?: boolean | null;
  barCode?: string | null;
  qrCode?: string | null;
  barCodePhoto?: string | null;
  qrCodePhoto?: string | null;
  tags?: Array<string> | null;
  status?: BoxStatus | null;
  statusHistory?: Array<BoxStatus> | null;
  internalNotes?: string | null;
  notes?: string | null;
  notesHistory?: Array<string> | null;
};

export type DeleteBoxInput = {
  id?: string | null;
};

export type CreateBoxLocationInput = {
  id?: string | null;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes?: string | null;
  isFinal: boolean;
  tags?: Array<string> | null;
  isActive: boolean;
  trackingInfoID: string;
};

export type ModelBoxLocationConditionInput = {
  boxID?: ModelIDInput | null;
  locationInfoID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  isFinal?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  trackingInfoID?: ModelIDInput | null;
  and?: Array<ModelBoxLocationConditionInput | null> | null;
  or?: Array<ModelBoxLocationConditionInput | null> | null;
  not?: ModelBoxLocationConditionInput | null;
};

export type UpdateBoxLocationInput = {
  id: string;
  boxID?: string | null;
  locationInfoID?: string | null;
  userID?: string | null;
  notes?: string | null;
  isFinal?: boolean | null;
  tags?: Array<string> | null;
  isActive?: boolean | null;
  trackingInfoID?: string | null;
};

export type DeleteBoxLocationInput = {
  id?: string | null;
};

export type CreateTrackingInfoInput = {
  id?: string | null;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags?: Array<string> | null;
  internalNotes?: string | null;
  notes?: string | null;
};

export type ModelTrackingInfoConditionInput = {
  timeOfDelivery?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelTrackingInfoConditionInput | null> | null;
  or?: Array<ModelTrackingInfoConditionInput | null> | null;
  not?: ModelTrackingInfoConditionInput | null;
};

export type UpdateTrackingInfoInput = {
  id: string;
  timeOfDelivery?: string | null;
  userID?: string | null;
  isActive?: boolean | null;
  tags?: Array<string> | null;
  internalNotes?: string | null;
  notes?: string | null;
};

export type DeleteTrackingInfoInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  orgID: string;
  hashedSecret?: string | null;
  isActive: boolean;
  tags?: Array<string> | null;
  status: UserStatus;
  statusHistory?: Array<UserStatus> | null;
  internalNotes?: string | null;
  notes?: string | null;
  rank?: number | null;
  notesHistory?: Array<string> | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  orgID?: ModelIDInput | null;
  hashedSecret?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  status?: ModelUserStatusInput | null;
  statusHistory?: ModelUserStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  rank?: ModelFloatInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null;
  ne?: UserStatus | null;
};

export type ModelUserStatusListInput = {
  eq?: Array<UserStatus | null> | null;
  ne?: Array<UserStatus | null> | null;
  contains?: UserStatus | null;
  notContains?: UserStatus | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  orgID?: string | null;
  hashedSecret?: string | null;
  isActive?: boolean | null;
  tags?: Array<string> | null;
  status?: UserStatus | null;
  statusHistory?: Array<UserStatus> | null;
  internalNotes?: string | null;
  notes?: string | null;
  rank?: number | null;
  notesHistory?: Array<string> | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null;
  altTex?: ModelStringInput | null;
  src?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelImageFilterInput | null> | null;
  or?: Array<ModelImageFilterInput | null> | null;
  not?: ModelImageFilterInput | null;
};

export type ModelBoxCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelBoxCategoryFilterInput | null> | null;
  or?: Array<ModelBoxCategoryFilterInput | null> | null;
  not?: ModelBoxCategoryFilterInput | null;
};

export type ModelApihealthCheckInfoFilterInput = {
  id?: ModelIDInput | null;
  status?: ModelApiHealthStatusInput | null;
  isActive?: ModelBooleanInput | null;
  proceed?: ModelBooleanInput | null;
  message?: ModelStringInput | null;
  lastUpdated?: ModelStringInput | null;
  and?: Array<ModelApihealthCheckInfoFilterInput | null> | null;
  or?: Array<ModelApihealthCheckInfoFilterInput | null> | null;
  not?: ModelApihealthCheckInfoFilterInput | null;
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null;
  label?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  province?: ModelStringInput | null;
  zipCode?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAddressFilterInput | null> | null;
  or?: Array<ModelAddressFilterInput | null> | null;
  not?: ModelAddressFilterInput | null;
};

export type ModelPhoneFilterInput = {
  id?: ModelIDInput | null;
  phone?: ModelStringInput | null;
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
  addressID?: ModelIDInput | null;
  email?: ModelStringInput | null;
  primaryDomain?: ModelStringInput | null;
  privacyPolicy?: ModelStringInput | null;
  tags?: ModelStringInput | null;
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
  addressID?: ModelIDInput | null;
  plusCode?: ModelStringInput | null;
  website?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
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
  startLocationID?: ModelIDInput | null;
  destinationLocationID?: ModelIDInput | null;
  shipmentNotes?: ModelStringInput | null;
  deliveryNotes?: ModelStringInput | null;
  trackingId?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  shipmentReceiver?: ModelStringInput | null;
  status?: ModelShippingStatusInput | null;
  statusHistory?: ModelStringInput | null;
  tags?: ModelStringInput | null;
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
  boxCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  barCode?: ModelStringInput | null;
  qrCode?: ModelStringInput | null;
  barCodePhoto?: ModelStringInput | null;
  qrCodePhoto?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  status?: ModelBoxStatusInput | null;
  statusHistory?: ModelBoxStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelBoxFilterInput | null> | null;
  or?: Array<ModelBoxFilterInput | null> | null;
  not?: ModelBoxFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelBoxLocationFilterInput = {
  id?: ModelIDInput | null;
  boxID?: ModelIDInput | null;
  locationInfoID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  isFinal?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  trackingInfoID?: ModelIDInput | null;
  and?: Array<ModelBoxLocationFilterInput | null> | null;
  or?: Array<ModelBoxLocationFilterInput | null> | null;
  not?: ModelBoxLocationFilterInput | null;
};

export type ModelTrackingInfoFilterInput = {
  id?: ModelIDInput | null;
  timeOfDelivery?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelTrackingInfoFilterInput | null> | null;
  or?: Array<ModelTrackingInfoFilterInput | null> | null;
  not?: ModelTrackingInfoFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  orgID?: ModelIDInput | null;
  hashedSecret?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  tags?: ModelStringInput | null;
  status?: ModelUserStatusInput | null;
  statusHistory?: ModelUserStatusListInput | null;
  internalNotes?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  rank?: ModelFloatInput | null;
  notesHistory?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type CreateImageMutation = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateImageMutation = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteImageMutation = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateBoxCategoryMutation = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateBoxCategoryMutation = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteBoxCategoryMutation = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateApihealthCheckInfoMutation = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateApihealthCheckInfoMutation = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteApihealthCheckInfoMutation = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAddressMutation = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAddressMutation = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAddressMutation = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhoneMutation = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteLocationInfoMutation = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteShipmentMutation = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteBoxMutation = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateBoxLocationMutation = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateBoxLocationMutation = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteBoxLocationMutation = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateTrackingInfoMutation = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateTrackingInfoMutation = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteTrackingInfoMutation = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetImageQuery = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListImagesQuery = {
  __typename: "ModelImageConnection";
  items: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type ListBoxCategorysQuery = {
  __typename: "ModelBoxCategoryConnection";
  items: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoxCategoryQuery = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetApihealthCheckInfoQuery = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListApihealthCheckInfosQuery = {
  __typename: "ModelApihealthCheckInfoConnection";
  items: Array<{
    __typename: "ApihealthCheckInfo";
    id: string;
    status: ApiHealthStatus;
    isActive: boolean;
    proceed: boolean;
    message: string | null;
    lastUpdated: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ListAddresssQuery = {
  __typename: "ModelAddressConnection";
  items: Array<{
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAddressQuery = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPhoneQuery = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhonesQuery = {
  __typename: "ModelPhoneConnection";
  items: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ListOrgsQuery = {
  __typename: "ModelOrgConnection";
  items: Array<{
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrgQuery = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
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
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
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
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
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
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type BoxByOrgIdQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type BoxByShipmentIdQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type BoxByBoxCategoryIdQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type BoxByTitleQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type BoxByQrCodeQuery = {
  __typename: "ModelBoxConnection";
  items: Array<{
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoxLocationQuery = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListBoxLocationsQuery = {
  __typename: "ModelBoxLocationConnection";
  items: Array<{
    __typename: "BoxLocation";
    id: string;
    boxID: string;
    locationInfoID: string;
    userID: string;
    notes: string | null;
    isFinal: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    trackingInfoID: string;
    createdAt: string;
    updatedAt: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    trackingInfo: {
      __typename: "TrackingInfo";
      id: string;
      timeOfDelivery: string;
      userID: string;
      isActive: boolean;
      tags: Array<string> | null;
      internalNotes: string | null;
      notes: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type BoxLocationsByBoxIdQuery = {
  __typename: "ModelBoxLocationConnection";
  items: Array<{
    __typename: "BoxLocation";
    id: string;
    boxID: string;
    locationInfoID: string;
    userID: string;
    notes: string | null;
    isFinal: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    trackingInfoID: string;
    createdAt: string;
    updatedAt: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    trackingInfo: {
      __typename: "TrackingInfo";
      id: string;
      timeOfDelivery: string;
      userID: string;
      isActive: boolean;
      tags: Array<string> | null;
      internalNotes: string | null;
      notes: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type BoxUsersByUserIdQuery = {
  __typename: "ModelBoxLocationConnection";
  items: Array<{
    __typename: "BoxLocation";
    id: string;
    boxID: string;
    locationInfoID: string;
    userID: string;
    notes: string | null;
    isFinal: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    trackingInfoID: string;
    createdAt: string;
    updatedAt: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    trackingInfo: {
      __typename: "TrackingInfo";
      id: string;
      timeOfDelivery: string;
      userID: string;
      isActive: boolean;
      tags: Array<string> | null;
      internalNotes: string | null;
      notes: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type BoxTrackingInfoByTrackingInfoIdQuery = {
  __typename: "ModelBoxLocationConnection";
  items: Array<{
    __typename: "BoxLocation";
    id: string;
    boxID: string;
    locationInfoID: string;
    userID: string;
    notes: string | null;
    isFinal: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    trackingInfoID: string;
    createdAt: string;
    updatedAt: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    trackingInfo: {
      __typename: "TrackingInfo";
      id: string;
      timeOfDelivery: string;
      userID: string;
      isActive: boolean;
      tags: Array<string> | null;
      internalNotes: string | null;
      notes: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type BoxLocationInfoByLocationInfoIdQuery = {
  __typename: "ModelBoxLocationConnection";
  items: Array<{
    __typename: "BoxLocation";
    id: string;
    boxID: string;
    locationInfoID: string;
    userID: string;
    notes: string | null;
    isFinal: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    trackingInfoID: string;
    createdAt: string;
    updatedAt: string;
    locationInfo: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    box: {
      __typename: "Box";
      id: string;
      title: string;
      contents: string;
      size: string;
      orgID: string;
      shipmentID: string;
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
    trackingInfo: {
      __typename: "TrackingInfo";
      id: string;
      timeOfDelivery: string;
      userID: string;
      isActive: boolean;
      tags: Array<string> | null;
      internalNotes: string | null;
      notes: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type ListTrackingInfosQuery = {
  __typename: "ModelTrackingInfoConnection";
  items: Array<{
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetTrackingInfoQuery = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UserByOrgIdQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateImageSubscription = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateImageSubscription = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteImageSubscription = {
  __typename: "Image";
  id: string;
  altTex: string | null;
  src: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateBoxCategorySubscription = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateBoxCategorySubscription = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteBoxCategorySubscription = {
  __typename: "BoxCategory";
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateApihealthCheckInfoSubscription = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateApihealthCheckInfoSubscription = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteApihealthCheckInfoSubscription = {
  __typename: "ApihealthCheckInfo";
  id: string;
  status: ApiHealthStatus;
  isActive: boolean;
  proceed: boolean;
  message: string | null;
  lastUpdated: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAddressSubscription = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAddressSubscription = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAddressSubscription = {
  __typename: "Address";
  id: string;
  label: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string | null;
  province: string | null;
  zipCode: string | null;
  postalCode: string | null;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhoneSubscription = {
  __typename: "Phone";
  id: string;
  phone: string | null;
  isActive: boolean | null;
  type: PhoneType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  description: string | null;
  addressID: string;
  email: string | null;
  primaryPhone: {
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  otherPhones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  }> | null;
  primaryDomain: string | null;
  privacyPolicy: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteLocationInfoSubscription = {
  __typename: "LocationInfo";
  id: string;
  locationLabel: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  addressID: string;
  phones: Array<{
    __typename: "Phone";
    id: string;
    phone: string | null;
    isActive: boolean | null;
    type: PhoneType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  plusCode: string | null;
  website: Array<string> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  address: {
    __typename: "Address";
    id: string;
    label: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string | null;
    province: string | null;
    zipCode: string | null;
    postalCode: string | null;
    country: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteShipmentSubscription = {
  __typename: "Shipment";
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  startDate: string | null;
  deliveryDate: string | null;
  startLocationID: string;
  destinationLocationID: string;
  shipmentNotes: string | null;
  deliveryNotes: string | null;
  trackingId: string | null;
  weight: string | null;
  shipmentReceiver: string | null;
  status: ShippingStatus | null;
  statusHistory: Array<string> | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  startLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
  destinationLocation: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
      boxCategoryID: string;
      isActive: boolean;
      barCode: string | null;
      qrCode: string | null;
      barCodePhoto: string | null;
      qrCodePhoto: string | null;
      tags: Array<string> | null;
      status: BoxStatus;
      statusHistory: Array<BoxStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteBoxSubscription = {
  __typename: "Box";
  id: string;
  title: string;
  contents: string;
  size: string;
  orgID: string;
  shipmentID: string;
  boxCategoryID: string;
  additionalBoxCategories: Array<{
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  }> | null;
  isActive: boolean;
  barCode: string | null;
  qrCode: string | null;
  barCodePhoto: string | null;
  qrCodePhoto: string | null;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: BoxStatus;
  statusHistory: Array<BoxStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  boxCategory: {
    __typename: "BoxCategory";
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  shipment: {
    __typename: "Shipment";
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    startDate: string | null;
    deliveryDate: string | null;
    startLocationID: string;
    destinationLocationID: string;
    shipmentNotes: string | null;
    deliveryNotes: string | null;
    trackingId: string | null;
    weight: string | null;
    shipmentReceiver: string | null;
    status: ShippingStatus | null;
    statusHistory: Array<string> | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    startLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    destinationLocation: {
      __typename: "LocationInfo";
      id: string;
      locationLabel: string;
      latitude: string;
      longitude: string;
      isActive: boolean;
      addressID: string;
      plusCode: string | null;
      website: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
  } | null;
  locations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateBoxLocationSubscription = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateBoxLocationSubscription = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteBoxLocationSubscription = {
  __typename: "BoxLocation";
  id: string;
  boxID: string;
  locationInfoID: string;
  userID: string;
  notes: string | null;
  isFinal: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  isActive: boolean;
  trackingInfoID: string;
  createdAt: string;
  updatedAt: string;
  locationInfo: {
    __typename: "LocationInfo";
    id: string;
    locationLabel: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    addressID: string;
    phones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    plusCode: string | null;
    website: Array<string> | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  box: {
    __typename: "Box";
    id: string;
    title: string;
    contents: string;
    size: string;
    orgID: string;
    shipmentID: string;
    boxCategoryID: string;
    additionalBoxCategories: Array<{
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    }> | null;
    isActive: boolean;
    barCode: string | null;
    qrCode: string | null;
    barCodePhoto: string | null;
    qrCodePhoto: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: BoxStatus;
    statusHistory: Array<BoxStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    boxCategory: {
      __typename: "BoxCategory";
      id: string;
      name: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    shipment: {
      __typename: "Shipment";
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      startDate: string | null;
      deliveryDate: string | null;
      startLocationID: string;
      destinationLocationID: string;
      shipmentNotes: string | null;
      deliveryNotes: string | null;
      trackingId: string | null;
      weight: string | null;
      shipmentReceiver: string | null;
      status: ShippingStatus | null;
      statusHistory: Array<string> | null;
      tags: Array<string> | null;
      notes: string | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    locations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
  trackingInfo: {
    __typename: "TrackingInfo";
    id: string;
    timeOfDelivery: string;
    userID: string;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    };
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    internalNotes: string | null;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateTrackingInfoSubscription = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateTrackingInfoSubscription = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteTrackingInfoSubscription = {
  __typename: "TrackingInfo";
  id: string;
  timeOfDelivery: string;
  userID: string;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  internalNotes: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    name: string;
    orgID: string;
    hashedSecret: string | null;
    isActive: boolean;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    status: UserStatus;
    statusHistory: Array<UserStatus> | null;
    internalNotes: string | null;
    notes: string | null;
    rank: number | null;
    notesHistory: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    org: {
      __typename: "Org";
      id: string;
      name: string;
      description: string | null;
      addressID: string;
      email: string | null;
      primaryDomain: string | null;
      privacyPolicy: string | null;
      tags: Array<string> | null;
      notes: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxLocations: {
      __typename: "ModelBoxLocationConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  orgID: string;
  hashedSecret: string | null;
  isActive: boolean;
  tags: Array<string> | null;
  image: {
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
  images: Array<{
    __typename: "Image";
    id: string;
    altTex: string | null;
    src: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      orgID: string;
      hashedSecret: string | null;
      isActive: boolean;
      tags: Array<string> | null;
      status: UserStatus;
      statusHistory: Array<UserStatus> | null;
      internalNotes: string | null;
      notes: string | null;
      rank: number | null;
      notesHistory: Array<string> | null;
      createdAt: string;
      updatedAt: string;
    };
  }> | null;
  status: UserStatus;
  statusHistory: Array<UserStatus> | null;
  internalNotes: string | null;
  notes: string | null;
  rank: number | null;
  notesHistory: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  org: {
    __typename: "Org";
    id: string;
    name: string;
    description: string | null;
    addressID: string;
    email: string | null;
    primaryPhone: {
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    otherPhones: Array<{
      __typename: "Phone";
      id: string;
      phone: string | null;
      isActive: boolean | null;
      type: PhoneType | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    primaryDomain: string | null;
    privacyPolicy: string | null;
    tags: Array<string> | null;
    image: {
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    images: Array<{
      __typename: "Image";
      id: string;
      altTex: string | null;
      src: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    notes: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    address: {
      __typename: "Address";
      id: string;
      label: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string | null;
      province: string | null;
      zipCode: string | null;
      postalCode: string | null;
      country: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    boxes: {
      __typename: "ModelBoxConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
  } | null;
  boxLocations: {
    __typename: "ModelBoxLocationConnection";
    items: Array<{
      __typename: "BoxLocation";
      id: string;
      boxID: string;
      locationInfoID: string;
      userID: string;
      notes: string | null;
      isFinal: boolean;
      tags: Array<string> | null;
      isActive: boolean;
      trackingInfoID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateImage(
    input: CreateImageInput,
    condition?: ModelImageConditionInput
  ): Promise<CreateImageMutation> {
    const statement = `mutation CreateImage($input: CreateImageInput!, $condition: ModelImageConditionInput) {
        createImage(input: $input, condition: $condition) {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <CreateImageMutation>response.data.createImage;
  }
  async UpdateImage(
    input: UpdateImageInput,
    condition?: ModelImageConditionInput
  ): Promise<UpdateImageMutation> {
    const statement = `mutation UpdateImage($input: UpdateImageInput!, $condition: ModelImageConditionInput) {
        updateImage(input: $input, condition: $condition) {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <UpdateImageMutation>response.data.updateImage;
  }
  async DeleteImage(
    input: DeleteImageInput,
    condition?: ModelImageConditionInput
  ): Promise<DeleteImageMutation> {
    const statement = `mutation DeleteImage($input: DeleteImageInput!, $condition: ModelImageConditionInput) {
        deleteImage(input: $input, condition: $condition) {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <DeleteImageMutation>response.data.deleteImage;
  }
  async CreateBoxCategory(
    input: CreateBoxCategoryInput,
    condition?: ModelBoxCategoryConditionInput
  ): Promise<CreateBoxCategoryMutation> {
    const statement = `mutation CreateBoxCategory($input: CreateBoxCategoryInput!, $condition: ModelBoxCategoryConditionInput) {
        createBoxCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateBoxCategoryMutation>response.data.createBoxCategory;
  }
  async UpdateBoxCategory(
    input: UpdateBoxCategoryInput,
    condition?: ModelBoxCategoryConditionInput
  ): Promise<UpdateBoxCategoryMutation> {
    const statement = `mutation UpdateBoxCategory($input: UpdateBoxCategoryInput!, $condition: ModelBoxCategoryConditionInput) {
        updateBoxCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateBoxCategoryMutation>response.data.updateBoxCategory;
  }
  async DeleteBoxCategory(
    input: DeleteBoxCategoryInput,
    condition?: ModelBoxCategoryConditionInput
  ): Promise<DeleteBoxCategoryMutation> {
    const statement = `mutation DeleteBoxCategory($input: DeleteBoxCategoryInput!, $condition: ModelBoxCategoryConditionInput) {
        deleteBoxCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteBoxCategoryMutation>response.data.deleteBoxCategory;
  }
  async CreateApihealthCheckInfo(
    input: CreateApihealthCheckInfoInput,
    condition?: ModelApihealthCheckInfoConditionInput
  ): Promise<CreateApihealthCheckInfoMutation> {
    const statement = `mutation CreateApihealthCheckInfo($input: CreateApihealthCheckInfoInput!, $condition: ModelApihealthCheckInfoConditionInput) {
        createApihealthCheckInfo(input: $input, condition: $condition) {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
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
    return <CreateApihealthCheckInfoMutation>(
      response.data.createApihealthCheckInfo
    );
  }
  async UpdateApihealthCheckInfo(
    input: UpdateApihealthCheckInfoInput,
    condition?: ModelApihealthCheckInfoConditionInput
  ): Promise<UpdateApihealthCheckInfoMutation> {
    const statement = `mutation UpdateApihealthCheckInfo($input: UpdateApihealthCheckInfoInput!, $condition: ModelApihealthCheckInfoConditionInput) {
        updateApihealthCheckInfo(input: $input, condition: $condition) {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
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
    return <UpdateApihealthCheckInfoMutation>(
      response.data.updateApihealthCheckInfo
    );
  }
  async DeleteApihealthCheckInfo(
    input: DeleteApihealthCheckInfoInput,
    condition?: ModelApihealthCheckInfoConditionInput
  ): Promise<DeleteApihealthCheckInfoMutation> {
    const statement = `mutation DeleteApihealthCheckInfo($input: DeleteApihealthCheckInfoInput!, $condition: ModelApihealthCheckInfoConditionInput) {
        deleteApihealthCheckInfo(input: $input, condition: $condition) {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
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
    return <DeleteApihealthCheckInfoMutation>(
      response.data.deleteApihealthCheckInfo
    );
  }
  async CreateAddress(
    input: CreateAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<CreateAddressMutation> {
    const statement = `mutation CreateAddress($input: CreateAddressInput!, $condition: ModelAddressConditionInput) {
        createAddress(input: $input, condition: $condition) {
          __typename
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
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
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
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
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
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
          isActive
          type
          createdAt
          updatedAt
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
          isActive
          type
          createdAt
          updatedAt
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
          isActive
          type
          createdAt
          updatedAt
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
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
  async CreateBoxLocation(
    input: CreateBoxLocationInput,
    condition?: ModelBoxLocationConditionInput
  ): Promise<CreateBoxLocationMutation> {
    const statement = `mutation CreateBoxLocation($input: CreateBoxLocationInput!, $condition: ModelBoxLocationConditionInput) {
        createBoxLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <CreateBoxLocationMutation>response.data.createBoxLocation;
  }
  async UpdateBoxLocation(
    input: UpdateBoxLocationInput,
    condition?: ModelBoxLocationConditionInput
  ): Promise<UpdateBoxLocationMutation> {
    const statement = `mutation UpdateBoxLocation($input: UpdateBoxLocationInput!, $condition: ModelBoxLocationConditionInput) {
        updateBoxLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <UpdateBoxLocationMutation>response.data.updateBoxLocation;
  }
  async DeleteBoxLocation(
    input: DeleteBoxLocationInput,
    condition?: ModelBoxLocationConditionInput
  ): Promise<DeleteBoxLocationMutation> {
    const statement = `mutation DeleteBoxLocation($input: DeleteBoxLocationInput!, $condition: ModelBoxLocationConditionInput) {
        deleteBoxLocation(input: $input, condition: $condition) {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <DeleteBoxLocationMutation>response.data.deleteBoxLocation;
  }
  async CreateTrackingInfo(
    input: CreateTrackingInfoInput,
    condition?: ModelTrackingInfoConditionInput
  ): Promise<CreateTrackingInfoMutation> {
    const statement = `mutation CreateTrackingInfo($input: CreateTrackingInfoInput!, $condition: ModelTrackingInfoConditionInput) {
        createTrackingInfo(input: $input, condition: $condition) {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <CreateTrackingInfoMutation>response.data.createTrackingInfo;
  }
  async UpdateTrackingInfo(
    input: UpdateTrackingInfoInput,
    condition?: ModelTrackingInfoConditionInput
  ): Promise<UpdateTrackingInfoMutation> {
    const statement = `mutation UpdateTrackingInfo($input: UpdateTrackingInfoInput!, $condition: ModelTrackingInfoConditionInput) {
        updateTrackingInfo(input: $input, condition: $condition) {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <UpdateTrackingInfoMutation>response.data.updateTrackingInfo;
  }
  async DeleteTrackingInfo(
    input: DeleteTrackingInfoInput,
    condition?: ModelTrackingInfoConditionInput
  ): Promise<DeleteTrackingInfoMutation> {
    const statement = `mutation DeleteTrackingInfo($input: DeleteTrackingInfoInput!, $condition: ModelTrackingInfoConditionInput) {
        deleteTrackingInfo(input: $input, condition: $condition) {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
    return <DeleteTrackingInfoMutation>response.data.deleteTrackingInfo;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetImage(id: string): Promise<GetImageQuery> {
    const statement = `query GetImage($id: ID!) {
        getImage(id: $id) {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetImageQuery>response.data.getImage;
  }
  async ListImages(
    filter?: ModelImageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListImagesQuery> {
    const statement = `query ListImages($filter: ModelImageFilterInput, $limit: Int, $nextToken: String) {
        listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
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
    return <ListImagesQuery>response.data.listImages;
  }
  async ListBoxCategorys(
    filter?: ModelBoxCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBoxCategorysQuery> {
    const statement = `query ListBoxCategorys($filter: ModelBoxCategoryFilterInput, $limit: Int, $nextToken: String) {
        listBoxCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
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
    return <ListBoxCategorysQuery>response.data.listBoxCategorys;
  }
  async GetBoxCategory(id: string): Promise<GetBoxCategoryQuery> {
    const statement = `query GetBoxCategory($id: ID!) {
        getBoxCategory(id: $id) {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBoxCategoryQuery>response.data.getBoxCategory;
  }
  async GetApihealthCheckInfo(id: string): Promise<GetApihealthCheckInfoQuery> {
    const statement = `query GetApihealthCheckInfo($id: ID!) {
        getApihealthCheckInfo(id: $id) {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApihealthCheckInfoQuery>response.data.getApihealthCheckInfo;
  }
  async ListApihealthCheckInfos(
    filter?: ModelApihealthCheckInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApihealthCheckInfosQuery> {
    const statement = `query ListApihealthCheckInfos($filter: ModelApihealthCheckInfoFilterInput, $limit: Int, $nextToken: String) {
        listApihealthCheckInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            status
            isActive
            proceed
            message
            lastUpdated
            createdAt
            updatedAt
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
    return <ListApihealthCheckInfosQuery>response.data.listApihealthCheckInfos;
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
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
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
  async GetAddress(id: string): Promise<GetAddressQuery> {
    const statement = `query GetAddress($id: ID!) {
        getAddress(id: $id) {
          __typename
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
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
  async GetPhone(id: string): Promise<GetPhoneQuery> {
    const statement = `query GetPhone($id: ID!) {
        getPhone(id: $id) {
          __typename
          id
          phone
          isActive
          type
          createdAt
          updatedAt
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
            isActive
            type
            createdAt
            updatedAt
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
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
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
  async GetOrg(id: string): Promise<GetOrgQuery> {
    const statement = `query GetOrg($id: ID!) {
        getOrg(id: $id) {
          __typename
          id
          name
          description
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
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
  async GetLocationInfo(id: string): Promise<GetLocationInfoQuery> {
    const statement = `query GetLocationInfo($id: ID!) {
        getLocationInfo(id: $id) {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
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
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
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
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
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
  async GetBox(id: string): Promise<GetBoxQuery> {
    const statement = `query GetBox($id: ID!) {
        getBox(id: $id) {
          __typename
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
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
  async BoxByOrgId(
    orgID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxByOrgIdQuery> {
    const statement = `query BoxByOrgId($orgID: ID, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        BoxByOrgID(orgID: $orgID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (orgID) {
      gqlAPIServiceArguments.orgID = orgID;
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
    return <BoxByOrgIdQuery>response.data.BoxByOrgID;
  }
  async BoxByShipmentId(
    shipmentID?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxByShipmentIdQuery> {
    const statement = `query BoxByShipmentId($shipmentID: ID, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        BoxByShipmentID(shipmentID: $shipmentID, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
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
    return <BoxByShipmentIdQuery>response.data.BoxByShipmentID;
  }
  async BoxByBoxCategoryId(
    boxCategoryID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxByBoxCategoryIdQuery> {
    const statement = `query BoxByBoxCategoryId($boxCategoryID: ID, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        BoxByBoxCategoryId(boxCategoryID: $boxCategoryID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (boxCategoryID) {
      gqlAPIServiceArguments.boxCategoryID = boxCategoryID;
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
    return <BoxByBoxCategoryIdQuery>response.data.BoxByBoxCategoryId;
  }
  async BoxByTitle(
    title?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxByTitleQuery> {
    const statement = `query BoxByTitle($title: String, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        BoxByTitle(title: $title, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (title) {
      gqlAPIServiceArguments.title = title;
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
    return <BoxByTitleQuery>response.data.BoxByTitle;
  }
  async BoxByQrCode(
    qrCode?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxByQrCodeQuery> {
    const statement = `query BoxByQrCode($qrCode: String, $sortDirection: ModelSortDirection, $filter: ModelBoxFilterInput, $limit: Int, $nextToken: String) {
        BoxByQRCode(qrCode: $qrCode, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (qrCode) {
      gqlAPIServiceArguments.qrCode = qrCode;
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
    return <BoxByQrCodeQuery>response.data.BoxByQRCode;
  }
  async GetBoxLocation(id: string): Promise<GetBoxLocationQuery> {
    const statement = `query GetBoxLocation($id: ID!) {
        getBoxLocation(id: $id) {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBoxLocationQuery>response.data.getBoxLocation;
  }
  async ListBoxLocations(
    filter?: ModelBoxLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBoxLocationsQuery> {
    const statement = `query ListBoxLocations($filter: ModelBoxLocationFilterInput, $limit: Int, $nextToken: String) {
        listBoxLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            locationInfoID
            userID
            notes
            isFinal
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            isActive
            trackingInfoID
            createdAt
            updatedAt
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            trackingInfo {
              __typename
              id
              timeOfDelivery
              userID
              isActive
              tags
              internalNotes
              notes
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
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
    return <ListBoxLocationsQuery>response.data.listBoxLocations;
  }
  async BoxLocationsByBoxId(
    boxID?: string,
    locationInfoID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxLocationsByBoxIdQuery> {
    const statement = `query BoxLocationsByBoxId($boxID: ID, $locationInfoID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxLocationFilterInput, $limit: Int, $nextToken: String) {
        BoxLocationsByBoxId(boxID: $boxID, locationInfoID: $locationInfoID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            locationInfoID
            userID
            notes
            isFinal
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            isActive
            trackingInfoID
            createdAt
            updatedAt
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            trackingInfo {
              __typename
              id
              timeOfDelivery
              userID
              isActive
              tags
              internalNotes
              notes
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (boxID) {
      gqlAPIServiceArguments.boxID = boxID;
    }
    if (locationInfoID) {
      gqlAPIServiceArguments.locationInfoID = locationInfoID;
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
    return <BoxLocationsByBoxIdQuery>response.data.BoxLocationsByBoxId;
  }
  async BoxUsersByUserId(
    userID?: string,
    boxID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxUsersByUserIdQuery> {
    const statement = `query BoxUsersByUserId($userID: ID, $boxID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxLocationFilterInput, $limit: Int, $nextToken: String) {
        BoxUsersByUserId(userID: $userID, boxID: $boxID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            locationInfoID
            userID
            notes
            isFinal
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            isActive
            trackingInfoID
            createdAt
            updatedAt
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            trackingInfo {
              __typename
              id
              timeOfDelivery
              userID
              isActive
              tags
              internalNotes
              notes
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userID) {
      gqlAPIServiceArguments.userID = userID;
    }
    if (boxID) {
      gqlAPIServiceArguments.boxID = boxID;
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
    return <BoxUsersByUserIdQuery>response.data.BoxUsersByUserId;
  }
  async BoxTrackingInfoByTrackingInfoId(
    trackingInfoID?: string,
    userID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxTrackingInfoByTrackingInfoIdQuery> {
    const statement = `query BoxTrackingInfoByTrackingInfoId($trackingInfoID: ID, $userID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxLocationFilterInput, $limit: Int, $nextToken: String) {
        BoxTrackingInfoByTrackingInfoId(trackingInfoID: $trackingInfoID, userID: $userID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            locationInfoID
            userID
            notes
            isFinal
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            isActive
            trackingInfoID
            createdAt
            updatedAt
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            trackingInfo {
              __typename
              id
              timeOfDelivery
              userID
              isActive
              tags
              internalNotes
              notes
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (trackingInfoID) {
      gqlAPIServiceArguments.trackingInfoID = trackingInfoID;
    }
    if (userID) {
      gqlAPIServiceArguments.userID = userID;
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
    return <BoxTrackingInfoByTrackingInfoIdQuery>(
      response.data.BoxTrackingInfoByTrackingInfoId
    );
  }
  async BoxLocationInfoByLocationInfoId(
    locationInfoID?: string,
    boxID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoxLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BoxLocationInfoByLocationInfoIdQuery> {
    const statement = `query BoxLocationInfoByLocationInfoId($locationInfoID: ID, $boxID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelBoxLocationFilterInput, $limit: Int, $nextToken: String) {
        BoxLocationInfoByLocationInfoId(locationInfoID: $locationInfoID, boxID: $boxID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boxID
            locationInfoID
            userID
            notes
            isFinal
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            isActive
            trackingInfoID
            createdAt
            updatedAt
            locationInfo {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            box {
              __typename
              id
              title
              contents
              size
              orgID
              shipmentID
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            trackingInfo {
              __typename
              id
              timeOfDelivery
              userID
              isActive
              tags
              internalNotes
              notes
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (locationInfoID) {
      gqlAPIServiceArguments.locationInfoID = locationInfoID;
    }
    if (boxID) {
      gqlAPIServiceArguments.boxID = boxID;
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
    return <BoxLocationInfoByLocationInfoIdQuery>(
      response.data.BoxLocationInfoByLocationInfoId
    );
  }
  async ListTrackingInfos(
    filter?: ModelTrackingInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTrackingInfosQuery> {
    const statement = `query ListTrackingInfos($filter: ModelTrackingInfoFilterInput, $limit: Int, $nextToken: String) {
        listTrackingInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
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
    return <ListTrackingInfosQuery>response.data.listTrackingInfos;
  }
  async GetTrackingInfo(id: string): Promise<GetTrackingInfoQuery> {
    const statement = `query GetTrackingInfo($id: ID!) {
        getTrackingInfo(id: $id) {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTrackingInfoQuery>response.data.getTrackingInfo;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
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
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async UserByOrgId(
    orgID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByOrgIdQuery> {
    const statement = `query UserByOrgId($orgID: ID, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        UserByOrgID(orgID: $orgID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (orgID) {
      gqlAPIServiceArguments.orgID = orgID;
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
    return <UserByOrgIdQuery>response.data.UserByOrgID;
  }
  OnCreateImageListener: Observable<OnCreateImageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateImage {
        onCreateImage {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateImageSubscription>;

  OnUpdateImageListener: Observable<OnUpdateImageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateImage {
        onUpdateImage {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateImageSubscription>;

  OnDeleteImageListener: Observable<OnDeleteImageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteImage {
        onDeleteImage {
          __typename
          id
          altTex
          src
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteImageSubscription>;

  OnCreateBoxCategoryListener: Observable<
    OnCreateBoxCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBoxCategory {
        onCreateBoxCategory {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateBoxCategorySubscription>;

  OnUpdateBoxCategoryListener: Observable<
    OnUpdateBoxCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBoxCategory {
        onUpdateBoxCategory {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateBoxCategorySubscription>;

  OnDeleteBoxCategoryListener: Observable<
    OnDeleteBoxCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBoxCategory {
        onDeleteBoxCategory {
          __typename
          id
          name
          active
          createdAt
          updatedAt
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteBoxCategorySubscription>;

  OnCreateApihealthCheckInfoListener: Observable<
    OnCreateApihealthCheckInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApihealthCheckInfo {
        onCreateApihealthCheckInfo {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateApihealthCheckInfoSubscription>;

  OnUpdateApihealthCheckInfoListener: Observable<
    OnUpdateApihealthCheckInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApihealthCheckInfo {
        onUpdateApihealthCheckInfo {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateApihealthCheckInfoSubscription>;

  OnDeleteApihealthCheckInfoListener: Observable<
    OnDeleteApihealthCheckInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApihealthCheckInfo {
        onDeleteApihealthCheckInfo {
          __typename
          id
          status
          isActive
          proceed
          message
          lastUpdated
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteApihealthCheckInfoSubscription>;

  OnCreateAddressListener: Observable<
    OnCreateAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAddress {
        onCreateAddress {
          __typename
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAddressSubscription>;

  OnUpdateAddressListener: Observable<
    OnUpdateAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAddress {
        onUpdateAddress {
          __typename
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAddressSubscription>;

  OnDeleteAddressListener: Observable<
    OnDeleteAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAddress {
        onDeleteAddress {
          __typename
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAddressSubscription>;

  OnCreatePhoneListener: Observable<OnCreatePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhone {
        onCreatePhone {
          __typename
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePhoneSubscription>;

  OnUpdatePhoneListener: Observable<OnUpdatePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhone {
        onUpdatePhone {
          __typename
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePhoneSubscription>;

  OnDeletePhoneListener: Observable<OnDeletePhoneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhone {
        onDeletePhone {
          __typename
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePhoneSubscription>;

  OnCreateOrgListener: Observable<OnCreateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrg {
        onCreateOrg {
          __typename
          id
          name
          description
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateOrgSubscription>;

  OnUpdateOrgListener: Observable<OnUpdateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrg {
        onUpdateOrg {
          __typename
          id
          name
          description
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateOrgSubscription>;

  OnDeleteOrgListener: Observable<OnDeleteOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrg {
        onDeleteOrg {
          __typename
          id
          name
          description
          addressID
          email
          primaryPhone {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          otherPhones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          primaryDomain
          privacyPolicy
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          isActive
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteOrgSubscription>;

  OnCreateLocationInfoListener: Observable<
    OnCreateLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocationInfo {
        onCreateLocationInfo {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateLocationInfoSubscription>;

  OnUpdateLocationInfoListener: Observable<
    OnUpdateLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocationInfo {
        onUpdateLocationInfo {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateLocationInfoSubscription>;

  OnDeleteLocationInfoListener: Observable<
    OnDeleteLocationInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocationInfo {
        onDeleteLocationInfo {
          __typename
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          phones {
            __typename
            id
            phone
            isActive
            type
            createdAt
            updatedAt
          }
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
          address {
            __typename
            id
            label
            addressLine1
            addressLine2
            city
            state
            province
            zipCode
            postalCode
            country
            createdAt
            updatedAt
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteLocationInfoSubscription>;

  OnCreateShipmentListener: Observable<
    OnCreateShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShipment {
        onCreateShipment {
          __typename
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateShipmentSubscription>;

  OnUpdateShipmentListener: Observable<
    OnUpdateShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShipment {
        onUpdateShipment {
          __typename
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateShipmentSubscription>;

  OnDeleteShipmentListener: Observable<
    OnDeleteShipmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShipment {
        onDeleteShipment {
          __typename
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          notes
          notesHistory
          createdAt
          updatedAt
          startLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          destinationLocation {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
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
              boxCategoryID
              isActive
              barCode
              qrCode
              barCodePhoto
              qrCodePhoto
              tags
              status
              statusHistory
              internalNotes
              notes
              notesHistory
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteShipmentSubscription>;

  OnCreateBoxListener: Observable<OnCreateBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBox {
        onCreateBox {
          __typename
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateBoxSubscription>;

  OnUpdateBoxListener: Observable<OnUpdateBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBox {
        onUpdateBox {
          __typename
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateBoxSubscription>;

  OnDeleteBoxListener: Observable<OnDeleteBoxSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBox {
        onDeleteBox {
          __typename
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          additionalBoxCategories {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
          boxCategory {
            __typename
            id
            name
            active
            createdAt
            updatedAt
            boxes {
              __typename
              nextToken
            }
          }
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          shipment {
            __typename
            id
            name
            description
            isActive
            startDate
            deliveryDate
            startLocationID
            destinationLocationID
            shipmentNotes
            deliveryNotes
            trackingId
            weight
            shipmentReceiver
            status
            statusHistory
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            notesHistory
            createdAt
            updatedAt
            startLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            destinationLocation {
              __typename
              id
              locationLabel
              latitude
              longitude
              isActive
              addressID
              plusCode
              website
              notes
              notesHistory
              tags
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
          }
          locations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteBoxSubscription>;

  OnCreateBoxLocationListener: Observable<
    OnCreateBoxLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBoxLocation {
        onCreateBoxLocation {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateBoxLocationSubscription>;

  OnUpdateBoxLocationListener: Observable<
    OnUpdateBoxLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBoxLocation {
        onUpdateBoxLocation {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateBoxLocationSubscription>;

  OnDeleteBoxLocationListener: Observable<
    OnDeleteBoxLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBoxLocation {
        onDeleteBoxLocation {
          __typename
          id
          boxID
          locationInfoID
          userID
          notes
          isFinal
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          isActive
          trackingInfoID
          createdAt
          updatedAt
          locationInfo {
            __typename
            id
            locationLabel
            latitude
            longitude
            isActive
            addressID
            phones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            plusCode
            website
            notes
            notesHistory
            tags
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
          box {
            __typename
            id
            title
            contents
            size
            orgID
            shipmentID
            boxCategoryID
            additionalBoxCategories {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            isActive
            barCode
            qrCode
            barCodePhoto
            qrCodePhoto
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            notesHistory
            createdAt
            updatedAt
            boxCategory {
              __typename
              id
              name
              active
              createdAt
              updatedAt
            }
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            shipment {
              __typename
              id
              name
              description
              isActive
              startDate
              deliveryDate
              startLocationID
              destinationLocationID
              shipmentNotes
              deliveryNotes
              trackingId
              weight
              shipmentReceiver
              status
              statusHistory
              tags
              notes
              notesHistory
              createdAt
              updatedAt
            }
            locations {
              __typename
              nextToken
            }
          }
          trackingInfo {
            __typename
            id
            timeOfDelivery
            userID
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            internalNotes
            notes
            createdAt
            updatedAt
            boxLocations {
              __typename
              nextToken
            }
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteBoxLocationSubscription>;

  OnCreateTrackingInfoListener: Observable<
    OnCreateTrackingInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTrackingInfo {
        onCreateTrackingInfo {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateTrackingInfoSubscription>;

  OnUpdateTrackingInfoListener: Observable<
    OnUpdateTrackingInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTrackingInfo {
        onUpdateTrackingInfo {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateTrackingInfoSubscription>;

  OnDeleteTrackingInfoListener: Observable<
    OnDeleteTrackingInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTrackingInfo {
        onDeleteTrackingInfo {
          __typename
          id
          timeOfDelivery
          userID
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          internalNotes
          notes
          createdAt
          updatedAt
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            __typename
            id
            name
            orgID
            hashedSecret
            isActive
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            status
            statusHistory
            internalNotes
            notes
            rank
            notesHistory
            createdAt
            updatedAt
            org {
              __typename
              id
              name
              description
              addressID
              email
              primaryDomain
              privacyPolicy
              tags
              notes
              isActive
              createdAt
              updatedAt
            }
            boxLocations {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteTrackingInfoSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          image {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          images {
            __typename
            id
            altTex
            src
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              orgID
              hashedSecret
              isActive
              tags
              status
              statusHistory
              internalNotes
              notes
              rank
              notesHistory
              createdAt
              updatedAt
            }
          }
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
          org {
            __typename
            id
            name
            description
            addressID
            email
            primaryPhone {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            otherPhones {
              __typename
              id
              phone
              isActive
              type
              createdAt
              updatedAt
            }
            primaryDomain
            privacyPolicy
            tags
            image {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            images {
              __typename
              id
              altTex
              src
              userID
              createdAt
              updatedAt
            }
            notes
            isActive
            createdAt
            updatedAt
            address {
              __typename
              id
              label
              addressLine1
              addressLine2
              city
              state
              province
              zipCode
              postalCode
              country
              createdAt
              updatedAt
            }
            boxes {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
          }
          boxLocations {
            __typename
            items {
              __typename
              id
              boxID
              locationInfoID
              userID
              notes
              isFinal
              tags
              isActive
              trackingInfoID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;
}
