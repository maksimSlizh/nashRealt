export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <img className="logo" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Main</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Insurance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Realty</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
