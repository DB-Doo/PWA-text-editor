# Progressive Web Application: Text Editor

This project is a text editor that runs in the browser, designed as a single-page application that meets the Progressive Web Application (PWA) criteria. It features offline functionality and data persistence through IndexedDB, making it a robust tool for developers to create notes or code snippets with or without an internet connection.

## Table of Contents

- [Screenshot](#screenshot)
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Screenshot
![Screenshot of the text editor](./Assets/Screenshot%202024-03-05%20110550.png)

## Introduction

The text editor is built to offer a seamless experience for developers looking to jot down notes or code snippets. It leverages modern web technologies to ensure that the application is accessible, reliable, and installable.

## Features

- **PWA Criteria**: The application is a fully functional Progressive Web Application.
- **Data Persistence**: Utilizes IndexedDB for data storage, ensuring that data is retained across sessions.
- **Offline Functionality**: The app functions offline, thanks to service workers and a cache-first strategy.
- **Modern JavaScript**: Built using next-gen JavaScript, bundled with Webpack, and transpiled with Babel for broad browser compatibility.
- **Installation**: Can be installed on desktops as a standalone application.

## Installation

To install the application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` to install all dependencies.
4. Start the application by running `npm run start`.

## Usage

Once installed, the application can be used to create, save, and retrieve text snippets or code notes. The interface is intuitive, allowing for easy navigation and interaction.

- **Creating Notes**: Simply start typing in the text editor area.
- **Saving Notes**: Data is automatically saved to IndexedDB when the DOM window is unfocused.
- **Retrieving Notes**: Upon reopening the text editor, previously saved notes are retrieved from IndexedDB.

## Deployment

This application is deployed on Heroku. You can access the live application [here](https://swa-dan-text-editor-9ae68d39fd46.herokuapp.com/).

## Credits

This project was developed as part of the edX Boot Camps curriculum. Special thanks to Gary Almes for the starter code supplied for this project. 
