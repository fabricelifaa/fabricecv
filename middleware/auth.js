export default function ({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  let session =  sessionStorage.getItem("fabSession");
  // console.log(session)
  if (session == '' || session == null) return redirect('/login');
    
}
