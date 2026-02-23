/**
 * Marketing screenshot paths - mapped per SCREENSHOT_MAP.md
 * Served from public/marketing-screenshots/
 */
const BASE = '/marketing-screenshots';

export const screenshots = {
  hero: `${BASE}/01-HERO-dashboard-overview.png`,
  mattersFiles: `${BASE}/02-FEATURE-matters-files-overview.png`,
  documents: `${BASE}/03-FEATURE-documents-workspace.png`,
  tasksKanban: `${BASE}/04-FEATURE-tasks-kanban-board.png`,
  caseFileAiProcedures: `${BASE}/05-FEATURE-case-file-ai-procedures.png`,
  teamManagement: `${BASE}/06-FEATURE-team-management.png`,
  diaryCalendar: `${BASE}/07-FEATURE-diary-calendar.png`,
  analytics: `${BASE}/08-FEATURE-analytics-business-intelligence.png`,
  login: `${BASE}/09-AUTH-login-page.png`,
  clients: `${BASE}/10-FEATURE-clients-management.png`,
} as const;
