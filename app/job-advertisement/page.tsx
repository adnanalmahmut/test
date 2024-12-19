import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FaBuilding, FaMapPin, FaDollarSign, FaBookmark } from "react-icons/fa"; // استخدام react-icons
import { Button } from "@/components/ui/Button"; // تأكد من استخدام الكومبوننت المناسب للـ Button

export default function JobAdvertisementPage() {
  // بيانات الشاغر الوظيفي
  const job = {
    title: "Senior Data Analyst",
    company: "Molham Team",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    tags: ["Full-time", "Remote", "Senior"],
    description: `Human Appeal is a faith-based charity that aims to abolish poverty by providing humanitarian aid, sustainable development programs and championing advocacy for our beneficiaries worldwide. Human Appeal has seven International Field Offices across the globe.

​

Here at Human Appeal we have an exciting opportunity for the Finance Manager Position, to be based at our Gaziantep office Turkey.

​

​CONDITION:

​

Please note: it is a local Contract, for this role you must have the right to work in Turkey.

​

​Main Job Purpose:

​

Manage the HA Finance Department and ensure the robustness of the HA financial management systems and processes, as well as smooth coordination with HA Head Quarter.

​

​Accountabilities:

Supervision of daily operation

​

Ensure that the programmes financial accounting environment is in compliance with HA policies and procedures, donors' rules and regulations and legal requirements. Preparation of the monthly reconciliation of the bank statements.
Ensure the overall accuracy of financial information recorded in general ledger and reflected on the programmes trial balance and other financial reports submitted to HQ, donors and other stakeholders.
Oversee the development and implementation of robust local financial systems and processes (for e.g., payroll and cash management) as appropriate and Ensure that all assets including cash, inventories, accounts receivable and fixed assets are accurately reflected on the HA Financial Statement.
Oversee monthly analysis of the HA trial balance and other financial reports. Such reports include but are not limited to budget comparison reports, grant liability reports, efficiency reports
Lead partner finance-related due diligence and vetting processes and, as necessary, provides technical assistance to meet capacity gaps identified in the process
Regularly familiarizes themselves with relevant local laws including taxation and social security laws and serves as a resource for the office on such laws.
​

Budget management

​

Support the Programmes Department in developing budgets for new programmes/projects and revisions of existing projects.
Ensure that reasonable estimates of direct cost and shared direct cost are used in budgets, based on historical data and current market conditions.
Ensures that accurate indirect cost and support services rates are used in accordance with policies and guidelines for each project
Organise regular review of BVA with programme managers and country directors to address significant variances between approved budgets and actual expenses and plan strategies for addressing them and support budget holders in their budget management
​

Cash flow management

​

Analyze and review quarterly cash forecasts submitted to HQ, to ensure efficient management of cash flows. In addition, ensure that cash forecasts submitted to donors are accurate and based on proper cash flow planning
Ensure availability of sufficient, but not excessive cash in the operating account, by establishing cash balance monitoring systems to trigger timely accounts' replenishment.
​

Bank reconciliation

​

Ensure bank accounts are managed in accordance with finance and treasury policies. Coordinate the opening and closure of bank accounts and maintain an accurate list of bank signatories.
Ensure that monthly bank reconciliations are performed in accordance with the Bank Reconciliation Procedure for all bank accounts and approved bank reconciliation forms are submitted to HQ/Finance on timely basis.
Monitor currency exchange rates and alert management when/if unusual or unexpected changes occur.
Promote efficient and innovative solutions to cash management based on current trends. Such solutions might include electronic banking and mobile banking.
​

Financial staff training

​

Oversee the recruitment, training and development of a competent pool of finance staff that can effectively discharge of the finance function
Oversee the orientation of accounting staff and project managers in relevant financial management practices, HA policies and procedures and donors' financial requirements. In addition, design and implement succession plans for finance staff.
Ensure that job descriptions for Finance employees are up to date. In addition, ensure that performance and development plans are prepared each year.
Conduct the annual performance appraisals for supervised staff, and Make these documents a useful tool for employees to maintain and improve their performance.
Provide feedback on performance appraisal and professional development of Finance staff to Human Resources Department and Head of Mission.
​

Liaise with Head Quarter and In Country Regulators/ Govt. Departments.

​

Oversee the month-end financial closure process and coordinate the timely submission of monthly financial reports to Head Of Mission, donors, human appeal HQ
Supervise the preparation and submission of financial reports to HQ, donors and local government entities based on HA policies, local laws and donors' requirements. When required, provide background information on the nature of costs to donors and other stakeholders.
Ensure that the annual audit for the Country office/ Mission is done within prescribed time.
Ensure the compliance of Tax, social security and other applicable laws in the country
​

NB - Employee duties are not limited only to the above-mentioned accountabilities; he/she may perform other duties as assigned.`,
    postedAt: "2 days ago",
  };

  return (
    <>
      <Header />
      <br /> <br /> <br />
      <Container>
  {/* توزيع الأعمدة باستخدام flex */}
  <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
    {/* قسم الوظيفة الرئيسية */}
    <div className="w-full lg:w-3/4 bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
      {/* القسم العلوي: الشعار والمعلومات */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          {/* عرض شعار الشركة بدلاً من الأيقونة */}
          <div className="overflow-hidden rounded-lg w-16 h-16">
            <img
              src="/images/logo.png" // رابط الشعار
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">{job.title}</h2>
            <div className="flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              <span>{job.company}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              <div className="flex items-center space-x-1">
                <FaMapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaDollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((tag, index) => (
                <span key={index} className="bg-secondary px-4 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* خط رفيع */}
      <hr className="border-zinc-300 dark:border-zinc-600 mb-6" />
      {/* وصف الوظيفة */}
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">Job Description</h3>
        <p>{job.description}</p>
      </div>
    </div>

    {/* قسم السايدبار */}
    <div className="w-full lg:w-1/4 bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md flex flex-col items-center h-fit border border-zinc-100 dark:border-zinc-800">
      <div className="space-y-8 w-full">

        {/* معلومات عن الشركة */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4 text-center">About the Company</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-justify">
            Tech Corp is a leading software development company with a focus on innovation and quality. We believe in fostering a creative and collaborative environment for our employees.
          </p>
        </div>

        {/* معلومات عن التقديم */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4 text-center">How to Apply</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-justify">
            Click the button below to submit your application. We look forward to hearing from you!
          </p>
          <div className="flex justify-center items-center mt-8">
            <Button className="bg-blue-600 dark:bg-zinc-200 text-white dark:text-zinc-700 hover:bg-blue-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200">
              Apply Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* قسم الشواغر الأخرى */}
  <div className="mt-16">
    <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-6">Other Job Opportunities You Might Like</h3>
    <div className="space-y-4">
      
      {/* مثال على بطاقة شاغر آخر */}
      <div className="hover:shadow-md transition-shadow bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-600 p-6 rounded-lg">
  <div className="flex flex-col md:flex-row justify-between gap-4">
    
    {/* جزء الشعار */}
    <div className="flex justify-center md:justify-start items-center">
      <img 
        src="/images/logo.png" 
        alt="Company Logo"
        className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
      />
    </div>

    {/* تفاصيل الوظيفة */}
    <div className="flex flex-col space-y-3 flex-grow">
      <h4 className="text-lg font-semibold hover:text-primary cursor-pointer">Frontend Developer</h4>

      {/* تفاصيل الشركة */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
        <FaBuilding className="h-4 w-4" />
        <span>WebWorks</span>
      </div>

      {/* تفاصيل الموقع والراتب */}
      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
        <div className="flex items-center space-x-1">
          <FaMapPin className="h-4 w-4" />
          <span>New York, NY</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaDollarSign className="h-4 w-4" />
          <span>$100,000 - $120,000</span>
        </div>
      </div>

      {/* تصنيف الوظيفة */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-secondary px-4 py-1 rounded-full text-sm">Full-time</span>
      </div>
    </div>

    {/* الجزء الخاص بالتفاعل مثل الحفظ وتاريخ النشر */}
    <div className="flex flex-col items-end justify-between">
      <Button variant="ghost" size="icon">
        <FaBookmark className="h-4 w-4" />
      </Button>
      <span className="text-sm text-muted-foreground">Posted 1 day ago</span>
    </div>
  </div>
</div>

    </div>
  </div>
</Container>

      <Footer />
    </>
  );
}
