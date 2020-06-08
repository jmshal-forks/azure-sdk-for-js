/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/secureScoresMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SecureScores. */
export class SecureScores {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SecureScores.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get secure scores on all your initiatives inside a scope
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoresListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SecureScoresListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SecureScoresList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecureScoresList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecureScoresList>, callback?: msRest.ServiceCallback<Models.SecureScoresList>): Promise<Models.SecureScoresListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecureScoresListResponse>;
  }

  /**
   * Get secure score for a specific initiatives inside a scope
   * @param secureScoreName The secure score initiative name
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoresGetResponse>
   */
  get(secureScoreName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecureScoresGetResponse>;
  /**
   * @param secureScoreName The secure score initiative name
   * @param callback The callback
   */
  get(secureScoreName: string, callback: msRest.ServiceCallback<Models.SecureScoreItem>): void;
  /**
   * @param secureScoreName The secure score initiative name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(secureScoreName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecureScoreItem>): void;
  get(secureScoreName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecureScoreItem>, callback?: msRest.ServiceCallback<Models.SecureScoreItem>): Promise<Models.SecureScoresGetResponse> {
    return this.client.sendOperationRequest(
      {
        secureScoreName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecureScoresGetResponse>;
  }

  /**
   * Get secure scores on all your initiatives inside a scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoresListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecureScoresListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecureScoresList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecureScoresList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecureScoresList>, callback?: msRest.ServiceCallback<Models.SecureScoresList>): Promise<Models.SecureScoresListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecureScoresListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/secureScores",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/secureScores/{secureScoreName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.secureScoreName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreItem
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};