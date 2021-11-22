import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Desk = ({ tableName, listOfBookableNames }) => {
  const isBookable = listOfBookableNames.some(
    (table) => table.name === tableName && table.bookable === true
  );
  console.log(isBookable);

  if (isBookable) {
    return (
      <Link key={tableName} href={'/booking/' + tableName} passHref>
        <StyledAnchor style={{ gridArea: tableName }}>{tableName}</StyledAnchor>
      </Link>
    );
    //width zuweisen
  } else {
    return <StyledDiv style={{ gridArea: tableName }}>W42</StyledDiv>;
  }
};

const StyledAnchor = styled.a`
  background-color: #93f5cf;
  color: black;
  padding: 0.5em;
  font-size: 0.5rem;
`;

const StyledDiv = styled.div`
  background-color: #dedede;
  color: white;

  font-size: 0.5rem;
  padding: 0.5em;
`;

export default Desk;
