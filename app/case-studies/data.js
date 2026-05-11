export const cases = [
  {
    index: '01',
    slug: 'nexus',
    product: 'Nexus',
    client: 'Private School, Pakistan',
    title: "Replacing a school's paper-based operations with a modern web platform that every stakeholder can actually use.",
    tags: ['ERP', 'Education', 'Web Platform'],
    link: 'https://nexus.wisemensoft.com',
    problem:
      'The school was running on spreadsheets, physical registers, and manual processes for attendance, fees, exams, and payroll. Reports took hours because the work was scattered across people and papers. Errors in fee calculations caused disputes with parents. Salary processing required manual cross-referencing of attendance sheets.',
    approach:
      'We studied admin staff, teacher, and management workflows before writing a single line of code. The first version shipped as a desktop application in 2020. In 2026 we rebuilt the entire platform as a multi-tenant web system with role-based access, real-time updates, and multi-campus support — designed to scale from a single school to a network of institutions.',
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
    problem:
      'Orders were tracked on paper, inventory was guesswork, and invoices were created manually in Word. As production volume grew, those gaps became costly mistakes — wrong materials ordered, orders delivered incomplete, invoices with errors. The team had no single place to see the status of any job.',
    approach:
      'We shadowed how orders moved from the initial client call through production, quality check, and delivery. PressMaster was designed around that exact flow — each stage visible to the right person, no double entry, and billing generated directly from the completed job record.',
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
    problem:
      'The company needed reliable attendance, leave, task assignment, and internal communication workflows — but enterprise HRMS tools were too expensive, too complex, and built for processes the team did not follow. Their HR ran on shared spreadsheets and manual approvals over WhatsApp.',
    approach:
      'The brief was to build what the team would actually use. We modeled their working hours, configurable arrival and departure thresholds, leave calculation rules, task assignment patterns, and supervision hierarchy directly into the system. Multi-language support was included from day one for the mixed-language team.',
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
