interface PolicyProps {
  onClose?: () => void;
  showReturnButton?: boolean;
}

export default function Policy({ onClose, showReturnButton }: PolicyProps) {
  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6">
        Privacy Policy
      </h1>

      <div
        className="w-full max-w-5xl bg-[#f7f7f7] rounded-lg shadow-lg transition-shadow duration-500 ease-in-out overflow-auto px-6 py-10"
        style={{ maxHeight: "70vh" }}
      >
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">
            Information Collection
          </h2>
          <p className="font-normal">
            We collect personal information you provide to us such as name,
            email address, and project details when you register an account or
            interact with our services. Technical data like IP address and
            browser type may be collected to improve your experience.
          </p>
        </section>
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">
            Use of Information
          </h2>
          <p className="font-normal">
            Your information is used to manage your account, display your
            projects, provide AI-driven project suggestions, and improve our
            platform. We may also use it to communicate with you about updates
            and services.
          </p>
        </section>
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">Data Sharing</h2>
          <p className="font-normal">
            We do not sell your information. We may share it with potential
            employers with your consent, and to comply with legal obligations or
            with service providers who assist in operating our platform.
          </p>
        </section>
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">User Rights</h2>
          <p className="font-normal">
            You have the right to access, correct, or delete your personal
            information. You may also opt out of certain uses of your
            information as described in this policy.
          </p>
        </section>
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">
            Data Security
          </h2>
          <p className="font-normal">
            We take the security of your data seriously and implement
            appropriate measures to prevent unauthorized access, disclosure, or
            loss.
          </p>
        </section>
        <section className="mb-6 space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">
            Children’s Privacy
          </h2>
          <p className="font-normal">
            Our service is not intended for children under 13, and we do not
            knowingly collect their data. If we learn we have such information,
            we will take steps to remove it promptly.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-[#bfa260] font-semibold text-xl">
            Changes to the Privacy Policy
          </h2>
          <p className="font-normal">
            Our Privacy Policy may change from time to time. We will post any
            changes on this page and encourage you to review our policy
            periodically.
          </p>
        </section>
      </div>

      <div className="w-full max-w-5xl px-6 py-4">
        <section className="space-y-4">
          <p className="font-normal text-black font-roboto">
            If you have questions about this policy, please contact us through
            <a
              href="mailto:support@inspirehub.com"
              className="text-[#5f7fbf] font-extrabold hover:underline"
            >
              {" "}
              email{" "}
            </a>
            or using our
            <a
              href="ContactUsPage"
              className="text-[#5f7fbf] font-extrabold hover:underline"
            >
              {" "}
              contact page
            </a>
            .
          </p>
        </section>
      </div>

      {showReturnButton && (
        <button
          onClick={onClose}
          className="block w-1/2 max-w-xs mt-5 max-md:mt-0 px-3 py-3 max-md:px-1 max-md:py-2  mx-auto font-semibold text-lg text-white rounded-lg uppercase bg-[#5f7fbf] border-2 border-[#5f7fbf] font-roboto 
        roundedtransition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
        >
          Return
        </button>
      )}
    </div>
  );
}
