# 🏋️ Gym Exercises - Fitness Discovery Platform

A modern, responsive web application that helps fitness enthusiasts discover, explore, and learn about various exercises. Built with React and powered by a comprehensive exercise database, this platform provides detailed exercise information, instructional videos, and categorized workouts for all fitness levels.

![Gym Exercises Platform](public/Hero.avif)

## 🌟 Features

### 🎯 Core Functionality
- **Exercise Discovery**: Browse through hundreds of exercises with detailed information
- **Category-Based Filtering**: Explore exercises by body parts (Arms, Chest, Back, Legs, Core, Cardio)
- **Advanced Search**: Find specific exercises using intelligent search functionality
- **Exercise Details**: View comprehensive exercise information including target muscles, equipment needed, and body parts
- **Video Integration**: Watch instructional videos for proper exercise form and technique
- **Trending Workouts**: Discover popular workout routines with calorie estimates and difficulty levels

### 🎨 User Experience
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Loading States**: Custom gym-themed loader with spinning animations
- **Interactive Cards**: Hover effects and smooth transitions for enhanced user engagement
- **Pagination**: Efficient browsing through large exercise datasets

### ⚡ Performance
- **Fast Loading**: Built with Vite for lightning-fast development and production builds
- **Lazy Loading**: Images load on demand for optimal performance
- **API Rate Limiting**: Intelligent request throttling to prevent API overload
- **Error Handling**: Robust error management with user-friendly feedback

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **React Router DOM 7.8.2** - Client-side routing and navigation
- **Tailwind CSS 4.1.12** - Utility-first CSS framework for rapid styling
- **React Icons 5.5.0** - Comprehensive icon library

### UI Components
- **Material-UI 7.3.1** - Professional React components (Pagination)
- **Custom Components** - Handcrafted components for unique user experience

### Build Tools
- **Vite 7.1.2** - Next-generation frontend build tool
- **ESLint 9.33.0** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

### APIs & External Services
- **Exercise Database API** - Comprehensive exercise data from apiexcercises.vercel.app
- **YouTube API** - Instructional video content via RapidAPI
- **Rate-Limited Requests** - Smart API usage with built-in throttling

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- RapidAPI key for YouTube video integration (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gym-exercises.git
   cd gym-exercises
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_RAPID_API_KEY=your_rapidapi_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
gym-exercises/
├── public/                 # Static assets
│   ├── Hero.avif          # Hero section background
│   ├── Arms.png           # Category images
│   ├── Back.png
│   ├── Cardio.png
│   └── ...
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── CategoryCard.jsx
│   │   ├── ExerciseCard.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── Pages/            # Main application pages
│   │   ├── Home.jsx
│   │   ├── Exercises.jsx
│   │   └── ExerciseDetails.jsx
│   ├── utils/            # Utility functions
│   │   └── FetchData.js
│   ├── data.js           # Static data (categories, trending workouts)
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### 🏠 Home Page
- Hero section with motivational content
- Exercise category grid with interactive cards
- Trending workouts showcase
- Responsive navigation

### 🔍 Exercise Browser
- Category-based filtering
- Real-time search functionality
- Paginated results (12 exercises per page)
- Professional loading states

### 📋 Exercise Details
- Comprehensive exercise information
- Target muscle groups and equipment requirements
- Related exercise suggestions
- Instructional video integration

### 🎨 UI Components
- **Loader**: Custom gym-themed loading animation with dumbbell and spinning rings
- **CategoryCard**: Interactive cards with hover effects and smooth transitions
- **ExerciseCard**: Detailed exercise preview with target muscles, body parts, and equipment
- **Navbar**: Responsive navigation with modern styling

## 🌐 API Integration

### Exercise Data
- **Endpoint**: `https://apiexcercises.vercel.app/api/v1/exercises`
- **Features**: Search, filtering, pagination
- **Data**: Exercise names, target muscles, equipment, GIF demonstrations

### Video Content
- **Provider**: YouTube Search and Download API (RapidAPI)
- **Rate Limiting**: 1-second minimum interval between requests
- **Error Handling**: Graceful fallbacks for API failures

## 🎨 Design Philosophy

### Visual Design
- **Dark Theme**: Modern dark color scheme for reduced eye strain
- **Blue Accents**: Professional blue (#0580FA) for interactive elements
- **Gradient Effects**: Subtle gradients for depth and visual interest
- **Card-Based Layout**: Clean, organized content presentation

### User Experience
- **Intuitive Navigation**: Clear routing and breadcrumbs
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Loading States**: Professional feedback during data fetching
- **Smooth Animations**: CSS transitions for enhanced interactivity

## 🔧 Configuration

### Vite Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Tailwind CSS
- Utility-first CSS framework
- Custom color palette
- Responsive design utilities
- Animation and transition classes

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Optimized for large displays (1440px+)


### Build Command
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Exercise data provided by [API Exercises](https://apiexcercises.vercel.app)
- Video content via [RapidAPI YouTube Search](https://rapidapi.com)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- UI components inspired by [Material-UI](https://mui.com)

## 📞 Contact

For contact, email af38765220@gmail.com

---

**Built with Ahmed Fadl for the fitness community**
