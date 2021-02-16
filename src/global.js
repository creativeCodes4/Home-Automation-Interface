import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import image from './assets/background.jpg';

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.lightGrey};
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        .top{
            background: url(${image});
            background-size: cover;
            height: 45vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .gradient{
                position: absolute;
                background: linear-gradient(to top, ${({ theme }) =>
                  rgba(theme.primaryColor, 0.9)}, ${rgba('#000', 0.4)} );
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
            .degrees{
                background-color: ${({ theme }) => theme.white};
                width: 9rem;
                height: 9rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 5px double ${({ theme }) => theme.primaryColor};
                z-index: 2;
                font-size: 2.2rem;
            }
            .humidity{
                background-color: ${({ theme }) => rgba(theme.black, 0.4)};
                color: white;
                font-size: 1.8rem;
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 4px double ${({ theme }) => theme.primaryColor};
                z-index: 2;
            }
        }
        .bottom{
            height: 55vh;
            width: 100%;
            padding: 1rem 0rem;
            background: ${({ theme }) => theme.lightGrey};
            h1{
                font-size: 3rem;
                text-align:center;
                font-weight: 400;
                color: ${({ theme }) => theme.black};
            }
            .content{
                padding: 1rem;
                .card{
                    background: ${({ theme }) => theme.white};
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    .header{
                        padding: 1rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h3{
                            color: ${({ theme }) => theme.darkGrey};
                            font-size: 1.5rem;
                        }
                        p{
                            color: ${({ theme }) => theme.primaryColor};
                            font-weight: bolder;
                            font-size: 1.5rem;
                        }
                    }
                    .toggler{
                        padding: 1rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            }
        }
    }
    .container{
        width: 85%;
        margin: auto;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }


    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }


    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #0bbb71;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #0bbb71;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }


    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    @media screen and (max-width: 768px){
        .top{
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
            background-size: cover;
        }
        .gradient{
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
        }
    }
`;
