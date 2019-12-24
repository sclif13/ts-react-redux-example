import { IStudent, NEW_STUDENT, CHANGE_STUDENT, REMOVE_STUDENT, StudentActionTypes } from "../types"

const initialState: IStudent[] = [
    { id: 0, name: "Иван Иванович Иванов", birthdate: new Date("1991-12-10"), performance: "хор" },
    { id: 1, name: "Петр Петрович Петров", birthdate: new Date("1999-03-03") },
]

export default function configReducer(state = initialState, action: StudentActionTypes): IStudent[] {
    switch (action.type) {
        case NEW_STUDENT:
            return [...state, { id: action.id, editable: true }]
        case CHANGE_STUDENT:
            return state.map(e => (e.id !== action.payload.id ? e : action.payload))
        case REMOVE_STUDENT:
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}
