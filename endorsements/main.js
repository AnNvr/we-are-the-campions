import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  databaseURL: "https://wearethechampions-32dbc-default-rtdb.asia-southeast1.firebasedatabase.app/" // specific database URL
}

const app = initializeApp(appSettings) // pass the settings into the embedded function to start up the app
const database = getDatabase(app) // pass the app into the embedded function to start the database 
const endorsementsInDB = ref(database, "endorsements") // ref is a firebase embedded function that takes databse and folder

// onValue(endorsementsInDB, (snapshot) => {
//  let endorsementsArray = Object.values(snapshot.val())
//  for (let i = 0; i < endorsementsArray.length; i++){
//    let
//  }
// })