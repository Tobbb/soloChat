const USER_NAME ="USER_NAME";

interface SetUserName {
    type: typeof USER_NAME;
    payload: {
        name: string;
    }
}
export type UserInfoActions = SetUserName; 