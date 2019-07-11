/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as coreArm from "@azure/core-arm";
import * as Models from "../models";
import * as Mappers from "../models/disksMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a Disks. */
export class Disks {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a Disks.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,diskName,disk,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksCreateOrUpdateResponse>;
  }

  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksUpdateResponse>
   */
  update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksUpdateResponse> {
    return this.beginUpdate(resourceGroupName,diskName,disk,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksUpdateResponse>;
  }

  /**
   * Gets information about a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksGetResponse>
   */
  get(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param callback The callback
   */
  get(resourceGroupName: string, diskName: string, callback: coreHttp.ServiceCallback<Models.Disk>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, diskName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Disk>): void;
  get(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Disk>, callback?: coreHttp.ServiceCallback<Models.Disk>): Promise<Models.DisksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DisksGetResponse>;
  }

  /**
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,diskName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the disks under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  listByResourceGroup(resourceGroupName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DiskList>, callback?: coreHttp.ServiceCallback<Models.DiskList>): Promise<Models.DisksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DisksListByResourceGroupResponse>;
  }

  /**
   * Lists all the disks under a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListResponse>
   */
  list(options?: coreHttp.RequestOptionsBase): Promise<Models.DisksListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  list(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DiskList>, callback?: coreHttp.ServiceCallback<Models.DiskList>): Promise<Models.DisksListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DisksListResponse>;
  }

  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksGrantAccessResponse>
   */
  grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksGrantAccessResponse> {
    return this.beginGrantAccess(resourceGroupName,diskName,grantAccessData,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksGrantAccessResponse>;
  }

  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  revokeAccess(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse> {
    return this.beginRevokeAccess(resourceGroupName,diskName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        disk,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        disk,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        grantAccessData,
        options
      },
      beginGrantAccessOperationSpec,
      options);
  }

  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed
   * after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginRevokeAccess(resourceGroupName: string, diskName: string, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      beginRevokeAccessOperationSpec,
      options);
  }

  /**
   * Lists all the disks under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DiskList>, callback?: coreHttp.ServiceCallback<Models.DiskList>): Promise<Models.DisksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DisksListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the disks under a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListNextResponse>
   */
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DisksListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DiskList>): void;
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DiskList>, callback?: coreHttp.ServiceCallback<Models.DiskList>): Promise<Models.DisksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DisksListNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.Disk,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.DiskUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginGrantAccessOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "grantAccessData",
    mapper: {
      ...Mappers.GrantAccessData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRevokeAccessOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
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
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: coreHttp.OperationSpec = {
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
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
