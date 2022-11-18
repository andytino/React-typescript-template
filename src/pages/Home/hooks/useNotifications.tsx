import { useGetGeneralNotificationsQuery } from '@/apis/notifications/notifications'

export const useNotifications = () => {
  const { data: notifications } = useGetGeneralNotificationsQuery()

  return {
    notifications
  }
}
