# ZUPPO website

Static website directory for discovering third-party platforms. Deploy the folder contents to Cloudflare Pages (framework: None; build command: blank; output directory: `.`).

## Included
- 17 horizontally scrolling categories and expanded India platform directory
- Platform logo images loaded from each platform's website favicon endpoint (third-party logos may occasionally fail or change)
- Search and category filtering
- Login / Sign Up interface using Firebase Authentication (email/password and Google)
- Account state and logout when Firebase is configured
- About, Privacy Policy and Terms pages
- Clearly marked advertising placeholder; no ad network is connected

## Activate real login (required)
1. Open https://console.firebase.google.com/ and create a Firebase project for ZUPPO.
2. Add a Web App in Project settings and copy its Firebase config.
3. In Authentication > Sign-in method, enable **Email/Password** and **Google**.
4. In Authentication > Settings > Authorized domains, add your Cloudflare Pages domain (for example `zuppo-website.pages.dev`).
5. Open `firebase-config.js` and replace `YOUR_API_KEY`, `YOUR_PROJECT_ID`, and `YOUR_APP_ID` with the values from Firebase. Keep `authDomain` and the other fields exactly as Firebase provides them.
6. Commit and push all updated files to the GitHub `main` branch. Cloudflare Pages should deploy automatically.

Until this configuration is added, the login form is only a front-end interface and does not create or authenticate accounts. Never ask users to enter real passwords into a demo-only form.

## Advertising (not active yet)
The bottom bar is only a labelled placeholder. To run real ads, first create and verify an eligible publisher account with an ad provider such as Google AdSense, complete its site review, and use the exact ad code and publisher ID provided by that provider. Follow applicable consent, privacy and ad placement policies. Do not click your own ads or encourage others to click them. The placeholder itself does not generate revenue.

## Before public launch
- Replace `hello@zuppo.example` with a real support email.
- Review and customize `privacy.html` and `terms.html` for your actual practices and applicable law; these are starter drafts, not legal advice.
- Verify each platform name, logo and destination URL. A favicon may be a generic site icon rather than a formal brand asset.
- Test login, logout, links, search and mobile layout after deployment.

## Notes
ZUPPO is an independent directory, not a marketplace or booking provider. Platform names and logos are owned by their respective owners. Check third-party trademark and logo usage requirements.
