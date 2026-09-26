# Jarurat Care – Healthcare Support Portal

A concept-level healthcare support web application developed as a Full Stack Developer (AI-enabled) internship assignment for **Jarurat Care Foundation**.

The application provides a simple interface for users to request healthcare support, register as volunteers, access an AI-powered FAQ assistant, and allows authorized administrators to manage submitted requests through a protected dashboard.

---

## Project Overview

**Jarurat Care – Healthcare Support Portal** is designed to demonstrate how a lightweight digital platform can help an NGO collect healthcare support requests, organize volunteer registrations, and provide basic automated assistance to users.

The project combines a React frontend with Firebase services for authentication and data storage, Gemini for an AI-powered FAQ assistant, and Vercel for deployment.

> **Note:** This is a concept-level internship project and is not intended to provide medical diagnosis or professional medical advice.

---

## Problem Statement

NGOs supporting communities often need simple digital systems to:

* Collect healthcare support requests.
* Collect volunteer registrations.
* Organize submitted information.
* Provide basic answers to frequently asked questions.
* Give authorized staff access to submitted requests.

The goal of this project is to demonstrate a centralized web portal addressing these requirements using modern full-stack and AI technologies.

---

## Features

### User Features

* Responsive landing page.
* Healthcare Support Form.
* Volunteer Registration Form.
* AI-powered FAQ Assistant.
* Responsive design for desktop and mobile devices.

### Backend Features

* Firebase Firestore for storing support requests and volunteer registrations.
* Firebase Authentication for administrator authentication.
* Firestore Security Rules for access control.
* Gemini API integration for the FAQ assistant.

### Admin Features

* Protected admin login.
* Admin dashboard.
* Viewing submitted healthcare support requests.
* Viewing volunteer registrations.
* Access restricted through Firebase Authentication.

---

## Tech Stack

| Technology              | Purpose                       |
| ----------------------- | ----------------------------- |
| React                   | Frontend UI                   |
| TypeScript              | Type-safe development         |
| Vite                    | Development and build tooling |
| Tailwind CSS            | Styling and responsive UI     |
| React Router            | Client-side routing           |
| Firebase Authentication | Admin authentication          |
| Firebase Firestore      | Database                      |
| Google Gemini API       | AI FAQ Assistant              |
| Vercel                  | Hosting and deployment        |

---

## Application Architecture

```text
                    ┌──────────────────────┐
                    │      User / Admin    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + TypeScript │
                    │     Frontend         │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼─────────────────┐
              │                │                 │
              ▼                ▼                 ▼
      ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
      │   Firestore  │  │    Gemini    │  │   Firebase   │
      │   Database   │  │     API      │  │     Auth     │
      └──────────────┘  └──────────────┘  └──────────────┘
              │                                  │
              ▼                                  ▼
      Support Requests                    Admin Authentication
      Volunteer Records                   Protected Dashboard
```

### Application Flow

1. Users access the React web application.
2. Healthcare support requests are submitted through the support form.
3. Volunteer registrations are submitted through the volunteer form.
4. Form data is stored in Firebase Firestore.
5. Users can interact with the Gemini-powered FAQ assistant.
6. Administrators authenticate using Firebase Authentication.
7. Authenticated administrators can access the protected dashboard.

---

## AI Implementation

The project includes a **Gemini-powered FAQ Assistant**.

The assistant is designed to provide basic information related to the portal and its healthcare-support use case.

### AI Flow

```text
User Question
      │
      ▼
AI Assistant UI
      │
      ▼
Gemini API
      │
      ▼
Generated Response
      │
      ▼
Displayed to User
```

The AI assistant is intended for **FAQ and general informational support**.

It does not:

* Diagnose medical conditions.
* Replace healthcare professionals.
* Prescribe medication.
* Make clinical decisions.
* Provide emergency medical treatment.

This keeps the AI functionality aligned with the concept-level NGO support use case.

---

## Firebase Implementation

Firebase provides the application's backend services.

### Firebase Authentication

Firebase Authentication is used for administrator login.

The admin dashboard is protected so that unauthenticated users cannot access the administrative interface.

### Firebase Firestore

Firestore stores application data such as:

* Healthcare support requests.
* Volunteer registrations.

The frontend communicates with Firestore to submit and retrieve relevant data.

### Firestore Security Rules

Firestore Security Rules are used to control database access.

The rules distinguish between operations such as creating records and accessing administrative data.

Authentication is used as part of the access-control mechanism for protected functionality.

---

## Admin Functionality

The application includes a protected administration area.

Administrators can:

* Log in using Firebase Authentication.
* Access the protected admin dashboard.
* View submitted healthcare support requests.
* View volunteer registrations.

The admin dashboard is not intended to be a complete NGO management system; it demonstrates the core functionality required for the assignment.

---

## NGO Use Case

The portal can serve as a starting point for an NGO that needs a simple digital channel for community support.

A possible workflow is:

```text
Community Member
       │
       ▼
Healthcare Support Form
       │
       ▼
Firestore
       │
       ▼
NGO Administrator
       │
       ▼
Review Request
       │
       ▼
Follow-up / Support
```

Similarly, volunteers can register through the portal, allowing the organization to collect their information for future coordination.

The AI FAQ assistant can reduce the need to manually answer repetitive general questions.

---

## Security Considerations

The project includes basic security mechanisms appropriate for a concept-level application:

* Firebase Authentication for administrator access.
* Protected admin routes.
* Firestore Security Rules.
* Environment variables for configuration values.
* API credentials are not hard-coded directly into application components.
* Administrative functionality is separated from the public-facing pages.

### Production Considerations

A real healthcare deployment would require significantly stronger security and compliance measures, including appropriate handling of sensitive personal information, stronger authorization policies, audit logging, encryption considerations, secure server-side API handling, data retention policies, and applicable legal/regulatory compliance.

---

## Installation

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd jarurat-care-portal
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a local environment file such as:

```text
.env.local
```

Add the required Firebase configuration variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Add the Gemini API configuration required by the project:

```env
GEMINI_API_KEY=your_gemini_api_key
```

> Never commit private environment files or API credentials to GitHub.

Use your actual variable names if they differ from the examples above.

---

## Local Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL shown by Vite, typically:

```text
http://localhost:5173
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The application is deployed using **Vercel**.

The deployment process consists of:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel.
4. Build and deploy the application.
5. Configure the production domain if required.

### Live Demo

**[Open the Live Application](https://jarurat-care-portal-qe1i1odo1-triksoft1.vercel.app)**


---

## Future Improvements

Potential improvements for a production-oriented version include:

* Role-based admin access.
* Better admin management and filtering.
* Request status tracking.
* Admin ability to update request status.
* Email notifications for submitted requests.
* Volunteer management and coordination.
* Improved analytics and reporting.
* Server-side handling of AI requests.
* More comprehensive input validation.
* Rate limiting and abuse prevention.
* Improved monitoring and logging.
* Stronger protection for sensitive user information.
* Accessibility improvements.
* Multilingual support.
* Integration with additional NGO workflows.

---

## Project Status

**Completed internship assignment features:**

* React frontend
* Responsive UI
* Healthcare support form
* Volunteer registration
* Firebase Firestore integration
* Gemini AI FAQ Assistant
* Firebase Admin Authentication
* Protected Admin Dashboard
* Firestore Security Rules
* Vercel deployment

---

## Disclaimer

This project is a concept-level demonstration created for an internship assignment. It is not a substitute for professional healthcare services, medical diagnosis, emergency assistance, or clinical decision-making.
