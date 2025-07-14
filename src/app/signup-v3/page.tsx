import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth/auth-layout"
import { Film } from "lucide-react"

export default function SignupV3() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Film className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold font-headline">Join CineStream</h1>
          <p className="text-muted-foreground">Create an account to get started.</p>
        </div>
        
        <form className="space-y-4 bg-card p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a strong password" required />
          </div>
          
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already a member?{" "}
          <Link href="/login-v3" className="font-semibold text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
