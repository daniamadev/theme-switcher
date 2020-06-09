import "styled-components"
declare module "styled-components" {
  export interface DefaultTheme {
    //aqui dentro passa qual o formato que o tema tem
    title: string

    colors: {
      primary: string
      secundary: string

      background: string
      text: string
    }
  }
}
