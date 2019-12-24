import React from "react"
import App from "./App"
import { mount } from "enzyme"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
import * as ReactReduxHooks from "./react-redux-hooks"
import Student from "./components/Student"
import { newStudent } from "./actions"
import configReducer from "./reducers/data"

describe("APP --- Render REACT COMPONENTS", () => {
    let wrapper
    let store

    beforeEach(() => {
        store = configureStore([])({
            data: [
                { id: 0, name: "Иван Иванович Иванов", birthdate: "1991-12-10", performance: "хор" },
                { id: 1, name: "Петр Петрович Петров", birthdate: "1999-03-03" },
                { id: 3, name: "Петр Петрович Петров", birthdate: "1999-03-03" },
            ],
        })

        jest.spyOn(ReactReduxHooks, "useSelector").mockImplementation(state => store.getState())
        jest.spyOn(ReactReduxHooks, "useDispatch").mockImplementation(() => store.dispatch)

        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        )
    })

    describe("on mount", () => {
        it("dispatch search action to store", () => {
            store.dispatch(newStudent(5))
            const actions = store.getActions()
            expect(actions).toEqual([{ type: "NEW_STUDENT", id: 5 }])
        })

        it("click button add", () => {
            const button = wrapper.find(".add")
            expect(button).toHaveLength(1)
            button.simulate("click")
            const actions = store.getActions()
            expect(actions[0].type).toEqual("NEW_STUDENT")
        })
    })

    it("+++ render the APP component", () => {
        expect(wrapper.length).toEqual(1)
    })

    it("should render Student components if recipes.length > 0", () => {
        expect(wrapper.find(Student)).toHaveLength(3)
    })
})

describe("REDUCER --- configReducer", () => {
    it("recuder NEW_STUDENT", () => {
        let state = []
        state = configReducer(state, { type: "NEW_STUDENT", id: 0 })
        expect(state).toEqual([{ id: 0, editable: true }])
    })

    it("recuder CHANGE_STUDENT", () => {
        let state = [{ id: 0, name: "John", birthdate: "2000-02-02" }]
        state = configReducer(state, {
            type: "CHANGE_STUDENT",
            payload: { id: 0, name: "Петр", birthdate: "2001-01-01" },
        })
        expect(state).toEqual([{ id: 0, name: "Петр", birthdate: "2001-01-01" }])
    })

    it("recuder REMOVE_STUDENT", () => {
        let state = [
            { id: 0, name: "John", birthdate: "2000-02-02" },
            { id: 1, name: "Ivan", birthdate: "2000-03-03" },
        ]
        state = configReducer(state, {
            type: "REMOVE_STUDENT",
            id: 0,
        })
        expect(state).not.toEqual([{ id: 0, name: "John", birthdate: "2000-02-02" }])
        expect(state).toEqual([{ id: 1, name: "Ivan", birthdate: "2000-03-03" }])
    })
})
