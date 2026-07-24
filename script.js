const icons = {
  graduationCap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  bookOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5c2.5-1 5-1 8 0v14c-3-1-5.5-1-8 0V5Z"/><path d="M20 5c-2.5-1-5-1-8 0v14c3-1 5.5-1 8 0V5Z"/></svg>',
  clipboardList: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="4" rx="1"/><path d="M9 3a3 3 0 0 1 6 0"/><path d="M6 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1"/><path d="M9 12h6M9 16h6"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M15.5 14a5.5 5.5 0 1 0-7 0c.8.7 1.5 1.8 1.5 3h4c0-1.2.7-2.3 1.5-3Z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/></svg>',
  usersIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h4M8 10v4"/><path d="M15.5 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.6l-.65 6.5A2.5 2.5 0 0 0 4.5 18a2.5 2.5 0 0 0 2.05-1.08L8 15h8l1.45 1.92A2.5 2.5 0 0 0 19.5 18a2.5 2.5 0 0 0 2.5-2.9l-.65-6.5A4 4 0 0 0 17.32 5Z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
};

const categoryIcons = {
  discussion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>',
  project: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>',
  feedback: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/><path d="m8.5 12 2 2 4-4"/></svg>',
  creative: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/></svg>',
};

const categoryLabels = {
  discussion: 'Discussion',
  project: 'Paper',
  feedback: 'Feedback',
  creative: 'Creative',
};

const MODULES = [
  { id: 1, title: 'Introduction', weeks: 'Week 1', startWeek: 1, endWeek: 1, icon: 'lightbulb', color: { bar: '#0ea5e9', light: '#e0f2fe', text: '#0369a1', bg: '#f0f9ff', border: '#bae6fd', ring: '#38bdf8' }, topics: ['Introduction: Media Education for the 21st Century', 'Design Primer'], assignments: [{ name: "Let's get to know each other Digital Story", dueWeek: 1, category: 'creative' }] },
  { id: 2, title: 'Designing Educational Futures, Now', weeks: 'Week 2', startWeek: 2, endWeek: 2, icon: 'sparkles', color: { bar: '#14b8a6', light: '#ccfbf1', text: '#0f766e', bg: '#f0fdfa', border: '#99f6e4', ring: '#2dd4bf' }, topics: ['Designing Social Futures Now', 'The Teacher as Designer', 'Situating Design'], assignments: [{ name: 'KeyWord Discussions (Post and Responses)', dueWeek: 2, category: 'discussion' }] },
  { id: 3, title: 'Designs for Thinking, Designs for Making', weeks: 'Weeks 3–5', startWeek: 3, endWeek: 5, icon: 'layers', color: { bar: '#8b5cf6', light: '#ede9fe', text: '#6d28d9', bg: '#f5f3ff', border: '#ddd6fe', ring: '#a78bfa' }, topics: ['Instructionism, Constructivism, and Constructionism', 'Culture in Design and Designs for Participatory Competencies'], assignments: [{ name: 'KeyWord Discussions (Post and Responses)', dueWeek: 5, category: 'discussion' }, { name: 'Playing with Design', due: 'End of Week 5', dueWeek: 5, category: 'creative' }] },
  { id: 4, title: 'Inclusion by Design', weeks: 'Weeks 6 & 7', startWeek: 6, endWeek: 7, icon: 'usersIcon', color: { bar: '#f43f5e', light: '#ffe4e6', text: '#be123c', bg: '#fff1f2', border: '#fecdd3', ring: '#fb7185' }, topics: ['Digital Spaces & The Construction of Race', 'Designing for Diverse Populations', 'Gender, Difference, and Networked Media'], assignments: [{ name: 'Keyword Discussion (Post and Responses)', dueWeek: 7, category: 'discussion' }, { name: 'Design Project Phase 1 — Proposal', due: 'End of Week 7', dueWeek: 7, category: 'project' }, { name: 'Design Project Phase 1 — Peer Feedback', due: 'End of Week 7', dueWeek: 7, category: 'feedback' }] },
  { id: 5, title: 'Designs for e-Learning Environments', weeks: 'Weeks 8–10', startWeek: 8, endWeek: 10, icon: 'monitor', color: { bar: '#f59e0b', light: '#fef3c7', text: '#b45309', bg: '#fffbeb', border: '#fde68a', ring: '#fbbf24' }, topics: ['E-Learning Environments: Intentional Designs', 'Theory of Online Learning Environments', 'Transformational Learning Experiences: Transforming Practice', 'Flexible Learning: Redesigning Learning Spaces', 'Using Learning Technologies to Improve Assessment'], assignments: [{ name: 'KeyWord Discussions (Post and Responses)', dueWeek: 10, category: 'discussion' }, { name: 'Design Project Phase 2 — Curriculum User Guide Draft', due: 'End of Week 9', dueWeek: 9, category: 'project' }] },
  { id: 6, title: 'Designs for Serious Play', weeks: 'Weeks 11–13', startWeek: 11, endWeek: 13, icon: 'gamepad', color: { bar: '#10b981', light: '#d1fae5', text: '#047857', bg: '#ecfdf5', border: '#a7f3d0', ring: '#34d399' }, topics: ['Digital Natives and Networked Publics', 'Playing to Learn', 'Designs for Serious Play'], assignments: [{ name: 'KeyWord Discussions (Post and Responses)', dueWeek: 13, category: 'discussion' }, { name: 'Design Project Phase 2 — Group Feedback for Curriculum User Guide Draft', due: 'End of Week 11', dueWeek: 11, category: 'feedback' }, { name: 'Design Project Phase 3 — Final Product', due: 'End of Week 13', dueWeek: 13, category: 'project' }, { name: 'Design Project Phase 3 — Final Peer Reflection', due: 'End of Week 13', dueWeek: 13, category: 'discussion' }, { name: 'Final Keyword Reflection', due: 'End of Week 13', dueWeek: 13, category: 'discussion' }, { name: 'Comment on Design Projects', dueWeek: 13, category: 'feedback' }] },
];

const TOTAL_WEEKS = 13;
const FILTERS = [
  { key: 'all', label: 'All', icon: 'layers' },
  { key: 'topics', label: 'Topics', icon: 'bookOpen' },
  { key: 'assignments', label: 'Assignments', icon: 'clipboardList' },
];

let activeId = 1;
let view = 'all';
let hoveredWeek = null;

function escapeHtml(str) { return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function getAllAssignments() { const list = []; MODULES.forEach((m) => { m.assignments.forEach((a) => list.push({ ...a, module: m })); }); return list; }
function getAssignmentsForWeek(week, allAssignments) { return allAssignments.map((a, i) => ({ ...a, globalIndex: i })).filter((a) => Math.ceil(a.dueWeek) === week || (a.dueWeek === week)); }

function render() {
  const activeModule = MODULES.find((m) => m.id === activeId);
  const allAssignments = getAllAssignments();
  const showModules = view === 'all' || view === 'topics';
  const showAssignments = view === 'all' || view === 'assignments';

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page">
      <header class="header">
        <div class="header-inner">
          <div class="header-brand">
            <div class="header-brand-icon">${icons.graduationCap}</div>
            <div>
              <h1 class="header-title">Course Schedule</h1>
              <p class="header-subtitle">${MODULES.length} Modules · ${TOTAL_WEEKS} Weeks · Click any module to see details</p>
            </div>
          </div>
          <div class="filters" id="filters">
            ${FILTERS.map((f) => `<button class="filter-btn ${view === f.key ? 'is-active' : ''}" data-filter="${f.key}">${icons[f.icon]}${f.label}</button>`).join('')}
          </div>
        </div>
      </header>
      <main class="main">
        <div class="chart-card">
          <div class="calendar-grid" id="calendarGrid">
            <div class="grid-label">Week</div>
            ${Array.from({ length: TOTAL_WEEKS }, (_, i) => `<div class="calendar-cell week-header-cell" data-week="${i + 1}"><span class="week-num">${i + 1}</span></div>`).join('')}
            ${showModules ? renderModuleCalendarRow() : ''}
            ${showAssignments ? renderAssignmentCalendarRow(allAssignments) : ''}
          </div>
        </div>
        <div class="detail-panel">
          ${renderDetailPanel(activeModule, allAssignments, showModules, showAssignments)}
        </div>
        <p class="footer-note">Use the filter at the top to show topics, assignments, or both. Click any module or assignment block for details.</p>
      </main>
    </div>
  `;
  attachEvents();
}

function renderModuleCalendarRow() {
  const cells = MODULES.map((m) => {
    const span = m.endWeek - m.startWeek + 1;
    const isActive = m.id === activeId;
    return `<button class="calendar-cell module-cell ${isActive ? 'is-active' : ''}" data-module-id="${m.id}" style="grid-column: span ${span}; background:${m.color.bar}; --ring-color:${m.color.ring};"><span class="module-cell-label">Module ${m.id}</span></button>`;
  }).join('');
  return `<div class="grid-label">Module</div>${cells}`;
}

function renderAssignmentCalendarRow(allAssignments) {
  const cells = Array.from({ length: TOTAL_WEEKS }, (_, i) => {
    const week = i + 1;
    const dueHere = getAssignmentsForWeek(week, allAssignments);
    if (dueHere.length === 0) return `<div class="calendar-cell calendar-cell--empty"></div>`;
    const chips = dueHere.map((a) => `<button class="assignment-chip ${a.module.id === activeId ? 'is-active' : ''}" data-module-id="${a.module.id}" style="background:${a.module.color.light}; color:${a.module.color.text};" title="${escapeHtml(a.name)} (${categoryLabels[a.category] || 'Assignment'})" aria-label="${escapeHtml(a.name)}">${categoryIcons[a.category] || categoryIcons.discussion}</button>`).join('');
    return `<div class="calendar-cell assignment-cell">${chips}</div>`;
  }).join('');
  return `<div class="grid-label">Assignment</div>${cells}`;
}

function renderDetailPanel(activeModule, allAssignments, showModules, showAssignments) {
  const c = activeModule.color;
  const twoCols = showModules && showAssignments;
  return `
    <div class="detail-card" style="border-color:${c.border};">
      <div class="detail-banner" style="background:${c.bg}; border-color:${c.border};">
        <div class="detail-banner-icon" style="background:${c.bar};">${icons[activeModule.icon]}</div>
        <div class="detail-banner-meta">
          <div class="detail-banner-tags">
            <span class="detail-module-label" style="color:${c.text};">Module ${activeModule.id}</span>
            <span class="detail-weeks">${icons.calendar}${activeModule.weeks}</span>
          </div>
          <h2 class="detail-title">${escapeHtml(activeModule.title)}</h2>
        </div>
      </div>
      <div class="detail-body ${twoCols ? 'has-two-cols' : ''}">
        ${showModules ? `<div class="detail-col detail-col--topics ${twoCols ? 'has-border' : ''}"><div class="detail-col-head"><div class="detail-col-head-icon" style="background:${c.bg}; color:${c.text};">${icons.bookOpen}</div><h3>Topics</h3></div><ul class="detail-list">${activeModule.topics.map((t) => `<li class="topic-item"><span class="topic-dot" style="background:${c.bar};"></span><span>${escapeHtml(t)}</span></li>`).join('')}</ul></div>` : ''}
        ${showAssignments ? `<div class="detail-col detail-col--assignments"><div class="detail-col-head"><div class="detail-col-head-icon" style="background:${c.bg}; color:${c.text};">${icons.clipboardList}</div><h3>Assignments</h3></div><ul class="detail-list">${activeModule.assignments.map((a) => { const iconSvg = categoryIcons[a.category] || categoryIcons.discussion; const label = categoryLabels[a.category] || 'Assignment'; return `<li class="assignment-item"><div><span style="color:#334155;">${escapeHtml(a.name)}</span><div class="assignment-tags"><span class="assignment-category" style="background:${c.bg}; color:${c.text};">${iconSvg}${label}</span>${a.due ? `<span class="assignment-due" style="background:${c.bg}; color:${c.text};">Due ${escapeHtml(a.due)}</span>` : ''}</div></div></li>`; }).join('')}</ul></div>` : ''}
      </div>
    </div>`;
}

function attachEvents() {
  document.querySelectorAll('[data-filter]').forEach((btn) => btn.addEventListener('click', () => { view = btn.dataset.filter; render(); }));
  document.querySelectorAll('[data-module-id]').forEach((btn) => btn.addEventListener('click', () => { activeId = Number(btn.dataset.moduleId); render(); }));
  document.querySelectorAll('.week-header-cell').forEach((cell) => cell.addEventListener('mouseenter', () => { hoveredWeek = Number(cell.dataset.week); updateHoverOnly(); }));
  const calendar = document.getElementById('calendarGrid');
  if (calendar) calendar.addEventListener('mouseleave', () => { hoveredWeek = null; updateHoverOnly(); });
}

function updateHoverOnly() {
  document.querySelectorAll('.week-header-cell').forEach((cell, i) => cell.classList.toggle('is-hovered', hoveredWeek === i + 1));
}

document.addEventListener('DOMContentLoaded', render);