export default function (context) {
  if (context.route.path !== "/") {
    context.store.dispatch({
      type: "auth/authStateWithVerification",
    }).then((result) => {
      if (context.route.path == "/friend") {
        context.store.dispatch({
          type: "friend/getRequestFriend",
        })
        context.store.dispatch({
          type: "friend/getReceiveFriend",
        })
      }
      context.store.dispatch({
        type: "friend/getFriendList",
      })
      if ((context.route.path == "/login" || context.route.path == "/create") && result.emailVerified) {
        return context.redirect("/")
      } else if (!(context.route.path == "/login" || context.route.path == "/create") && !result.emailVerified) {
        return context.redirect("/login")
      }
    }).catch(() => {
      if (context.route.path !== "/login" && context.route.path !== "/create") {
        return context.redirect("/login")
      }
    })
  }
}
