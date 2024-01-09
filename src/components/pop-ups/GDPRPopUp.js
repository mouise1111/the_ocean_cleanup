import React from "react";

export const GDPRPopUp = ({ setShowNotification }) => {
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-75">
			<div className="p-6 text-center bg-gray-300 rounded-xl">
				<h2 className="text-2xl font-bold mb-4">GDPR Compliance Statement</h2>
				<p>
					<strong>1. Types of Personal Data Collected:</strong>
				</p>
				<p>
					We collect usernames, email addresses, and passwords for the
					purpose of account creation
				</p>
				<p>and tracking high scores in the minigame.</p>
				<br />

				<p>
					<strong>2. Purpose of Data Collection:</strong>
				</p>
				<p>
					The collected data is used to facilitate account creation and
					to display high scores for
				</p>
				<p>
					other users. It enhances the gaming experience and allows
					users to track their progress.
				</p>
				<br />

				<p>
					<strong>3. Data Storage and Security Measures:</strong>
				</p>
				<p>
					User data, including usernames and email addresses, is stored
					in a MySQL database hosted in
				</p>
				<p>
					a closed environment. Passwords are securely hashed. Our
					method for posting scores prevents
				</p>
				<p>direct SQL injections.</p>
				<br />

				<p>
					<strong>4. Use of Cookies or Tracking Technologies:</strong>
				</p>
				<p>
					We do not use cookies or tracking technologies on our website.
				</p>
				<br />

				<p>
					<strong>5. Legal Basis for Data Processing:</strong>
				</p>
				<p>
					Users have the choice to sign up voluntarily, providing
					consent for the processing of their
				</p>
				<p>data. The legal basis for processing is user consent.</p>
				<br />

				<p>
					<strong>6. User Rights Under GDPR:</strong>
				</p>
				<p>
					Users have the right to access, rectify, and erase their
					personal data.
				</p>
				<button
					className="text-red-500 hover:underline"
					onClick={() => setShowNotification(false)}
				>
					Close
				</button>
			</div>
		</div>
	);
};
