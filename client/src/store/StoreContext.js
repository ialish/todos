import { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import NotesStore from './NotesStore';

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(NotesStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
