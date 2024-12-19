import { BriefcaseIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-zinc-900 mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">JobConnect</span>
            </div>
            <p className="text-muted-foreground">
              Connecting talented professionals with outstanding opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Browse Jobs</li>
              <li>Career Resources</li>
              <li>Salary Calculator</li>
              <li>Resume Builder</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Recruitment Solutions</li>
              <li>Pricing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 JobConnect. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}