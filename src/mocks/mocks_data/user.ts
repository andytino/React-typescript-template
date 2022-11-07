import { IBaseResponse, UserResponse } from '@/common/ts/interfaces'

export const dummyUser: IBaseResponse<UserResponse[]> = {
  success: true,
  result: {
    data: [
      {
        id: '1',
        name: 'Andy'
      },
      {
        id: '2',
        name: 'Lionel'
      }
    ]
  }
}
