import styled from 'styled-components';

const CheckList = styled.li`
    list-style: none;
    margin-left: ${props => props.theme.space[3]};
    vertical-align: middle;
    &:not(:last-child) {margin-bottom: ${props => props.theme.space[3]};}
    &:before {
        content: '✔️';
        margin-right: ${props => props.theme.space[1]};
        float: left;
        clear: both;
        position: relative; 
        top: -2px;
    }
` 

export default CheckList;

    