import './Header.css'

function Header({index}) {
  return (
    // takes the index as a property so that the question number in the header automatically updates
    <div className="top">
      <h3 className="name">Question Number {index}</h3>
    </div>
  );
}

export default Header;
