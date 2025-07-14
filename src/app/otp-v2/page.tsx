import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OtpV2() {
  return (
    <AuthLayout>
       <div className="w-full max-w-md space-y-6 text-center text-foreground">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-headline">Check your email</h1>
          <p className="text-muted-foreground">
            We sent a verification link to <span className="font-semibold text-foreground">user@example.com</span>
          </p>
        </div>
        
        <form className="space-y-4">
            <div className="flex justify-center gap-3">
                <Input type="text" maxLength={1} className="w-14 h-16 text-center text-4xl font-bold" />
                <Input type="text" maxLength={1} className="w-14 h-16 text-center text-4xl font-bold" />
                <Input type="text" maxLength={1} className="w-14 h-16 text-center text-4xl font-bold" />
                <Input type="text" maxLength={1} className="w-14 h-16 text-center text-4xl font-bold" />
            </div>
        
            <Button type="submit" className="w-full h-12 text-lg">
                Verify Email
            </Button>
        </form>

        <p className="text-sm text-muted-foreground">
            Didn't receive the email? <button className="font-semibold text-primary hover:underline">Click to resend</button>
        </p>

        <div className="pt-4">
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
