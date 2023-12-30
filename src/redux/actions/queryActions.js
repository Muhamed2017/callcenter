import * as actions from '../constants'

export const setInquery = (type) => ({
    type: actions.SET_QUERY,
    payload:type
})

export const setInqueryForCar = () => ({
    type: actions.SET_QUERY_FOR_CAR
})
export const setInqueryForSeal = () => ({
    type: actions.SET_QUERY_FOR_SEAL
})
export const setInqueryForFly = () => ({
    type: actions.SET_QUERY_FOR_FLY
})
export const setInqueryForPetrolium = () => ({
    type: actions.SET_QUERY_FOR_PETROLIUM
})
