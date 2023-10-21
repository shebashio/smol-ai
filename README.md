# Starter React App

This is a starter React application built with the latest standards using Typescript.

## Features

- User Authentication: Implemented using Firebase Authentication.
- SBOM Visualization: Visualizes an SBOM in SPDX format.

## Project Structure

```
.
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Login.tsx
│   │   ├── Logout.tsx
│   │   └── SBOMVisualizer.tsx
│   ├── services
│   │   ├── auth.ts
│   │   ├── firebase.ts
│   │   └── spdx.ts
│   ├── types
│   │   └── spdx.d.ts
│   └── styles
│       ├── App.css
│       ├── Login.css
│       ├── Logout.css
│       └── SBOMVisualizer.css
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

## Setup

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up Firebase Authentication and update the `.env` file with your Firebase configuration.
4. Run the application using `npm start`.

## Dependencies

- React
- Typescript
- Firebase
- SBOM and SPDX

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)