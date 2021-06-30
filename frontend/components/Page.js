import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
        box-sizing: border-box;
        --red: #e01812;
        --orange: #ffa220;
        --black: #393939;
        --grey: #3A3A3A;
        --lightblue: #BDC5E4;
        --darkblue: #1a1c6b;
        --hoverBlue: #5c6fbc;
        --purple: #262161;
        --yellow: #ffc40e;
        --gold: #FFCB3B;
        --textGrey: #818181;
        --textGrey2: #B7B7B7;
        --lightGrey: #e1e1e1;
        --offWhite: #ededed;
        --backgroundGrey: #E8E8E8;
        --lightGreen: #3BFF89;
        --green: #3Bbc89;
        --lightRed: #FF3B3B;
        --kiwilight: rgba(0, 173, 152, 0.3);
        --kiwi: rgb(0, 173, 152);

        scroll-behavior: smooth;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.5rem;
      //  background-color: var(--kiwilight);
        background: linear-gradient(-45deg, var(--green), #23c7ab, var(--kiwilight), #23a6d5);
        background-size: 400% 400%;
        animation: gradient 15s ease-in-out infinite;


        @keyframes gradient {
            0%{
                background-position: 0 50%;
            }
            50%{
                background-position: 100% 50%;
            }
            100%{
                background-position: 0 50%;
            }
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        :hover{
            text-decoration: underline;
        }
    }

    *, *:before, *:after {
         box-sizing: inherit;
    }



`;

const InnerStyles = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1200px;
    @media all and (max-width: 900px) {
        max-width: 900px;
        padding: 2rem;
    }
`;

export default function Page({ children }) {
    return (
        <div>
            <GlobalStyles />
            <InnerStyles>{children}</InnerStyles>
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.any,
};
