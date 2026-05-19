import React from 'react';

const AboutPage = () => {
    return (
        <section class="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div class="space-y-6">
                    <div class="space-y-2">
                        <span class="text-sm font-semibold uppercase tracking-wider text-blue-600 block">About Our Agency</span>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            We Build Creative Digital Solutions
                        </h2>
                    </div>

                    <p class="text-gray-600 leading-relaxed text-base md:text-lg">
                        Our team develops modern and responsive websites with clean design and smooth user experience. We help brands grow online with creativity and technology.
                    </p>

                    <div class="grid grid-cols-3 gap-6 py-6 border-y border-gray-100">
                        <div>
                            <h3 class="text-2xl md:text-3xl font-extrabold text-blue-600">5+</h3>
                            <p class="text-xs md:text-sm text-gray-500 font-medium mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h3 class="text-2xl md:text-3xl font-extrabold text-blue-600">120+</h3>
                            <p class="text-xs md:text-sm text-gray-500 font-medium mt-1">Completed Projects</p>
                        </div>
                        <div>
                            <h3 class="text-2xl md:text-3xl font-extrabold text-blue-600">99%</h3>
                            <p class="text-xs md:text-sm text-gray-500 font-medium mt-1">Client Satisfaction</p>
                        </div>
                    </div>

                    <div class="pt-2">
                        <a
                            href="#more"
                            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="bg-blue-100 text-blue-600 font-bold p-3 rounded-lg text-sm shrink-0">
                            UI
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-900">Modern UI Design</h4>
                            <p class="text-gray-600 text-sm mt-1">Clean and attractive interfaces tailored for your users.</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="bg-purple-100 text-purple-600 font-bold p-3 rounded-lg text-sm shrink-0">
                            UX
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-900">Smooth Experience</h4>
                            <p class="text-gray-600 text-sm mt-1">Ensuring seamless and intuitive navigation across all devices.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;