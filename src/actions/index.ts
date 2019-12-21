import {
    NEW_STUDENT,
    REMOVE_STUDENT,
    CHANGE_STUDENT,
    IStudent,
    INewStudentAction,
    IChangeStudentAction,
    IRemoveStudentAction,
} from "../types"

export function newStudent(id: number): INewStudentAction {
    return {
        type: NEW_STUDENT,
        id,
    }
}

export function changeStudent(student: IStudent): IChangeStudentAction {
    return {
        type: CHANGE_STUDENT,
        payload: student,
    }
}

export function removeStudent(id: number): IRemoveStudentAction {
    return {
        type: REMOVE_STUDENT,
        id,
    }
}
