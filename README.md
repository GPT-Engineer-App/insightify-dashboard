# insightify-dashboard

# User Insight Dashboard

This web-based dashboard is specifically designed for researchers handling and analyzing user interview transcriptions, with a focus on extracting valuable insights efficiently.

## Screens

### Login Page
Secure entry point for researchers to access interview data.

- **Behavior:** Features standard login mechanism with email and password, plus options for password recovery.
- **Layout:** Clean design with the login form centered on the screen, using a light background and vibrant buttons for clarity and engagement.

### Dashboard Home
Main overview page displaying a summary of recent interviews and key insights.

- **Behavior:** Automatically updates with the latest transcribed interviews and extracted insights.
- **Layout:** Grid layout with cards, each representing different interview sets, categorized by date or project.

## Components

### Top Navigation Bar
Navigation system offering links to home, all interviews, analytics, settings, and logout.

- **Behavior:** Facilitates easy movement between different sections of the dashboard.
- **Design:** Simplistic, with a light background and highlights in a vibrant accent color to denote the active section. Dropdown menus are used for clutter-free navigation.

### Interview List
Shows a scrollable list of available transcriptions with quick overview information.

- **Behavior:** Each list item is clickable, leading to the detailed transcription and insights view.
- **Layout:** Spacious item layouts with ample whitespace, highlighted with a light base, using small vibrant color tags to indicate interview themes or flags.

### Transcription Viewer
Dedicated area for reading and interacting with the full transcription text.

- **Behavior:** Allows researchers to highlight, add notes, and tag sections of the transcription for further analysis.
- **Design:** Clear, large typography for easy reading with options to change text size and background contrast. Side panel for notes and tags, using contrasting colors to distinguish user-added content.

### Insight Extraction Tool
Automated and manual tools to help researchers derive insights from transcriptions.

- **Behavior:** Uses AI to suggest potential insights based on textual analysis and researcher interactions. Manual tools allow adding custom insights.
- **Layout:** Clean interface with sections for suggested insights and a space for manual entry, using vibrant buttons and interactive elements to enhance usability.

### Analytics Section
Graphs and data visualizations showing trends and themes across multiple interviews.

- **Behavior:** Dynamic charts and graphs update as new data is entered. Filter options to view by date, theme, or other metadata.
- **Design:** Visual consistency with the rest of the dashboard, using bright colors to differentiate between data points, ensuring easy interpretation of graphs and charts.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/insightify-dashboard.git
cd insightify-dashboard
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
