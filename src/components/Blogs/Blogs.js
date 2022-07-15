import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1> What You want to know its here</h1>

            <h2>1. Difference between `authorization` and `authentication`</h2>
            <h3>Authentication</h3>
            <p>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>
            <h3>authorization</h3>
            <p>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>
            <h2>2. Why are you using `firebase`?</h2>
            <p>Firebase helps me build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure. Learn more today. Release Apps Confidently. Customize Your App. Accelerate Development.</p>
            <h2>3.  What other options do you have to implement authentication?
            </h2>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h2>4. What other services does `firebase` provide other than authentication</h2>
            <p>1.Parse  Open Source Backend Platform.  <br />
                2. Back4app  Parse Hosting Platform. <br />
                3. Kinvey  Mobile Backend as a Service (mBaaS) for the Enterprise. <br />
                4. Backendless  Mobile Backend and API Services Platform. <br />
                5. Kuzzle  Backend for web, hybrid, or native mobile apps and IoT projects.</p>

        </div>
    );
};

export default Blogs;