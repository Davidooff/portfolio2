import { createContext, ReactElement, useState } from "react";

// type Props = { children: ReactElement };

export type ErrContextType = {
  isErr: boolean | null;
  setIsErr: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const iErrContextState = {
  isErr: null,
  setIsErr: () => {},
};

const ErrContext = createContext<ErrContextType>(iErrContextState);

export default ErrContext;
