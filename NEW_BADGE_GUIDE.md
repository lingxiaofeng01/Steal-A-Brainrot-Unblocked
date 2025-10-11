# NEW Badge Feature Guide

## ✨ Overview

The NEW badge feature automatically displays a purple "NEW" badge on game thumbnails that were released within the last 7 days. The badge automatically disappears after 7 days.

---

## 🎨 Badge Design

The NEW badge features:
- **Purple-to-pink gradient background** (`from-purple-600 to-pink-600`)
- **White text** with bold font
- **Yellow sparkle emoji** (✨) for extra attention
- **Pulse animation** to draw the eye
- **Positioned** at top-left corner of thumbnail
- **Shadow effect** for depth

Visual example:
```
┌─────────────────────┐
│ ✨ NEW              │  ← Purple gradient badge
│                     │
│   [Game Thumbnail]  │
│                     │
└─────────────────────┘
```

---

## 📁 Files Created

### 1. `src/components/NewBadge.tsx`
**Purpose:** Reusable NEW badge component

**Props:**
- `releaseDate` (string): ISO date string (YYYY-MM-DD)
- `className` (string, optional): Additional CSS classes

**Logic:**
- Calculates days since release
- Only renders if ≤ 7 days
- Returns `null` if game is older

**Usage:**
```tsx
<NewBadge releaseDate="2025-01-10" />
```

### 2. `src/data/games.ts`
**Purpose:** Centralized game data with release dates

**Exports:**
- `GameData` interface - Real game type
- `PlaceholderGame` interface - Placeholder game type
- `Game` type - Union of both
- `isRealGame()` - Type guard function
- `allGames` - Array of all games with release dates

**Example Game Entry:**
```typescript
{
  name: 'Brainrot Clicker',
  image: '/images/thumbnails/brainrot-clicker.webp',
  slug: 'brainrot-clicker',
  isReal: true,
  releaseDate: '2025-01-05' // ISO date format
}
```

---

## 🎯 How It Works

### 1. Date Calculation
```typescript
const release = new Date(releaseDate);
const now = new Date();
const diffTime = Math.abs(now.getTime() - release.getTime());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
return diffDays <= 7; // Show badge if 7 days or less
```

### 2. Automatic Display
- Badge checks release date on every render
- If ≤ 7 days: Badge displays
- If > 7 days: Badge returns `null` (invisible)
- No manual intervention needed!

### 3. Current NEW Games (Example)
Based on today being **January 11, 2025**:

| Game | Release Date | Days Ago | Shows NEW? |
|------|--------------|----------|------------|
| Steal Brainrot: New Animals | 2025-01-10 | 1 day | ✅ YES |
| Italian Brainrot Clicker 2 | 2025-01-09 | 2 days | ✅ YES |
| Italian Brainrot Baby Clicker | 2025-01-08 | 3 days | ✅ YES |
| Brainrot Clicker | 2025-01-05 | 6 days | ✅ YES |
| Brainrot Hook Swing | 2024-12-20 | 22 days | ❌ NO |
| Plants vs Brainrots | 2024-11-15 | 57 days | ❌ NO |

---

## 🔧 How to Add/Update Release Dates

### Adding a New Game

1. Open `src/data/games.ts`
2. Add your game to the `allGames` array:

```typescript
{
  name: 'My New Game',
  image: '/images/thumbnails/my-new-game.webp',
  slug: 'my-new-game',
  isReal: true,
  releaseDate: '2025-01-11' // Today's date in YYYY-MM-DD format
}
```

3. The NEW badge will automatically appear for 7 days!

### Updating an Existing Game

1. Open `src/data/games.ts`
2. Find the game in the `allGames` array
3. Update the `releaseDate` field:

```typescript
{
  name: 'Brainrot Clicker',
  image: '/images/thumbnails/brainrot-clicker.webp',
  slug: 'brainrot-clicker',
  isReal: true,
  releaseDate: '2025-01-11' // Updated to today
}
```

### Removing a Release Date

If you don't want a game to ever show the NEW badge:

```typescript
{
  name: 'Old Game',
  image: '/images/thumbnails/old-game.webp',
  slug: 'old-game',
  isReal: true,
  // No releaseDate field - badge will never show
}
```

---

## 📅 Date Format

**Always use ISO 8601 format:** `YYYY-MM-DD`

✅ **Correct:**
- `'2025-01-11'`
- `'2024-12-25'`
- `'2025-03-01'`

❌ **Incorrect:**
- `'01/11/2025'` (US format)
- `'11-01-2025'` (European format)
- `'Jan 11, 2025'` (Text format)
- `'2025-1-11'` (Missing leading zeros)

---

## 🎨 Customizing the Badge

### Change Badge Duration

Edit `src/components/NewBadge.tsx`:

```typescript
// Change from 7 days to 14 days
return diffDays <= 14;

// Change to 3 days
return diffDays <= 3;
```

### Change Badge Colors

Edit the gradient in `src/components/NewBadge.tsx`:

```tsx
// Current: Purple to Pink
className="bg-gradient-to-r from-purple-600 to-pink-600"

// Blue to Cyan
className="bg-gradient-to-r from-blue-600 to-cyan-600"

// Green to Emerald
className="bg-gradient-to-r from-green-600 to-emerald-600"

// Red to Orange
className="bg-gradient-to-r from-red-600 to-orange-600"
```

### Change Badge Text

```tsx
// Current
<span>NEW</span>

// Alternatives
<span>NEW!</span>
<span>JUST ADDED</span>
<span>FRESH</span>
<span>🔥 HOT</span>
```

### Remove Animation

Remove the `animate-pulse` class:

```tsx
// With animation
className="... animate-pulse"

// Without animation
className="..."
```

---

## 🧪 Testing

### Test Different Dates

1. **Today's game (should show NEW):**
```typescript
releaseDate: '2025-01-11'
```

2. **6 days ago (should show NEW):**
```typescript
releaseDate: '2025-01-05'
```

3. **7 days ago (should show NEW):**
```typescript
releaseDate: '2025-01-04'
```

4. **8 days ago (should NOT show NEW):**
```typescript
releaseDate: '2025-01-03'
```

### Visual Testing

1. Start dev server: `npm run dev`
2. Visit homepage: `http://localhost:5174/`
3. Scroll to "Play Similar Games" section
4. Look for purple NEW badges on recent games

---

## 📊 Current Game Release Dates

Here are all the current release dates (as of implementation):

```typescript
'Brainrot Clicker'                → '2025-01-05' (6 days ago - NEW)
'Brainrot Hook Swing'             → '2024-12-20' (22 days ago)
'Italian Brainrot Baby Clicker'   → '2025-01-08' (3 days ago - NEW)
'Steal The Italian Brainrot'      → '2024-12-15' (27 days ago)
'Obby: My Singing Brainrot'       → '2024-12-10' (32 days ago)
'Steal Brainrot Online'           → '2024-12-01' (41 days ago)
'Steal Brainrot: New Animals'     → '2025-01-10' (1 day ago - NEW)
'Fix Da Brainrot'                 → '2024-11-25' (47 days ago)
'Memory Brainrot'                 → '2024-11-20' (52 days ago)
'Italian Brainrot Clicker 2'      → '2025-01-09' (2 days ago - NEW)
'Plants vs Brainrots'             → '2024-11-15' (57 days ago)
```

**Note:** These are example dates. Update them to match your actual game release dates!

---

## 🔄 Future Enhancements

Possible improvements:

1. **Different badge styles for different durations:**
   - 0-2 days: "🔥 HOT"
   - 3-5 days: "✨ NEW"
   - 6-7 days: "RECENT"

2. **Backend integration:**
   - Store release dates in Supabase
   - Automatically set release date when game is added

3. **Admin panel:**
   - UI to update release dates
   - Bulk update functionality

4. **Analytics:**
   - Track clicks on NEW games
   - Compare engagement with/without badge

---

## 🐛 Troubleshooting

### Badge not showing

**Check:**
1. Is `releaseDate` set in `src/data/games.ts`?
2. Is the date within 7 days?
3. Is the date format correct (YYYY-MM-DD)?
4. Is `NewBadge` component imported?

### Badge showing on old games

**Check:**
1. Verify the `releaseDate` value
2. Check your system date/time
3. Clear browser cache

### Badge position wrong

**Adjust in `NewBadge.tsx`:**
```tsx
// Top-left (current)
className="absolute top-2 left-2"

// Top-right
className="absolute top-2 right-2"

// Bottom-left
className="absolute bottom-2 left-2"

// Bottom-right
className="absolute bottom-2 right-2"
```

---

## ✅ Summary

- ✅ NEW badge automatically shows for games ≤ 7 days old
- ✅ Badge automatically disappears after 7 days
- ✅ Centralized game data in `src/data/games.ts`
- ✅ Easy to add/update release dates
- ✅ Customizable design and duration
- ✅ No manual intervention needed

**To add a new game with NEW badge:**
1. Add game to `src/data/games.ts`
2. Set `releaseDate` to today's date (YYYY-MM-DD)
3. Done! Badge will show for 7 days automatically

---

**Happy gaming! 🎮✨**

