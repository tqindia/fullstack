import { TaskService } from "@/cloud/todo/v1/todo_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import type {CreateTaskRequest, UpdateTaskRequest, DeleteTaskRequest, GetTasksRequest, GetTasksResponse, SuccessResponse } from "@/cloud/todo/v1/todo_pb";

const cloudClient = createPromiseClient(
    TaskService,
    createConnectTransport({
        baseUrl: "/api",
    })
);

interface ApiCloud {
    create:  (body: CreateTaskRequest) => Promise<SuccessResponse>;
    update:  (body: UpdateTaskRequest) => Promise<SuccessResponse>;
    delete:  (body: DeleteTaskRequest) => Promise<SuccessResponse>;
    get:  (body: GetTasksRequest) => Promise<GetTasksResponse>;
}

const apiCloud: ApiCloud = {
    create: async (body: CreateTaskRequest):Promise<SuccessResponse> => await cloudClient.create(body, { headers: {  "Access-Control-Allow-Origin": "true" } }),
    update: async (body: UpdateTaskRequest):Promise<SuccessResponse> => await cloudClient.update(body, { headers: {  "Access-Control-Allow-Origin": "true" } }),
    delete: async (body: DeleteTaskRequest):Promise<SuccessResponse> => await cloudClient.delete(body, { headers: {  "Access-Control-Allow-Origin": "true" } }),
    get: async (body: GetTasksRequest):Promise<GetTasksResponse> => await cloudClient.get(body, { headers: {  "Access-Control-Allow-Origin": "true" } }),
};


export default apiCloud;