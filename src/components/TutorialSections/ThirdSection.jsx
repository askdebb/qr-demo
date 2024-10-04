import PropTypes from 'prop-types'; // Import prop-types
import { Tab, Tabs } from 'react-bootstrap';

const qrCodeBasics = [
  {
    id: 'faq1',
    question: 'What is a QR code?',
    answer: 'A QR code is a type of matrix barcode that contains information readable by devices such as smartphones. It can be used for a variety of purposes, including URL links, contact information, and more.'
  },
  {
    id: 'faq2',
    question: 'How do QR codes work?',
    answer: 'QR codes work by encoding data into a two-dimensional barcode, which can be scanned and interpreted by a QR code reader or smartphone camera.'
  },
  {
    id: 'faq3',
    question: 'Are QR codes free to use?',
    answer: 'Yes, generating and using QR codes is generally free. However, some platforms offer premium services for more advanced QR code features.'
  },
  {
    id: 'faq4',
    question: 'What types of data can a QR code store?',
    answer: 'QR codes can store various types of data, including URLs, contact information, email addresses, phone numbers, plain text, and even files like PDFs.'
  },
  {
    id: 'faq5',
    question: 'Can QR codes be used for both personal and business purposes?',
    answer: 'Absolutely! QR codes are versatile and can be used for personal projects like sharing contact information or business purposes like marketing, payments, and event management.'
  },
  {
    id: 'faq6',
    question: 'Is it safe to scan QR codes?',
    answer: 'Scanning QR codes is generally safe, but you should be cautious of codes from unknown sources as they can sometimes lead to malicious websites or download harmful files.'
  },
  {
    id: 'faq7',
    question: 'How long does a QR code last?',
    answer: 'QR codes do not have an expiration date. Once created, they will continue to work as long as the information they point to remains active.'
  }
];

const designAndCustomize = [
  {
    id: 'faq8',
    question: 'Can I customize the design of my QR code?',
    answer: 'Yes, QR codes can be customized with different colors, patterns, and logos to match your brand or personal style.'
  },
  {
    id: 'faq9',
    question: 'What design elements can I change in a QR code?',
    answer: 'You can change colors, add logos, and choose different patterns for the dots and corners. However, it’s important to ensure that the QR code remains scannable after customization.'
  },
  {
    id: 'faq10',
    question: 'Will customizing a QR code affect its readability?',
    answer: 'If done properly, customization should not affect readability. It’s essential to maintain contrast between the QR code and the background, and to avoid over-complicating the design.'
  },
  {
    id: 'faq11',
    question: 'How can I ensure my customized QR code is scannable?',
    answer: 'Ensure that there is enough contrast between the QR code and its background, avoid using too many colors, and test the QR code with different devices before finalizing it.'
  },
  {
    id: 'faq12',
    question: 'Can I add a logo to my QR code?',
    answer: 'Yes, you can add a logo to the center of your QR code. Just make sure the logo doesn’t cover too much of the code, as it might make it unscannable.'
  },
  {
    id: 'faq13',
    question: 'What are some best practices for customizing QR codes?',
    answer: 'Maintain high contrast between the code and its background, avoid over-complicating the design, and always test your QR code on multiple devices to ensure it’s scannable.'
  },
  {
    id: 'faq14',
    question: 'Can I change the shape of the dots in my QR code?',
    answer: 'Yes, some QR code generators allow you to change the shape of the dots (modules) in the code. However, be careful not to alter the structure too much as it could affect scanability.'
  },
  {
    id: 'faq15',
    question: 'What file format should I use for a high-quality QR code?',
    answer: 'For high-quality prints, use vector formats like SVG or EPS. These formats ensure that your QR code remains sharp at any size.'
  }
];

const downloadAndScan = [
  {
    id: 'faq16',
    question: 'How can I download my QR code?',
    answer: 'You can download your QR code in various formats such as PNG, SVG, or PDF, depending on the tool you are using to generate the QR code.'
  },
  {
    id: 'faq17',
    question: 'What file formats are available for downloading QR codes?',
    answer: 'Most QR code generators allow you to download your QR code in formats like PNG, SVG, and PDF. Some tools also offer EPS and JPG formats.'
  },
  {
    id: 'faq18',
    question: 'How do I scan a QR code?',
    answer: 'To scan a QR code, open the camera on your smartphone or use a QR code scanning app. Point the camera at the QR code, and a notification should appear with the encoded information.'
  },
  {
    id: 'faq19',
    question: 'Do I need an internet connection to scan a QR code?',
    answer: 'An internet connection is only necessary if the QR code links to online content. If the code contains plain text or other offline data, you don’t need an internet connection to scan it.'
  },
  {
    id: 'faq20',
    question: 'Can I scan a QR code from a screenshot or image?',
    answer: 'Yes, you can scan a QR code from an image or screenshot by using a QR code scanner app that allows you to upload the image for scanning.'
  },
  {
    id: 'faq21',
    question: 'What should I do if my QR code is not scanning?',
    answer: 'If your QR code is not scanning, check for sufficient lighting, ensure the code is not damaged or distorted, and make sure your camera is focused. If customized, ensure the design is not interfering with the code’s functionality.'
  },
  {
    id: 'faq22',
    question: 'Can QR codes be scanned on any device?',
    answer: 'Most modern smartphones with a camera can scan QR codes natively or with a QR code scanning app. Older devices may require a dedicated app to scan QR codes.'
  }
];



function FAQAccordion({ data }) {
  return (
    <div className="accordion" id="faqAccordion">
      {data.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded="true"
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Define propTypes for the FAQAccordion component
FAQAccordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function FAQPage() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>

      <div className="d-flex justify-content-center mb-4">
        <div className="w-full w-justify">
          <Tabs defaultActiveKey="qrCodeBasics" id="faq-tabs" className="mb-3 justify-content-center custom-tabs">
            <Tab eventKey="qrCodeBasics" title="QR Code Basics">
              <FAQAccordion data={qrCodeBasics} />
            </Tab>
            <Tab eventKey="designAndCustomize" title="Design & Customize">
              <FAQAccordion data={designAndCustomize} />
            </Tab>
            <Tab eventKey="downloadAndScan" title="Download & Scan">
              <FAQAccordion data={downloadAndScan} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;