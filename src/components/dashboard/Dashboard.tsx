import React, {useEffect, useState} from 'react';
import FilterInput from './Filter';
import CreateTaskDialog from './CreateTaskDialog';
import TaskColumns from './TaskColumns';
import {GetTasksRequest, SuccessResponse, DeleteTaskRequest, Task, CreateTaskRequest} from '@/cloud/todo/v1/todo_pb';
import apiCloud from '@/services/cloud';
import {useToast} from '@/components/ui/use-toast';
import {Skeleton} from '@/components/ui/skeleton';
import {toast as reactToast} from 'react-hot-toast';
import {Dialog} from "@/components/ui/dialog"

export default function DashboardComponent() {
    const {toast} = useToast();
    const [tasks,
        setTasks] = useState < Task[] > ([]);
    const [filteredTasks,
        setFilteredTasks] = useState < Task[] > ([]);
    const [isChanged,
        setIsChanged] = useState < boolean > (false);
    const [selectedStatus,
        setSelectedStatus] = useState < string > ('3');
    const [title,
        setTitle] = useState('');
    const [description,
        setDescription] = useState('');
    const [open,
        setOpen] = useState(false);

    const [animation,
        setAnimation] = useState(false);
    useEffect(() => {
        fetchData();
    }, [isChanged]);

    useEffect(() => {
        filterTasks();
    }, [selectedStatus, tasks]);

    const fetchData = () => {
        const request = new GetTasksRequest();
        request.page = BigInt(1);
        request.pageSize = BigInt(100);
        reactToast.promise(apiCloud.get(request), {
            loading: 'Fetching Tasks',
            success: 'Task Fetched Succesfully',
            error: 'Something goes wrong'
        }).then((response : any) => {
            setTasks(response.tasks);
            setAnimation(false)
        }).catch((err) => {
            setAnimation(false)
        });
    };

    const filterTasks = () => {
        if (selectedStatus === '3') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter((task) => task.status === parseInt(selectedStatus));
            setFilteredTasks(filtered);
        }
    };

    const statusOptions = ['To Do', 'In Progress', 'Done', 'All'];

    const handleSubmit = (title : string, description : string) => {
        const request = new CreateTaskRequest();
        request.title = title;
        request.description = description;
        request.status = 0;

        reactToast.promise(apiCloud.create(request), {
            loading: 'Creating Tasks',
            success: 'Task Created Successfully',
            error: 'Something goes wrong while creating task'
        }).then((response : any) => {
            const newTask = new Task();
            newTask.title = title;
            newTask.description = description;
            newTask.status = 1;
            setIsChanged(!isChanged);
            setOpen(false);
        });
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-start">
                        <FilterInput
                            selectedStatus={selectedStatus}
                            onSelectChange={(value) => setSelectedStatus(value)}
                            options={statusOptions}/>
                    </div>
                    <div className="flex justify-end">
                        <CreateTaskDialog onSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
            (
            <TaskColumns
                tasks={filteredTasks}
                onUpdate={() => {
                setIsChanged(!isChanged)
            }}/>
            )
        </div>
    );
}
