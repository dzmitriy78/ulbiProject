import {Meta, StoryObj} from "@storybook/react";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "12345",
        text: "k.bns;ldgjnlsd'vmp';s"
    }
}
export const OnlyTitle: Story = {
    args: {
        title: "SDGSGSRGERHRY&E"
    }
}

export const Dark: Story = {
    args: {
        title: "12345",
        text: "k.bns;ldgjnlsd'vmp';s",
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
export const OnlyTextDark: Story = {
    args: {
        text: "mpl,jkweiojpoivjpm"
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
export const Error: Story = {
    args: {
        title: "THRJTYKYKT",
        text: "mplojpoivjpm",
        theme: TextTheme.ERROR
    }
}
export const ErrorDark: Story = {
    args: {
        title: "THRJTYKYKT",
        text: "mplojpoivjpm",
        theme: TextTheme.ERROR
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}