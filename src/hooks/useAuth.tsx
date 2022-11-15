import { useLazyGetProfileQuery } from '@/apis/auth/auth'
import { selectCurrentUser, setCredentials, initialUserState } from '@/store/user'
import { selectToken } from '@/store/authToken'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { history } from '@/hooks/useHistory'

export const useAuth = () => {
  const navigate = useNavigate()
  const { accessToken } = useAppSelector(selectToken)
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  const [getProfile, { isFetching: isLoadingProfile }] = useLazyGetProfileQuery()

  // history state
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  })

  useLayoutEffect(() => history.listen(setState), [])

  useEffect(() => {
    const fetchApi = async () => {
      if (accessToken && user.id === initialUserState.id) {
        try {
          const profileResponse = await getProfile().unwrap()
          const profileData = profileResponse?.result?.data
          if (profileData) {
            dispatch(setCredentials(profileData))
          }
        } catch (err) {
          //
        }
      }
    }

    fetchApi()
  }, [])

  const shortUserProfile = useMemo(() => {
    return {
      username: user.name,
      roles: user.role
    }
  }, [user])

  const moveToLoginPage = () => {
    navigate('/login')
  }

  return {
    state,
    user,
    shortUserProfile,
    isLoadingProfile,
    moveToLoginPage
  }
}
