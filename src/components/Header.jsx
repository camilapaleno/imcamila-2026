import Link from "next/link";


function Header(prop) {
  return (
    <>
      <div className="header">
        <div className="title">
          <Link href='/#choose'>&#8592; Back</Link>
          <h1>{prop.title}</h1>
        </div>
        <div className="description"><p>{prop.description}</p></div>
      </div>
    </>
  );
}

export default Header;