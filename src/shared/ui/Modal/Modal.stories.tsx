import {Meta, StoryObj} from "@storybook/react";
import {Modal} from "shared/ui/Modal/Modal";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "wait until bundle finished: /runtime_main." +
            "50f29b35c2d1d27175e6.hot-update.json[webpack-dev-middleware]" +
            " wait until bundle finished: /runtime_main.9c062c98cfbf582d6c98.hot-update.json"
    }
}
export const PrimaryDark: Story = {
    args: {
        isOpen: true,
        children: "wait until bundle finished: /runtime_main." +
            "50f29b35c2d1d27175e6.hot-update.json[webpack-dev-middleware]" +
            " wait until bundle finished: /runtime_main.9c062c98cfbf582d6c98.hot-update.json"
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}