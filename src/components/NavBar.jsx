const linkStyle = "m-auto cursor-pointer hover:text-green";
const navStyle = `bg-myblack text-mywhite flex flex-col md:flex-row w-screen
                  md:justify-evenly p-2`;

function NavBar() {
  return (
    <div className={navStyle}>
      <div id="App-logo" className="text-8xl cursor-pointer">Surfspot</div>
      <div className="flex gap-8 text-lg">
        <div className={linkStyle}>Locations</div>
        <div className={linkStyle}>Login</div>
        <div className={linkStyle + " text-green"}>Signup</div>
      </div>
    </div>
  )
}

export default NavBar;
