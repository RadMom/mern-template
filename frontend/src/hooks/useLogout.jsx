import { useAuthContext } from "./useAuthContext";
import { useContactsContext } from "./useContactsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //we can have dispatch twice so we just do this:
  const { dispatch: contactsDispatch } = useContactsContext();

  const logout = () => {
    //remove user from locale storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    //We do this to clear the global contacts state
    contactsDispatch({ type: "SET_CONTACTS", payload: null });
  };
  return { logout };
};
