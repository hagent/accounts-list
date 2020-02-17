import styled from "styled-components";

const LoaderIcon = styled.div`
  border-radius: 50%;
  border: ${props => `${props.size / 5}px solid #f3f3f3`};
  border-top: ${props => `${props.size / 5}px solid #3498db`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderIcon
