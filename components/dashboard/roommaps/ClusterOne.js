import React from 'react';
import styled from 'styled-components';

import Desk from './Desk';
import Area from './Area';

const ClusterOne = ({ bookableObjects }) => {
  const listOfBookableNames = bookableObjects.filter(
    (tabels) => tabels.bookable
  );

  //save as file
  const overMatrix = ['leftUp', 'rightUp', 'leftDown', 'rightDown'];

  /* prettier-ignore */
  const matrix = [
    ['C1_13', 'C1_15', 'C1_19', 'C1_23', 'C1_27', 'C1_28', 'C1_24', 'C1_20', 'C1_16', 'C1_14','D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
    ['C1_25', 'C1_26', 'C1_29', 'C1_22', 'C1_18', 'C1_17', 'C1_21', 'D21', 'D45', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29'],
    ['C1_1', 'C1_4', 'C1_7', 'C1_10', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
    ['C1_2','C1_3','C1_5','C1_6','C1_8', 'C1_9', 'C1_12','C1_11','D30','D31','D32','D33','D34','D35','D36','D37','D38','D39','D40','D41','D42','D43','D44','D45'],
  ];

  return (
    <ScrollContainer>
      <StyledContainer className='container'>
        {overMatrix.map((area, index) => {
          return (
            <Area key={area} areaName={area}>
              {matrix[index].map((table) => (
                <Desk
                  key={table}
                  tableName={table}
                  listOfBookableNames={listOfBookableNames}
                />
              ))}
            </Area>
          );
        })}
      </StyledContainer>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  overflow: scroll;
  width: 100vw;
  height: 400px;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0em 5em;
  grid-auto-flow: row;
  grid-template-areas:
    'leftUp rightUp'
    'leftDown rightDown';
  width: auto;
  height: auto;

  .leftUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    border: solid 2px black;
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

  .rightUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    border: solid 2px black;
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

  .leftDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    border: solid 2px black;
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

  .rightDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    border: solid 2px black;
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
