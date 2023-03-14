import Button from "../components/Button";
import "../assets/Button.scss"
const first = () => {

  const handleButtonClick = () => {
    console.log("Button Clicked!");
  };
  const handleFetchSuccess = (response: any) => {
    console.log("Fetch Success!", response.data);
  };

  const handleFetchError = (error: any) => {
    console.error("Fetch Error!", error);
  };
  return (
    <div>
      <h1>첫번째 화면입니다.</h1>
      <h1>검색창</h1>
      <h1>상품사진</h1>
      <h1>First</h1>
      <Button
        children="다음"
        onClickAction={handleButtonClick}
        className="deactivate"
      />
    
      <Button children="다음" to="/first" className="activate" />
 
      <Button children="다음" type="submit" className="default" />

      <Button
        children="다음"
        onClickAction={handleButtonClick}
        fetchUrl="https://jsonplaceholder.typicode.com/todos/"
        onSuccess={handleFetchSuccess}
        onError={handleFetchError}
        className="default2"
      />
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
      <h1>First</h1>
    </div>
  );
};
export default first;
