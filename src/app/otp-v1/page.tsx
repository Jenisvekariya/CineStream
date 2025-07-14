import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function OtpV1() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Enter Verification Code</CardTitle>
          <CardDescription>We've sent a 6-digit code to your email. Please enter it below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
                {/* In a real app, this would be a single input component handling 6 digits */}
                <div className="flex justify-center gap-2">
                    <Input id="otp-1" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                    <Input id="otp-2" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                    <Input id="otp-3" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                    <Input id="otp-4" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                    <Input id="otp-5" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                    <Input id="otp-6" type="text" maxLength={1} className="w-12 h-12 text-center text-2xl"/>
                </div>
            </div>
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Didn't receive the code?{" "}
            <button className="underline">
              Resend
            </button>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
