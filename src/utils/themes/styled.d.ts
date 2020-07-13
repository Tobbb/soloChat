import 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme {
        loginBG:string;
        loginFG: string;
        textLight:string;
        chatFG: string;
        chatMessages: string;
        chatMessagesBorder:string;
        breakpoints:{
            mobile: string;
            tablet: string;
            computer: string;
        }
    }
}