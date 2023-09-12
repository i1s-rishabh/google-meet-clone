# Google Meet Clone

This project is our submission for the HyperVerge Academy Hackathon, organized by HyperVerse Inc. Our team, consisting of Nivedya M, Sonu Shakya, and Rishabh Sharma, decided to create a Google Meet clone as our project. This README provides an overview of the project, its technologies, and how to set it up.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Our project aims to replicate the core functionalities of Google Meet, providing users with a platform for video conferencing and real-time communication. It uses a combination of HTML/CSS for the frontend and React for the user interface, while the backend relies on WebRTC, Socket.io, PeerJS, and Redis to handle video calls, signaling, and data sharing.

## Technologies Used

### Frontend Stack
1. HTML/CSS - For building the structure and styling of the user interface.
2. React - To create a dynamic and responsive web application.

### Backend Stack
1. WebRTC - Enabling real-time video and audio communication between users.
2. Socket.io - Facilitating real-time messaging and signaling.
3. PeerJS - Simplifying WebRTC peer-to-peer connections.
4. Redis - Used for caching and managing shared data and room information.

## Features

Our Google Meet clone offers the following features:
- **Video Conferencing**: Users can initiate and join video conferences with multiple participants.
- **Audio and Video Control**: Ability to mute/unmute audio and enable/disable video during calls.
- **Real-time Chat**: In-meeting chat for text-based communication.
- **Invite Participants**: Share a meeting link or code to invite others.

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/Google-Meet-Clone.git
   cd Google-Meet-Clone
   ```

2. Install the required dependencies for both the frontend and backend.
   ```bash
   # Navigate to the frontend directory
   cd frontend
   npm install

   # Navigate to the backend directory
   cd ../backend
   npm install
   ```

3. Configure your environment variables. You may need to set up API keys, secrets, and other necessary configurations in `.env` files (or equivalent) for your development and production environments.

4. Start the frontend and backend servers.
   ```bash
   # Start the frontend server
   cd frontend
   npm start

   # Start the backend server
   cd ../backend
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Register or log in to your account.
2. Create a new meeting or join an existing one using a meeting link or code.
3. Enjoy video conferencing and real-time communication with your participants.
4. Explore other feature like live chat.

## Contributing

We welcome contributions to enhance this project. If you'd like to contribute, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code as per the terms of the license.

---

Feel free to reach out to our team members if you have any questions or need further assistance. Happy video conferencing with our Google Meet clone!
