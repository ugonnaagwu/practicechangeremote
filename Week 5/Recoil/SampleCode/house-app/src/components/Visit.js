

let Visit = (props, state) => {
  const myroom = props.name;
  console.log("Room " + myroom);
  return (
    <div>
      <div>
        {"   "}Visiting the {myroom}
      </div>
    </div>
  );
};

export default Visit;
