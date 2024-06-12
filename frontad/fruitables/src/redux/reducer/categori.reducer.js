import { ADD_CATEGORI, DELETE_CATEGORI, GET_CATEGORI, UPDATE_CATEGORI } from "../ActionType";

const initialState = {
    isLoading: false,
    categori: [],
    error: null
}

export const categoriReducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case GET_CATEGORI:
            return {
                ...state,
                isLoading: false,
                categori: action.payload.data
            }
        case ADD_CATEGORI:
            return {
                ...state,

                categori: state.categori.concat(action.payload.data)
            }
        case DELETE_CATEGORI:
            return {
                isloading: false,
                ...state,
                categori: state.categori.filter((v) => v._id !== action.payload),
                error: null
            }

        case UPDATE_CATEGORI:
            return {
                ...state,
                isLoading: false,
                categori: state.categori.map((v) => {
                    if (v._id === action.payload._id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
            }
        default:
            return state;
    }
}