# 📚 3Booketeers

3Booketeers is a collaborative book club web app that allows users to create, manage, and view real-time book club meetings. Built using React, Firestore, and the Google Geocoding API, the app focuses on simple functionality, ownership-based access, and real-time updates.

---

## ✨ Features

- 🔐 Create and manage Book Club meetings
- ✅ Only the creator of a meeting can delete it
- 🧭 Location support using Google Geocoding API
- 🔄 Real-time updates via Firestore listeners
- 🧼 Clean, component-based React code structure

---

## 🛠️ Tech Stack

- **Frontend**: React (with Vite)
- **Database**: Firebase Firestore (NoSQL)
- **APIs**: Google Geocoding API

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone https://github.com/your-username/3booketeers.git
cd 3booketeers
```

2. **🛠️ Install Dependencies**

Run the following command:

```bash
npm install
```

3. **:fire: Set up Firebase Firestore**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Go to project settings and grab your config values
   - Create a .env file in the root directory and add:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_GEOCODING_API_KEY=your_google_maps_api_key
     ```
     
4. **Run the app**
   ```bash
   npm run dev
   ```
   The app will be accessible at http://localhost:5173.

---

## 🧪 API Documentation

### 🔸 Create Book Club

- **File**: `src/components/BookClub.jsx`
- **Function**: Adds a new document to Firestore in the `bookclubs` collection.
- **Fields Required**:
  - `title` *(string)*
  - `description` *(string)*
  - `date` *(timestamp)*
  - `location` *(string – converted to lat/lng)*
  - `userId` *(creator’s ID)*

---

### 🔸 Delete Book Club

- **File**: `src/components/BookClub.jsx`
- **Function**: Deletes a document from Firestore **only if** the current user is the creator.
- **Logic**: Matches `userId` of meeting with `currentUser.uid`

---

### 🔸 Geocoding API Integration

- **Purpose**: Converts user-entered location into latitude and longitude
- **File**: `src/components/BookClub.jsx`
- **API Used**: Google Maps Geocoding API
- **Usage**: Called during Book Club creation when a location is submitted in the form

---

### 🔸 Google Books API Integration

- **Purpose**: Fetches book information such as title, author, and thumbnail image
- **File**: `src/components/BookSearch.jsx`
- **API Used**: Google Books API  
- **Usage**: When users search for a book title, we call the Google Books API to retrieve relevant book results and display them in the UI.

  **Example API call:**
  ```bash
  https://www.googleapis.com/books/v1/volumes?q=searchTerm&key=YOUR_API_KEY
