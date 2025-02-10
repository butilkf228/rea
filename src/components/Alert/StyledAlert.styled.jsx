import style from "styled-components"

export const StyledAlert = style.p`

    line-height: 1.5;
    padding: 10px 20px;
    color:#fff
    background-color: ${({ type }) => { 
        switch (type) {
            case 'error': 
                return 'red' 
            case 'warning': 
                return 'orange'
            case 'success': 
                return 'green' 
            default: 
                return 'gray'
        }
    }};
`