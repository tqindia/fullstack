import React, { useState } from 'react';
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog } from '@radix-ui/react-dialog';
import { Task } from '@/cloud/todo/v1/todo_pb';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface UpdateTaskDialogProps {
    task: Task;
    handleDelete: (title: Task) => void;
    handleUpdate: (title: string, description: string, status: number, id: string) => void;
}

const statusOptions = ['To Do', 'In Progress', 'Done'];

const UpdateTaskDialog: React.FC<UpdateTaskDialogProps> = ({ task, handleUpdate, handleDelete }) => {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(JSON.stringify(task.status));
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Card className="w-80 mb-4">
                    <CardHeader>
                        <CardTitle>{task.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{task.description}</p>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update new task</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Title</Label>
                                <Input
                                    id="title"
                                    className="col-span-2 h-8"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Description</Label>
                                <Textarea
                                    className="col-span-2 h-8"
                                    id="description"
                                    placeholder="Type your description here."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Status</Label>
                                <Select defaultValue={status} onValueChange={(e: string) => setStatus(e)}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {statusOptions.map((option, i) => (
                                                <SelectItem key={i} value={JSON.stringify(i)}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={() => {
                            handleDelete(task);
                        }}
                        variant={"destructive"}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            handleUpdate(title, description, parseInt(status), task.id);
                            setIsOpen(false);
                        }}
                    >
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTaskDialog;
