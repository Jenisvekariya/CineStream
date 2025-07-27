type CodeBlockProps = {
    children: string;
};

export function CodeBlock({ children }: CodeBlockProps) {
    return (
        <pre className="mt-6 rounded-lg border bg-muted p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
            <code>
                {children}
            </code>
        </pre>
    );
}
