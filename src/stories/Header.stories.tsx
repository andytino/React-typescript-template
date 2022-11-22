import { USER_ROLES } from '@/common/ts/enums'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../common/components/Header'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    id: 0,
    name: 'GUEST',
    role: USER_ROLES['GUEST']
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
