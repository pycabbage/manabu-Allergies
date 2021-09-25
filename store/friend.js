import firebase, { db } from '../plugins/firebase'

export const state = () => ({
    requestFriendList: [],
    receiveFriendList: [],
    friendList: [],
})

export const getters = {
    requestFriendList: (state) => state.requestFriendList,
    receiveFriendList: (state) => state.receiveFriendList,
    friendList: (state) => state.friendList
}

export const mutations = {
    set(state, payload) {
        state.requestFriendList = payload.requestFriendList ?? state.requestFriendList
        state.receiveFriendList = payload.receiveFriendList ?? state.receiveFriendList
        state.friendList = payload.friendList ?? state.friendList
    }
}

export const actions = {
    async requestFriend(context, payload) {
        const userId = this.getters["auth/id"]
        if (payload.id !== userId) {
            const batch = db.batch();
            const requestRef = db.collection("request").doc(payload.id);
            const privateRef = db.collection("private").doc(userId);
            batch.update(requestRef, {
                user: firebase.firestore.FieldValue.arrayUnion({
                    id: userId,
                })
            })
            batch.update(privateRef, {
                requestFriend: firebase.firestore.FieldValue.arrayUnion({
                    id: payload.id,
                })
            })
            await batch.commit();
            context.dispatch({
                type: "getRequestFriend",
            })
        } else {
            throw Error("same")
        }
    },
    async deleteRequestFriend(context, payload) {
        const userId = this.getters["auth/id"]
        const batch = db.batch();
        const requestRef = db.collection("request").doc(payload.id);
        const privateRef = db.collection("private").doc(userId);
        batch.update(requestRef, {
            user: firebase.firestore.FieldValue.arrayRemove({
                id: userId,
            })
        })
        batch.update(privateRef, {
            requestFriend: firebase.firestore.FieldValue.arrayRemove({
                id: payload.id,
            })
        })
        await batch.commit();
        context.dispatch({
            type: "getRequestFriend",
        })
    },
    async getRequestFriend(context, _) {
        const userId = this.getters["auth/id"]
        const requestFriendId = await db.collection("private").doc(userId).get();
        const requestFriendIdList = requestFriendId.data().requestFriend.map((value) => value.id)
        const requestFriendData = await db.collection("public").where("id", "in", requestFriendIdList).get();
        const requestFriendDataList = []
        await requestFriendData.forEach((value) => {
            requestFriendDataList.push({ id: value.id, name: value.data().name })
        })
        context.commit({
            type: "set",
            requestFriendList: requestFriendDataList,
        })
    },
    async addReceiveFriend(context, payload) {
        const userId = this.getters["auth/id"]
        const batch = db.batch();
        const partnerFriendRef = db.collection("friend").doc(userId).collection("friend").doc(payload.id)
        const friendRef = db.collection("friend").doc(payload.id).collection("friend").doc(userId)
        const privateRef = db.collection("private").doc(userId)
        const partnerRequestRef = db.collection("request").doc(payload.id)
        const requestRef = db.collection("request").doc(userId)
        batch.set(partnerFriendRef, {
            id: payload.id
        })
        batch.set(friendRef, {
            id: userId
        })
        batch.update(privateRef, {
            requestFriend: firebase.firestore.FieldValue.arrayRemove({
                id: payload.id
            })
        })
        batch.update(partnerRequestRef, {
            user: firebase.firestore.FieldValue.arrayRemove({
                id: userId
            })
        })
        batch.update(requestRef, {
            user: firebase.firestore.FieldValue.arrayRemove({
                id: payload.id
            })
        })
        await batch.commit()
        context.dispatch({
            type: "getReceiveFriend",
        })
    },
    async deleteReceiveFriend(context, payload) {
        const userId = this.getters["auth/id"]
        const batch = db.batch();
        const privateRef = db.collection("private").doc(userId)
        const partnerRequestRef = db.collection("request").doc(payload.id)
        const requestRef = db.collection("request").doc(userId)
        batch.update(privateRef, {
            requestFriend: firebase.firestore.FieldValue.arrayRemove({
                id: payload.id
            })
        })
        batch.update(partnerRequestRef, {
            user: firebase.firestore.FieldValue.arrayRemove({
                id: userId
            })
        })
        batch.update(requestRef, {
            user: firebase.firestore.FieldValue.arrayRemove({
                id: payload.id
            })
        })
        await batch.commit()
        context.dispatch({
            type: "getReceiveFriend",
        })
    },
    async getReceiveFriend(context, _) {
        const userId = this.getters["auth/id"]
        const receiveFriendId = await db.collection("request").doc(userId).get();
        const receiveFriendIdList = receiveFriendId.data().user.map((value) => value.id)
        const receiveFriendData = await db.collection("public").where("id", "in", receiveFriendIdList).get();
        const receiveFriendDataList = []
        await receiveFriendData.forEach((value) => receiveFriendDataList.push({ id: value.id, name: value.data().name }))
        context.commit({
            type: "set",
            receiveFriendList: receiveFriendDataList,
        })
    },
    async deleteFriend(context, payload) {
        const userId = this.getters["auth/id"]
        const batch = db.batch();
        const partnerFriendRef = db.collection("friend").doc(userId).collection("friend").doc(payload.id)
        const friendRef = db.collection("friend").doc(payload.id).collection("friend").doc(userId)
        batch.delete(partnerFriendRef)
        batch.delete(friendRef)
        await batch.commit()
        context.dispatch({
            type: "getFriendList",
        })
    },
    async getFriendList(context, _) {
        const userId = this.getters["auth/id"]
        const friendId = await db.collection("friend").doc(userId).collection("friend").get()
        const friendIdList = []
        friendId.forEach((value) => friendIdList.push(value.id))
        const friendData = await db.collection("public").where("id", "in", friendIdList).get();
        const friendDataList = []
        await friendData.forEach((value) => friendDataList.push({ id: value.id, name: value.data().name }))
        context.commit({
            type: "set",
            friendList: friendDataList,
        })
    },
}