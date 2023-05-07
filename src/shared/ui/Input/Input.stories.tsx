import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Input} from "./Input";

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: "name",
        value: "132345"
    }
}
export const PrimaryDark: Story = {
    args: {
        placeholder: "name",
        value: "13245"
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}