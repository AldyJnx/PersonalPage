"use client";

import { Button } from "@/components/ui/Button";
import { PROJECTS_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilters({
  selectedCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {PROJECTS_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "transition-all",
            selectedCategory === category && "shadow-md"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
