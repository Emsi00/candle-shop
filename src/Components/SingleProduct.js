/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

const SingleProductInUpperDiv = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const SingleProduct = (props) => {
  return (
    <SingleProductInUpperDiv>
      <div
        style={{
          width: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "80px", height: "80px" }}
          src={require(`../Pages/Images/${props.adrUrl}`)}
        ></img>
      </div>
      <div>{props.children}</div>
    </SingleProductInUpperDiv>
  );
};

export default SingleProduct;
