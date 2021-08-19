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

export const getInfoBank = async (code) => {
  
  try {
    const {data} = await api.get(code)

    return data

  } catch (error) {
    console.log(error.message)
  }
}