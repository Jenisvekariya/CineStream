import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/auth/auth-layout"


export default function SignupV2() {
  return (
    <AuthLayout>
       <div className="w-full max-w-md space-y-6 rounded-2xl bg-card/80 p-8 shadow-2xl backdrop-blur-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline">Create Your Account</h1>
          <p className="text-muted-foreground">Start your streaming adventure today.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <Input id="email" type="email" placeholder="Email" required className="h-12"/>
          </div>
          <div>
            <Input id="password" type="password" placeholder="Password" required className="h-12" />
          </div>
          <div>
            <Input id="confirm-password" type="password" placeholder="Confirm Password" required className="h-12" />
          </div>
          
          <Button type="submit" className="w-full h-12 text-lg">
            Create Account
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground px-6">
            By creating an account, you agree to our{" "}
            <Link href="#" className="underline hover:text-primary">Terms of Service</Link> and{" "}
            <Link href="#" className="underline hover:text-primary">Privacy Policy</Link>.
        </p>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full h-12">
            {/* Add Google Icon */}
          Sign Up with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login-v2"
            className="font-semibold text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
