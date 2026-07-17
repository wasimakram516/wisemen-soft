export const cases = [
  {
    index: '01',
    slug: 'nexus',
    product: 'Nexus',
    client: 'Private School, Pakistan',
    title: "Replacing a school's paper-based operations with a modern web platform that every stakeholder can actually use.",
    tags: ['ERP', 'Education', 'Web Platform'],
    link: 'https://nexus.wisemensoft.com',
    intro:
      'Nexus replaced a school\'s spreadsheets and paper registers with a single web platform that staff, teachers, and guardians actually use.',
    problem:
      'The school was running on spreadsheets, physical registers, and manual processes for attendance, fees, exams, and payroll. Reports took hours because the work was scattered across people and papers. Errors in fee calculations caused disputes with parents. Salary processing required manual cross-referencing of attendance sheets.',
    approach:
      'We studied admin staff, teacher, and management workflows before writing a single line of code. The first version shipped as a desktop application in 2020. In 2026 we rebuilt the entire platform as a multi-tenant web system with role-based access, real-time updates, and multi-campus support — designed to scale from a single school to a network of institutions.',
    result:
      'The rebuild removed the manual cross-referencing that used to eat hours every month. Attendance closes itself out automatically at the end of each day, fee vouchers generate on schedule instead of by hand, and payroll pulls straight from the attendance record instead of a second spreadsheet. Multi-campus schools now run from one dashboard instead of one spreadsheet per site, and guardians get their own login instead of a phone call to the office.',
    outcomes: [
      'Attendance moved fully digital with auto-absent marking at end of day',
      'Monthly fee vouchers generated automatically per student based on class fee structure',
      'Exam results, GPA, grade sheets, and report cards tracked end to end',
      'Salary deductions calculated automatically from attendance data',
      'Multi-campus management from one centralised admin dashboard',
      'Guardians and staff access their own data without admin involvement',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Vercel'],
    seoDescription:
      'How Wisemen Soft replaced spreadsheets and manual registers for a Pakistani school with Nexus — a full-stack education ERP covering attendance, fees, payroll, and examinations.',
  },
  {
    index: '02',
    slug: 'pressmaster',
    product: 'PressMaster',
    client: 'Media War, Pakistan',
    title: 'Bringing order to a printing press that needed full visibility into orders, inventory, and billing.',
    tags: ['POS', 'Print', 'Desktop'],
    link: null,
    intro:
      'PressMaster gave a growing print shop one place to see every order, instead of guessing from paper tickets and a notebook.',
    problem:
      'Orders were tracked on paper, inventory was guesswork, and invoices were created manually in Word. As production volume grew, those gaps became costly mistakes — wrong materials ordered, orders delivered incomplete, invoices with errors. The team had no single place to see the status of any job.',
    approach:
      'We shadowed how orders moved from the initial client call through production, quality check, and delivery. PressMaster was designed around that exact flow — each stage visible to the right person, no double entry, and billing generated directly from the completed job record.',
    result:
      'Production staff no longer walk the floor to find out where a job stands — it is visible on screen from intake to delivery. Inventory draws down automatically as materials are consumed instead of being recounted by hand, and invoices generate directly from the completed job record, which cut billing errors close to near zero. Owners get daily and monthly reports without asking anyone to compile them.',
    outcomes: [
      'Order lifecycle tracked from intake to delivery in one screen',
      'Inventory updated automatically as materials are consumed',
      'Invoice generation reduced billing errors to near zero',
      'Client account history and outstanding balances visible at a glance',
      'Daily and monthly production reports became one-click tasks',
    ],
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
    seoDescription:
      'How Wisemen Soft built PressMaster for Media War — a print management system that replaced manual order tracking, paper inventory, and Word-based invoicing.',
  },
  {
    index: '03',
    slug: 'staffsync',
    product: 'StaffSync',
    client: 'Confidential, Europe',
    title: 'Building practical HR infrastructure for a company that had outgrown spreadsheet-based workforce tracking.',
    tags: ['HR', 'Enterprise', 'Desktop'],
    link: null,
    intro:
      'StaffSync gave a European employer the HR workflows spreadsheets and WhatsApp approvals could not hold together, without the cost of enterprise HR software.',
    problem:
      'The company needed reliable attendance, leave, task assignment, and internal communication workflows — but enterprise HRMS tools were too expensive, too complex, and built for processes the team did not follow. Their HR ran on shared spreadsheets and manual approvals over WhatsApp.',
    approach:
      'The brief was to build what the team would actually use. We modeled their working hours, configurable arrival and departure thresholds, leave calculation rules, task assignment patterns, and supervision hierarchy directly into the system. Multi-language support was included from day one for the mixed-language team.',
    result:
      'Attendance now follows configurable arrival and departure rules per role instead of a shared spreadsheet nobody fully trusted. Leave requests move through a digital approval chain instead of a WhatsApp message that could get lost, and tasks are assigned and tracked inside the same system the team already uses for everything else. Built-in multi-language support meant the whole bilingual team could use it from day one.',
    outcomes: [
      'Attendance captured with configurable arrival and departure policy per role',
      'Leave requests routed through a digital approval workflow',
      'Tasks assigned, tracked, and marked complete without a third-party tool',
      'Announcements and internal notifications kept inside one system',
      'Manager surveys and staff feedback became structured and visible',
      'Full multi-language support for a bilingual team',
    ],
    stack: ['C#', 'WinForms', 'MySQL', '.NET'],
    seoDescription:
      'How Wisemen Soft built StaffSync for a European firm — a lightweight HR and supervision platform covering attendance, leave, tasks, and internal messaging without enterprise bloat.',
  },
];
