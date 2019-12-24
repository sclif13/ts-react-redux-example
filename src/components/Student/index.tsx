import React, { useState, ChangeEvent } from "react"
import { IStudent } from "../../types"
import { useDispatch } from "react-redux"
import { removeStudent, changeStudent } from "../../actions"

const Student: React.FC<IStudent> = ({ id, name = "", birthdate = "", editable = false, performance = "" }) => {
    const dispatch = useDispatch()
    const [student, setStudent] = useState({
        id,
        name,
        birthdate,
        editable,
        performance,
    })
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    return (
        <tr className={editable ? "editable" : ""}>
            <td>
                <input type="text" value={student.name} onChange={changeHandler} name="name" disabled={!editable} />
            </td>
            <td>
                <input
                    type="date"
                    value={student.birthdate}
                    onChange={changeHandler}
                    name="birthdate"
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
                        <button
                            className="btn"
                            onClick={() => dispatch(changeStudent({ ...student, editable: false }))}
                            title="Сохранить"
                        >
                            <i className="small material-icons">done</i>
                        </button>
                    ) : (
                        <button
                            className="btn"
                            onClick={() => dispatch(changeStudent({ ...student, editable: true }))}
                            title="Редактировать"
                        >
                            <i className="small material-icons">edit</i>
                        </button>
                    )}
                    <button
                        disabled={!editable}
                        className="btn"
                        onClick={() => setStudent({ ...student, name, birthdate, editable: false, performance })}
                        title="Отмена"
                    >
                        <i className="small material-icons">undo</i>
                    </button>
                    <button className="btn" onClick={() => dispatch(removeStudent(id))} title="Удалить">
                        <i className="small material-icons">clear</i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Student
