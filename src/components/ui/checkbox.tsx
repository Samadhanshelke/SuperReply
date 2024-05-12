"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border-[2px] border-[#D5CDDD] flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[2px] data-[state=checked]:border-[#E11C93] data-[state=checked]:bg-[#FCE8F4] data-[state=checked]:text-[#E11C93]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {/* <Check className="h-4 w-4" /> */}
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.862 5.93395C2.702 5.93395 2.55 5.86995 2.438 5.75795L0.174 3.49395C-0.058 3.26195 -0.058 2.87795 0.174 2.64595C0.406 2.41395 0.79 2.41395 1.022 2.64595L2.862 4.48595L6.974 0.373951C7.206 0.141951 7.59 0.141951 7.822 0.373951C8.054 0.605951 8.054 0.989951 7.822 1.22195L3.286 5.75795C3.174 5.86995 3.022 5.93395 2.862 5.93395Z" fill="#E11C93"/>
</svg>

    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
