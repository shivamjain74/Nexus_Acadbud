import { Outlet } from "react-router-dom";

function AuthLayout(){
  return(
    <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-extrabold tracking-tight"> Welcome To Acadbud By Nexus</h1>
            <h3>"Affordable, reliable services crafted for students away from home. Whether you need quick repairs, device fixes, or support for day-to-day tasks, our platform connects you to trusted professionals without breaking your budget. Enjoy peace of mind with quality service, just a click away"</h3>
        </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          {/* bcoz of this outlet we can able to see "welcome to ...." in both login and register
          This allows nested UI to show up when child routes are rendered. */}
            <Outlet/> 
        </div>


    </div>
  )

}

export default AuthLayout;