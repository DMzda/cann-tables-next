# Cann Tables Next

A Next.js application that displays football tables in a Cann format. In this format, the table lets you
visualise gaps between teams by showing every point position between teams.

View

## Getting Started

Clone the repository

```bash
git clone https://github.com/DMzda/cann-tables.git
```

Install the requirements

```bash
npm install
```

Add your [football-data.org](https://www.football-data.org/) API key in `.env.local`.

```
FOOTBALL_DATA_API_KEY=<key goes here>
```

Generate local JSON files for development

```
npm run populate
```

Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- [ ] Add [clsx](https://github.com/lukeed/clsx)
- [ ] Improve styling
- [ ] Add dark mode
