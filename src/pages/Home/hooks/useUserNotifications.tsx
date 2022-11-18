import { useGetUserNotificationsQuery } from '@/apis/notifications/notifications'

export interface IPropsUserNotification {
  id: string
}

export const useUserNotifications = (props: IPropsUserNotification) => {
  const { data: notifications } = useGetUserNotificationsQuery({ id: props.id })

  return {
    notifications
  }
}
