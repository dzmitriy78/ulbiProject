import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "./Navbar";

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}