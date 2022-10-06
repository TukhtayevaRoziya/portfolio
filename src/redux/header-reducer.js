
import { headerAPI } from './../api/headerApi';
const SET_HEADER = '/contact/SET_CONTACT_IMAGES';

let initialState = {
    headerData: null,
};


export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER:
            return {
                ...state,
                headerData: action.headerData
            }
        default:
            return state;
    }
}

export const setHeaderData = (headerData) => ({ type: SET_HEADER, headerData });

export const getHeaderData = () => (dispatch) => {
    return headerAPI.setHeader()
        .then(res => {
            dispatch(setHeaderData(res));
        });
}
// export const getContactImageCreate = (data) => async (dispatch) => {
//     let image = await globalAPI.uploadImage(data.selectedImage)
//         .then(res => {
//             return res;
//         });

//     let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
//     data.photoUrl = path;

//     return await contactAPI.setCreateContact(data).then(res => {
//         dispatch(getContactImages());
//     });
// }
// export const getContactImageUpdate = (data) => async (dispatch) => {
//     let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
//         .then(res => {
//             return res;
//         });

//     let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
//     data.photoUrl = path;

//     return await contactAPI.setUpdateContact(data).then(res => {
//         dispatch(getContactImages());
//     });
// }