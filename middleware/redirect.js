export default function (context) {
  context.store.dispatch({
    type: "auth/authStateWithVerification",
  }).then((result) => {
    if ((context.route.path == "/login"  context.route.path == "/create") && result.emailVerified) {
      return context.redirect("/")
    } else if (!(context.route.path == "/login"  context.route.path == "/create") && !result.emailVerified) {
      return context.redirect("/login")
    }
  }).catch(() => {
    if (context.route.path !== "/login" && context.route.path !== "/create") {
      return context.redirect("/login")
    }
  })
}
