import { create } from "zustand";

interface InvitationStates {
  isCoverVisible: boolean;
  setIsCoverVisible: (value: boolean) => void;
}

export const useInvitationStore = create<InvitationStates>((set) => ({
  isCoverVisible: true,
  setIsCoverVisible: (value: boolean) => set({ isCoverVisible: value }),
}));
