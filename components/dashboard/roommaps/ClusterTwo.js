import React from 'react';
import styled from 'styled-components';

const ClusterTwo = () => {
  return (
    <StyledContainer className='container'>
      <div className='leftUp'>
        <div className='C2_31' />
        <div className='C2_32' />
        <div className='C2_28' />
        <div className='C2_27' />
        <div className='C2_23' />
        <div className='C2_22' />
        <div className='C2_19' />
        <div className='C2_18' />
        <div className='C2_14' />
        <div className='C2_13' />
        <div className='D46' />
        <div className='D47' />
        <div className='D48' />
        <div className='D49' />
        <div className='D50' />
        <div className='D51' />
        <div className='D52' />
        <div className='D53' />
        <div className='D54' />
        <div className='D55' />
        <div className='D56' />
        <div className='D57' />
        <div className='D58' />
        <div className='D59' />
        <div className='D60' />
        <div className='D61' />
        <div className='D62' />
        <div className='D63' />
        <div className='D64' />
        <div className='D65' />
        <div className='D66' />
        <div className='D67' />
        <div className='D68' />
        <div className='D69' />
        <div className='D70' />
        <div className='D71' />
        <div className='D72' />
        <div className='D73' />
      </div>
      <div className='rightUp'>
        <div className='C2_35' />
        <div className='C2_34' />
        <div className='C2_33' />
        <div className='C2_30' />
        <div className='C2_29' />
        <div className='C2_24' />
        <div className='C2_15' />
        <div className='C2_16' />
        <div className='C2_17' />
        <div className='C2_20' />
        <div className='C2_21' />
        <div className='C2_25' />
        <div className='C2_26' />
        <div className='D100' />
        <div className='D101' />
        <div className='D102' />
        <div className='D103' />
        <div className='D104' />
        <div className='D105' />
        <div className='D106' />
        <div className='D107' />
        <div className='D108' />
        <div className='D109' />
        <div className='D110' />
        <div className='D111' />
        <div className='D112' />
        <div className='D113' />
        <div className='D114' />
        <div className='D115' />
        <div className='D116' />
        <div className='D117' />
        <div className='D118' />
        <div className='D119' />
        <div className='D120' />
        <div className='D121' />
        <div className='D122' />
        <div className='D123' />
        <div className='D124' />
        <div className='D125' />
        <div className='D126' />
        <div className='D127' />
        <div className='D128' />
        <div className='D129' />
        <div className='D130' />
        <div className='D131' />
        <div className='D132' />
        <div className='D133' />
        <div className='D134' />
        <div className='D135' />
      </div>
      <div className='leftDown'>
        <div className='C2_12' />
        <div className='C2_11' />
        <div className='C2_10' />
        <div className='C2_9' />
        <div className='C2_8' />
        <div className='C2_7' />
        <div className='C2_6' />
        <div className='C2_5' />
        <div className='C2_4' />
        <div className='C2_3' />
        <div className='C2_2' />
        <div className='C2_1' />
        <div className='D74' />
        <div className='D75' />
        <div className='D76' />
        <div className='D77' />
        <div className='D78' />
        <div className='D79' />
        <div className='D80' />
        <div className='D81' />
        <div className='D82' />
        <div className='D83' />
        <div className='D84' />
        <div className='D85' />
        <div className='D86' />
        <div className='D87' />
        <div className='D88' />
        <div className='D89' />
        <div className='D90' />
        <div className='D91' />
        <div className='D92' />
        <div className='D93' />
        <div className='D94' />
        <div className='D95' />
        <div className='D96' />
        <div className='D97' />
        <div className='D98' />
        <div className='D99' />
      </div>
      <div className='floor' />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.8fr 1.2fr;
    gap: 0em 2em;
    grid-auto-flow: row;
    grid-template-areas:
      'leftUp rightUp'
      'leftDown floor';
  }

  .leftUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  }

  .C2_31 {
    grid-area: C2_31;
  }

  .C2_32 {
    grid-area: C2_32;
  }

  .C2_28 {
    grid-area: C2_28;
  }

  .C2_27 {
    grid-area: C2_27;
  }

  .C2_23 {
    grid-area: C2_23;
  }

  .C2_22 {
    grid-area: C2_22;
  }

  .C2_19 {
    grid-area: C2_19;
  }

  .C2_18 {
    grid-area: C2_18;
  }

  .C2_14 {
    grid-area: C2_14;
  }

  .C2_13 {
    grid-area: C2_13;
  }

  .D46 {
    grid-area: D46;
  }

  .D47 {
    grid-area: D47;
  }

  .D48 {
    grid-area: D48;
  }

  .D49 {
    grid-area: D49;
  }

  .D50 {
    grid-area: D50;
  }

  .D51 {
    grid-area: D51;
  }

  .D52 {
    grid-area: D52;
  }

  .D53 {
    grid-area: D53;
  }

  .D54 {
    grid-area: D54;
  }

  .D55 {
    grid-area: D55;
  }

  .D56 {
    grid-area: D56;
  }

  .D57 {
    grid-area: D57;
  }

  .D58 {
    grid-area: D58;
  }

  .D59 {
    grid-area: D59;
  }

  .D60 {
    grid-area: D60;
  }

  .D61 {
    grid-area: D61;
  }

  .D62 {
    grid-area: D62;
  }

  .D63 {
    grid-area: D63;
  }

  .D64 {
    grid-area: D64;
  }

  .D65 {
    grid-area: D65;
  }

  .D66 {
    grid-area: D66;
  }

  .D67 {
    grid-area: D67;
  }

  .D68 {
    grid-area: D68;
  }

  .D69 {
    grid-area: D69;
  }

  .D70 {
    grid-area: D70;
  }

  .D71 {
    grid-area: D71;
  }

  .D72 {
    grid-area: D72;
  }

  .D73 {
    grid-area: D73;
  }

  .rightUp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  }

  .C2_35 {
    grid-area: C2_35;
  }

  .C2_34 {
    grid-area: C2_34;
  }

  .C2_33 {
    grid-area: C2_33;
  }

  .C2_30 {
    grid-area: C2_30;
  }

  .C2_29 {
    grid-area: C2_29;
  }

  .C2_24 {
    grid-area: C2_24;
  }

  .C2_15 {
    grid-area: C2_15;
  }

  .C2_16 {
    grid-area: C2_16;
  }

  .C2_17 {
    grid-area: C2_17;
  }

  .C2_20 {
    grid-area: C2_20;
  }

  .C2_21 {
    grid-area: C2_21;
  }

  .C2_25 {
    grid-area: C2_25;
  }

  .C2_26 {
    grid-area: C2_26;
  }

  .D100 {
    grid-area: D100;
  }

  .D101 {
    grid-area: D101;
  }

  .D102 {
    grid-area: D102;
  }

  .D103 {
    grid-area: D103;
  }

  .D104 {
    grid-area: D104;
  }

  .D105 {
    grid-area: D105;
  }

  .D106 {
    grid-area: D106;
  }

  .D107 {
    grid-area: D107;
  }

  .D108 {
    grid-area: D108;
  }

  .D109 {
    grid-area: D109;
  }

  .D110 {
    grid-area: D110;
  }

  .D111 {
    grid-area: D111;
  }

  .D112 {
    grid-area: D112;
  }

  .D113 {
    grid-area: D113;
  }

  .D114 {
    grid-area: D114;
  }

  .D115 {
    grid-area: D115;
  }

  .D116 {
    grid-area: D116;
  }

  .D117 {
    grid-area: D117;
  }

  .D118 {
    grid-area: D118;
  }

  .D119 {
    grid-area: D119;
  }

  .D120 {
    grid-area: D120;
  }

  .D121 {
    grid-area: D121;
  }

  .D122 {
    grid-area: D122;
  }

  .D123 {
    grid-area: D123;
  }

  .D124 {
    grid-area: D124;
  }

  .D125 {
    grid-area: D125;
  }

  .D126 {
    grid-area: D126;
  }

  .D127 {
    grid-area: D127;
  }

  .D128 {
    grid-area: D128;
  }

  .D129 {
    grid-area: D129;
  }

  .D130 {
    grid-area: D130;
  }

  .D131 {
    grid-area: D131;
  }

  .D132 {
    grid-area: D132;
  }

  .D133 {
    grid-area: D133;
  }

  .D134 {
    grid-area: D134;
  }

  .D135 {
    grid-area: D135;
  }

  .leftDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  }

  .C2_12 {
    grid-area: C2_12;
  }

  .C2_11 {
    grid-area: C2_11;
  }

  .C2_10 {
    grid-area: C2_10;
  }

  .C2_9 {
    grid-area: C2_9;
  }

  .C2_8 {
    grid-area: C2_8;
  }

  .C2_7 {
    grid-area: C2_7;
  }

  .C2_6 {
    grid-area: C2_6;
  }

  .C2_5 {
    grid-area: C2_5;
  }

  .C2_4 {
    grid-area: C2_4;
  }

  .C2_3 {
    grid-area: C2_3;
  }

  .C2_2 {
    grid-area: C2_2;
  }

  .C2_1 {
    grid-area: C2_1;
  }

  .D74 {
    grid-area: D74;
  }

  .D75 {
    grid-area: D75;
  }

  .D76 {
    grid-area: D76;
  }

  .D77 {
    grid-area: D77;
  }

  .D78 {
    grid-area: D78;
  }

  .D79 {
    grid-area: D79;
  }

  .D80 {
    grid-area: D80;
  }

  .D81 {
    grid-area: D81;
  }

  .D82 {
    grid-area: D82;
  }

  .D83 {
    grid-area: D83;
  }

  .D84 {
    grid-area: D84;
  }

  .D85 {
    grid-area: D85;
  }

  .D86 {
    grid-area: D86;
  }

  .D87 {
    grid-area: D87;
  }

  .D88 {
    grid-area: D88;
  }

  .D89 {
    grid-area: D89;
  }

  .D90 {
    grid-area: D90;
  }

  .D91 {
    grid-area: D91;
  }

  .D92 {
    grid-area: D92;
  }

  .D93 {
    grid-area: D93;
  }

  .D94 {
    grid-area: D94;
  }

  .D95 {
    grid-area: D95;
  }

  .D96 {
    grid-area: D96;
  }

  .D97 {
    grid-area: D97;
  }

  .D98 {
    grid-area: D98;
  }

  .D99 {
    grid-area: D99;
  }

  .floor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      '. . .'
      '. . .'
      '. . .';
    grid-area: floor;
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
