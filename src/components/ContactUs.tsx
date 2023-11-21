export default function ContactUs() {
    return (
        <div className="bg-[#f7f7f7] mt-[70px] pl-[60px] pr-[20px] flex justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl px-6 py-8 bg-[#f7f7f7] shadow-lg rounded">
                <h2 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6 text-center">Contact Us</h2>
                <p className="text-[#D0B880] font-roboto font-normal text-center">
                        For further questions, including partnership opportunities, please email us at <br />
                        <a href="mailto:support@inspirehub.com" className="text-gray-600 hover:underline"> support@inspirehub.com </a> 
                         or contact us using our contact form.
                    </p>
                
                <div className="flex flex-wrap -mx-3 mt-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input required type="text" placeholder="Name" className="form-input w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input required type="email" placeholder="Email" className="form-input w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                
                <div className="mb-6">
                    <textarea 
                        placeholder="What can we help you with" 
                        className="form-textarea w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline" 
                    ></textarea>
                </div>

                <div className="flex flex-wrap items-center justify-between">
                    <label className="w-full md:w-auto flex items-center mb-4 md:mb-0">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-sm text-gray-700">You agree to our <a href="http://localhost:4321/PolicyPage" className="text-[#bfa260] hover:underline">Privacy Policy</a>.</span>
                    </label>
                </div>
                <div className="flex justify-center">
                    <a
                        className="flex select-none items-center justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] px-3 py-2.5 text-base font-bold text-white align-middle transition-all duration-500 shadow-md hover:shadow-lg hover:bg-indigo-500/100 active:bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Send Message
                    </a>
                </div>
            </div>
        </div>
    );
}
