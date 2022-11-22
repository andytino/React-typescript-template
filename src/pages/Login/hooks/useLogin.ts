import { useLazyGetProfileQuery, useLoginMutation } from '@/apis/auth/auth'
import { ROUTE_PATH, storageKeys } from '@/common/constants'
import { IAuthRequest } from '@/common/ts/interfaces'
import { ILoginNavigateOptionsState } from '@/common/ts/interfaces/location'
import { StorageService } from '@/services/local-storage'
import { useLocation, useNavigate } from 'react-router-dom'
import { setCredentials } from '@/store/user'
import { useAppDispatch } from '@/store/hook'
import { setTokenCredentials } from '@/store/authToken'

export const useLogIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const stateLocation = location.state as ILoginNavigateOptionsState

  const dispatch = useAppDispatch()

  const [getUserLogin] = useLoginMutation()
  const [getProfile] = useLazyGetProfileQuery()

  const login = async (values: IAuthRequest) => {
    try {
      const user = await getUserLogin(values).unwrap()
      const accessToken = user.result.data?.accessToken || null
      const refreshToken = user.result.data?.refreshToken || null

      // 1: storing to local storage
      StorageService.set(storageKeys.authToken, {
        accessToken,
        refreshToken
      })

      // 2: update key in store
      if (accessToken && refreshToken) {
        dispatch(
          setTokenCredentials({
            accessToken,
            refreshToken
          })
        )
      }

      // 3: update profile in store
      const profileResponse = await getProfile().unwrap()
      const profile = profileResponse?.result?.data
      if (profile) {
        dispatch(setCredentials(profile))
      }

      // 4: Move to Home page
      const temporaryToken = accessToken || ''
      const from = stateLocation?.from
      const navigateState: ILoginNavigateOptionsState = { temporaryToken, from }

      navigate(ROUTE_PATH.home, {
        state: navigateState
      })
    } catch (err) {
      //
    }
  }

  return {
    login
  }
}
