import firebase, { auth, db, storage } from '../plugins/firebase'

export const state = () => ({
    emailVerified: false,
    id: "",
    email: "",
    name: "",
    photo: "",
})

export const getters = {
    emailVerified: (state) => state.emailVerified,
    id: (state) => state.id,
    email: (state) => state.email,
    name: (state) => state.name,
    photo: (state) => state.photo,
}

export const mutations = {
    set(state, payload) {
        state.emailVerified = payload.emailVerified ?? state.emailVerified;
        state.id = payload.id ?? state.id;
        state.email = payload.email ?? state.email;
        state.name = payload.name ?? state.name;
        state.photo = payload.photo ?? state.photo;
    }
}

export const actions = {
    // authState(context) {
    //     return new Promise((resolve, reject) => {
    //         if (this.getters["auth/id"]) {
    //             resolve(firebase.auth().currentUser)
    //         } else {
    //             firebase.auth().onAuthStateChanged((user) => {
    //                 if (user) {
    //                     context.commit({
    //                         type: "set",
    //                         id: user.uid,
    //                         email: user.email,
    //                         name: user.displayName,
    //                         photo: user.photoURL,
    //                     })
    //                     resolve(user)
    //                 } else {
    //                     reject()
    //                 }
    //             })
    //         }
    //     })
    // },
    authStateWithVerification(context) {
        return new Promise((resolve, reject) => {
            if (this.getters["auth/emailVerified"]) {
                resolve({
                    emailVerified: this.getters["auth/emailVerified"],
                    id: this.getters["auth/id"],
                    email: this.getters["auth/email"],
                    name: this.getters["auth/name"],
                    photo: this.getters["auth/photo"],
                })
            } else {
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        const userData = {
                            emailVerified: user.emailVerified,
                            id: user.uid,
                            email: user.email,
                            name: user.displayName,
                            photo: user.photoURL,
                        }
                        context.commit({
                            type: "set",
                            ...userData
                        })
                        resolve({
                            ...userData
                        })
                    } else {
                        context.commit({
                            type: "set",
                            emailVerified: false,
                        })
                        reject()
                    }
                })
            }
        })
    },
    // async createUser(context, payload) {
    //     try {
    //         const result = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    //         context.commit({
    //             type: "set",
    //             id: result.user.uid,
    //             email: result.user.email,
    //         })
    //         return result
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    // async createUserWithProfile(context, payload) {
    //     try {
    //         const result = await context.dispatch({
    //             type: "createUser",
    //             email: payload.email,
    //             password: payload.password,
    //         })
    //         await result.user.updateProfile({
    //             displayName: payload.name,
    //             photoURL: payload.photo,
    //         })
    //         context.commit({
    //             type: "set",
    //             name: payload.name,
    //             photo: payload.photo,
    //         })
    //         return result
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async createUserWithProfileVerification(context, payload) {
        const result = await auth.createUserWithEmailAndPassword(payload.email, payload.password);
        await result.user.updateProfile({ displayName: payload.name, photoURL: payload.photo });
        await result.user.sendEmailVerification();
        const batch = db.batch();
        const publicRef = db.collection("public").doc(result.user.uid);
        const privateRef = db.collection("private").doc(result.user.uid);
        const requestRef = db.collection("request").doc(result.user.uid);
        batch.set(publicRef, {
            id: result.user.uid,
            name: result.user.displayName,
            photo: result.user.photoURL,
        })
        batch.set(privateRef, {
            requestFriend: []
        })
        batch.set(requestRef, {
            receiveFriend: []
        })
        await batch.commit();
        context.commit({
            type: "set",
            emailVerified: result.user.emailVerified,
            id: result.user.uid,
            email: result.user.email,
            name: result.user.displayName,
            photo: result.user.photoURL,
        })
        return result
    },
    // async signIn(context, payload) {
    //     try {
    //         const result = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    //         context.commit({
    //             type: "set",
    //             id: result.user.uid,
    //             email: result.user.email,
    //             name: result.user.displayName,
    //             photo: result.user.photoURL,
    //         })
    //         return result
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async signInWithVerification(context, payload) {
        const user = auth.currentUser
        if (!this.getters["auth/emailVerified"] && user) {
            await user.sendEmailVerification()
            return user;
        } else {
            const result = await auth.signInWithEmailAndPassword(payload.email, payload.password)
            context.commit({
                type: "set",
                emailVerified: result.user.emailVerified,
                id: result.user.uid,
                email: result.user.email,
                name: result.user.displayName,
                photo: result.user.photoURL,
            })
            return result.user;
        }
    },
    async signOut(context) {
        await auth.signOut()
        context.commit({
            type: "set",
            emailVerified: false,
            id: "",
            email: "",
            name: "",
            photo: "",
        })
    },
    async updateProfile(context, payload) {
        const result = await storage.ref().child(`${this.getters["auth/id"]}/userPhoto`).put(payload.photo)
        const userName = payload.name ?? this.getters["auth/name"]
        const userPhoto = payload.photo ? await result.ref.getDownloadURL() : this.getters["auth/photo"]
        await auth.currentUser.updateProfile({
            displayName: userName,
            photoURL: userPhoto,
        })
        await db.collection("public").doc(this.getters["auth/id"]).update({
            name: userName,
            photo: userPhoto
        })
        context.commit({
            type: "set",
            name: userName,
            photo: userPhoto,
        })
    },
    // async updateEmail(context, payload) {
    //     try {
    //         await firebase.auth().currentUser.updateEmail(payload.email)
    //         context.commit({
    //             type: "set",
    //             email: payload.email
    //         })
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async updateEmailWithAuth(context, payload) {
        const user = auth.currentUser
        const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.confirmationPassword);
        await user.reauthenticateWithCredential(credentials)
        await user.updateEmail(payload.email)
        context.commit({
            type: "set",
            email: payload.email
        })
    },
    // async updatePassword(_, payload) {
    //     try {
    //         await firebase.auth().currentUser.updatePassword(payload.password)
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async updatePasswordWithAuth(_, payload) {
        const user = firebase.auth().currentUser
        const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.confirmationPassword);
        await user.reauthenticateWithCredential(credentials)
        await user.updatePassword(payload.password)
    },
    async resetPassword(_, payload) {
        await firebase.auth().sendPasswordResetEmail(payload.email)
    },
    // async deleteAccount(context) {
    //     try {
    //         await firebase.auth().currentUser.delete()
    //         context.commit({
    //             type: "set",
    //             id: "",
    //             email: "",
    //             name: "",
    //             photo: "",
    //         })
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async deleteAccountWithAuth(context, payload) {
        const user = firebase.auth().currentUser
        const id = user.uid;
        const batch = db.batch();
        const publicRef = db.collection("public").doc(id);
        const privateRef = db.collection("private").doc(id);
        const requestRef = db.collection("request").doc(id);
        batch.delete(publicRef)
        batch.delete(privateRef)
        batch.delete(requestRef)
        await batch.commit();
        const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.confirmationPassword);
        await user.reauthenticateWithCredential(credentials)
        await user.delete()
        context.commit({
            type: "set",
            emailVerified: false,
            id: "",
            email: "",
            name: "",
            photo: "",
        })
    },
    // async reAuth(_, payload) {
    //     try {
    //         const user = firebase.auth().currentUser
    //         const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.password);
    //         await user.reauthenticateWithCredential(credentials)
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    // async confirmationEmail() {
    //     try {
    //         await firebase.auth().currentUser.sendEmailVerification()
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // }
}