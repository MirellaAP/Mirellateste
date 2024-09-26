import React from 'react';

type ButtonProps = {
    name: string;
};

const Button: React.FC<ButtonProps> = ({ name }) => {
    return <div>{name}</div>;
};

export default Button;
