'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { BriefcaseIcon, MoonIcon, SunIcon, GlobeIcon } from 'lucide-react';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="h-6 w-6 text-primary dark:text-zinc-100" />
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              JobConnect
            </span>
          </div></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            href="/jobs" 
            className="text-lg font-medium text-muted-foreground hover:text-primary"
          >
            Find Jobs
          </Link>
          <Link 
            href="/companies" 
            className="text-lg font-medium text-muted-foreground hover:text-primary"
          >
            Companies
          </Link>
          <Link 
            href="/salary" 
            className="text-lg font-medium text-muted-foreground hover:text-primary"
          >
            Salary Guide
          </Link>
          <Link 
            href="/resources" 
            className="text-lg font-medium text-muted-foreground hover:text-primary"
          >
            Resources
          </Link>
          <hr className="my-4" />
          <Button variant="outline" className="w-full">Sign Up</Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}