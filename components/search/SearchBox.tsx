'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const locations = [
  "All Locations",
  "Remote",
  "New York, NY",
  "San Francisco, CA",
  "London, UK",
  "Berlin, DE",
  "Toronto, CA",
  "Sydney, AU"
];

export function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Locations");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchQuery, "in", location);
  };

  return (
    <div className="w-full max-w-4xl mx-auto dark:text-white">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 dark:bg-zinc-800">
        <Input
          type="text"
          placeholder="Search jobs, keywords, companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow bg-white dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 placeholder-gray-500 dark:placeholder-gray-400"
        />
        
        <Select value={location} onValueChange={setLocation}>
  <SelectTrigger className="w-full md:w-[200px] bg-white dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600">
    <SelectValue placeholder="Select location" />
  </SelectTrigger>
  
  <SelectContent className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-md shadow-lg">
    {locations.map((loc) => (
      <SelectItem key={loc} value={loc} className="hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-900 dark:text-white">
        {loc}
      </SelectItem>
    ))}
  </SelectContent>
</Select>


        <Button onClick={handleSearch} className="w-full md:w-auto bg-blue-600 dark:bg-zinc-200 text-white dark:text-zinc-700 hover:bg-blue-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200">
          <Search className="h-4 w-4 mr-2" />
          Search Jobs
        </Button>
      </div>
    </div>
  );
}
