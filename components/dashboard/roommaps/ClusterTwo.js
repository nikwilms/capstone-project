import React from 'react';
import styled from 'styled-components';

import Desk from './Desk';
import Area from './Area';

const ClusterTwo = ({ bookableObjects }) => {
  const listOfBookableNames = bookableObjects.filter(
    (tabels) => tabels.bookable
  );

  //save as file
  const overMatrix = ['leftUp', 'rightUp', 'leftDown', 'floor'];

  /* prettier-ignore */
  const matrix = [
    ['C2_31', 'C2_32', 'C2_28', 'C2_27', 'C2_23', 'C2_22', 'C2_19', 'C2_18', 'C2_14', 'C2_13',
     'D46', 'D47', 'D48', 'D49', 'D50', 'D51', 'D52', 'D53', 'D54', 'D55', 'D56', 'D57', 'D58', 'D59', 
     'D60', 'D61', 'D62', 'D63', 'D64', 'D65', 'D66', 'D67', 'D68', 'D69', 'D70', 'D71', 'D72', 'D73'],
    ['C2_35', 'C2_34', 'C2_33', 'C2_30', 'C2_29', 'C2_24', 'C2_15', 'C2_16', 'C2_17', 'C2_20', 'C2_21', 'C2_25', 'C2_26',
     'D100', 'D101', 'D102', 'D103', 'D104', 'D105', 'D106', 'D107', 'D108', 'D109', 'D110', 'D111', 'D112', 'D113', 'D114',
     'D115', 'D116', 'D117', 'D118', 'D119', 'D120', 'D121', 'D122', 'D123', 'D124', 'D125', 'D126', 'D127', 'D128', 'D129',
     'D130', 'D131', 'D132', 'D133', 'D134', 'D135'],
    ['C2_12', 'C2_11', 'C2_10', 'C2_9', 'C2_8', 'C2_7', 'C2_6', 'C2_5', 'C2_4', 'C2_3', 'C2_2', 'C2_1',
      'D74', 'D75', 'D76', 'D77', 'D78', 'D79', 'D80', 'D81', 'D82', 'D83', 'D84', 'D85', 'D86', 'D87', 'D88', 'D89', 'D90',
      'D91', 'D92', 'D93', 'D94', 'D95', 'D96', 'D97', 'D98', 'D99' ],
    [""],
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
  grid-template-rows: 0.8fr 1.2fr;
  gap: 0em 2em;
  grid-auto-flow: row;
  grid-template-areas:
    'leftUp rightUp'
    'leftDown floor';
  width: auto;
  height: auto;

  .leftUp {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      '. C2_31 . D46 . C2_32 . D47'
      'D48 . D49 . D50 . D51 .'
      '. D52 . C2_27 . D53 . C2_28'
      'D54 . D55 . D56 . D57 .'
      '. C2_22 . D58 . C2_23 . D59'
      'D60 . D61 . D62 . D63 .'
      '. D64 . C2_18 . D65 . C2_19'
      'D66 . D67 . D68 . D69 .'
      '. C2_13 . . . C2_14 . .'
      'D70 . D71 . D72 . D73 .';
    grid-area: leftUp;
    border: solid 2px black;
  }

  .rightUp {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      'C2_33 . D100 . C2_34 . D101 . C2_35 .'
      '. D102 . D103 . D104 . D105 . D106'
      'D107 . C2_29 . D108 . C2_30 . D109 .'
      '. D110 . D111 . D112 . D113 . D114'
      'C2_24 . D115 . C2_25 . D116 . C2_26 .'
      '. D117 . D118 . D119 . D120 . D121'
      'D122 . C2_20 . D123 . C2_21 . D124 .'
      '. D125 . D126 . D127 . D128 . D129'
      'C2_15 . D130 . C2_16 . D131 . C2_17 .'
      '. D132 . D133 . D134 . D135 . .';
    grid-area: rightUp;
    border: solid 2px black;
  }

  .leftDown {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(17, 1fr);
    gap: 0.5em 0.5em;
    grid-auto-flow: row;
    grid-template-areas:
      '. D74 . C2_11 . D75 . C2_12'
      'D76 . D77 . D78 . D79 .'
      '. C2_9 . D80 . C2_10 . D81'
      'D82 . D83 . D84 . D85 .'
      '. D86 . C2_7 . D87 . C2_8'
      '. . D88 . . . . .'
      '. C2_6 . D89 . . . .'
      '. . D90 . . . . .'
      '. D91 . C2_5 . . . .'
      '. . D92 . . . . .'
      '. C2_4 . D93 . . . .'
      '. . D94 . . . . .'
      '. D95 . C2_3 . . . .'
      '. . D96 . . . . .'
      '. C2_2 . D97 . . . .'
      '. . D98 . . . . .'
      '. D99 . C2_1 . . . .';
    grid-area: leftDown;
    border: solid 2px black;
  }

  .floor {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      '. '
      '. ';
    grid-area: floor;
    border: solid 2px black;
    background-color: #dedede;
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

export default ClusterTwo;
