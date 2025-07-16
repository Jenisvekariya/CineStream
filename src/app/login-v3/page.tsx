import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/layout/auth-layout"
import { Film } from "lucide-react"

export default function LoginV3() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Film className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold font-headline">Sign In to CineStream</h1>
          <p className="text-muted-foreground">Enter your credentials to access your account.</p>
        </div>
        
        <form className="space-y-4 bg-card p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          
          <div className="flex items-center justify-between text-sm">
             <div>
                {/* In real app use checkbox */}
             </div>
            <Link href="/forgot-password-v3" className="text-muted-foreground hover:text-primary">
              Forgot password?
            </Link>
          </div>
          
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          New to CineStream?{" "}
          <Link href="/signup-v3" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
