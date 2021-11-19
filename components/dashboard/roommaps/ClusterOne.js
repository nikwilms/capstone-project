import React from 'react';
import styled from 'styled-components';

const ClusterOne = () => {
  return (
    <StyledContainer className='container'>
      <div className='leftUp'>
        <div className='C1_13' />
        <div className='C1_15' />
        <div className='C1_19' />
        <div className='C1_23' />
        <div className='C1_27' />
        <div className='C1_28' />
        <div className='C1_24' />
        <div className='C1_20' />
        <div className='C1_16' />
        <div className='C1_14' />
        <div className='D8' />
        <div className='D9' />
        <div className='D10' />
        <div className='D11' />
        <div className='D12' />
        <div className='D13' />
        <div className='D14' />
        <div className='D15' />
        <div className='D16' />
        <div className='D17' />
        <div className='D18' />
        <div className='D19' />
        <div className='D20' />
      </div>
      <div className='rightUp'>
        <div className='C1_25' />
        <div className='C1_26' />
        <div className='C1_29' />
        <div className='C1_22' />
        <div className='C1_18' />
        <div className='C1_17' />
        <div className='C1_21' />
        <div className='D21' />
        <div className='D45' />
        <div className='D22' />
        <div className='D23' />
        <div className='D24' />
        <div className='D25' />
        <div className='D26' />
        <div className='D27' />
        <div className='D28' />
        <div className='D29' />
      </div>
      <div className='leftDown'>
        <div className='C1_1' />
        <div className='C1_4' />
        <div className='C1_7' />
        <div className='C1_10' />
        <div className='D1' />
        <div className='D2' />
        <div className='D3' />
        <div className='D4' />
        <div className='D5' />
        <div className='D6' />
        <div className='D7' />
      </div>
      <div className='rightDown'>
        <div className='C1_2' />
        <div className='C1_3' />
        <div className='C1_5' />
        <div className='C1_6' />
        <div className='C1_8' />
        <div className='C1_9' />
        <div className='C1_12' />
        <div className='C1_11' />
        <div className='D30' />
        <div className='D31' />
        <div className='D32' />
        <div className='D33' />
        <div className='D34' />
        <div className='D35' />
        <div className='D36' />
        <div className='D37' />
        <div className='D38' />
        <div className='D39' />
        <div className='D40' />
        <div className='D41' />
        <div className='D42' />
        <div className='D43' />
        <div className='D44' />
        <div className='D45' />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0em 5em;
    grid-auto-flow: row;
    grid-template-areas:
      'leftUp rightUp'
      'leftDown rightDown';
  }

  .leftUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      'C1_27 . D20 . C1_28'
      '. D18 . D19 .'
      'C1_23 . D17 . C1_24'
      '. D15 . D16 .'
      'C1_19 . D14 . C1_20'
      '. D12 . D13 .'
      'C1_15 . D11 . C1_16'
      '. D9 . D10 .'
      'C1_13 . D8 . C1_14';
    grid-area: leftUp;
  }

  .C1_13 {
    grid-area: C1_13;
  }

  .C1_15 {
    grid-area: C1_15;
  }

  .C1_19 {
    grid-area: C1_19;
  }

  .C1_23 {
    grid-area: C1_23;
  }

  .C1_27 {
    grid-area: C1_27;
  }

  .C1_28 {
    grid-area: C1_28;
  }

  .C1_24 {
    grid-area: C1_24;
  }

  .C1_20 {
    grid-area: C1_20;
  }

  .C1_16 {
    grid-area: C1_16;
  }

  .C1_14 {
    grid-area: C1_14;
  }

  .D8 {
    grid-area: D8;
  }

  .D9 {
    grid-area: D9;
  }

  .D10 {
    grid-area: D10;
  }

  .D11 {
    grid-area: D11;
  }

  .D12 {
    grid-area: D12;
  }

  .D13 {
    grid-area: D13;
  }

  .D14 {
    grid-area: D14;
  }

  .D15 {
    grid-area: D15;
  }

  .D16 {
    grid-area: D16;
  }

  .D17 {
    grid-area: D17;
  }

  .D18 {
    grid-area: D18;
  }

  .D19 {
    grid-area: D19;
  }

  .D20 {
    grid-area: D20;
  }

  .rightUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      'D45 . C1_29 . . .'
      '. D21 . D22 . .'
      'C1_25 . D23 . C1_26 .'
      '. D24 . D25 . .'
      'C1_21 . D26 . C1_22 .'
      '. D27 . D28 . .'
      'C1_17 . D29 . C1_18 .'
      '. . . . . .'
      '. . . . . .';
    grid-area: rightUp;
  }

  .C1_25 {
    grid-area: C1_25;
  }

  .C1_26 {
    grid-area: C1_26;
  }

  .C1_29 {
    grid-area: C1_29;
  }

  .C1_22 {
    grid-area: C1_22;
  }

  .C1_18 {
    grid-area: C1_18;
  }

  .C1_17 {
    grid-area: C1_17;
  }

  .C1_21 {
    grid-area: C1_21;
  }

  .D21 {
    grid-area: D21;
  }

  .D45 {
    grid-area: D45;
  }

  .D22 {
    grid-area: D22;
  }

  .D23 {
    grid-area: D23;
  }

  .D24 {
    grid-area: D24;
  }

  .D25 {
    grid-area: D25;
  }

  .D26 {
    grid-area: D26;
  }

  .D27 {
    grid-area: D27;
  }

  .D28 {
    grid-area: D28;
  }

  .D29 {
    grid-area: D29;
  }

  .leftDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      '. D7 . . .'
      '. . C1_10 . .'
      '. . . D6 .'
      '. . D5 . C1_7'
      '. . . D4 .'
      '. . C1_4 . D3'
      '. . . D2 .'
      '. . D1 . C1_1'
      '. . . . .';
    grid-area: leftDown;
  }

  .C1_1 {
    grid-area: C1_1;
  }

  .C1_4 {
    grid-area: C1_4;
  }

  .C1_7 {
    grid-area: C1_7;
  }

  .C1_10 {
    grid-area: C1_10;
  }

  .D1 {
    grid-area: D1;
  }

  .D2 {
    grid-area: D2;
  }

  .D3 {
    grid-area: D3;
  }

  .D4 {
    grid-area: D4;
  }

  .D5 {
    grid-area: D5;
  }

  .D6 {
    grid-area: D6;
  }

  .D7 {
    grid-area: D7;
  }

  .rightDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      '. D30 . D31 . .'
      'C1_11 . D32 . C1_12 .'
      '. D33 . D34 . .'
      'C1_8 . D35 . C1_9 .'
      '. D36 . D37 . D38'
      'C1_5 . D39 . C1_6 .'
      '. D40 . D41 . D42'
      'C1_2 . D43 . C1_3 .'
      '. . . D44 . D45';
    grid-area: rightDown;
  }

  .C1_2 {
    grid-area: C1_2;
  }

  .C1_3 {
    grid-area: C1_3;
  }

  .C1_5 {
    grid-area: C1_5;
  }

  .C1_6 {
    grid-area: C1_6;
  }

  .C1_8 {
    grid-area: C1_8;
  }

  .C1_9 {
    grid-area: C1_9;
  }

  .C1_12 {
    grid-area: C1_12;
  }

  .C1_11 {
    grid-area: C1_11;
  }

  .D30 {
    grid-area: D30;
  }

  .D31 {
    grid-area: D31;
  }

  .D32 {
    grid-area: D32;
  }

  .D33 {
    grid-area: D33;
  }

  .D34 {
    grid-area: D34;
  }

  .D35 {
    grid-area: D35;
  }

  .D36 {
    grid-area: D36;
  }

  .D37 {
    grid-area: D37;
  }

  .D38 {
    grid-area: D38;
  }

  .D39 {
    grid-area: D39;
  }

  .D40 {
    grid-area: D40;
  }

  .D41 {
    grid-area: D41;
  }

  .D42 {
    grid-area: D42;
  }

  .D43 {
    grid-area: D43;
  }

  .D44 {
    grid-area: D44;
  }

  .D45 {
    grid-area: D45;
  }

  html,
  body,
  .container {
    height: 100%;
    margin: 0;
  }

  /* For presentation only, no need to copy the code below */

  .container * {
    border: 1px solid red;
    position: relative;
  }

  .container *:after {
    content: attr(class);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

export default ClusterOne;
