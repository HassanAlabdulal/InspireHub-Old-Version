export default function Policy() {
    return (
        <div className="bg-[#f7f7f7] mt-[70px] pl-[60px] pr-[20px] flex justify-center items-start min-h-screen">
            <div className="flex flex-col flex-1 space-y-6 pr-8">
                <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-4 text-center">Privacy Policy</h1>
                
                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Information Collection</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        We collect personal information you provide to us such as name, email address, and project details when you register an account or interact with our services. Technical data like IP address and browser type may be collected to improve your experience.
                    </p>
                </section>
                
                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Use of Information</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        Your information is used to manage your account, display your projects, provide AI-driven project suggestions, and improve our platform. We may also use it to communicate with you about updates and services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Data Sharing</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        We do not sell your information. We may share it with potential employers with your consent, and to comply with legal obligations or with service providers who assist in operating our platform.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">User Rights</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        You have the right to access, correct, or delete your personal information. You may also opt out of certain uses of your information as described in this policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Data Security</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        We take the security of your data seriously and implement appropriate measures to prevent unauthorized access, disclosure, or loss.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Children’s Privacy</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        Our service is not intended for children under 13, and we do not knowingly collect their data. If we learn we have such information, we will take steps to remove it promptly.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Changes to the Privacy Policy</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        Our Privacy Policy may change from time to time. We will post any changes on this page and encourage you to review our policy periodically.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Contact Us</h2>
                    <p className="text-[#D0B880] font-roboto font-normal">
                        If you have questions about this policy, please contact us through <a href="mailto:support@inspirehub.com" className=" text-[gray] hover:underline me-4 md:me-6">
                         email.</a>
                        </p>
                        
                </section>
            </div>
        </div>
    );
}