function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
      <div>
        <h2>Json Stringify</h2>
        squares = {JSON.stringify(squares)}
      </div>
    );
  }
  
  export default JsonStringify;