"use client";

import { Button } from "@/components/ui/Button";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BlogFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilters({
  selectedCategory,
  onCategoryChange,
}: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {BLOG_CATEGORIES.map((category) => (
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
