const linkStyle = "m-auto cursor-pointer hover:text-green-200";
const navStyle = `bg-black text-white flex flex-col md:flex-row w-screen
                  md:justify-evenly opacity-80 p-2`;

function NavBar() {
  return (
    <div id="App-logo" className={navStyle}>
      <div className="text-8xl cursor-pointer">Swellscout</div>
      <div className="flex gap-8 text-lg">
        <div className={linkStyle}>Locations</div>
        <div className={linkStyle}>Signup</div>
        <div className={linkStyle}>Login</div>
      </div>
    </div>
  )
}

export default NavBar;
