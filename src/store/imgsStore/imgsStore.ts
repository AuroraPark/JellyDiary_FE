import { create } from "zustand";
import { PostImgsType } from "../../types/postType.ts";

interface useImgsStoreProps {
  writeImgs: PostImgsType;
  changeImgs: (imgs: File[]) => void;
  deleteImgIds: number[];
}

export const useImgsStore = create<useImgsStoreProps>((set) => ({
  writeImgs: { postImgs: [] as File[] },
  changeImgs: (imgs: File[]) =>
    set((prev) => ({
      writeImgs: { ...prev.writeImgs, postImgs: imgs },
    })),
  deleteImgIds: [],
}));