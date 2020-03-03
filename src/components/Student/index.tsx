import React, { useState, useCallback } from "react"
import { IStudent } from "../../types"
import { useDispatch } from "react-redux"
import { removeStudent, changeStudent } from "../../actions"
import Flatpickr from "react-flatpickr"
import "./material_green.css"
import { Russian } from "flatpickr/dist/l10n/ru.js"

const Student: React.FC<IStudent> = ({ id, name = "", birthdate, editable = false, performance = "" }) => {
    const dispatch = useDispatch()
    const [student, setStudent] = useState({
        id,
        name,
        birthdate,
        editable,
        performance,
    })

    const changeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setStudent({ ...student, [e.target.name]: e.target.value })
        },
        [student],
    )

    const changeBirthdateHandler = useCallback(
        date => {
            setStudent({ ...student, birthdate: date[0] })
        },
        [student],
    )

    const saveHandler = useCallback(() => {
        dispatch(changeStudent({ ...student, editable: false }))
    }, [dispatch, student])

    const editHandler = useCallback(() => {
        dispatch(changeStudent({ ...student, editable: true }))
    }, [dispatch, student])

    const cancelHandler = useCallback(() => {
        setStudent({ ...student, name, birthdate, editable: false, performance })
    }, [student, name, birthdate, performance])

    const removeHandler = useCallback(() => dispatch(removeStudent(id)), [dispatch, id])

    return (
        <tr className={editable ? "editable" : ""}>
            <td>
                <input type="text" value={student.name} onChange={changeHandler} name="name" disabled={!editable} />
            </td>
            <td>
                <Flatpickr
                    value={student.birthdate}
                    options={{ locale: Russian }}
                    onChange={changeBirthdateHandler}
                    disabled={!editable}
                />
            </td>
            <td>
                <select value={student.performance} disabled={!editable} name="performance" onChange={changeHandler}>
                    {["", "неуд", "уд", "хор", "отл"].map((e, i) => (
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <div className="actions">
                    {editable ? (
                        <button className="btn" onClick={saveHandler} title="Сохранить">
                            <i className="small material-icons">done</i>
                        </button>
                    ) : (
                        <button className="btn" onClick={editHandler} title="Редактировать">
                            <i className="small material-icons">edit</i>
                        </button>
                    )}
                    <button disabled={!editable} className="btn" onClick={cancelHandler} title="Отмена">
                        <i className="small material-icons">undo</i>
                    </button>
                    <button className="btn" onClick={removeHandler} title="Удалить">
                        <i className="small material-icons">clear</i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default React.memo(Student)
