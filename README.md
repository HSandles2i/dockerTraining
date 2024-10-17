# dockerTraining

Dockerized React App
This project is a React application that has been dockerized using Docker. This README will guide you through the steps to build and run the Docker container for the application.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Docker
Node.js (for local development)

Getting Started
Clone the Repository
Clone this repository to your local machine:

git clone <repository-url>
cd <repository-name>


Build the Docker Image
To build the Docker image for the React app, run the following command in the terminal:

docker build -t my-react-app .
my-react-app: This is the name you are assigning to your Docker image. You can change it as needed.


Run the Docker Container
After building the image, you can run the Docker container using the following command:

docker run -p 3000:3000 my-react-app
The -p 3000:3000 flag maps port 3000 of your host machine to port 3000 of the container, allowing you to access the React app in your web browser.


Access the Application
Once the container is running, you can access the React application by navigating to http://localhost:3000 in your web browser.

Dockerfile Explanation
The provided Dockerfile includes the following instructions:

FROM node:18-alpine: This line sets the base image to the lightweight Node.js version (18-alpine).
WORKDIR /app: This command creates and sets the working directory in the container to /app.
COPY . .: This command copies all files from the current directory on the host to the working directory in the container.
RUN npm install: This command installs the necessary dependencies for the React application.
EXPOSE 3000: This command informs Docker that the container listens on port 3000 at runtime.
CMD ["npm", "start"]: This command specifies the command to run the application when the container starts.


Additional Notes
If you need to rebuild the image after making changes, you can use the same docker build command as above.

To stop the running container, use CTRL + C in the terminal where the container is running or find the container ID and stop it with:

docker stop <container-id>
