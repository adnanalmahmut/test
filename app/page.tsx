'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FeaturedJob } from "@/components/jobs/FeaturedJob";
import { JobList } from "@/components/jobs/JobList";
import { SearchBox } from "@/components/search/SearchBox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { featuredJobs, latestJobs } from "@/lib/data/jobs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <br /><br /><br />
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <section className="bg-blue-100 dark:bg-zinc-600 py-16">
          <Container>
          <div className="text-center mb-8">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
    Find Your Dream Job Today
  </h1>
  <p className="text-xl text-gray-600 dark:text-gray-400">
    Discover thousands of job opportunities with the best companies
  </p>
</div>

            <SearchBox />
          </Container>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-12">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Featured Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <FeaturedJob key={job.id} {...job} />
              ))}
            </div>
          </Container>
        </section>

        {/* Latest Jobs Section */}
        <section className="py-12">
          <Container>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Job Vacancies</h2>
              <span className="text-muted-foreground">{latestJobs.length} jobs found</span>
            </div>
            
            <JobList jobs={latestJobs} />

            {/* Pagination */}
            <div className="mt-8 ">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#"/>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}