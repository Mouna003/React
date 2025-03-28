import { useParams } from "react-router-dom";

function WordOrNumber() {
    const { value } = useParams();
    const isNumber = !isNaN(+value);

return (
    <h1>{isNumber ? `The number is: ${value}` : `The word is: ${value}`}</h1>
);
}
export default WordOrNumber;
