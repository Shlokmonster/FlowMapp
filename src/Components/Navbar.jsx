function Navbar(){

return(
    <div>
        <div className="nav">
            <div className="nav1">
                <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/67571a88ac69017ad38464c6_Logotype.svg" alt="" height={35} />
            </div>
            <div className="nav2">
                <ul>
                    <li> <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/649ecdd522fdf2a0c87b55b7_Working%20Space.svg" alt="" />Try Demo Project</li>
                    <li>Features</li>
                    <li>Use cases</li>
                    <li>Pricing</li>
                    <li>Help</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="nav3">
                <button className="login">
                    Log in
                </button>
                <button className="signup">
                   
                   Try For Free
                </button>
            </div>
        </div>
    </div>
)




}

export  default Navbar;