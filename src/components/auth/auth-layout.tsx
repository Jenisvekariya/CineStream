import { DynamicBackground } from "./dynamic-background";

type AuthLayoutProps = {
    children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center">
            <DynamicBackground />
            <div className="relative z-10 w-full px-4">
                {children}
            </div>
        </div>
    );
}
