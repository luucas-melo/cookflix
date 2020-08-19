import styled from 'styled-components';

export const Container = styled.div`

    .Collapsible__trigger {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        padding: 12px 15px;
        display: inline-block;
        width: 100%;
        background-color: #333;
        border-radius: 3px;
    }
    .Collapsible__trigger:hover {
        cursor: pointer;
        background-color: #1E1D1D;
    }  
    .Collapsible {
        width: 100%;
        text-align: center;
        border-radius: 3px;
        
        margin: 3px;
        
    }
    

    
`;
export const List = styled.ul`
    padding: 0;
`;
List.Button = styled.button`
    padding: 12px 15px;
    width:100%;
    background-color: #333;
    color: var(--white);

    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    box-sizing: border-box;
    margin-bottom: 3px;
    border: none;
    border-radius: 0.75rem;
    

    text-decoration: none;
    outline: none;
    display: inline-block;
    transition: opacity .3s;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #1E1D1D;
    }
`;
export const ListItem = styled.li`
    padding: 12px 15px;
    
    margin-bottom: 3px;
`;