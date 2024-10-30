export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Medical Card",
  "Aayushmaan Card",
  "Aadhar Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Arav Kumar",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Nisha Kumari",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Pratyush Kumar",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Arun Kumar",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Chanda Soni",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Virat Kohli",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Rohit Sharma",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
