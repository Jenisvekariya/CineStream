export default function PrivacyPolicyPage() {
    return (
        <div className="container py-12">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <h1>Privacy Policy</h1>
                <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

                <h2>1. Information We Collect</h2>
                <p>We collect information that you provide to us directly, such as when you create an account, update your profile, use the interactive features of our services, participate in a survey, or request customer support.</p>
                <ul>
                    <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, and password.</li>
                    <li><strong>Payment Information:</strong> We collect payment information, such as your credit card number, when you subscribe to a paid plan.</li>
                    <li><strong>Usage Information:</strong> We collect information about your activity on our services, such as your watch history and search queries.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Process transactions and send you related information, including confirmations and invoices.</li>
                    <li>Communicate with you about products, services, offers, and events offered by CineStream and others.</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                    <li>Personalize the services and provide advertisements, content, or features that match user profiles or interests.</li>
                </ul>

                <h2>3. Sharing of Information</h2>
                <p>We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</p>

                <h2>4. Your Choices</h2>
                <p>You may update, correct or delete information about you at any time by logging into your online account. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.</p>

            </div>
        </div>
    );
}
