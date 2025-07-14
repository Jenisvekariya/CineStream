'use client';
import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordV2() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-card/80 p-8 shadow-2xl backdrop-blur-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-headline">Reset Your Password</h1>
          <p className="text-muted-foreground">No worries, it happens to the best of us.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="h-12"
            />
          </div>
          
          <Button type="submit" className="w-full h-12 text-lg">
            Continue
          </Button>
        </form>

        <div className="text-center">
          <Button variant="ghost" asChild>
            <Link href="/login-v2" className="text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
