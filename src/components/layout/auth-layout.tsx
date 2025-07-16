import { DynamicBackground } from "../auth/dynamic-background";

type AuthLayoutProps = {
    children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <DynamicBackground />
            <div className="relative z-10 flex w-full items-center justify-center px-4">
                {children}
            </div>
        </div>
    );
}
