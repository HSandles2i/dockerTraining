# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Dockerized React App 
This project is a React application that has been dockerized using Docker. 
This README will guide you through the steps to build and run the Docker container for the application.

Prerequisites Before you begin, ensure you have the following installed on your machine:

Docker 
Node.js (for local development)

Getting Started Clone the Repository Clone this repository to your local machine:

### 'git clone cd'

Build the Docker Image To build the Docker image for the React app, run the following command in the terminal:

### docker build -t my-react-app .

my-react-app: This is the name you are assigning to your Docker image. You can change it as needed.

Run the Docker Container After building the image, you can run the Docker container using the following command:

### docker run -p 3000:3000 my-react-app 

The -p 3000:3000 flag maps port 3000 of your host machine to port 3000 of the container, allowing you to access the React app in your web browser.

Access the Application Once the container is running, you can access the React application by navigating to http://localhost:3000 in your web browser.

Dockerfile Explanation The provided Dockerfile includes the following instructions:

FROM node:18-alpine: This line sets the base image to the lightweight Node.js version (18-alpine). 

WORKDIR /app: This command creates and sets the working directory in the container to /app. 

COPY . .: This command copies all files from the current directory on the host to the working directory in the container. 

RUN npm install: This command installs the necessary dependencies for the React application. 

EXPOSE 3000: This command informs Docker that the container listens on port 3000 at runtime. 

CMD ["npm", "start"]: This command specifies the command to run the application when the container starts.

Additional Notes If you need to rebuild the image after making changes, you can use the same docker build command as above.

To stop the running container, use CTRL + C in the terminal where the container is running or find the container ID and stop it with:

docker stop <container-id>
