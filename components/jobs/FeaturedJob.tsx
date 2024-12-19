import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, MapPin, DollarSign } from "lucide-react";

interface FeaturedJobProps {
  id: number;  // تأكد من استقبال المعرف في المكون
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  featured?: boolean;
}

export function FeaturedJob({ id, title, company, location, salary, tags, featured }: FeaturedJobProps) {
  return (
    <Card className={`${featured ? 'border-zinc-200 dark:border-zinc-600' : ''} hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              <a href={`/job-advertisement/${id}`}>{title}</a> {/* الرابط هنا مع المعرف */}
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground mt-1">
              <Building2 className="h-4 w-4" />
              <span>{company}</span>
            </div>
          </div>
          {featured && <Badge>Featured</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {salary}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
