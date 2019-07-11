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
import * as Mappers from "../models/virtualMachineExtensionsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineExtensions. */
export class VirtualMachineExtensions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineExtensions.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineExtensionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options?: coreHttp.RequestOptionsBase): Promise<Models.VirtualMachineExtensionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,vmName,vmExtensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineExtensionsCreateOrUpdateResponse>;
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineExtensionsUpdateResponse>
   */
  update(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options?: coreHttp.RequestOptionsBase): Promise<Models.VirtualMachineExtensionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,vmName,vmExtensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineExtensionsUpdateResponse>;
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,vmName,vmExtensionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineExtensionsGetResponse>
   */
  get(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: Models.VirtualMachineExtensionsGetOptionalParams): Promise<Models.VirtualMachineExtensionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, vmName: string, vmExtensionName: string, callback: coreHttp.ServiceCallback<Models.VirtualMachineExtension>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, vmName: string, vmExtensionName: string, options: Models.VirtualMachineExtensionsGetOptionalParams, callback: coreHttp.ServiceCallback<Models.VirtualMachineExtension>): void;
  get(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: Models.VirtualMachineExtensionsGetOptionalParams | coreHttp.ServiceCallback<Models.VirtualMachineExtension>, callback?: coreHttp.ServiceCallback<Models.VirtualMachineExtension>): Promise<Models.VirtualMachineExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineExtensionsGetResponse>;
  }

  /**
   * The operation to get all extensions of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineExtensionsListResponse>
   */
  list(resourceGroupName: string, vmName: string, options?: Models.VirtualMachineExtensionsListOptionalParams): Promise<Models.VirtualMachineExtensionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param callback The callback
   */
  list(resourceGroupName: string, vmName: string, callback: coreHttp.ServiceCallback<Models.VirtualMachineExtensionsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, vmName: string, options: Models.VirtualMachineExtensionsListOptionalParams, callback: coreHttp.ServiceCallback<Models.VirtualMachineExtensionsListResult>): void;
  list(resourceGroupName: string, vmName: string, options?: Models.VirtualMachineExtensionsListOptionalParams | coreHttp.ServiceCallback<Models.VirtualMachineExtensionsListResult>, callback?: coreHttp.ServiceCallback<Models.VirtualMachineExtensionsListResult>): Promise<Models.VirtualMachineExtensionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineExtensionsListResponse>;
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        extensionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        extensionParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.vmExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtensionsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.vmExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.VirtualMachineExtension,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.vmExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.VirtualMachineExtensionUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.vmExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
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
