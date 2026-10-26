# Waitless: hospital queue app

A static web app (HTML, CSS, JavaScript). No build step. Works on laptop and mobile, installable as an app from the browser menu.

## Files
- `index.html`, `styles.css`, `app.js`: the app
- `config.js`: doctor code and optional Firebase settings
- `manifest.json`, `icon.svg`, `sw.js`: install-as-app support

## Deploy on GitHub Pages
1. Create a new GitHub repository and upload all files from this folder to the root.
2. Go to **Settings > Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
3. After a minute your app is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Without step "Live sync" below, the app runs in **local-only mode**: it works fully, but the doctor and patient must use the same browser on the same device.

## Live sync across devices (Firebase, free)
1. Go to https://console.firebase.google.com and create a project.
2. Add a **Web app** (the `</>` icon) and copy the `firebaseConfig` values.
3. Open **Build > Realtime Database**, create a database, and start in **test mode**.
4. Open `config.js` and paste your config into `FIREBASE`. Make sure `databaseURL` is included.
5. Commit and push. The header badge changes from "Local only" to "Live".

Test mode rules expire after about 30 days. For longer use, set these rules in the Realtime Database "Rules" tab (anyone can read and write the demo state, nothing else):

```json
{ "rules": { "waitless": { ".read": true, ".write": true } } }
```

## Change the doctor code
Edit `DOC_CODE` in `config.js`.

## Important limits
- The doctor code is checked in the browser, so it only stops accidental access. It is not real security.
- Anyone with the link can read and write the demo data. Use made-up names, ages and phone numbers only.
- All patients share one demo token, report list and queue.
