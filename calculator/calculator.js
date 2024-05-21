

function Calculator() {
  const [currentExpression, setCurrentExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
   
    setCurrentExpression(currentExpression + value);
  };

  const handleEvaluate = () => {
    try {
      const calculatedResult = eval(currentExpression); 
      setResult(calculatedResult);
    } catch (error) {
      console.error('Error during evaluation:', error);
      
    }
  };

  return (
    <div className="calculator">
      <Display expression={currentExpression} result={result} />
      <div className="button-container">
        <Button value="7" onClick={handleButtonClick} />
        {/* ...other buttons... */}
        <Button value="=" onClick={handleEvaluate} />
      </div>
    </div>
  );
}

export default Calculator;
