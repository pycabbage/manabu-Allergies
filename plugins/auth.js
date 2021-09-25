// import firebase from './firebase'

// export function authState() {     
//     return new Promise((resolve, reject) => {
//         firebase.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 resolve(user)
//             } else {
//                 reject()
//             }
//         })
//     })
// }

// export function createUser(email, password) {  
//     return firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then((result) => {
//             return result
//         })
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function createUserWithProfile(email, password, name, photo) {
//     return createUser(email, password)
//         .then((result) => {
//             result.user.updateProfile({
//                 displayName: name,
//                 photoURL: photo,
//             }).then(() => {
//                 return result
//             }).catch((error) => {
//                 throw new Error(error)
//             })
//         })
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function signIn(email, password) {  
//     return firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((result) => {
//             return result
//         })
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function signOut() {      
//     return firebase.auth().signOut()
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function updateProfile(name, photo) {
//     return firebase.auth().currentUser.updateProfile({
//         displayName: name,
//         photoURL: photo,
//     }).catch((error) => {
//         throw new Error(error)
//     })
// }

// export function updateEmail(email) {
//     return firebase.auth().currentUser.updateEmail(email)
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function updatePassword(password) {
//     return firebase.auth().currentUser.updatePassword(password)
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function resetPassword(email) {       
//     return firebase.auth().sendPasswordResetEmail(email)
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function deleteAccount() {
//     return firebase.auth().currentUser.delete()
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function reAuth(password) { 
//     const user = firebase.auth().currentUser; 
//     const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password);
//     return firebase.auth().currentUser.reauthenticateWithCredential(credentials)
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export function confirmationEmail() {
//     return firebase.auth().currentUser.sendEmailVerification()
//         .catch((error) => {
//             throw new Error(error)
//         })
// }

// export default {
//     authState,
//     createUser,
//     createUserWithProfile,
//     signIn,
//     signOut,
//     updateProfile,
//     updateEmail,
//     updatePassword,
//     deleteAccount,
//     reAuth,
//     confirmationEmail,
// }