import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailCheck } from "lucide-react";

export default function OtpV3() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
            <MailCheck className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold font-headline">Two-Step Verification</h1>
            <p className="text-muted-foreground">Enter the code sent to your email.</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Verification Code</Label>
            <Input
              id="otp"
              type="text"
              placeholder="_ _ _ _ _ _"
              required
              className="text-center tracking-[0.5em]"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Confirm
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
            Having trouble? <button className="underline text-primary">Resend code</button>
        </div>
      </div>
    </AuthLayout>
  );
}
