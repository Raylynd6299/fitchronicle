import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  return (
    <Card className="w-[50vh] m-auto mt-20 bg-red-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border-none">
      <h1 className='flex flex-col justify-center text-3xl' >Create a new account 
        <span className='text-sm'>Already have an account? <a href='#' className='text-red-500'>Sign in</a></span>
      </h1>
      
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@mail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

export default Login