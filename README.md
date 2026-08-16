# Gondar Day School Science Learning Platform (Prototype)

This repository contains the Next.js + Tailwind CSS prototype for the Gondar Day School Science Learning Platform.

Status
- Branch: feature/gondar-starter (deploy this branch to preview the prototype)
- Purpose: Mobile-first educational platform for Forms 1–4 with Biology, Chemistry, Physics and Agricultural Science resources.

Getting started (local)

1. Clone and checkout the branch:

   git clone https://github.com/mwiingamungaba-del/wisdom--pursuit.git
   cd wisdom--pursuit
   git checkout feature/gondar-starter

2. Install dependencies

   npm install

3. Run dev server

   npm run dev

4. Build

   npm run build

Deployment to Vercel (recommended)

1. Go to: https://vercel.com/new/git/external
2. Provide repository URL: https://github.com/mwiingamungaba-del/wisdom--pursuit
3. Select branch: feature/gondar-starter
4. Confirm framework detected: Next.js
5. Deploy. The project is configured for a demo, no additional environment variables are required.

Notes
- The prototype uses client-side simulated Access Code + PIN auth and mock/demo data. Do not use this branch in production without implementing secure server-side authentication, database storage and file storage.
- Removed optional joke and weather demo features per project focus.
