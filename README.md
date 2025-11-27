# Tile Dash Privacy Policy

This is a simple Gatsby static site hosting the privacy policy for the Tile Dash mobile game.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run develop
```

The site will be available at `http://localhost:8000`

## Build

To create a production build:
```bash
npm run build
```

The static files will be generated in the `public/` directory.

## Deployment Options

This site can be deployed to various hosting platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `public`

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Gatsby and configure build settings

### GitHub Pages
1. Install the gh-pages package: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "gatsby build && gh-pages -d public"
   ```
3. Run: `npm run deploy`

### Gatsby Cloud
1. Push your code to GitHub
2. Connect your repository to Gatsby Cloud
3. Automatic builds and deployments on every push

## Project Structure

```
tile_dash_privacy_policy/
├── src/
│   ├── pages/
│   │   └── index.js          # Main privacy policy page
│   └── privacy_policy.html   # Original HTML (for reference)
├── gatsby-config.js          # Gatsby configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## License

This privacy policy is for the Tile Dash mobile game.
