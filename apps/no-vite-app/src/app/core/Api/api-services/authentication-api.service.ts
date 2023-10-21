import { BaseApiService } from './base-api.service';

export const CheckUserResultCodes = {
  NOTFOUND_USER: 10,
  FOUND_USER: 11,
  WRONG_PASSWORD: 20,
  VAILD_PASSWORD: 21,
  INVALID_TOKEN: 30,
  VALID_TOKEN: 31,
};

export type CheckUserResponseType = {
  XTSCheckUserResponse: {
    checkingParameter: string;
    resultCode: string;
    resultDescription: string;
    userToken?: string;
  };
};

export class AuthenticationApiService extends BaseApiService {
  checkUserName = async (userName: string): Promise<CheckUserResponseType> => {
    return await this.post({
      xtsCheckUserRequest: {
        checkingParameter: 'userName',
        userName: userName,
      },
    });
  };

  checkPassword = async (
    userName: string,
    password: string
  ): Promise<CheckUserResponseType> => {
    return await this.post({
      xtsCheckUserRequest: {
        checkingParameter: 'password',
        userName: userName,
        password: password,
      },
    });
  };
}
