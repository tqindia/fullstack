import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface FilterInputProps {
    selectedStatus: string;
    onSelectChange: (value: string) => void;
    options: string[];
}

const FilterInput: React.FC<FilterInputProps> = ({ selectedStatus, onSelectChange, options }) => {
    return (
        <div className="flex items-center space-x-4">
            <Label>Filter</Label>
            <Select
                defaultValue={selectedStatus}
                onValueChange={(e: string) => onSelectChange(e)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {options.map((option, i) => (
                            <SelectItem key={i} value={String(i)}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default FilterInput;
