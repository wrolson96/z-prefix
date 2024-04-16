import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
