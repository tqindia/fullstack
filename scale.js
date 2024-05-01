import grpc from 'k6/net/grpc';
import {check, sleep} from 'k6';

const client = new grpc.Client();

client.load(['gen'], './todo/v1/todo.proto');

export default() => {
    client.connect('127.0.0.1:8080', {
    });

    const response = client.invoke('cloud.fullstack.v1.TaskService/Get', {
        page: 1,
        pageSize: 100,
    }, {
        metadata: {
            "Cookie": "" 
        }
    });
    console.log(response,"====>")
    check(response, {
        'status is OK': (r) => r && r.status === grpc.StatusOK
    });

    console.log(JSON.stringify(response.message));

    client.close();
    sleep(1);
};