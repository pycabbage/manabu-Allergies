import firebase, { auth, db, storage } from './firebase'

export default class Data {
    static async init(access) {
        const user = await new Promise((resolve, reject) => {
            auth.onAuthStateChanged((user) => {
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
            await db.collection(this.access).doc(this.id).update({
                [key]: value
            })
        } catch (error) {
            await db.collection(this.access).doc(this.id).set({
                id: this.id
            })
            await db.collection(this.access).doc(this.id).update({
                [key]: value
            })
        }
    }

    async get(key) {
        const data = (await db.collection(this.access).doc(this.id).get()).data()
        if (key == undefined) {
            return data
        } else {
            return data[key]
        }
    }

    async getPoint() {
        const data = (await db.collection("public").doc(this.id).get()).data().point;
        return data
    }

    async setPoint(p) {
        await db.collection("public").doc(this.id).update({
            "point": p
        })
    }

    async setZukan(p) {
        const dddd = await this.get("zukanID") ?? []
        console.log(dddd);
        console.log(p);
        dddd.push(p);
        await db.collection("public").doc(this.id).set({
            "zukanID": dddd
        })
    }

    async getAll(key) {
        if (this.access == "public" || this.access == "friend") {
            const data = []
            await (await db.collection(this.access).limit(20).orderBy("point", "desc").get()).forEach(value => {
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
        const r = await storage.ref().child(`${this.id}/${key}`).put(file)
        return r.ref.getDownloadURL()
    }

    async getFile(key) {
        const r = await storage.ref().child(`${this.id}/${key}`).getDownloadURL()
        return r
    }

    async deleteFile(key) {
        await storage.ref().child(`${this.id}/${key}`).delete()
    }
}


export async function toIcon(id) {
    try {
        const a = await storage.ref().child(`${id}/userPhoto`).getDownloadURL()
        return a
    } catch (error) {
        return "default"
    }

}