import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {Separator} from "shared/ui/Separator";

const meta: Meta<typeof Separator> = {
    title: 'widgets/Separator',
    component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const SeparatorEl: Story = {
    name: 'Separator',

};
SeparatorEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SeparatorDark: Story = {
    name: 'Separator Dark',
};
SeparatorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SeparatorDarkBlue: Story = {
    name: 'Separator Dark Blue',
};
SeparatorDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
