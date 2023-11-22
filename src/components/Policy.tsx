export default function Policy() {
    return (
        <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen">
            <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-4">Privacy Policy</h1>

            <div className="w-full max-w-5xl bg-[#f7f7f7] shadow-2xl transition-shadow duration-500 ease-in-out overflow-auto p-6" style={{ maxHeight: '70vh' }}>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">Information Collection</h2>
                        <p className="font-normal">
                            We collect personal information you provide to us such as name, email address, and project details when you register an account or interact with our services. Technical data like IP address and browser type may be collected to improve your experience.
                        </p>
                </section>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">Use of Information</h2>
                        <p className="font-normal">
                            Your information is used to manage your account, display your projects, provide AI-driven project suggestions, and improve our platform. We may also use it to communicate with you about updates and services.
                        </p>
                </section>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">Data Sharing</h2>
                        <p className="font-normal">
                            We do not sell your information. We may share it with potential employers with your consent, and to comply with legal obligations or with service providers who assist in operating our platform.
                        </p>
                </section>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">User Rights</h2>
                        <p className="font-normal">
                            You have the right to access, correct, or delete your personal information. You may also opt out of certain uses of your information as described in this policy.
                        </p>
                </section>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">Data Security</h2>
                        <p className="font-normal">
                            We take the security of your data seriously and implement appropriate measures to prevent unauthorized access, disclosure, or loss.
                        </p>
                </section>
                <section className="space-y-4 mb-6">
                <h2 className="text-[#bfa260] font-semibold text-xl">Children’s Privacy</h2>
                        <p className="font-normal">
                            Our service is not intended for children under 13, and we do not knowingly collect their data. If we learn we have such information, we will take steps to remove it promptly.
                        </p>
                </section>
                <section className="space-y-4">
                <h2 className="text-[#bfa260] font-semibold text-xl">Changes to the Privacy Policy</h2>
                        <p className="font-normal">
                            Our Privacy Policy may change from time to time. We will post any changes on this page and encourage you to review our policy periodically.
                        </p>
                </section>
            </div>

            <div className="w-full max-w-5xl px-6 py-4">
                <section className="space-y-4">
                    <p className="font-normal text-black font-roboto">
                        If you have questions about this policy, please contact us through 
                        <a href="mailto:support@inspirehub.com" className="text-[#5f7fbf] font-bold hover:underline"> email </a> 
                        or using our
                        <a href="/contact" className="text-[#5f7fbf] font-bold hover:underline"> contact page</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
