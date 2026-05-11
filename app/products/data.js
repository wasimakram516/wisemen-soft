export const products = [
  {
    index: '01',
    slug: 'nexus',
    name: 'Nexus',
    type: 'Education ERP',
    status: 'Live',
    statusColor: '#6DB87E',
    summary:
      'Nexus is an all-in-one Education ERP for schools, colleges, and universities. It replaces disconnected spreadsheets and manual registers with a single web platform covering academics, attendance, fees, examinations, staff payroll, and multi-campus management.',
    features: [
      'Student, teacher, and guardian profile management',
      'Daily attendance with auto-absent marking and leave management',
      'Fee structures, monthly vouchers, discounts, and fines',
      'Exam scheduling, result entry, GPA, and grade sheets',
      'Staff salaries, attendance-based deductions, and payroll',
      'Multi-campus management with role-based data scoping',
      'Reporting and analytics across all modules',
      'Custom fields for any entity without code changes',
    ],
    note: 'nexus.wisemensoft.com',
    noteHref: 'https://nexus.wisemensoft.com',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Vercel'],
    seoDescription:
      'Nexus is an all-in-one Education ERP by Wisemen Soft for schools, colleges, and universities. Covers academics, attendance, finance, examinations, payroll, and multi-campus management.',
  },
  {
    index: '02',
    slug: 'pressmaster',
    name: 'PressMaster',
    type: 'Print Management System',
    status: 'Live — Desktop',
    statusColor: '#6DB87E',
    summary:
      'PressMaster gives printing press operations a single workflow from order intake to final delivery. Orders, inventory, client accounts, invoices, and production status all live in one place — so nothing falls through the gaps.',
    features: [
      'Order lifecycle tracking from intake to delivery',
      'Inventory management with automatic consumption tracking',
      'Customer account history and outstanding balances',
      'Invoice and billing generation directly from jobs',
      'Production workflow status visible to the whole team',
      'Daily and monthly business reports',
    ],
    note: null,
    noteHref: null,
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
    seoDescription:
      'PressMaster is a desktop print management system by Wisemen Soft. Covers order tracking, inventory, invoicing, and production workflow for printing press operations.',
  },
  {
    index: '03',
    slug: 'staffsync',
    name: 'StaffSync',
    type: 'Employee Supervision',
    status: 'Live — Desktop',
    statusColor: '#6DB87E',
    summary:
      'StaffSync gives companies structured HR and supervision without enterprise bloat. Attendance, leave management, task tracking, internal messaging, document sharing, and staff surveys — all in one practical desktop system built around how real teams work.',
    features: [
      'Digital check-in and check-out with configurable policies',
      'Attendance analytics and monthly summaries',
      'Leave request and multi-level approval workflow',
      'Task assignment, tracking, and completion management',
      'Internal announcements and team notifications',
      'Document sharing and staff surveys',
      'Multi-language support',
    ],
    note: null,
    noteHref: null,
    stack: ['C#', 'WinForms', 'MySQL', '.NET'],
    seoDescription:
      'StaffSync is a desktop HR and supervision system by Wisemen Soft. Covers attendance, leave approvals, task management, and internal communication for growing companies.',
  },
];
