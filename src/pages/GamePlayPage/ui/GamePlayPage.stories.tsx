import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import {GamePlayPage} from "pages/GamePlayPage";

const meta: Meta<typeof GamePlayPage> = {
    title: 'pages/GamePlayPage',
    component: GamePlayPage,
};

export default meta;
type Story = StoryObj<typeof GamePlayPage>;

export const GamePlayPageLight: Story = {
    name: 'Light',
};
GamePlayPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const GamePlayPageDark: Story = {
    name: 'Dark',
};
GamePlayPageDark.decorators = [ThemeDecorator(Theme.DARK)];
