import { createContext, useContext, Dispatch, SetStateAction } from "react";

type PageContextType = Dispatch<SetStateAction<string | undefined>>;

export const PageContext = createContext<PageContextType | undefined>(
  undefined
);

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
