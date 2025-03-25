---

# FirstAppNgmodule

This project is an online CRUD operation-based Angular web application created using AngularJS. It allows courses to be added and managed through Angular forms on the admin dashboard. The application was deployed using Docker by creating a Docker image, running a Docker container, and serving it with an Nginx server. This project was developed as a practice project to learn Angular, which was later used in a company project.

## Tech Stack

- **Frontend:** AngularJS
- **Containerization & Deployment:** Docker
- **Web Server:** Nginx

## Installation and Setup

Follow these steps to set up and run the project locally:

### 1. Clone the repository

Open a terminal and run:

```bash
git clone <repository-url>
cd FirstAppNgmodule
```

### 2. Install dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

If Angular CLI is not installed, install it globally using:

```bash
npm install -g @angular/cli
```

### 3. Build the Angular project

To compile the project for deployment, run:

```bash
ng build
```

### 4. Create a Docker image

Create a `Dockerfile` and add the necessary configuration. Then, build the Docker image:

```bash
docker build -t firstapp-ngmodule .
```

### 5. Run the Docker container

Start the application using the following command:

```bash
docker run --rm -p 8080:80 firstapp-ngmodule
```

### 6. Access the application

Once the container is running, open your browser and go to:

```
http://localhost:8080
```

Your Angular application should now be live!

---
