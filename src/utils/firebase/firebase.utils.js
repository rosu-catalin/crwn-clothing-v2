import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCsMmK81wbu-Yk4X_GrMLIicY-2SZY2dDs",
    authDomain: "crwn-clothing-db-5314b.firebaseapp.com",
    projectId: "crwn-clothing-db-5314b",
    storageBucket: "crwn-clothing-db-5314b.appspot.com",
    messagingSenderId: "838214788117",
    appId: "1:838214788117:web:6fcfb2c25dc981a8945a1c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch (e) {
            console.log('error creating the user... ', e.message)
        }
    }

    return userDocRef

}