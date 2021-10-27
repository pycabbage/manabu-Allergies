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
            case "public": this.access = "public"; break;
            case "friend": this.access = "friend"; break;
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
        if (this.access == "public" || this.access == "friend") {
            const data = []
            await (await firebase.firestore().collection(this.access).limit(20).orderBy("point").get()).forEach(value => {
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

    async setFile(key, file) {
        const r = await firebase.storage().ref().child(`${this.id}/${key}`).put(file)
        return r.ref.getDownloadURL()
    }

    async getFile(key) {
        const r = await firebase.storage().ref().child(`${this.id}/${key}`).getDownloadURL()
        return r
    }

    async deleteFile(key) {
        await firebase.storage().ref().child(`${this.id}/${key}`).delete()
    }
}


export async function toIcon(id) {
    try {
        const a = await firebase.storage().ref().child(`${id}/userPhoto`).getDownloadURL()
        return a
    } catch (error) {
        return "default"
    }

}