import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState();
  const [logedIn, setLogedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile,
        logedIn,
        setLogedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
