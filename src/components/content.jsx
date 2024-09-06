import "./content.css";

function Block(props) {
  return (
    <>
      <div
        className={`block1 ${props.colorClass}`}
        style={{
          width: props.blockWidth,
          height: props.blockHeight,
        }}
      >
        {props.title}
        {props.info}
        {props.blocks}
      </div>
    </>
  );
}

export default Block;
