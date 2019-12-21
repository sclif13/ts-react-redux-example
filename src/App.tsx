import React from "react"
import { useSelector as useReduxSelector, shallowEqual, TypedUseSelectorHook, useDispatch } from "react-redux"
import { AppState } from "./store"
import { newStudent } from "./actions"
import Student from "./components/Student"

const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

const App: React.FC = () => {
    const students = useSelector(state => state.data, shallowEqual)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <table className="striped">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Дата рождения</th>
                        <th>Успеваемость</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s => (
                        <Student {...s} key={s.id} />
                    ))}
                </tbody>
            </table>
            <button
                className="btn-floating btn-large m20"
                onClick={() => dispatch(newStudent(Date.now()))}
                title="Добавить"
            >
                <i className="small material-icons">add</i>
            </button>
        </div>
    )
}

export default App
