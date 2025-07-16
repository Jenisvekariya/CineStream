import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/layout/auth-layout"

export default function LoginV2() {
  return (
    <AuthLayout>
       <div className="w-full max-w-md space-y-6 rounded-2xl bg-card/80 p-8 shadow-2xl backdrop-blur-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue your cinematic journey.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <Input id="email" type="email" placeholder="Email" required className="h-12"/>
          </div>
          <div>
            <Input id="password" type="password" placeholder="Password" required className="h-12" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {/* In a real app, use a Checkbox component here */}
            </div>
            <Link
              href="/forgot-password-v2"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full h-12 text-lg">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full h-12">
            {/* Add Google Icon */}
          Login with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup-v2"
            className="font-semibold text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
