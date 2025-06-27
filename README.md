# Space Explorer

A web application for exploring cosmic objects, missions, and astronomical events using NASA Open APIs. Built with **Next.js**, **TypeScript**, **Effector**, and structured with **Feature-Sliced Design (FSD)**, this project integrates real-time space data, interactive features, and gamification to engage users in a fun and educational experience.

## Features

- **Home Page**:

  - Displays NASA's _Astronomy Picture of the Day (APOD)_ with title, description, and image/video.
  - Shows a summary of _Near Earth Objects (NEO)_ with date-based filtering.
  - Features an interactive carousel of _Mars Rover Photos_.

- **Search Page**:

  - Search for asteroids by date, diameter, or hazard level.
  - Filter results to show only potentially hazardous asteroids.

- **Favorites Page**:

  - Allows users to save APOD images or asteroids to favorites.
  - Persists data in `localStorage` using Effector for state management.

- **Missions Page**:

  - Displays static data about space missions (hardcoded or parsed from external sources).
  - Links missions to related Mars Rover photos.

- **Gamification**:

  - Earn "discovery points" for adding objects to favorites or viewing Mars Rover photos.
  - Track progress in a user profile stored in `localStorage`.
  - Achievements system (e.g., "Mars Explorer" for viewing 10 rover photos).

- **Responsive Design**:

  - Fully adaptive for mobile, tablet, and desktop devices.
  - Optimized for SEO with dynamic meta tags and server-side rendering (SSR/SSG).

- **Performance**:

  - API data cached using SWR and Next.js `getStaticProps`/`getServerSideProps`.
  - Lazy-loaded images with `next/image` for fast performance.

- **Accessibility**:

  - WCAG 2.1 compliant with alt texts and keyboard navigation support.
  - Tested with Lighthouse for accessibility compliance.

- **Internationalization**:

  - Supports multiple languages (English and Russian) using `next-intl`.

- **Analytics**:
  - Integrated with Vercel Analytics for tracking user interactions.

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript
- **State Management**: Effector (stores, effects, and events)
- **Architecture**: Feature-Sliced Design (FSD)
- **Styling**: Tailwind CSS (or CSS Modules/Emotion as alternative)
- **API**: NASA Open APIs (APOD, NEO, Mars Rover Photos)
- **HTTP Client**: Axios for API requests
- **Testing**: Jest for unit tests, Cypress/Playwright for E2E tests
- **Linting/Formatting**: ESLint, Prettier
- **Deployment**: Vercel
- **Caching**: SWR for client-side caching, optional Redis/LRU-cache for server-side
- **Charts**: Chart.js for gamification progress visualization

## Project Structure (Feature-Sliced Design)

```
src/
├── app/                    # Next.js App Router (pages and routes)
├── entities/              # Data models
│   ├── asteroid/         # Asteroid model and logic
│   ├── photo/           # Photo model (APOD, Mars Rover)
│   └── mission/         # Mission model
├── features/             # Feature-specific modules
│   ├── search/          # Search functionality
│   ├── favorites/       # Favorites management
│   ├── filters/         # Filtering logic
│   └── gamification/    # Gamification mechanics (points, achievements)
├── pages/                # Page components
│   ├── home/            # Home page
│   ├── search/          # Search page
│   ├── favorites/       # Favorites page
│   └── missions/        # Missions page
├── shared/               # Reusable utilities and components
│   ├── api/             # API client for NASA API
│   ├── ui/              # Shared UI components
│   └── lib/             # Utility functions
```

## NASA API Endpoints

- **APOD**: `https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY`
- **NEO**: `https://api.nasa.gov/neo/rest/v1/feed?api_key=YOUR_KEY`
- **Mars Rover Photos**: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YOUR_KEY`

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/space-explorer.git
   cd space-explorer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_NASA_API_KEY=YOUR_KEY
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser.

5. **Build for production**:

   ```bash
   npm run build
   npm run start
   ```

6. **Run tests**:
   ```bash
   npm run test
   ```

## Deployment

The application is deployed on **Vercel** for seamless hosting and scaling. To deploy:

1. Push the repository to GitHub.
2. Connect the repository to Vercel via the Vercel dashboard.
3. Add the `NEXT_PUBLIC_NASA_API_KEY` environment variable in Vercel settings.
4. Deploy the app and access it via the provided URL.

## Testing

- **Unit Tests**: Jest is used to test Effector stores and effects.
- **E2E Tests**: Cypress/Playwright ensures the home page renders correctly.
- Run tests with:
  ```bash
  npm run test
  npm run test:e2e
  ```

## Optimizations

- **Incremental Static Regeneration (ISR)**: Used for APOD and NEO pages to balance performance and freshness.
- **Image Optimization**: Lazy loading and `next/image` for efficient image rendering.
- **Server-side Caching**: Optional Redis or LRU-cache for API responses.

## Future Improvements

- Add more NASA API endpoints (e.g., Exoplanet Archive).
- Expand gamification with leaderboards or social sharing.
- Integrate WebSocket for real-time asteroid updates (if API supports).
- Enhance accessibility with advanced screen reader support.

## Resources

- [NASA Open APIs](https://api.nasa.gov/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Effector Documentation](https://effector.dev/)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Vercel](https://vercel.com/)
