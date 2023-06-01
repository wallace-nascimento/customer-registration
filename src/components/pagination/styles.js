import styled from "@emotion/styled"

export const PaginationItem = styled.div`
    ${props => props.isSelect && {
        background: '#9C27B0',
        color: 'white',
    }}
`