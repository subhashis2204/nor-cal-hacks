import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return <>
    <button onClick={() => loginWithRedirect()} className="bg-green-700 text-white px-3 py-2 text-sm rounded-md">Login</button>
  </>;
}

function Logout() {
  const { logout } = useAuth0()
  return <>
    <button onClick={() => logout()} className="bg-green-700 text-white px-3 py-2 text-sm rounded-md">Logout</button>
  </>
}

function Navbar() {
  const { isAuthenticated } = useAuth0()

  return <>
    <div className="flex justify-between items-center bg-black py-4 text-white px-8">
      <h1 className="font-md text-xl">StudyMate</h1>
      {
        isAuthenticated ? <Logout /> : <Login />
      }
    </div>
  </>;
}

export default Navbar;
