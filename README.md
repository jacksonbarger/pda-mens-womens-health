# 🎅 Santa's PDA Workshop

A beautiful, interactive Christmas-themed study app for pharmacy students learning Principles of Drug Action (PDA) - specifically reproductive and endocrine content.

## ✨ Features

- **5 Interactive Game Modes:**
  - 📝 Flashcards - Study Q&A cards
  - 🎁 Matching - Match terms with definitions
  - ⏰ Timed Quiz - Race against the clock
  - 🔬 Clinical Cases - Solve real-world scenarios
  - 🎀 Ordering - Arrange steps in correct sequence

- **Progress Tracking:**
  - Earn candy canes based on performance
  - Climb the Elf ranks (New Recruit → Master Elf)
  - All progress saved in browser localStorage

- **Christmas Theme:**
  - Festive colors and animations
  - Santa's Workshop aesthetic
  - Delightful micro-interactions

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## 📦 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite and configure the build
4. Deploy!

**Build Settings (auto-configured):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

## 🔧 Customization

### Replacing the Study Data

1. Open `src/data/studyData.ts`
2. Replace the `studyData` object with your own JSON
3. Ensure it matches the `StudyData` type structure
4. Save and the app will hot-reload

### Adding New Sections

Add a new object to the `sections` array in `studyData.ts`:

```typescript
{
  "section": "Your New Section",
  "game_modes": {
    "flashcards": { /* ... */ },
    "matching": { /* ... */ }
    // Include any combination of the 5 game modes
  }
}
```

### Customizing the Theme

- **Colors:** Edit `tailwind.config.js` (workshop color palette)
- **Global Styles:** Edit `src/index.css`
- **Icons:** Update emoji icons in component files

## 📂 Project Structure

```
src/
├── components/
│   ├── games/          # Game mode components
│   │   ├── FlashcardsGame.tsx
│   │   ├── MatchingGame.tsx
│   │   ├── TimedQuizGame.tsx
│   │   ├── ClinicalCasesGame.tsx
│   │   └── OrderingGame.tsx
│   └── shared/         # Reusable UI components
│       ├── Header.tsx
│       ├── WorkshopButton.tsx
│       ├── GiftCard.tsx
│       └── ProgressBar.tsx
├── pages/              # Main screen components
│   ├── Home.tsx
│   └── SectionDetail.tsx
├── context/            # React Context for state
│   └── ProgressContext.tsx
├── data/               # Study content
│   └── studyData.ts
├── types/              # TypeScript definitions
│   └── index.ts
└── App.tsx             # Main app component
```

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **localStorage** - Progress persistence

## 📱 Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📄 License

This project is created for educational purposes.

## 🎄 Credits

Made with ❤️ for pharmacy students studying reproductive and endocrine pharmacology.

---

**Happy Studying! 🎅📚**
