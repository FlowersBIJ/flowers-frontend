import React, { createContext, useContext } from "react";

interface TextContextProps {
   text: string;
   setText: (text: string) => void;
}

const TextContext = createContext<TextContextProps | undefined>(undefined);

export const useText = () => {
   const context = useContext(TextContext);
   if (!context) {
      throw new Error("useText must be used within a TextProvider");
   }
   return context;
};

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [text, setText] = React.useState("");

   return (
      <TextContext.Provider value={{ text, setText }}>
         {children}
      </TextContext.Provider>
   );
};
