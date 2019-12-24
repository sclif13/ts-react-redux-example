export interface IStudent {
    id: number
    name?: string
    birthdate?: string
    performance?: "" | "неуд" | "уд" | "хор" | "отл"
    editable?: boolean
}

export const NEW_STUDENT = "NEW_STUDENT"
export const CHANGE_STUDENT = "CHANGE_STUDENT"
export const REMOVE_STUDENT = "REMOVE_STUDENT"

export interface INewStudentAction {
    type: typeof NEW_STUDENT
    id: number
}

export interface IChangeStudentAction {
    type: typeof CHANGE_STUDENT
    payload: IStudent
}

export interface IRemoveStudentAction {
    type: typeof REMOVE_STUDENT
    id: number
}

export type StudentActionTypes = INewStudentAction | IChangeStudentAction | IRemoveStudentAction
