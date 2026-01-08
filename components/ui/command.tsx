"use client"

import * as React from "react"
import { Command as CmdkCommand, CommandGroup as CmdkGroup, CommandItem as CmdkItem, CommandEmpty as CmdkEmpty } from "cmdk"
import { cn } from "@/lib/utils"

const Command = ({ children, className, ...props }: any) => (
  <CmdkCommand className={cn("w-full", className)} {...props}>
    {children}
  </CmdkCommand>
)

const CommandInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-9 w-full border-b px-3 text-sm placeholder:text-muted-foreground focus:outline-none",
        className
      )}
      {...props}
    />
  )
)
CommandInput.displayName = "CommandInput"

const CommandList = ({ children, className, ...props }: any) => (
  <div className={cn("max-h-60 overflow-y-auto", className)} {...props}>
    {children}
  </div>
)

const CommandEmpty = CmdkEmpty
const CommandGroup = CmdkGroup
const CommandItem = CmdkItem

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem }
