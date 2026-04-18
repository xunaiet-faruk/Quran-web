# Quran Web App

A modern Quran web application featuring 114 Surahs with Arabic verses, English translations, and search functionality.

## ✨ Features

- 114 Surahs list
- Arabic verses with English translation
- Search functionality
- Customizable settings (font + size)
- Responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js (SSG)
- **Runtime:** Node.js
- **Styling:** Tailwind CSS
- **API:** alquran.cloud

## 🚀 How to Run Locally

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Download LTS version from https://nodejs.org
2. Install it (click Next, Next, Next...)

### Step 2: Clone the Project
```bash
# Clone from GitHub (if you have it)
git clone https://github.com/xunaiet-faruk/Quran-web

# Or navigate to your folder
cd Quran-web
```

## 💡 Why Run Locally?

If you experience issues with the live link (such as slow loading, API errors, or some pages not loading), running the project locally on your computer ensures:

- **Faster performance** - No server delays
- **Reliable API calls** - Direct connection without network issues
- **All features work** - Every Surah loads correctly
- **Debugging** - See any errors in your console

The live version depends on external APIs and internet speed. Running locally gives you the best experience.

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run the Project
```bash
npm run dev
```

### Step 5: View in Browser
Open: http://localhost:3000



## ⚠️ Troubleshooting

### If API doesn't load
- Check your internet connection
- Clear browser cache
- Use `npm run dev` locally

### If port 3000 is busy
```bash
# Run on different port
npm run dev -- -p 3001
```

## 📁 Project Structure

```
quran-web/
├── src/
│   ├── app/
│   │   ├── components/    # UI components
│   │   ├── data/          # Local data
│   │   ├── surah/[id]/    # Surah page
│   │   ├── page.js        # Home page
│   │   └── layout.js      # Layout
│   └── public/            # Static files
├── package.json
├── next.config.mjs
└── tailwind.config.js
```

## 🔧 Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |

## 📱 Live Demo

https://quran-web-omega.vercel.app


## 📱 Video Demo Doc

https://drive.google.com/file/d/1vnsR0b_tN2joYR0LJMwXYTiBK73iwFj8/view?usp=drive_link



