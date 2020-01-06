import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children, to, exact }) => <RouterLink extact={exact} to={to}>{children}</RouterLink>;

export default Link;
