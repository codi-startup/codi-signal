import './styles.css';

const icon = (name, size = 18) => {
  const paths = {
    signal: '<path d="M4 12a8 8 0 0 1 8-8"/><path d="M4 16a12 12 0 0 1 12-12"/><path d="M4 8a4 4 0 0 1 4-4"/><path d="M4 20h.01"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    workflow: '<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h4a4 4 0 0 1 4 4v4.5"/>',
    activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    play: '<path d="m8 5 11 7-11 7V5Z"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    bolt: '<path d="m13 2-9 12h7l-2 8 9-12h-7l2-8Z"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    sliders: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="11" cy="18" r="2"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    dots: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>',
    info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8h.01"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`;
};

const signals = [
  { id: 'sla-breach', kind: 'SLA', title: 'Checkout latency breached', detail: 'p95 above 2.4s for 5 minutes', source: 'checkout-api', time: '2 min ago', severity: 'critical', accent: 'red', payload: '{ "p95": 2.84, "window": "5m" }' },
  { id: 'deploy-failure', kind: 'DEPLOY', title: 'Release pipeline failed', detail: 'payments-service · step 4/7', source: 'github-actions', time: '8 min ago', severity: 'high', accent: 'amber', payload: '{ "branch": "release/2.8", "step": 4 }' },
  { id: 'usage-spike', kind: 'USAGE', title: 'Usage spike detected', detail: 'Workspace exceeded 80% allocation', source: 'billing-meter', time: '16 min ago', severity: 'medium', accent: 'blue', payload: '{ "workspace": "acme-inc", "usage": 84 }' },
  { id: 'feedback-loop', kind: 'FEEDBACK', title: 'Customer sentiment shifted', detail: 'Negative trend in onboarding cohort', source: 'insights-feed', time: '24 min ago', severity: 'low', accent: 'purple', payload: '{ "cohort": "oct-2026", "delta": -0.18 }' },
];

const workflows = [
  { id: 'alert-route', name: 'Route critical alerts', description: 'Escalate production signals to the right owner.', status: 'Active', trigger: 'Signal severity is critical', condition: 'p95 latency > 2.4s', action: 'Create incident + notify on-call', threshold: '2.4', runs: 1284, health: 99.2, lastRun: '2 min ago', steps: ['Signal received', 'Evaluate severity', 'Check latency threshold', 'Create incident', 'Notify on-call'] },
  { id: 'release-guard', name: 'Release guardrail', description: 'Pause a release when a deployment health check fails.', status: 'Active', trigger: 'Deployment check failed', condition: 'Environment is production', action: 'Pause release + open thread', threshold: 'production', runs: 642, health: 98.6, lastRun: '8 min ago', steps: ['Deployment failed', 'Read environment', 'Check production rule', 'Pause release', 'Open incident thread'] },
  { id: 'usage-watch', name: 'Usage watch', description: 'Keep customer teams ahead of allocation limits.', status: 'Testing', trigger: 'Usage crosses allocation limit', condition: 'Usage is above 80%', action: 'Send workspace digest', threshold: '80', runs: 94, health: 96.1, lastRun: '16 min ago', steps: ['Usage signal received', 'Read workspace plan', 'Evaluate allocation', 'Build digest', 'Send to owner'] },
  { id: 'sentiment-loop', name: 'Close the feedback loop', description: 'Turn a sentiment shift into a human follow-up.', status: 'Paused', trigger: 'Sentiment shifts negative', condition: 'Delta is below -0.15', action: 'Create research task', threshold: '-0.15', runs: 318, health: 97.4, lastRun: '24 min ago', steps: ['Feedback received', 'Group cohort', 'Evaluate sentiment delta', 'Create research task', 'Assign product owner'] },
];

const initialRuns = [
  { id: 'run-10428', signal: 'Checkout latency breached', workflow: 'Route critical alerts', status: 'Succeeded', duration: '1.82s', time: '2 min ago', step: 'Notify on-call', accent: 'green' },
  { id: 'run-10427', signal: 'Release pipeline failed', workflow: 'Release guardrail', status: 'Succeeded', duration: '2.41s', time: '8 min ago', step: 'Open incident thread', accent: 'green' },
  { id: 'run-10426', signal: 'Usage spike detected', workflow: 'Usage watch', status: 'Succeeded', duration: '1.14s', time: '16 min ago', step: 'Send to owner', accent: 'green' },
  { id: 'run-10425', signal: 'Customer sentiment shifted', workflow: 'Close the feedback loop', status: 'Skipped', duration: '0.48s', time: '24 min ago', step: 'Rule not matched', accent: 'muted' },
  { id: 'run-10424', signal: 'Checkout latency breached', workflow: 'Route critical alerts', status: 'Succeeded', duration: '1.76s', time: '31 min ago', step: 'Notify on-call', accent: 'green' },
];

const state = {
  view: 'overview',
  selectedSignal: 'sla-breach',
  selectedWorkflow: 'alert-route',
  signalFilter: 'All signals',
  runFilter: 'All runs',
  query: '',
  running: false,
  toast: null,
  metrics: { runs: 4288, success: 98.4, avg: 1.86, signals: 6312 },
  runs: [...initialRuns],
};

const app = document.querySelector('#app');

const currentSignal = () => signals.find((signal) => signal.id === state.selectedSignal) || signals[0];
const currentWorkflow = () => workflows.find((workflow) => workflow.id === state.selectedWorkflow) || workflows[0];
const filteredSignals = () => signals.filter((signal) => {
  const query = state.query.toLowerCase();
  const matchesQuery = !query || `${signal.title} ${signal.detail} ${signal.source}`.toLowerCase().includes(query);
  const matchesFilter = state.signalFilter === 'All signals' || signal.severity === state.signalFilter.toLowerCase();
  return matchesQuery && matchesFilter;
});
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
const statusTone = (status) => status === 'Active' ? 'active' : status === 'Testing' ? 'testing' : 'paused';

function toast(message, tone = 'success') {
  state.toast = { message, tone };
  render();
  window.setTimeout(() => {
    state.toast = null;
    render();
  }, 3200);
}

function metricCard(label, value, change, iconName, note) {
  return `<article class="metric-card">
    <div class="metric-card__top"><span class="eyebrow">${label}</span><span class="metric-icon">${icon(iconName, 16)}</span></div>
    <div class="metric-value">${value}</div>
    <div class="metric-meta"><span class="trend-up">${change}</span><span>${note}</span></div>
  </article>`;
}

function signalRow(signal, compact = false) {
  const selected = state.selectedSignal === signal.id ? 'is-selected' : '';
  return `<button class="signal-row ${selected}" data-select-signal="${signal.id}">
    <span class="signal-mark signal-mark--${signal.accent}">${icon(signal.kind === 'DEPLOY' ? 'workflow' : signal.kind === 'USAGE' ? 'activity' : 'signal', 16)}</span>
    <span class="signal-row__body"><span class="signal-row__title">${signal.title}</span><span class="signal-row__detail">${signal.detail}</span></span>
    <span class="signal-row__side"><span class="severity severity--${signal.severity}">${signal.severity}</span><span class="muted">${signal.time}</span></span>
    ${compact ? '' : `<span class="row-arrow">${icon('chevron', 15)}</span>`}
  </button>`;
}

function workflowRow(workflow) {
  const selected = state.selectedWorkflow === workflow.id ? 'is-selected' : '';
  return `<button class="workflow-row ${selected}" data-select-workflow="${workflow.id}">
    <span class="workflow-status-dot workflow-status-dot--${statusTone(workflow.status)}"></span>
    <span class="workflow-row__body"><span class="workflow-row__title">${workflow.name}</span><span class="workflow-row__detail">${workflow.description}</span></span>
    <span class="workflow-row__side"><span class="status-pill status-pill--${statusTone(workflow.status)}">${workflow.status}</span><span class="muted">${workflow.lastRun}</span></span>
    <span class="row-arrow">${icon('chevron', 15)}</span>
  </button>`;
}

function canvasNode(step, index, tone = '') {
  return `<div class="canvas-node ${tone}"><span class="canvas-node__index">0${index + 1}</span><div><span class="canvas-node__label">${index === 0 ? 'TRIGGER' : index === currentWorkflow().steps.length - 1 ? 'ACTION' : 'RULE'}</span><strong>${step}</strong></div><span class="node-grip">${icon(index === 0 ? 'signal' : index === currentWorkflow().steps.length - 1 ? 'bolt' : 'sliders', 16)}</span></div>${index < currentWorkflow().steps.length - 1 ? '<div class="canvas-connector"><span></span></div>' : ''}`;
}

function overviewView() {
  const selected = currentSignal();
  const visibleSignals = filteredSignals();
  return `<section class="page page-overview">
    <div class="page-heading"><div><span class="eyebrow eyebrow--green">Operational workspace <span class="pulse-dot"></span> Live</span><h1>Operational clarity,<br><em>on command.</em></h1><p>One signal in. One accountable action out. Keep every automation legible.</p></div><div class="heading-actions"><button class="btn btn--ghost" data-action="docs">${icon('book', 16)} Read the model</button><button class="btn btn--primary" data-run-signal="${selected.id}">${icon('play', 15)} Simulate signal</button></div></div>
    <div class="metrics-grid">${metricCard('Total runs', state.metrics.runs.toLocaleString(), '+12.8%', 'activity', 'vs previous 7 days')}${metricCard('Success rate', `${state.metrics.success}%`, '+1.6%', 'check', 'across active flows')}${metricCard('Avg. duration', `${state.metrics.avg}s`, '-18.4%', 'clock', 'from trigger to action')}${metricCard('Signals processed', state.metrics.signals.toLocaleString(), '+284', 'signal', 'this workspace')}</div>
    <div class="overview-grid">
      <article class="panel signal-panel"><div class="panel-heading"><div><span class="eyebrow">Signal stream</span><h2>What needs your attention</h2></div><button class="icon-btn" data-view="signals" aria-label="Open signals">${icon('external', 16)}</button></div><div class="signal-toolbar"><span class="live-label"><span class="pulse-dot"></span> Ingesting live</span><button class="filter-chip" data-filter-signal="All signals">${icon('sliders', 14)} ${state.signalFilter}</button></div><div class="signal-list">${visibleSignals.length ? visibleSignals.map((signal) => signalRow(signal)).join('') : `<div class="empty-state">${icon('search', 20)}<strong>No signals match this view.</strong><span>Try a different filter or search from the top bar.</span></div>`}</div></article>
      <article class="panel workflow-panel"><div class="panel-heading"><div><span class="eyebrow">Automation health</span><h2>Active workflows</h2></div><button class="icon-btn" data-view="workflows" aria-label="Open workflows">${icon('external', 16)}</button></div><div class="workflow-list">${workflows.slice(0, 3).map(workflowRow).join('')}</div><button class="panel-link" data-view="workflows">View all workflows ${icon('arrow', 15)}</button></article>
    </div>
    <div class="bottom-grid"><article class="panel trajectory-panel"><div class="panel-heading"><div><span class="eyebrow">Execution trajectory</span><h2>Runs over the last 7 days</h2></div><span class="panel-stat"><strong>+18.2%</strong> volume</span></div><div class="chart-wrap"><div class="chart-y"><span>900</span><span>600</span><span>300</span><span>0</span></div><div class="chart"><div class="chart-grid"><i></i><i></i><i></i><i></i></div><div class="bars">${[38,52,46,68,61,79,91].map((height, index) => `<div class="bar-column"><span class="bar-value">${[312,428,366,548,492,634,728][index]}</span><div class="bar" style="height:${height}%"><span></span></div><small>${['MON','TUE','WED','THU','FRI','SAT','SUN'][index]}</small></div>`).join('')}</div></div></article><article class="panel docs-panel"><div class="docs-mark">${icon('book', 18)}</div><span class="eyebrow">Signal intelligence</span><h2>Make every run explain itself.</h2><p>Codi Signal connects the event, the rule and the next action so your team can move fast without losing the thread.</p><button class="panel-link" data-action="docs">Explore the operating model ${icon('arrow', 15)}</button></article></div>
    ${selectedSignalCard(selected)}
  </section>`;
}

function selectedSignalCard(signal) {
  return `<div class="selected-signal-bar"><div class="selected-signal-icon signal-mark--${signal.accent}">${icon('signal', 17)}</div><div><span class="eyebrow">Selected signal</span><strong>${signal.title}</strong><span>${signal.source} · ${signal.time}</span></div><code>${escapeHtml(signal.payload)}</code><button class="btn btn--small btn--primary" data-run-signal="${signal.id}">${icon('play', 14)} Run now</button></div>`;
}

function workflowsView() {
  const workflow = currentWorkflow();
  return `<section class="page"><div class="page-heading page-heading--compact"><div><span class="eyebrow eyebrow--green">Automation design</span><h1>Workflows that show their work.</h1><p>Compose the path from operational signal to accountable action.</p></div><button class="btn btn--primary" data-run-signal="${currentSignal().id}">${icon('play', 15)} Test selected signal</button></div><div class="workflows-layout"><article class="panel workflow-directory"><div class="panel-heading"><div><span class="eyebrow">Library</span><h2>Workflow catalog</h2></div><button class="icon-btn" data-action="new-workflow">${icon('plus', 16)}</button></div><div class="directory-list">${workflows.map(workflowRow).join('')}</div><div class="directory-foot"><span><span class="status-dot status-dot--green"></span> ${workflows.filter((item) => item.status === 'Active').length} active</span><span><span class="status-dot status-dot--amber"></span> ${workflows.filter((item) => item.status === 'Testing').length} testing</span><span><span class="status-dot status-dot--muted"></span> ${workflows.filter((item) => item.status === 'Paused').length} paused</span></div></article><article class="panel workflow-detail"><div class="workflow-detail__head"><div><span class="eyebrow">Workflow / ${workflow.id}</span><h2>${workflow.name}</h2><p>${workflow.description}</p></div><div class="workflow-detail__actions"><button class="icon-btn" data-action="workflow-menu">${icon('dots', 17)}</button><button class="btn btn--small ${workflow.status === 'Paused' ? 'btn--primary' : 'btn--ghost'}" data-toggle-workflow="${workflow.id}">${workflow.status === 'Paused' ? icon('play', 14) : icon('pause', 14)} ${workflow.status === 'Paused' ? 'Resume' : 'Pause'}</button></div></div><div class="canvas-shell"><div class="canvas-toolbar"><span><span class="status-dot status-dot--${statusTone(workflow.status) === 'active' ? 'green' : statusTone(workflow.status) === 'testing' ? 'amber' : 'muted'}"></span> ${workflow.status}</span><span class="canvas-toolbar__hint">Drag to rearrange <span>·</span> Click a node to inspect</span><button class="icon-btn">${icon('sliders', 15)}</button></div><div class="canvas-track">${workflow.steps.map((step, index) => canvasNode(step, index, index === 2 ? 'canvas-node--focus' : '')).join('')}</div></div><div class="rule-editor"><div class="rule-editor__head"><div><span class="eyebrow">Rule editor</span><h3>When should this workflow act?</h3></div><span class="saved-label">${icon('check', 13)} Saved locally</span></div><div class="rule-fields"><label>Trigger <span>Required</span><div class="field field--readonly">${icon('signal', 14)} ${workflow.trigger}</div></label><label>Condition <span>Editable</span><div class="field"><span>${workflow.id === 'alert-route' ? 'p95 latency above' : workflow.condition}</span><input data-threshold="${workflow.id}" value="${escapeHtml(workflow.threshold)}" aria-label="Threshold" /><span class="field-suffix">${workflow.id === 'alert-route' ? 'seconds' : ''}</span></div></label><label>Action <span>Required</span><div class="field field--readonly">${icon('bolt', 14)} ${workflow.action}</div></label></div></div></article></div></section>`;
}

function signalsView() {
  const selected = currentSignal();
  return `<section class="page"><div class="page-heading page-heading--compact"><div><span class="eyebrow eyebrow--green">Signal library</span><h1>Everything starts with a signal.</h1><p>Inspect the event, understand its shape and choose where it should go next.</p></div><span class="heading-note">${signals.length} seeded events <span class="pulse-dot"></span></span></div><div class="signals-layout"><article class="panel signal-library"><div class="panel-heading"><div><span class="eyebrow">Incoming events</span><h2>Signal library</h2></div><button class="filter-chip">${icon('sliders', 14)} All signals</button></div><div class="signal-list">${signals.map((signal) => signalRow(signal)).join('')}</div></article><article class="panel signal-inspector"><div class="inspector-top"><div class="signal-mark signal-mark--${selected.accent}">${icon('signal', 20)}</div><span class="severity severity--${selected.severity}">${selected.severity}</span></div><span class="eyebrow">${selected.kind} / ${selected.source}</span><h2>${selected.title}</h2><p>${selected.detail}</p><div class="payload-label"><span>Payload</span><button class="copy-btn" data-action="copy-payload">Copy ${icon('external', 13)}</button></div><pre>${escapeHtml(selected.payload)}</pre><div class="inspector-actions"><button class="btn btn--primary" data-run-signal="${selected.id}">${icon('play', 15)} Simulate this signal</button><button class="btn btn--ghost" data-action="map-signal">Map to workflow</button></div><div class="inspector-note"><span class="note-icon">${icon('info', 15)}</span><span><strong>Signals are immutable.</strong> A run stores the original payload so the action can always be traced back to its source.</span></div></article></div></section>`;
}

function runsView() {
  const filtered = state.runs.filter((run) => state.runFilter === 'All runs' || run.status === state.runFilter);
  return `<section class="page"><div class="page-heading page-heading--compact"><div><span class="eyebrow eyebrow--green">Execution history</span><h1>A clear trail from signal to action.</h1><p>Every run is a small piece of operational memory.</p></div><div class="heading-actions"><button class="filter-chip">${icon('sliders', 14)} ${state.runFilter}</button><button class="btn btn--ghost" data-action="export-runs">${icon('external', 15)} Export log</button></div></div><article class="panel runs-panel"><div class="runs-summary"><div><span class="eyebrow">Last 24 hours</span><strong>${state.runs.length + 4283} runs</strong></div><div class="run-summary-stat"><span class="status-dot status-dot--green"></span><strong>98.4%</strong><span>success rate</span></div><div class="run-summary-stat"><span class="status-dot status-dot--amber"></span><strong>1</strong><span>needs review</span></div><div class="run-summary-stat"><span class="status-dot status-dot--muted"></span><strong>1.86s</strong><span>avg. duration</span></div></div><div class="run-table"><div class="run-table__head"><span>Signal</span><span>Workflow</span><span>Status</span><span>Duration</span><span>Completed</span><span></span></div>${filtered.map((run) => `<div class="run-table__row"><span class="run-signal"><span class="run-check run-check--${run.accent}">${icon(run.status === 'Skipped' ? 'pause' : 'check', 13)}</span><span>${run.signal}</span></span><span class="muted">${run.workflow}</span><span><span class="status-pill status-pill--${run.accent === 'green' ? 'active' : 'paused'}">${run.status}</span></span><span class="muted">${run.duration}</span><span class="muted">${run.time}</span><button class="icon-btn" data-action="inspect-run" aria-label="Inspect run">${icon('chevron', 15)}</button></div>`).join('')}</div>${filtered.length === 0 ? `<div class="empty-state">${icon('activity', 20)}<strong>No runs match this filter.</strong><span>Simulate a signal to create a new run.</span></div>` : ''}</article></section>`;
}

function docsModal() {
  return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="docs-title" onclick="event.stopPropagation()"><button class="modal-close icon-btn" data-action="close-modal">${icon('close', 17)}</button><span class="eyebrow eyebrow--green">The Codi Signal model</span><h2 id="docs-title">Make every automation legible.</h2><p class="modal-lede">Codi Signal is built around a simple operating model: a signal describes what happened, a rule explains whether it matters, and an action makes the next move visible.</p><div class="model-steps"><div><span>01</span><strong>Signal</strong><p>Immutable event payloads create a reliable source of truth.</p></div><div><span>02</span><strong>Rule</strong><p>Human-readable conditions keep decisions reviewable.</p></div><div><span>03</span><strong>Action</strong><p>Every outcome points to an owner and a next step.</p></div></div><div class="modal-footer"><span>${icon('check', 14)} No external credentials required</span><button class="btn btn--primary" data-action="close-modal">Back to workspace ${icon('arrow', 14)}</button></div></div></div>`;
}

function appShell() {
  const nav = [
    ['overview', 'Overview', 'grid'],
    ['workflows', 'Workflows', 'workflow'],
    ['signals', 'Signals', 'signal'],
    ['runs', 'Runs', 'activity'],
  ];
  return `<div class="app-shell"><aside class="sidebar"><div class="brand"><span class="brand-mark"><i></i><i></i><i></i></span><span class="brand-name">codi<span>signal</span></span></div><div class="workspace-switcher"><span class="workspace-avatar">C</span><span><small>Workspace</small><strong>Northstar Labs</strong></span>${icon('chevron', 14)}</div><nav class="nav"><span class="nav-label">Workspace</span>${nav.map(([id, label, iconName]) => `<button class="nav-item ${state.view === id ? 'is-active' : ''}" data-view="${id}">${icon(iconName, 17)}<span>${label}</span>${id === 'signals' ? '<b class="nav-badge">4</b>' : ''}</button>`).join('')}</nav><div class="sidebar-bottom"><button class="nav-item" data-action="docs">${icon('book', 17)}<span>Documentation</span></button><button class="nav-item" data-action="settings">${icon('sliders', 17)}<span>Settings</span></button><div class="sidebar-user"><span class="user-avatar">AM</span><span><strong>Alex Morgan</strong><small>Owner</small></span><button class="icon-btn">${icon('dots', 16)}</button></div></div></aside><main class="main"><header class="topbar"><div class="breadcrumb"><span class="mobile-brand">codi<span>signal</span></span><span class="muted">Workspace</span><span>/</span><strong>${state.view === 'overview' ? 'Overview' : state.view[0].toUpperCase() + state.view.slice(1)}</strong></div><div class="topbar-actions"><label class="search">${icon('search', 16)}<input type="search" placeholder="Search signals, workflows..." value="${escapeHtml(state.query)}" aria-label="Search" /><kbd>⌘ K</kbd></label><button class="icon-btn top-icon" data-action="notifications" aria-label="Notifications">${icon('bell', 18)}<i></i></button><span class="top-divider"></span><span class="live-status"><span class="pulse-dot"></span> Systems nominal</span></div></header><div class="content">${state.view === 'overview' ? overviewView() : state.view === 'workflows' ? workflowsView() : state.view === 'signals' ? signalsView() : runsView()}</div></main>${state.toast ? `<div class="toast toast--${state.toast.tone}">${icon(state.toast.tone === 'error' ? 'info' : 'check', 16)}<span>${state.toast.message}</span><button data-action="clear-toast">${icon('close', 14)}</button></div>` : ''}${state.modal ? docsModal() : ''}</div>`;
}

function render() {
  app.innerHTML = appShell();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-view]').forEach((element) => element.addEventListener('click', () => { state.view = element.dataset.view; render(); }));
  document.querySelectorAll('[data-select-signal]').forEach((element) => element.addEventListener('click', () => { state.selectedSignal = element.dataset.selectSignal; if (state.view === 'signals') render(); else render(); }));
  document.querySelectorAll('[data-select-workflow]').forEach((element) => element.addEventListener('click', () => { state.selectedWorkflow = element.dataset.selectWorkflow; state.view = 'workflows'; render(); }));
  document.querySelectorAll('[data-run-signal]').forEach((element) => element.addEventListener('click', () => runSimulation(element.dataset.runSignal)));
  document.querySelectorAll('[data-toggle-workflow]').forEach((element) => element.addEventListener('click', () => { const workflow = workflows.find((item) => item.id === element.dataset.toggleWorkflow); workflow.status = workflow.status === 'Paused' ? 'Active' : 'Paused'; toast(`${workflow.name} is now ${workflow.status.toLowerCase()}.`); }));
  document.querySelectorAll('[data-threshold]').forEach((element) => element.addEventListener('change', () => { const workflow = workflows.find((item) => item.id === element.dataset.threshold); workflow.threshold = element.value; toast('Rule threshold saved locally.'); }));
  document.querySelectorAll('[data-action="docs"]').forEach((element) => element.addEventListener('click', () => { state.modal = true; render(); }));
  document.querySelectorAll('[data-action="close-modal"]').forEach((element) => element.addEventListener('click', () => { state.modal = false; render(); }));
  document.querySelectorAll('[data-action="clear-toast"]').forEach((element) => element.addEventListener('click', () => { state.toast = null; render(); }));
  document.querySelectorAll('[data-action="copy-payload"]').forEach((element) => element.addEventListener('click', () => { navigator.clipboard?.writeText(currentSignal().payload); toast('Signal payload copied to clipboard.'); }));
  document.querySelectorAll('[data-action="map-signal"]').forEach((element) => element.addEventListener('click', () => { state.view = 'workflows'; toast('Signal mapped to Route critical alerts.'); }));
  document.querySelectorAll('[data-action="new-workflow"]').forEach((element) => element.addEventListener('click', () => toast('Workflow templates are coming next.')));
  document.querySelectorAll('[data-action="export-runs"]').forEach((element) => element.addEventListener('click', () => toast('Run log export prepared locally.')));
  document.querySelectorAll('[data-action="inspect-run"]').forEach((element) => element.addEventListener('click', () => toast('Run inspector is available in the next release.')));
  const search = document.querySelector('.search input');
  search?.addEventListener('input', (event) => { state.query = event.target.value; if (state.view === 'overview' || state.view === 'signals') render(); });
  document.querySelectorAll('[data-filter-signal]').forEach((element) => element.addEventListener('click', () => { const filters = ['All signals', 'Critical', 'High', 'Medium', 'Low']; const current = filters.indexOf(state.signalFilter); state.signalFilter = filters[(current + 1) % filters.length]; render(); }));
}

function runSimulation(signalId) {
  if (state.running) { toast('A simulation is already running.', 'error'); return; }
  const signal = signals.find((item) => item.id === signalId) || currentSignal();
  const workflow = workflows.find((item) => item.id === (signal.id === 'deploy-failure' ? 'release-guard' : signal.id === 'usage-spike' ? 'usage-watch' : signal.id === 'feedback-loop' ? 'sentiment-loop' : 'alert-route')) || workflows[0];
  if (workflow.status === 'Paused') { toast(`${workflow.name} is paused. Resume it before simulating.`, 'error'); return; }
  state.running = true;
  state.view = 'overview';
  const run = { id: `run-${Date.now()}`, signal: signal.title, workflow: workflow.name, status: 'Running', duration: '—', time: 'just now', step: 'Signal received', accent: 'amber', steps: [] };
  state.runs.unshift(run);
  state.metrics.runs += 1;
  state.metrics.signals += 1;
  render();
  toast(`Simulation started for ${signal.title}.`);
  const stages = ['Signal received', 'Rule evaluated', workflow.action, 'Run completed'];
  stages.forEach((stage, index) => window.setTimeout(() => {
    run.step = stage;
    run.steps.push(stage);
    if (index === stages.length - 1) {
      run.status = 'Succeeded'; run.duration = `${(1.12 + Math.random() * 1.48).toFixed(2)}s`; run.accent = 'green'; state.running = false; state.metrics.success = Number(((state.metrics.success * (state.metrics.runs - 1) + 100) / state.metrics.runs).toFixed(1)); state.metrics.avg = Number(((state.metrics.avg * (state.metrics.runs - 1) + Number.parseFloat(run.duration)) / state.metrics.runs).toFixed(2)); toast(`${workflow.name} completed successfully.`);
    }
    render();
  }, 650 + index * 650));
}

render();
