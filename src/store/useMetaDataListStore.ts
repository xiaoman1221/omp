import { create } from 'zustand'
import { MetaDataListStatus, MetaDataListAction } from '../type'

const useMetaDataListStore = create<MetaDataListStatus & MetaDataListAction>((set) => ({
  metaDataList: [],
  updateMetaDataList: (metaDataList) => set(() => ({ metaDataList: metaDataList })),
  insertMetaDataList: (metaData) => set((state) => ({ metaDataList: [...state.metaDataList, metaData] }))
}))

export default useMetaDataListStore