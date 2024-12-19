'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, MapPin, DollarSign, BookmarkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string; // إضافة خاصية الشعار
  location: string;
  salary: string;
  tags: string[];
  postedAt: string;
}

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card
          key={job.id}
          className="hover:shadow-md transition-shadow bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-600"
        >
          <CardContent className="p-6">
            <div className="flex justify-between">
              {/* الجزء الخاص بالشعار والتفاصيل */}
              <div className="flex space-x-4">
                {/* إضافة الشعار هنا */}
                <div className="flex items-center">
                  <img 
                    src={job.companyLogo}  // عرض الشعار من الرابط
                    alt={`${job.company} logo`}
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"  // تحديد حجم الشعار
                  />
                </div>

                {/* تفاصيل الوظيفة */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                      <a href={`/job-advertisement/${job.id}`}>{job.title}</a>
                    </h3>

                    <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                      <Building2 className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* الجزء الخاص بالتفاعل مثل الحفظ وتاريخ النشر */}
              <div className="flex flex-col items-end justify-between">
                <Button variant="ghost" size="icon">
                  <BookmarkIcon className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">{job.postedAt}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
