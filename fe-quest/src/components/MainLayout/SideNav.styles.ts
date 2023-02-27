import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const sideNavStyle = css({
    listStyle: 'none',
    float: 'left',
    width: '150px',
    height: 'calc(100vh - 61px)',
    borderRight: '1px solid #ccc',
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: '20px',
    '& li' : {
        marginTop: '20px'
    }
});

export const StyledNavLink = styled(NavLink)({
    marginBottom: '50px',
    textDecorationLine: 'none',
    color: '#000',
    '&.active': {
        color: '#3399FF',
    }
});

