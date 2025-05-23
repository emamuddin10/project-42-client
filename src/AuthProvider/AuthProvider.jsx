// import { createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// import axios from "axios";



// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)

//         .then((userCredential) => {
//             setLoading(false);
//             return userCredential;
//         });

//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
       
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     const updateUserProfile = (name, photo) => {

//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo

//         });
//     }
 
//     // new
//     const saveUser = async (user)=>{
//         console.log(user);
        
    
//         const currentUser = {
//             name: user?.displayName,
//             email: user?.email,
//             role: 'user',
//             isPremium: false,
//             status: 'verified'
//         }
//         console.log(currentUser)
//         const {data} = await axios.put(`https://project-42-server.onrender.com/user`,currentUser )
//         return data;
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             // if(currentUser) {
//             //     saveUser(currentUser)
//             // }
//             // console.log('current user', currentUser);
//             setLoading(false);
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         googleSignIn,
//         logOut,
//         updateUserProfile,
//         saveUser
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
 
    // new
    const saveUser = async user=>{
        const currentUser = {
            name: user?.displayName,
            email: user?.email,
            role: 'user',
         
            isPremium: false,
            status: 'verified'
        }
      
        const {data} = await axios.put(`https://project-42-server.onrender.com/user`,currentUser )
             return data;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser) {
                saveUser(currentUser)
            }
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;