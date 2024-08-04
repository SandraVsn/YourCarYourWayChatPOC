# YourCarYourWayChatPOC

## Project Overview

This project aims to create a Proof of Concept (PoC) to show that a real-time chat feature with customer service is possible. The PoC will demonstrate how an online chat system works. By following the technical guidelines we have set, we hope to show stakeholders that this chat solution is practical and effective.
This PoC uses Websocket protocol with a Spring Boot (Java 21) backend and an Angular 17 with standalone components frontend. Base styling was made with tailwind css. 
To use this app, you have to follow the next steps. When everything is installed and launched you can open two windows in your web browser and write to each other.

[![Watch the video](https://github.com/SandraVsn/YourCarYourWayChatPOC/blob/main/PoC.png)](https://github.com/SandraVsn/YourCarYourWayChatPOC/blob/main/PoCMoovie.mp4)

## Installation and Execution

### Clone the repository to your local machine:
    ```bash
    git clone https://github.com/SandraVsn/YourCarYourWayChatPOC
    ```

## Run Back-end

1. Navigate to the project directory:
    ```bash
    cd back
    ```

2. Install dependencies:
    ```bash
    mvn clean install
    ```

3. Run API :
    ```bash
    mvn spring-boot:run
    ```

## Run Front-end

1. Navigate to the project directory:
    ```bash
    cd front
    ```

2. Install dependencies:
    ```bash
    npm i
    ```

2. Run front-end :
    ```bash
    npm run start
    ```

Application is available at http://localhost:4200
Open 2 windows and dialog with each other !

##  Technologies

- Java 21
- Spring Boot 
- Angular 17
- Websocket
- Tailwind css
