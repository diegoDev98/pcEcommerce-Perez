import firebase from 'firebase/app'
import '@firebase/firestore'

  const data = require('./productos.json');
  const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAnQJxCMoSvTSD5_UMnYD0sLR0cfoJnZRU",
    authDomain: "diegodev-ecommerce.firebaseapp.com",
    projectId: "diegodev-ecommerce",
    storageBucket: "diegodev-ecommerce.appspot.com",
    messagingSenderId: "405087077130",
    appId: "1:405087077130:web:471f127b81223f12e3f0f3"

  });

  
  export function getFirebase() {
    return firebaseConfig
  }

  export function getFireStore() {
    return firebase.firestore(firebaseConfig)
  }

  var db = getFireStore();






 //Function Auxiliar
 //Check if id exists in array of objects
 function userExists(id,arr) {
  return arr.some(function(el) {
    return el.id === id;
  }); 
}



//takes in array of objects
//then compares database collection array with parameter array
//if the id in the parameter array is not in DB
//adds that item
async  function addItems(arr,collection) {
  const snapshot = await db.collection(collection).get()
  const itemsInDB = snapshot.docs.map(doc => doc.data())
  arr.forEach(element => {
    if(!userExists(element.id,itemsInDB)){

        db.collection(collection).add(element).then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });

    }
  }); 
}//END OF UPDATE ITEMS



//Takes in as parameter an array of objects
//Deletes any document in collection 'items' that has any of the id's as any of the objects in the parameter array
async  function deleteItems(arr,collection) {
  const snapshot = await db.collection(collection).get()
  const itemsInDB = snapshot.docs.map(doc => doc.data())
  arr.forEach(element => {
    var jobskill_query = db.collection(collection).where('id','==',element.id);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }); 
}//END OF Delete ITEMS

  
  



  
