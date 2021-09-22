import firebase from '../plugins/firebase'

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
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        context.commit({
                            type: "set",
                            emailVerified: user.emailVerified,
                            id: user.uid,
                            email: user.email,
                            name: user.displayName,
                            photo: user.photoURL,
                        })
                        resolve(user)
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
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            await result.user.updateProfile({ displayName: payload.name, photoURL: payload.photo })
            await result.user.sendEmailVerification()
            context.commit({
                type: "set",
                emailVerified: result.user.emailVerified,
                id: result.user.uid,
                email: result.user.email,
                name: result.user.displayName,
                photo: result.user.photoURL,
            })
            return result
        } catch (error) {
            throw new Error(error)
        }
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
        try {
            const user = firebase.auth().currentUser
            if (!this.getters["auth/emailVerified"] && user) {
                await user.sendEmailVerification()
                return user
            } else {
                const result = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                context.commit({
                    type: "set",
                    emailVerified: result.user.emailVerified,
                    id: result.user.uid,
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                })
                return result
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    async signOut(context) {
        try {
            await firebase.auth().signOut()
            context.commit({
                type: "set",
                emailVerified: false,
                id: "",
                email: "",
                name: "",
                photo: "",
            })
        } catch (error) {
            throw new Error(error)
        }
    },
    async updateProfile(context, payload) {
        try {
            if (payload.photo) {
                const result = await firebase.storage().ref().child(`${this.getters["auth/id"]}/userPhoto`).put(payload.photo)
                payload.photo = await result.ref.getDownloadURL()
            } else {
                payload.photo = this.getters["auth/photo"]
            }
            await firebase.auth().currentUser.updateProfile({
                displayName: payload.name,
                photoURL: payload.photo,
            })
            context.commit({
                type: "set",
                name: payload.name,
                photo: payload.photo,
            })
        } catch (error) {
            throw new Error(error)
        }
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
        try {
            const user = firebase.auth().currentUser
            const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.confirmationPassword);
            await user.reauthenticateWithCredential(credentials)
            await user.updateEmail(payload.email)
            context.commit({
                type: "set",
                email: payload.email
            })
        } catch (error) {
            throw new Error(error)
        }
    },
    // async updatePassword(_, payload) {
    //     try {
    //         await firebase.auth().currentUser.updatePassword(payload.password)
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // },
    async updatePasswordWithAuth(_, payload) {
        try {
            const user = firebase.auth().currentUser
            const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, payload.confirmationPassword);
            await user.reauthenticateWithCredential(credentials)
            await user.updatePassword(payload.password)
        } catch (error) {
            throw new Error(error)
        }
    },
    async resetPassword(_, payload) {
        try {
            await firebase.auth().sendPasswordResetEmail(payload.email)
        } catch (error) {
            throw new Error(error)
        }
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
        try {
            const user = firebase.auth().currentUser
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
        } catch (error) {
            throw new Error(error)
        }
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
    async requestFriend(_, payload) {
        try {
            firebase.firestore().collection("friend").doc(this.getters["auth/id"]);
        } catch (error) {

        }
    }
}