import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDSFlmWNCd-smOwXiYbwUdkPtH71s1jBFA",
    authDomain: "react-ecommerce-db-b7f53.firebaseapp.com",
    projectId: "react-ecommerce-db-b7f53",
    storageBucket: "react-ecommerce-db-b7f53.appspot.com",
    messagingSenderId: "503520580374",
    appId: "1:503520580374:web:81d1b4b340a197f2357637",
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"

  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
    

    if(userSnapshot.exists()) {
      const{displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,

        });
      } catch (error){
        console.log('error creating the user', error.message );
      }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);


  /**
   * {
   * next: callback,
   * error: errorCallback,
   * complete: completedCallback,
   *  }
   * 
   */

  
