export default function ({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  if (!store.state.isLogged) {
    console.log(store.state.isLogged)
    return redirect('/login')
  }
}
