import { create } from "zustand";

export const useStore = create((set) => {
  return {
    userId: "",
    userName: "",
    appConnection: false,

    updateUserId: (newUserId) => set((state) => ({ userId: newUserId })),
    updateUserName: (newName) => set((state) => ({ userName: newName })),
    updateAppConnection: (status) =>
      set((state) => ({ appConnection: status })),
  };
});
