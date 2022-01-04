const CalcuFunc = (props) => {
  return (
    <button onClick={props.btnFunc} className={props.ClassName}>
      {props.btnName}
    </button>
  );
};

export default CalcuFunc;
