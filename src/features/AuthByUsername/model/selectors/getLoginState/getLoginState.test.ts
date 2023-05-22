import {StateSchema} from "app/providers/StoreProvider";
import {getLoginState} from "./getLoginState";

describe("getLoginState.test", () => {
    test("should return state", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "12345",
                password: "54321",
                isLoading: true,
                error: "error"
            }
        }
        expect(getLoginState(state as StateSchema)).toEqual({
            username: "12345",
            password: "54321",
            isLoading: true,
            error: "error"
        })
    })
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})