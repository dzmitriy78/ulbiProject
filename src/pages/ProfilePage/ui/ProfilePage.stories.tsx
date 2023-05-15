import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import ProfilePage from "pages/ProfilePage/ui/ProfilePage";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({})
    ]
}
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK), StoreDecorator({})
    ]
}
