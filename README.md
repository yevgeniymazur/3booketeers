# 📚 3Booketeers

**3Booketeers** is a collaborative web application designed to bring book lovers together. Users can create and join Book Clubs, leave book reviews, and get personalized book recommendations. The platform also integrates with the **Google Books API** to fetch book data and previews, and features an optional Book Store where users can explore purchasing options via affiliate links.

This app is built using **React** with **Firestore** as the database and integrates APIs such as **Google Books** and **Google Geocoding** to provide dynamic and location-aware features.

---

## 🔧 Core Features

- 👥 **User Authentication** (Login / Signup)
- 📅 **Create & Join Book Clubs**
- ✍️ **Leave & View Book Reviews**
- 📚 **Book Recommendations**
- 🛍️ **Integrated Book Store** with purchase/preview links
- 💬 **Threaded Comment System** with replies
- 🛠️ **Edit/Delete Posts** (CRUD)
- 🌍 **Geo-aware Book Club Search** *(planned)*
- 📖 **Book Preview Fetching via Google Books API**

---

## 🛠️ Technologies Used

- **React** – Component-based frontend
- **React Router** – Navigation and routing
- **Firebase Firestore** – Real-time database
- **Google Books API** – Book data, previews, covers
- **Google Geocoding API** – Location processing
- **Context API** – Global state management
- **CSS Flex/Grid** – Responsive mobile-first layout

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
