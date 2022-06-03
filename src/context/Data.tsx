import React from "react";

type DataContextProviderProps = {
  children: React.ReactNode;
};

const context = React.createContext<any | null>(null);

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [data, setData] = React.useState<any>("");
  const [futureData, setFutureData] = React.useState<any>("");
  return (
    <context.Provider value={{ data,setData, futureData, setFutureData }}>{children}</context.Provider>
  );
};

export { context, DataContextProvider };
