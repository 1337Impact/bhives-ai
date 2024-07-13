"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { categories, statuses } from "./data/data";
import ReactSelect from "react-select";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const statuses = [
    { value: "", label: "All" },
    { value: false, label: "Draft" },
    { value: true, label: "Published" },
  ];
  const handleChange = (newValue: any) => {
    table.getColumn("published")?.setFilterValue(newValue.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter posts..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-10 w-[150px] lg:w-[250px] border-2 border-gray-500 rounded-md"
        />

        {!!table.getColumn("title")?.getFilterValue() && (
          <Button
            variant="ghost"
            onClick={() => {
              table.getColumn("title")?.setFilterValue("")
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <ReactSelect
        defaultValue={{ value: "" as string | boolean, label: "All" }}
        className="w-36 border-2 border-gray-500 rounded-md transform scale-95"
        onChange={handleChange}
        options={statuses}
      />
    </div>
  );
}
