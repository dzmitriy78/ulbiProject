import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123245",
                password: "123"
            }
        })
    ]
}
export const PrimaryWithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123245",
                password: "123",
                error: "ERROR"
            }
        })
    ]
}
export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true
            }
        })
    ]
}
export const PrimaryDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "123245",
                password: "123"
            }
        })
    ]
}