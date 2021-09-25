import firebase from './firebase'

export default class Data {
    static async init(access) {
        const user = await new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    resolve(user)
                } else {
                    reject("Not Login")
                }
            })
        })
        const data = new Data(access, user)
        return data;
    }

    constructor(access, user) {
        switch (access) {
            case "public": this.access = "publicaaa"; break;
            case "friend": this.access = "friendaaa"; break;
            default: this.access = "private"; break
        }
        this.id = user.uid
        this.name = user.displayName
        this.email = user.email
    }

    async set(key, value) {
        try {
            await firebase.firestore().collection(this.access).doc(this.id).update({
                [key]: value
            })
        } catch (error) {
            await firebase.firestore().collection(this.access).doc(this.id).set({
                id: this.id
            })
            await firebase.firestore().collection(this.access).doc(this.id).update({
                [key]: value
            })
        }
    }

    async get(key) {
        const data = (await firebase.firestore().collection(this.access).doc(this.id).get()).data()
        if (key == undefined) {
            return data
        } else {
            return data[key]
        }
    }

    async getAll(key) {
        if (this.access == "publicaaa" || this.access == "friend") {
            const data = []
            await (await firebase.firestore().collection(this.access).get()).forEach(value => {
                if (key == undefined) {
                    data.push({ id: value.id, value: value.data() })
                } else {
                    data.push({ id: value.id, value: value.data()[key] })
                }
            })
            return data;
        } else {
            return;
        }
    }
}