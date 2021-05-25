import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type ConfirmProps = {
  title: ReactNode;
};

const Confirm = ({ title }: ConfirmProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 306px;
  padding: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export default Confirm;
