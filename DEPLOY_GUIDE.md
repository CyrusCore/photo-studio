# How to Deploy to Vercel

Your project is ready for deployment! I've configured the necessary routing settings (`vercel.json`) and initialized a local Git repository.

## Option 1: Deploy directly from your terminal (Fastest)

1.  **Run the deploy command:**
    Open your terminal in the project folder (`f:\Coding\NodeJS_React\photo-studio`) and run:
    ```bash
    npx vercel
    ```

2.  **Follow the prompts:**
    *   **Log in:** It will ask you to log in via your browser.
    *   **Set up and deploy:**
        *   "Set up and deploy 'f:\Coding\NodeJS_React\photo-studio'?" -> **Y**
        *   "Which scope do you want to deploy to?" -> Select your account.
        *   "Link to existing project?" -> **N**
        *   "What’s your project’s name?" -> Press Enter (default: `photo-studio`).
        *   "In which directory is your code located?" -> Press Enter (default: `./`).
        *   "Want to modify these settings?" -> **N** (Auto-detection usually works perfectly for Vite).

3.  **Done!**
    Vercel will build your site and give you a Production URL (e.g., `https://photo-studio-xyz.vercel.app`).

---

## Option 2: Deploy via GitHub (Recommended for long-term)

1.  **Create a Repository on GitHub.**
2.  **Push your code:**
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/photo-studio.git
    git branch -M main
    git push -u origin main
    ```
3.  **Import in Vercel:**
    *   Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your `photo-studio` repository.
    *   Click **Deploy**.

## Important Notes

*   **Routing:** I added a `vercel.json` file to ensure that refreshing pages like `/contact` or `/gallery` works correctly (SPA Routing).
*   **Environment Variables:** If you plan to secure your Formspree ID or other keys later, remember to add them in the Vercel Project Settings > Environment Variables.
