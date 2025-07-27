export default function TermsOfServicePage() {
    return (
        <div className="container py-12">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <h1>Terms of Service</h1>
                <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using the CineStream streaming service, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use the service.</p>

                <h2>2. The Service</h2>
                <p>CineStream provides a streaming service that allows our members to access motion pictures and television shows ("Content") streamed over the Internet to certain Internet-connected TVs, computers, and other devices. The Service is for your personal and non-commercial use only and may not be shared with individuals beyond your household.</p>

                <h2>3. Membership</h2>
                <p>Your CineStream membership will continue until terminated. To use the CineStream service you must have Internet access and a CineStream ready device, and provide us with one or more Payment Methods. "Payment Method" means a current, valid, accepted method of payment, as may be updated from time to time.</p>
                <p>We may offer a number of subscription plans, including special promotional plans or memberships offered by third parties. Some subscription plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you.</p>

                <h2>4. Billing and Cancellation</h2>
                <p>The subscription fee for the CineStream service will be charged to your Payment Method on the specific payment date indicated on your "Account" page. You can cancel your CineStream membership at any time, and you will continue to have access to the service through the end of your billing period.</p>

                <h2>5. Changes to the Terms of Service</h2>
                <p>CineStream may, from time to time, change these Terms of Service. We will notify you at least 30 days before such changes apply to you. Your continued use of the service after the changes become effective will mean you agree to be bound by such revised terms.</p>
            </div>
        </div>
    );
}
