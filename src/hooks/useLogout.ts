import { ROUTE_PATH, storageKeys } from '@/common/constants'
import { StorageService } from '@/services/local-storage'
import { useAppDispatch } from '@/store/hook'
import { resetTokenCredentials } from '@/store/authToken'
import { resetCredentials } from '@/store/user'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logout = () => {
    // 1: Remove store
    StorageService.remove(storageKeys.authToken)
    dispatch(resetCredentials())
    dispatch(resetTokenCredentials())

    // 2: Move to Login page
    navigate(ROUTE_PATH.login)
  }

  return {
    logout
  }
}
