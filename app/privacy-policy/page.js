
import React from "react";

export const metadata = {
  title: "Privacy Policy | TransCurators",
  description:
    "Read the privacy policy of TransCurators. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.transcurators.com/privacy-policy",
  },
};

// Modular data for the policy sections
const policySections = [
  {
    title: "ARTICLE 1 - DEFINITIONS",
    contentBlocks: [
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Applicable Website:</span> This Privacy Policy applies to TransCurators, and henceforth transcurators.com will be referred to as the "Website." "Website" will also cover any future development of subsidiary websites and mobile applications.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Effective Date:</span> The date that this Privacy Policy comes into effect will be known as the "Effective Date." The effective date for this Privacy Policy is 25th June 2024.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Parties:</span> The data controller, TransCurators, and the user, you, will hereafter be individually referred to as "Party" and unitedly referred to as "Parties."
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Data Controller:</span> The owner, publisher, and operator of the website are the Data Controller. The Data Controller is responsible for the collection of data. The Data Controller or the Data Controller's property will be referred to using first-person pronouns such as we, us, our, and ours.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">User:</span> Contingent on your agreement to the Privacy Policy and continued use of the website, the user will here forth be referred to as you, the user, or any applicable second-person pronoun such as your and yours.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Services:</span> Any services that we provide and sell through the website will be known as "Services."
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Personal Data:</span> Personal data will be used to refer to any personal data and information that we acquire from your use of the website and our services.
          </>
        ),
      },
    ],
  },
  {
    title: "ARTICLE 2 – GENERAL INFORMATION",
    contentBlocks: [
      {
        type: "paragraph",
        content:
          "This Privacy Policy details how the Personal Data that we receive is to be used. This Privacy Policy also covers the rights you possess concerning the Personal Data when you use this Website and our Services. This Privacy Policy does not diversify any details about you that we have received through sources other than the website. This Privacy Policy does not expand any of the linked websites or applications.",
      },
      {
        type: "paragraph",
        content:
          "We are pledged to the protection of your privacy concerning any information you choose to share with us.",
      },
      {
        type: "paragraph",
        content:
          "By continuing the usage of our website, you have acknowledged this Privacy Policy and agree to the same. You also consent to the use of any information disclosed to us through the website. If you disagree with this Privacy Policy, cease the use of this website immediately.",
      },
    ],
  },
  {
    title: "ARTICLE 3 – COMMUNICATION AND DATA PROTECTION OFFICER",
    contentBlocks: [
      {
        type: "paragraph",
        content:
          "The Party liable for processing your Personal Data is TransCurators. The Data Controller and the operator of the website are TransCurators. The Data Controller may be contacted here: corporate@transcurators.com.",
      },
      {
        type: "paragraph",
        content:
          "The Data Protection Officer is Nandini Marwah and may be contacted here: corporate@transcurators.com.",
      },
    ],
  },
  {
    title: "ARTICLE 4 – LOCATION",
    contentBlocks: [
      {
        type: "paragraph",
        content:
          "Data processing and related activities take place in [Location not specified]. Data may be transferred to companies outside New Delhi, but it will be done in compliance with the EU's General Data Protection Regulation (GDPR).",
      },
    ],
  },
  {
    title: "ARTICLE 5 – THE PERSONAL DATA WE RECEIVE FROM YOU",
    contentBlocks: [
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Registered Users:</span> As a user of the website, you may be asked to register to use the website or to purchase our Services. During the registration process, the following Personal Data will be collected, contingent on your voluntary disclosure:
          </>
        ),
      },
      { type: "list", items: ["Name", "Email address"] },
      {
        type: "paragraph",
        content: "Personal Data may be asked for the following reasons:",
      },
      {
        type: "list",
        items: [
          "To interact with our representatives through phone, chat, email, and/or any other means",
          "To make purchases",
          "To receive email notifications regarding marketing",
          "To receive our general emails",
          "To comment on our content and/or other user-generated content on our website",
          "To access our free tools via your email",
        ],
      },
      {
        type: "paragraph",
        content:
          "By completing the registration process, you grant the collection of the Personal Data mentioned above and any data mentioned in the Privacy Policy, as well as the storing, using, and disclosing of the same per the Privacy Policy.",
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Unregistered Users:</span> If you are a passive user of the website (i.e., not registered), you are still subject to Passive Data Collection. Passive Data Collection implies the collection of data through cookies, IP address information, location information, and browser data like history and/or session information.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">All Users:</span> The Passive Data collection applies to all users, i.e., unregistered users as well as registered users and visitors of the website.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Sales and Billing Information:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "For the purchase of any service offered on the website, you will be asked for your credit information, billing address information, and additional specific information for the proper charge of your purchase.",
          "The payment and billing information can be stored for up to 365 days for active customers and 90 days upon account cancellation.",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Email Marketing:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "You may be requested to provide us with your name and email address to receive email marketing communications. This information can only be obtained through your voluntary disclosure.",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">User Experience:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "We may request demographic and preference-related information to gather feedback regarding our website and services. This information is acquired through voluntary divulgence.",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Content Reciprocity:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Our Website may allow you to reflect on our content or user-provided content. We may collect information such as user names and email addresses to enable responses to your comments if necessary.",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Combined or Aggregated Information:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "We reserve the right to combine the Personal Data we collect to better assist you and other consumers efficiently.",
        ],
      },
    ],
  },
  {
    title: "ARTICLE 6 – THE PERSONAL DATA WE AUTOMATICALLY RECEIVE",
    contentBlocks: [
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Cookies:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "We may collect information regarding your browsing preferences through automatic tracking systems and cookies.",
          "Cookies enhance your browsing experience by storing preferences and session information.",
          "You can disable cookies through your browser settings, though it may affect website functionality.",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <span className="font-semibold">Log Data:</span>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Log files automatically store information about visits, including:",
          {
            type: "list",
            items: [
              "IP Address",
              "Browser type and device used",
              "Name of Internet Service Provider (ISP)",
              "Date and time of visit",
              "Referral page of the user and exit",
              "Number of clicks",
            ],
          },
          "This data is processed for security and website improvement.",
        ],
      },
    ],
  },
  {
    title: "ARTICLE 7 – THIRD PARTIES",
    contentBlocks: [
      {
        type: "list",
        items: [
          "We reserve the right to use Third-Party Service Providers to improve our Services, including storage, hosting, and analytics.",
          "Personal Data is not sold or transferred without your prior consent.",
          "We may share data with third parties for legal reasons or to protect rights and safety.",
        ],
      },
    ],
  },
  {
    title: "ARTICLE 8 – SOCIAL MEDIA PLUGINS",
    contentBlocks: [
      {
        type: "paragraph",
        content: "(Any Social Media Plug-ins? Only noticed link to YouTube)",
      },
    ],
  },
  {
    title: "ARTICLE 9 – HOW PERSONAL DATA IS RETAINED",
    contentBlocks: [
      {
        type: "list",
        items: [
          "Your Personal Data is securely stored in physical and digital systems to prevent unauthorized access, disclosure, or destruction.",
          "Only authorized personnel (writers, editors, and project managers) have access to your Personal Data.",
          "Payment transaction details are stored and processed by reputable third parties with SSL certificates.",
          "Your Personal Data is retained for the duration of your relationship with us. Personal Data will be deleted when you terminate your account.",
        ],
      },
    ],
  },
];

// Helper function to render each content block based on its type
function renderContentBlock(block, index) {
  if (block.type === "paragraph") {
    return (
      <p key={index} className="text-[#6a6a6a] mb-4">
        {block.content}
      </p>
    );
  } else if (block.type === "list") {
    return (
      <ul key={index} className="list-disc pl-6 text-[#6a6a6a] space-y-2 mb-4">
        {renderListItems(block.items)}
      </ul>
    );
  }
  return null;
}

// Recursive function to support nested lists
function renderListItems(items) {
  return items.map((item, index) => {
    if (typeof item === "string" || typeof item === "number") {
      return <li key={index}>{item}</li>;
    } else if (typeof item === "object" && item.type === "list") {
      return (
        <li key={index}>
          <ul className="list-disc pl-6">{renderListItems(item.items)}</ul>
        </li>
      );
    }
    return null;
  });
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="bg-[#326B3F]/15 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1B223C] mb-2">
            Privacy Policy
          </h1>
          <p className="text-center text-[#6a6a6a] max-w-2xl mx-auto">
            Last updated: June 25th, 2024
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-[#6a6a6a] mb-8">
              At TransCurators, we take your privacy seriously. This policy outlines how we collect, 
              use, and protect your personal information.
            </p>
            
            <div className="space-y-8">
              {policySections.map((section, index) => (
                <section key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h2 className="text-2xl font-bold text-[#1B223C] mb-5 bg-[#326B3F]/10 p-3 rounded-md">
                    {section.title}
                  </h2>
                  <div className="pl-2 md:pl-4 space-y-2">
                    {section.contentBlocks.map((block, i) =>
                      renderContentBlock(block, i)
                    )}
                  </div>
                </section>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-[#6a6a6a] text-center">
                If you have any questions about our privacy policy, please contact us at{" "}
                <a href="mailto:corporate@transcurators.com" className="text-[#326B3F] hover:text-[#326B3F]/80">
                  corporate@transcurators.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}
