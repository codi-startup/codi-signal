# Codi Signal

> A premium operational cockpit for turning signals into accountable automations.

Codi Signal is a frontend-first automation workspace for product, operations and engineering teams. It lets you explore operational signals, inspect workflow logic, simulate a run locally and review the resulting execution trail — without external credentials or a backend dependency.

## Why it exists

Automation is only useful when teams can understand what triggered it, why it acted and what happened next. Codi Signal makes that loop visible in one focused interface: signal in, rule evaluation, action execution and an auditable run log.

## Features

- **Workflow canvas** with trigger, condition and action nodes.
- **Signal library** with realistic operational events ready for simulation.
- **Local simulator** that evaluates rules in the browser and renders each processed step.
- **Rule editor** with configurable threshold and owner fields.
- **Operational metrics** for runs, success rate, average duration and processed signals.
- **Run history** with status, duration, event source and responsible step.
- **Responsive premium UI** built around Codi's Obsidian, Carbon and emerald palette.
- **Contextual product documentation** embedded in the workspace.

## Tech stack

- Vanilla JavaScript modules
- Vite 5
- CSS custom properties and responsive layout primitives
- No external runtime services or API keys required

## Getting started

### Requirements

- Node.js 18+
- npm 9+

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

## How to use

1. Select **Signals** in the sidebar or use the signal stream on the overview.
2. Click a signal to inspect its payload and choose **Simulate**.
3. Review the workflow steps as the local runner evaluates the rule and executes the action.
4. Open **Workflows** to toggle an automation, edit its threshold and inspect the canvas.
5. Open **Runs** to review the execution history and filter successful or failed runs.

The app ships with seeded sample data. Changes made in the UI live in the current browser session and intentionally require no account or backend.

## Project structure

```text
.
├── index.html              # Vite entry document
├── public/manus-routes.json# Runtime route manifest
├── src/
│   ├── main.js             # UI rendering, state and simulator logic
│   └── styles.css          # Visual system and responsive layout
├── app.config.ts           # Project metadata
├── package.json            # Scripts and toolchain
└── TODO.md                 # Delivery checklist
```

## Validation

The project is intentionally small and dependency-light. The primary checks are:

```bash
npm run build
```

Then use the local preview and verify the simulation flow: signal selection → rule evaluation → action step → run appears in **Runs**.

## License

MIT. See the repository for the complete source.
