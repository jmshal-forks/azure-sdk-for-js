import { Response } from "../request/request";

export interface IExecutionContext {
  nextItem: () => Promise<Response<any>>;
  current: () => Promise<Response<any>>;
  hasMoreResults: () => boolean;
  fetchMore?: () => Promise<Response<any>>; // TODO: code smell
}
