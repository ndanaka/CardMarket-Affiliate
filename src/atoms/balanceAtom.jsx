import { atom } from "jotai";

export const balanceAtom = atom({ pending: 0, withdrawable: 0, withdrawn: 0 });
