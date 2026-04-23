# CoupleGoals

Shared goals and check-ins for couples. Built with React Native (Expo), Clerk auth, and Convex backend.

## Stack

- **Frontend**: React Native + Expo SDK 54
- **Auth**: Clerk (OAuth Google)
- **Backend**: Convex (real-time database)
- **Navigation**: React Navigation (Native Stack)
- **Styling**: NativeWind (Tailwind for RN)

## Project Structure

```
CoupleGoals/
  App.tsx                 # Root with ClerkProvider + ConvexProvider
  src/
    screens/
      HomeScreen.tsx      # Main app screen
      SignInScreen.tsx    # Auth screen
  convex/
    schema.ts             # Database schema
    users.ts              # User management
    goals.ts              # Goals CRUD
    checkIns.ts           # Daily check-ins
    utils.ts              # Auth helpers
  assets/
    brand/                # Logo and icon files
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

You need:
- **Clerk Publishable Key** from [clerk.com](https://clerk.com)
- **Convex URL** from running `npx convex dev`

### 3. Start Convex dev server

```bash
npx convex dev
```

This will:
- Create a Convex project
- Write the deployment URL to `.env.local`
- Start the file watcher

### 4. Start the Expo app

```bash
npx expo start
```

## Features

- [x] Google OAuth sign-in via Clerk
- [x] Real-time data sync via Convex
- [x] Partner connection system
- [x] Shared goals with categories
- [x] Daily check-ins with mood tracking
- [ ] Push notifications
- [ ] Milestones for goals

## Deployment

### iOS / Android via EAS

```bash
# Build for production
npx eas build --platform all

# Or configure manually:
npx eas build:configure
```

### Convex Production

```bash
npx convex deploy
```

## License

MIT
