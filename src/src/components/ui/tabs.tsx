import * as React from "react";
import { cn } from "~/lib/utils";

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="tablist"
    className={cn(
      "bg-muted inline-flex h-10 items-center justify-center rounded-md p-1 text-sm font-medium",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
