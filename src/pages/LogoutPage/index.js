import { useAuth } from "../../services/auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Seguro que quieres cerrar sesión?</label> <br /> <br />
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { LogoutPage };
