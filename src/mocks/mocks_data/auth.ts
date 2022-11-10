import { USER_ROLES } from '@/common/ts/enums'
import { IBaseResponse, IAuthResponse, IAuthMe, IVerifyAuth } from '@/common/ts/interfaces'

export const dummyAuthLogin: IBaseResponse<IVerifyAuth> = {
  success: false,
  result: {
    data: {
      id: 1,
      name: 'Andy',
      email: 'superadmin1@example.com',
      role: USER_ROLES['GUEST'],
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlhdCI6MTY2Nzk2NjY2OCwiZXhwIjoxNjY4MDUzMDY4LCJjbGFpbXMiOnsiYXV0aF90b2tlbiI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WkdkemIyNXNhVzVsTG5aaGJtUXVkRzlyZVc4dllXUnRhVzR2ZGpFdllYVjBhQzkyWlhKcFpua3RiRzluYVc0dGRHOXJaVzRpTENKcFlYUWlPakUyTmpjNU5qWTJOamNzSW1WNGNDSTZNVFkyTnprMk5qazJOeXdpYm1KbUlqb3hOalkzT1RZMk5qWTNMQ0pxZEdraU9pSm1SSEpsUjNrd1RGcERORmRMWlhoaklpd2ljM1ZpSWpvaU1TSXNJbkJ5ZGlJNkltUm1PRGd6WkdJNU4ySmtNRFZsWmpobVpqZzFNRGd5WkRZNE5tTTBOV1U0TXpKbE5Ua3pZVGtpZlEuckdrZlctaTFwQldYMm4wT1BCV3dROGVPYnhHVFhmVGo1V25BQ0kzWWZ5byJ9fQ.Cyq9evLTcqN3qGon4iw-dA9aTSA-7COotngXc0q4lho'
    }
  }
}

export const dummyRefeshAuth: IBaseResponse<IAuthResponse> = {
  success: true,
  result: {
    data: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
  }
}

export const dummyAuthMe: IBaseResponse<IAuthMe> = {
  success: true,
  result: {
    data: {
      id: 1,
      name: 'Andy',
      email: 'thang@gmail.com',
      avatar: null,
      status: 0,
      role: USER_ROLES['GUEST'],
      createdAt: '',
      updatedAt: '',
      deletedAt: null
    }
  }
}
