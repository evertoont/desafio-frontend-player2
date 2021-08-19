import api from "./api";

export const getDataBank = async () => {
  
  try {
    const {data} = await api.get()

    const dataBanks = []

    data.forEach(banks => {
      dataBanks.push({
        ispb: banks.ispb,
        name: banks.name,
        code: banks.code,
        fullName: banks.fullName,
      })
    });

    return dataBanks
  } catch (error) {
    console.log(error.message)
  }
}