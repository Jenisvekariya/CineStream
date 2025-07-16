'use client';
import Link from "next/link";
import { AuthLayout } from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Film } from "lucide-react";

export default function ForgotPasswordV3() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
            <Film className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold font-headline">Password Reset</h1>
            <p className="text-muted-foreground">Enter your email to get started.</p>
        </div>
        
        <form className="space-y-4 bg-card p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@yourcompany.com"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Instructions
          </Button>
        </form>

         <div className="text-center text-sm">
            <Link href="/login-v3" className="text-muted-foreground hover:text-primary transition-colors">
              Return to login
            </Link>
          </div>
      </div>
    </AuthLayout>
  );
}
