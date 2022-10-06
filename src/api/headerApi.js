import { instance } from './api'

export const headerAPI = {
    setHeader() {
        return instance.get(`header/`)
            .then(async(response) => {
                return await response.data;
            });
    },
    // setCreateContact(data) {
    //     const { title_uz, photoUrl } = data;
    //     return instance.post(`contactHeadersAPI`, { title_uz, photoUrl })
    //     .then(async(response) => {
    //         return await response.data;
    //     });
    // },
    // setUpdateContact(data) {
    //     const { id, title_uz, photoUrl, originalPath } = data;
    //     return instance.put(`contactHeadersAPI/1`, { id, title_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
    //     .then(async(response) => {
    //         return await response.data;
    //     });
    // }
}