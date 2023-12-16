"use client";
// DataContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";
import { StoreItemData } from "../(types)/types";

type DataContextProps = {
  children: ReactNode;
};

type DataContextType = {
  data: StoreItemData[] | undefined;
  setData: React.Dispatch<React.SetStateAction<StoreItemData[] | undefined>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState<DataContextType["data"]>(undefined);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
