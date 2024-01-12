import './Header.css'

function Header({index}) {
  return (
    <div className="top">
      <h3 className="name">Question Number {index}</h3>
    </div>
  );
}

export default Header;
