"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Command as CmdkCommand, CommandGroup as CmdkGroup, CommandItem as CmdkItem, CommandEmpty as CmdkEmpty } from "cmdk"
import { SearchIcon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({ className, children, ...props }: React.ComponentProps<typeof CmdkCommand>) {
  return (
    <CmdkCommand
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </CmdkCommand>
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground :data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CmdkCommand.Input
  ref={ref}
  data-slot="command-input"
  className={cn(
    "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  {...props}
  // force value to string for TypeScript
  value={props.value !== undefined ? String(props.value) : undefined}
/>

    </div>
  )
)
CommandInput.displayName = "CommandInput"

function CommandList({ className, children, ...props }: React.ComponentProps<typeof CmdkCommand.List>) {
  return (
    <CmdkCommand.List
      data-slot="command-list"
      className={cn("max-h-[300px] overflow-y-scroll always-visible-scrollbar", className)}
      {...props}
    >
      {children}
    </CmdkCommand.List>
  )
}

const CommandEmpty = CmdkEmpty
const CommandGroup = CmdkGroup
const CommandItem = CmdkItem

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CmdkCommand.Separator>) {
  return (
    <CmdkCommand.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}