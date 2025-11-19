# Auction Gallery

A modern web application for showcasing and bidding on auction items.\
Live Demo: **https://modern-cake.surge.sh/**

## Table of Contents

-   [Home Page](#home-page)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [Deployment](#deployment)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)
-   [License](#license)

------------------------------------------------------------------------

## Home Page

The **Home Page** of Auction Gallery includes the following key
features:

-   A visually appealing Hero/Banner section\
-   A grid layout displaying all auction items\
-   Each item includes an image, title, current bid, and countdown
    timer\
-   "View Details" button for every auction item\
-   Fully responsive design (mobile, tablet, and desktop)\
-   Fast loading and smooth user interface

You can add a screenshot of the home page here (optional):

![Home Page Screenshot](./src/assets/AuctionGallery-min.png)

------------------------------------------------------------------------

## Features

-   Browse auction items with clean UI\
-   Real-time countdown for every item\
-   Detailed product view for each auction item\
-   Responsive and mobile-friendly interface\
-   Fast and optimized build using Vite\
-   Easy deployment on Surge.sh\
-   Modern component structure with React

------------------------------------------------------------------------

## Tech Stack

-   **Frontend:** React + Vite\
-   **Styling:** Tailwind CSS\
-   **Package Manager:** npm\
-   **Hosting:** Surge.sh\
-   **Version Control:** Git & GitHub

------------------------------------------------------------------------

## Getting Started

### Prerequisites

-   Node.js and npm installed\
-   Basic understanding of React and Vite\
-   Git installed on your machine

### Installation

``` bash
git clone https://github.com/arman685913/auction-gallery.git
cd auction-gallery
npm install
npm run dev
```

------------------------------------------------------------------------

## Usage

-   Open the browser and go to **http://localhost:5173/**\
-   Browse auction items\
-   Click on any item for full details

------------------------------------------------------------------------

## Deployment

### Deploy to Surge

``` bash
npm run build
surge dist/ auction-gallery.surge.sh
```

Login to Surge if needed:

``` bash
surge login
```

------------------------------------------------------------------------

## Folder Structure

    auction-gallery/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── assets/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── README.md

------------------------------------------------------------------------

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

------------------------------------------------------------------------

## License

Licensed under the **It's free**.
