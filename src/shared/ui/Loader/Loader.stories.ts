import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Loader} from "shared/ui/Loader/Loader";

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}